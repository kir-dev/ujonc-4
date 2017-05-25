var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var schema = mongoose.Schema({
   //id van automatikusan??? (_id)
   username: {type: String, required: true},
   password: {type: String, required: true},
   email: {type: String, required: true},
   szobaszam: {type: Number, required: true}
});

module.exports = mongoose.model('User', schema);
