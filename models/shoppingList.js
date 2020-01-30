const mongoose = require('mongoose');

const shoppinglistSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  image: String,
  price: Number,
  explanation1: String,
  explanation2: String,
  point: Number
 

}, { timestamps: true });

const shoppingList = mongoose.model('shoppingList', shoppinglistSchema);

module.exports = shoppingList;