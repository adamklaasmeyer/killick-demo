const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  title: String,
  description: String,
  body: String,
  favoritesCount: { type: Number, default: 0 }
});

mongoose.model("Article", ArticleSchema);
