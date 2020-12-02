const faker = require('faker');
const { categoriasModel, proveedoresModel } = require('../');

const categorias = ['Ferreteros', 'Limpieza', 'cuchillos']

module.exports.creaData = async () => {   
    const categoriasModels = await categoriasModel.find();
    if( categoriasModels.length == 0 ) {   
        for (let i = 0; i <= 2; ++i) {            
            const newCategoria = new categoriasModel({
              name: categorias[i]      
            });        
            await newCategoria.save();
          }
    }
};
