var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


var schema = mongoose.Schema({
   productID: {type: String, required: true},
   date: Date,
   productname: {type: String, required: true},
   amount: {type: String, required: true},
   price: {type: String, required: true},
   comment: String,
   category: {type: String, required: true}
});

module.exports = mongoose.model('Product', schema);
