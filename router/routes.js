const express = require('express');
const router = express.Router();
const queries = require('../queries');

router.get('/users', (req, res, next) => {
  queries.listUsers()
    .then(users => { res.json({ users }); })
    .catch(next);
});

router.get('/users/:username', (req, res, next) => {
  queries.findUser(req.params)
    .then(user => {
      res.json({
        user
      });
    })
    .catch(next);
});

router.get('/pets', (req, res, next) => {
  queries.listPets()
    .then(pets => {
      res.json({
        pets
      });
    })
    .catch(next);
});

router.get('/pets/:pet', (req, res, next) => {
  console.log(req.params);
  
  queries.findPet(req.params)
    .then(pet => {
      res.json({
        pet
      });
    })
    .catch(next);
});

router.get('/fedon', (req, res, next) => {
  queries.listFedOn()
    .then(fed => {
      res.json({
        fed
      });
    })
    .catch(next);
});

// might have to do some sort of .innerJoin in the query
router.post('/feed', (req, res, next) => {
  queries.createFeed(req.body)
    .then(console.log(req.body))
    .then(record => {
      res.status(201).json({ record })
    })
    .catch(next);
    
});

router.post('/newuser', (req, res, next) => {
  queries.createUser(req.body)
    .then(console.log(req.body))
    .then(record => res.status(201).json(record))
    .catch(next);
});

router.post('/newpet', (req, res, next) => {
  queries.createPet(req.body)
    .then(console.log(req.body))
    .then(record => res.status(201).json(record))
    .catch(next);
});

router.delete('/removepet/:pet', (req, res, next) => {
  queries.deletePet(req.body)
    .then(console.log(req.body))
    .then(record => res.status(201).json(record))
    .catch(next);
});

router.delete('/removeuser/:user', (req, res, next) => {
  queries.deleteUser(req.body)
    .then(console.log(req.body))
    .then(record => res.status(201).json(record))
    .catch(next);
});


module.exports = router;