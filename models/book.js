const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
//   image: ,
//   link: 
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
