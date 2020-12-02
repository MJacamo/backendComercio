const {catalogosModel} = require('../../database');

module.exports = {
    getAll: async (req, res) => {
        try {
            const catalogos = await catalogosModel
            .find()        
            .populate('category')
            .populate('provider');        
            catalogos? res.status(200).send({catalogos}):res.status(400).send({msg: 'problemas al cargar catalogos.'});
        } catch (error) {
            res.send({error, msg:'Ocurrio un error al cargar.'}); 
        }
    },

    getOne: async (req, res) => {
        try {
            const { id } = req.params;
            const catalogos = await catalogosModel
            .findById(id)        
            .populate('category')
            .populate('provider');        
            catalogos? res.status(200).json(catalogos):res.status(400).send({msg: 'problemas al cargar catalogos.'});
        } catch (error) {
            res.send({error, msg:'Ocurrio un error al cargar.'}); 
        }
    },
    
    createOne: async (req, res) => {
        try {
            const {name,description, price,measure,existence, category, provider} = req.body;
            const newCatalogo = new catalogosModel({name,description, price,measure,existence});
            newCatalogo.category = category;
            newCatalogo.provider = provider;
            await newCatalogo.save();           
            res.send({data:newCatalogo, msg:'Saved'});
        } catch (error) {
            res.send({error, msg:'Ocurrio un error al crear.'}); 
        }
      },
      updateOne: async (req, res) => {
          try {
            const { id } = req.params;
            const {name,description, price,measure,existence, category, provider} = req.body;
            const updatedCatalogo = await catalogosModel.findByIdAndUpdate(
              id,
              { $set: { name,description, price,measure,existence, category, provider }},
              { useFindAndModify: false }
            );
            res.send({data:updatedCatalogo, msg:'updated'});
          } catch (error) {
            res.send({error, msg:'Ocurrio un error al eliminar.'});
          }       
      },
      deleteOne: async (req, res) => {
          try {
            const { id } = req.params;            
            const deletedCatalogo = await catalogosModel.findByIdAndDelete(id);
            res.send(`${deletedCatalogo.name} eliminado`);
          } catch (error) {
            res.send({error, msg:'Ocurrio un error al eliminar.'}); 
          }
      },
 
}