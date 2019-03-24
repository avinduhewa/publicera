'use strict';

const getTenant = require('./read/index').getTenant;
const updateTenant = require('./update/index').updateTenant;
const createTenant = require('./create/index').createTenant;


module.exports.getTenant = getTenant;
module.exports.updateTenant = updateTenant;
module.exports.createTenant = createTenant;
