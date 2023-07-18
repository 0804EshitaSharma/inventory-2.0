/* Referred from https://mongoosejs.com/docs/guide.html */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  name: { type: String },
  description: { type: String },
  url: { type: String },
  price: { type: Number },
  manufacturer: { type: String },
  category: { type: String },
  reviews: { type: Number },
});

const Product = mongoose.model("PRODUCT", ProductSchema);
module.exports = Product;
