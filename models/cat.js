const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CatSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  img_url: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Cat', CatSchema);