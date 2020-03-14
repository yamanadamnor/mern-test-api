const mongoose = require("mongoose");
const ExampleScheme = mongoose.Schema({
  path: { type: String, required: true },
  method: { type: String, required: true },
  response: { type: String, required: true },
  error: { type: Number, required: true }
});
module.exports = mongoose.model("Examples", ExampleScheme);
