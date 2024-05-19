const mongoose = require('mongoose');
const Expense = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    cost:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        required:true,
        default: Date.now
    },
    userId :{
        type: String,
        required: true
    }
  });
  
  module.exports = mongoose.model('Expense', Expense);