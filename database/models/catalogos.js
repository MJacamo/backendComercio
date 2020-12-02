const mongoose = require('mongoose');
const { Schema } = mongoose;

const catalogoSchema = new Schema(
    {
        name: { type: String, uppercase:true, required: true },
        description: { type: String, required: true },
        price: {type: Number, required:true},
        category: { type: Schema.Types.ObjectId, ref: 'categorias' },
        provider: [{ type: Schema.Types.ObjectId, ref: 'proveedores'}],
        measure: { type: String, required: true },
        existence: {type:Number, default:0, required:true}
    },
    { timestamps: true }
);

catalogoSchema.plugin(require('mongoose-autopopulate'));

const model = mongoose.model('catalogos', catalogoSchema);
module.exports = model;