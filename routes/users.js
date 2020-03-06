const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("We are on users");
});

router.get("/specific", (req, res) => {
  res.send("We are on a specific user");
});

module.exports = router;
