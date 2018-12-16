var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contacts', function(req, res, next) {
  let contacs = fs.readFileSync('./database/todo-db.json');
  let contactArray = JSON.parse(contacs);
  res.render('contacts', { title: 'Contacts' });
});

router.get('/about-us', function(req, res, next) {
  res.render('about-us', { title: 'About Us' });
});

router.get('/messages', function(req, res, next) {
  let contacs = fs.readFileSync('./database/todo-db.json');
  let contactArray = JSON.parse(contacs);
  res.render('messages', { title: 'Messages', contactInfo: contactArray });
});

router.post('/contacts-create', (req, res) => {
  let contacs = fs.readFileSync('./database/todo-db.json');
  let contactArray = JSON.parse(contacs);
  contactArray.push(req.body);
  fs.writeFileSync('../database/todo-db.json', JSON.stringify(contactArray));
  res.redirect('/messages');
})

module.exports = router;
