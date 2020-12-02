const mongoose = require('mongoose');
const { Schema } = mongoose;


const proveedorSchema = new Schema(
    {
        name: { type: String, uppercase:true, required: true},
        identification: { type: String, required: true, unique:true  },
        address: {type: Number},
        phone: {type: String},
    },
    { timestamps: true }
);

const model = mongoose.model('proveedores', proveedorSchema);
module.exports = model;
