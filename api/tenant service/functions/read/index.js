'use strict';
const util = require('../../shared/index');
const async = require('async');

// shared variable to access data between individual functions
let shared = {};

const findTenant = (callback) => {
  shared.db.collection('tenants')
    // .findOne({ _id: util.db.objectId(shared.pathParams.id) })
    .findOne({ email: shared.pathParams.id })
    .then(tenantObject => {
      shared.tenantObject = tenantObject;
      shared.tenantObject.id = tenantObject._id;
      callback(null, tenantObject);
    })
    .catch(err => {
      callback(err, null);
    })
}

module.exports.getTenant = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false; // stop function execution when callback is called
  if (event.source === 'aws.events') callback(null, util.makeResponse({}, 200)); // handle schedule events

  // make function parameters accessible to decoupled functions
  shared.pathParams = event.pathParameters;
  shared.queryParams = event.queryStringParameters;

  util.db.dbConnect((err, db) => {
    if (err) return callback(err);
    shared.db = db; // enable db object to be access by the decoupled functions

    async.series([
      findTenant,
    ], (err, results) => {
      if (err) console.error(err);

      const response = util.makeResponse(200, shared.tenantObject);
      return callback(null, response);
    });

  })
};
