const mongoose = require("mongoose");
const RouteScheme = mongoose.Schema({
  path: {
    type: String,
    required: true,
  },
  method: {
    type: {},
    required: true,
  },
  example: {
    type: {},
  },
});

module.exports = mongoose.model("Route", RouteScheme);
