const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const User = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email:String,
    userId:{
        type:String,
        default:uuidv4()
    }
  });
  
  module.exports = mongoose.model('User', User);