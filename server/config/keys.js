'use strict'

//  keys.js - figure out what set of credentials to return
if ( process.env.NODE_ENV === 'production' ) {
    //  in production - send production keys
    module.exports = require('./prod');
} else {
    //  in development - send development keys
    module.exports = require('./dev');
}