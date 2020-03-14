const mongoose = require("mongoose");
const ExampleScheme = mongoose.Schema({
  schema: {
    type: {},
    required: true
  },
  response: {
    type: {},
    required: true
  },
  error: {
    type: {},
    required: true
  }
});

module.exports = mongoose.model("Example", ExampleScheme);
