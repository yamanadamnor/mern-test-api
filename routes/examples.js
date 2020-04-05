// TODO: Cleanup this shit

const express = require("express");
const router = express.Router();
const Example = require("../models/Example");
const needle = require("needle");

// All examples
router.get("/", async (req, res) => {
  try {
    const examples = await Example.find();
    res.json(examples);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const example = new Example({
    response: req.body.response,
    error: req.body.error
  });

  const savedExample = await example.save();
  try {
    res.json(savedExample);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
