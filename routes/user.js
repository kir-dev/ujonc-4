var express = require('express');
var router = express.Router();
var User = require('../models/user');


/* GET register */
router.get('/register', function(req, res, next) {

  var newUser = new User();
  res.render('register', {user: newUser});

  /*var newUser = new User();
  res.render('register', {username: '', password: '', email: '', szobaszam: ''});*/
});

/* SAVE new user*/
router.post('/new', function(req, res, next){
  var newUser = new User({ username: req.body.username, password: req.body.password, email: req.body.email, szobaszam: req.body.szobaszam });
  newUser.save(function(err, doc){
    if(err) return res.render('register', { user: newUser});
    else return res.redirect('/');
  });
  /*
    if(err) return res.render('register', { username: req.body.username, password: req.body.password, email: req.body.email, szobaszam: req.body.szobaszam });
  */
});

module.exports = router;
