var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var schema = mongoose.Schema({
   userid: Number,
   username: String,
   password: String,
   szobaszam: Number
});

module.exports = mongoose.model('User', schema);
