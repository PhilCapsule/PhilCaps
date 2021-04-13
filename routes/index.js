var express = require('express');
var router = express.Router();

var articleModel = require('../models/articles')  /* << articles */
var orderModel = require('../models/orders')      /* << orders */
var userModel = require('../models/users')        /* << users --  users-page */

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET tasks page. */
router.get('/tasks-page', async function(req, res, next) {

  var user = await userModel.findById('5c52e4efaa4beef85aad5e02');  // _Id:ObjectId
  

  res.render('tasks', {taches: user.task});
});

/* GET Messages page. */
router.get('/messages-page', async function(req, res, next) {

  var user = await userModel.findById('5c52e4efaa4beef85aad5e52');  // _Id:ObjectId

  res.render('messages', {messages: user.messages});
});

// console.log(' ')


/* GET Users page. */
router.get('/users-page', async function(req, res, next) {

  var users = await userModel.find({status: "customer"});   

  res.render('users', {users});
});



/* GET Catalog page. */
router.get('/catalog-page', async function(req, res, next) {

  var articles = await articleModel.find();

  res.render('catalog', {articles});
});
// console.log('') 


/* GET Orders-list page. */
router.get('/orders-list-page', async function(req, res, next) {

  var orders = await orderModel.find();
  
  res.render('orders-list', {orders});
});



/* GET Order detail page. */
router.get('/order-page', async function(req, res, next) {

  var order = await orderModel.findById(req.query.id)
                              .populate('articles')
                              .exec()

  res.render('order', {order});
}); 



/* GET chart page. */
router.get('/charts', function(req, res, next) {
  res.render('charts');
});



module.exports = router;
