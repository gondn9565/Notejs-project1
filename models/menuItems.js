const { defaults } = require("lodash");
const mongoose = require("mongoose");
const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  taste: {
    type: String,
    enum: ["spicy", "sweet", "sour", "bitter", "salty"],
    required: true,
  },
  is_drink: {
    type: Boolean,
    defaults: false,
  },
  ingredients: {
    type: [String],
    required: true,
    default: [],
  },
  nums_Sales: {
    type: Number,
    default: 0,
  },
});
const MenuItem = mongoose.model("MenuItem", menuItemSchema);
//export the person model
module.exports = MenuItem;
