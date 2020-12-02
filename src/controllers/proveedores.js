const {proveedoresModel} = require('../../database');

module.exports = {
    getAll: async (req, res) => {
        try {
            const proveedores = await proveedoresModel.find();
        proveedores? res.status(200).send({data: proveedores}):res.status(400).send({msg: 'problems loading provider.'});
        } catch (error) {
            res.send({error, msg:'Ocurrio un error al consultar.'});
        }
    },
    createOne: async (req, res) => {
        try {
            const proveedor = req.body;
            const newProveedor = new proveedoresModel(proveedor);
            await newProveedor.save();
            res.send({data:newProveedor, msg:'Saved'});
        } catch (error) {
            res.send({error, msg:'Ocurrio un error al registrar.'});            
        }
      },
}