'use strict';
const util = require('../../shared/index');
const async = require('async');

// shared variable to access data between individual functions
let shared = {};

const findUser = (callback) => {
  shared.db.collection('users')
    // .findOne({ _id: util.db.objectId(shared.pathParams.id) })
    .findOne({ email: shared.pathParams.id })
    .then(userObject => {
      shared.userObject = userObject;
      shared.userObject.id = userObject._id;
      callback(null, userObject);
    })
    .catch(err => {
      callback(err, null);
    })
}

module.exports.getUser = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false; // stop function execution when callback is called
  if (event.source === 'aws.events') callback(null, util.makeResponse({}, 200)); // handle schedule events

  // make function parameters accessible to decoupled functions
  shared.pathParams = event.pathParameters;
  shared.queryParams = event.queryStringParameters;

  util.db.dbConnect((err, db) => {
    if (err) return callback(err);
    shared.db = db; // enable db object to be access by the decoupled functions

    async.series([
      findUser,
    ], (err, results) => {
      if (err) console.error(err);

      const response = util.makeResponse(200, shared.userObject);
      return callback(null, response);
    });

  })
};
