var express = require('express');
var router = express.Router();
var Product = require('../models/product');


router.get('/add', function(req, res, next) {
  res.render('add', {error: ''});
});

/* SAVE new user*/
router.post('/add', function(req, res, next){
  var newProduct = new Product({ productname: req.body.productname,
                                 amount: req.body.productamount,
                                 price: req.body.productprice,
                                 comment: req.body.productcomment,
                                 category: req.body.productcategory });
  newProduct.save(function(err, doc){
    if(err) console.log("!!!!!!!!!!!!!BAJ!!!!!!!!!!!!!!");
    else res.redirect('/');
  });
});


module.exports = router;
