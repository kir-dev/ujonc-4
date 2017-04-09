var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var schema = mongoose.Schema({
   //id van automatikusan??? (_id)
   username: {type: String, required: true},
   password: {type: String, required: true},
   email: String,
   szobaszam: Number
});

module.exports = mongoose.model('User', schema);
