'use strict';
const util = require('../../shared/index');
const async = require('async');

// shared variable to access data between individual functions
let shared = {};

const updateUser = (callback) => {
  shared.db.collection('users')
    .findOneAndUpdate(
      { email: shared.body.email },
      { $set: shared.body }
    )
    .then(updateObject => {
      shared.updatedUser = updateObject.value;
      callback(null, updateObject);
    })
    .catch(err => {
      callback(err, null);
    })
}

module.exports.updateUser = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false; // stop function execution when callback is called
  if (event.source === 'aws.events') callback(null, util.makeResponse({}, 200)); // handle schedule events

  // make function parameters accessible to decoupled functions
  shared.pathParams = event.pathParameters;
  shared.body = JSON.parse(event.body);

  util.db.dbConnect((err, db) => {
    if (err) return callback(err);
    shared.db = db; // enable db object to be access by the decoupled functions

    async.series([
      updateUser,
    ], (err, results) => {
      if (err) console.error(err);

      const response = util.makeResponse(200, shared.updatedUser);
      return callback(null, response);
    });

  })
};
