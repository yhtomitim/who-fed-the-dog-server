const express = require('express');
const router = express.Router();
const queries = require('../queries');

router.get('/users', (req, res, next) => {
  queries.listUsers()
    .then(users => { res.json({ users }); });
});

router.get('/pets', (req, res, next) => {
  queries.listPets()
    .then(pets => {
      res.json({
        pets
      });
    });
});

router.get('/fedon', (req, res, next) => {
  queries.listFedOn()
    .then(fed => {
      res.json({
        fed
      });
    });
});


module.exports = router;