const {model} = require("mongoose");

const {PositionsSchemas} = require("../Schemas/PositionsSchemas");

const PositionsModel = new model("positions", PositionsSchemas);

module.exports = {PositionsModel}