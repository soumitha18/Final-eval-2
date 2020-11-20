const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const citySchema = new Schema({
    district_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        min: 3,
        max: 255,
    },
    type: {
        type: String,
        required: true
    },
    population: {
        type: Number,
        required: true
    },
    polling: {
        type: Array,
        default: []
    }
});

module.exports = mongoose.model('City', citySchema)