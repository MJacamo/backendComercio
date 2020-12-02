const {categoriasModel} = require('../../database');

module.exports = {
    getAll: async (req, res) => {
        try {
            const categorias = await categoriasModel.find();
        categorias? res.status(200).send({data: categorias}):res.status(400).send({msg: 'problems loading categories.'});
        } catch (error) {
            res.send({error, msg:'Ocurrio un error al consultar.'});
        }
    },
    createOne: async (req, res) => {
       try {
        const categoria = req.body;
        const newCategoria = new categoriasModel(categoria);
        await newCategoria.save();
        res.send({data:newCategoria, msg:'Saved'});
       } catch (error) {
        res.send({error, msg:'Ocurrio un error al registrar.'});
       }
      },
}