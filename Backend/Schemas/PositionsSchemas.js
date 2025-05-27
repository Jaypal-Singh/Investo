const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const PositionsSchemas = new Schema({
    userId : {
        type : mongoose.Schema.ObjectId,
        ref: 'User',
        require : true
    },
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
});

module.exports = {PositionsSchemas};