const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const favoriteImageSchema = new Schema({
  file: {
    type: String,
    required: true,
  },

  url: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    required: true
  },

  uniq: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model('favoriteImage', favoriteImageSchema);
