'use strict';
const util = require('../../shared/index');
const async = require('async');

// shared variable to access data between individual functions
let shared = {};

const validateIfUserExists = (callback) => {
  shared.db.collection('users')
    .findOne({ email: shared.body.email })
    .then(userObject => {
      shared.createUser = userObject === null ? true : userObject;

      callback(null, userObject)
    })
    .catch(err => {
      callback(err, null);
    })
}


const createUser = (callback) => {
  if (shared.createUser === true) {
    shared.db.collection('users')
      .insertOne({ ...shared.body })
      .then(insertData => {
        shared.insertData = insertData.ops[0];
        callback(null, shared.body);
      })
  } else {
    shared.insertData = shared.createUser;
    callback(null, shared.createUser)
  }
}


module.exports.createUser = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false; // stop function execution when callback is called
  if (event.source === 'aws.events') callback(null, util.makeResponse({}, 200)); // handle schedule events

  // make function parameters accessible to decoupled functions
  shared.pathParams = event.pathParameters;
  shared.body = JSON.parse(event.body);

  util.db.dbConnect((err, db) => {
    if (err) return callback(err);
    shared.db = db; // enable db object to be access by the decoupled functions

    async.series([
      validateIfUserExists,
      createUser,
    ], (err, results) => {
      if (err) console.error(err);

      const response = util.makeResponse(200, shared.insertData);
      return callback(null, response);
    });

  })
};
