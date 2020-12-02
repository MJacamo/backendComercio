const mongoose, {Schema} = require('mongoose');


const categoriasSchema = new Schema(
    {
        name: { type: String, uppercase:true, required: true, unique:true },
        description: { type: String },
        abbreviation: {type: Number, required:true},
    },
    { timestamps: true }
);

schema.plugin(require('mongoose-autopopulate'));

const model = mongoose.model('categorias', categoriasSchema);
module.exports = model;
