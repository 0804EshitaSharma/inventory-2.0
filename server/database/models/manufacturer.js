/* Referred from https://mongoosejs.com/docs/guide.html */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ManufacturerSchema = new Schema({
  name: { type: String },
  items: { type: Array },
});

const Manufacturer = mongoose.model(
  "MANUFACTURER",
  ManufacturerSchema
);
module.exports = Manufacturer;
