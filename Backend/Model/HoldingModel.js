const { model } = require("mongoose");
const {HoldingSchemas} = require("../Schemas/HoldingSchemas");


const HoldingModel = new model("holdings", HoldingSchemas);

module.exports={HoldingModel};