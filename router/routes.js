const express = require('express');
const router = express.Router();
const queries = require('../queries');

router.get('/', (req, res, next) => {
  queries.listUsers()
    .then(users => { res.json({ users }); });
});

module.exports = router;