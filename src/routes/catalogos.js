const express = require('express');
const router = express.Router();

const {getAll,createOne} = require('../controllers/cotalogos');

router.get('/', getAll);
router.get('/:id', (req, res)=> res.send({name: 'uno', key:req.params.id}));
router.post('/', createOne);
router.put('/:id', (req, res)=> res.send({name: 'Elimina', key: req.params.id}));
router.delete('/:id', (req, res)=> res.send({name: 'Elimina', key: req.params.id}));

module.exports = router;
