const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> res.send({name: 'todos'}));
router.get('/:id', (req, res)=> res.send({name: 'uno', key:req.params.id}));
router.post('/', (req, res)=> res.send({name: 'crear'}));
router.put('/:id', (req, res)=> res.send({name: 'Elimina', key: req.params.id}));
router.delete('/:id', (req, res)=> res.send({name: 'Elimina', key: req.params.id}));

module.exports = router;

