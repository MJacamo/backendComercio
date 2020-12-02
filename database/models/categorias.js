const mongoose = require('mongoose');
const { Schema } = mongoose;


const categoriasSchema = new Schema(
    {
        name: { type: String, uppercase:true, required: true, unique:true },
        description: { type: String },
        abbreviation: {type: String, required:true},
    },
    { timestamps: true }
);

const model = mongoose.model('categorias', categoriasSchema);
module.exports = model;
