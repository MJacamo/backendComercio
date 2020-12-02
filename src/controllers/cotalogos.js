const {catalogosModel} = require('../../database');

module.exports = {
    getAll: async (req, res) => {
        const catalogos = await catalogosModel
        .find()        
        .populate('category')
        .populate('provider');
        
        catalogos? res.status(200).send({data: catalogos}):res.status(400).send({msg: 'problems loading catalogs.'});
    },
    
    createOne: async (req, res) => {
        const {name,description, price,measure,existence, category, provider} = req.body;
        const newCatalogo = new catalogosModel({name,description, price,measure,existence});
        newCatalogo.category = category;
        newCatalogo.provider = provider;
        await newCatalogo.save();
       
        res.send({data:newCatalogo, msg:'Saved'});
      }
 
}