const mongoose = require("mongoose");
const RouteScheme = mongoose.Schema({
  path: {
    type: String,
    required: true
  },
  method: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Route", RouteScheme);
