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
router.get('/main', function(req, res, next) {
  res.render('main');
});

/* SAVE new user*/
router.post('/new', function(req, res, next){
  var newUser = new User({ username: req.body.username, password: req.body.password, email: req.body.email, szobaszam: req.body.szobaszam });
	//if(req.body.password1!=req.body.password2)
		//return res.render('register', { user: newUser, hiba:"jelszo"});
  
  newUser.save(function(err, doc){
    if(err){
      console.log(err);
     return res.render('register', { user: newUser});
     } 
    else return res.redirect('/');
  });
});

router.post('/login', function(req, res, next){
  var nUser = new User();

  User.findOne({'username':req.body.username,'password':req.body.password}, function(err, user){
    if(err){
      console.log(err);
    }
    if(user==null)
    {
      return res.redirect('/');
    }
    else{
      return res.redirect('/users/main');
    }
  });
})

module.exports = router;
