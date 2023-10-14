const mongoose = require("mongoose");

const bookmarkSchema = mongoose.Schema({
  bookmarkId: {
    type: String,
    required: [false],
  },

  author: {
    type: String,
    required: [false],
  },

  content: {
    type: String,
    required: [false],
  },

  description: {
    type: String,
    required: [false],
  },

  title: {
    type: String,
    required: [false],
  },

  image: {
    type: String,
    required: [false],
  },

  publishedDate: {
    type: String,
    required: [false],
  },
},

{
    timestamps: true
});

const Bookmarks = mongoose.model('Bookmarks', bookmarkSchema)

module.exports = Bookmarks