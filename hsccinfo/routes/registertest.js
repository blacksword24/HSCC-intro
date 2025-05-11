var express = require('express');
var router = express.Router();

const Encrypter=require("../middleware/PasswordEncrypt");
//const { MongoClient } = require('mongodb');
const MongoClient=require("../middleware/MongoClient")
const client=MongoClient.CreateMongoClient();
 

/* GET register page. */
router.get('/', function(req, res, next) {
  res.render('registertest', { title: 'Test Registration Page', message:'' });
});

// POST register form
router.post('/', function(req, res, next) {
  let name=req.body.username;
  //const client=MongoClient.CreateMongoClient();
   client.username =name
  let pwd=req.body.pwd;
  client.pwd = pwd  
  var {keyString,saltString}=Encrypter.EncryptPassword(req.body)
  res.render('registertest', {
    title: 'Register Results',

  });
});

module.exports = router;