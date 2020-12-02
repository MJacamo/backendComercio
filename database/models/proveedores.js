const mongoose, {Schema} = require('mongoose');


const proveedorSchema = new Schema(
    {
        name: { type: String, uppercase:true, required: true, unique:true },
        identification: { type: String },
        address: {type: Number},
        phone: {type: String},
    },
    { timestamps: true }
);

schema.plugin(require('mongoose-autopopulate'));

const model = mongoose.model('proveedores', proveedorSchema);
module.exports = model;
