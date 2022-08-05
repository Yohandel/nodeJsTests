const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const identificationSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
        required: false
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Identification = mongoose.model('identification', identificationSchema)
module.exports = Identification