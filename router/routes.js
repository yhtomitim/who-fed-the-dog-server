const express = require('express');
const router = express.Router();
const queries = require('../queries');

router.get('/', (req, res, next) => {
  res.send({ message: 'welcome to the Who Fed The Dog API' })
    .catch(next);
});

router.get('/users', (req, res, next) => {
  queries.listUsers()
    .then(users => res.json({ users }))
    .catch(next);
});

router.get('/users/:username', (req, res, next) => {
  queries.findUser(req.params)
    .then(user => {
      user
        ? res.json({ user })
        : res.status(404).json({ message: 'username not found' });
      })
    .catch(next);
});

router.post('/newuser', (req, res, next) => {
  queries.createUser(req.body)
    .then(record => res.status(201).json({
      message: 'user created'
    }))
    .catch(next);
});

router.put('/users/:username', (req, res, next) => {
  queries.updateUser(req.params, req.body)
    .then(user => {
      user
        ? res.json({ message: 'changed username!' })
        : res.status(400).json({ message: 'username not updated' });
    })
    .catch(next);
});

router.delete('/removeuser/:user', (req, res, next) => {
  queries.deleteUser(req.body)
    .then(console.log(req.body))
    .then(record => res.status(201).json({
      message: 'user removed'
    }))
    .catch(next);
});

router.get('/pets', (req, res, next) => {
  queries.listPets()
    .then(pets => res.json({ pets }))
    .catch(next);
});

router.get('/pets/:pet', (req, res, next) => {
  queries.findPet(req.params)
    .then(pet => {
      pet
        ? res.json({ pet })
        : res.status(404).json({ message: 'pet name not found' })
          .catch(next);
    });
});

router.post('/newpet', (req, res, next) => {
  queries.createPet(req.body)
    .then(record => res.status(201).json({
      message: 'pet created'
    }))
    .catch(next);
});

router.put('/pets/:pet', (req, res, next) => {
  queries.updatePet(req.params, req.body)
    .then(pet => {
      pet
        ?
        res.json({
          message: 'changed pet name!'
        }) :
        res.status(400).json({
          message: 'pet name not updated'
        })
    })
    .catch(next);
});

router.delete('/removepet/:pet', (req, res, next) => {
  queries.deletePet(req.body)
    .then(record => res.status(201).json({
      message: 'pet removed'
    }))
    .catch(next);
});

router.get('/fedon', (req, res, next) => {
  queries.listFedOn()
    .then(fed => res.json({ fed }))
    .catch(next);
});

router.post('/feed', (req, res, next) => {
  queries.createFeed(req.body)
    .then(record => {
      res.status(201).json({ message: 'Great Job!' });
    })
    .catch(next);    
});

router.get('/feedsummary', (req, res, next) => {
  queries.listUserWithFeeding()
    .then(list => res.json({ list }))
    .catch(next);

});

module.exports = router;