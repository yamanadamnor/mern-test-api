const mongoose = require("mongoose");

const CountryScheme = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  vat: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Country", CountryScheme);