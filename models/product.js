var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var schema = mongoose.Schema({
   userID: Number,
   productID: String,
   date: String,
   productname: String,
   amount: Number,
   price: Number,
   comment: String,
   category: String
});

module.exports = mongoose.model('Product', schema);
