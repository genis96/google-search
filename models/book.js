const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  author: { type: String, required: true },
  description: String,
  title: { type: String, required: true },
//   image: ,
//   link: 
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
