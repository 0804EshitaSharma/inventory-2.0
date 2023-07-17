/* Referred from https://mongoosejs.com/docs/guide.html */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ManufacturerSchema = new Schema({
  name: { type: String },
  items: { type: Array },
});

module.exports = mongoose.model("manufacturers", ManufacturerSchema);
