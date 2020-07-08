'use strict';

//  node modules
const mongoose   = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    provider: String,
    providerID: String,
    displayName: String,
    credits: { type: Number, default: 0 }
})

mongoose.model('users', userSchema);