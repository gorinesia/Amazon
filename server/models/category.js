const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchme = new Schema({
  type: { type: String, unique: true, required: true }
});

module.exports = mongoose.model('Category', CategorySchme);
