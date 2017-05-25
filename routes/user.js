var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET register */
router.get('/register', function(req, res, next) {
  var newUser = new User();
  res.render('register', {user: newUser, error: ""});
});

router.get('/login', function(req, res, next) {
  res.render('login', {error: ''});
});

/* SAVE new user*/
router.post('/new', function(req, res, next){
  var newUser = new User({ username: req.body.username, password: req.body.password, email: req.body.email, szobaszam: req.body.szobaszam });
  newUser.save(function(err, doc){
    if(err) res.render('register', { user: newUser, error: "Nem megfelelő adatok!" });
    else res.redirect('/');
  });
});

router.post('/signin', function(req, res, next){
  User.findOne({username: req.body.username}, function(err, user){
    if(!user) res.redirect('/users/login'); //err nem akart működni
    else{
      if(req.body.password == user.password) res.redirect('/');
      else res.render('login', {error: "Felhasználónév és/vagy jelszó helytelen!"});
    }
    });
});

module.exports = router;
