'use strict';

const getUser = require('./read/index').getUser;
const updateUser = require('./update/index').updateUser;
const createUser = require('./create/index').createUser;


module.exports.getUser = getUser;
module.exports.updateUser = updateUser;
module.exports.createUser = createUser;
