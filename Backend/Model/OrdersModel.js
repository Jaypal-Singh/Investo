const {model} = require("mongoose")

const {OrdersSchemas} = require("../Schemas/OrdersSchemas");

const OrdersModel = new model("OrdersModel", OrdersSchemas);

module.exports = { OrdersModel };