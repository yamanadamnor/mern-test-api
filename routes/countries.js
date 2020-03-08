const express = require("express");
const router = express.Router();
const Country = require("../models/Country");

// All countries
router.get("/", async (req, res) => {
  try {
    const countries = await Country.find();
    res.json(countries);
  } catch (err) {
    res.json({ message: err });
  }
});

// submit a country
router.post("/", async (req, res) => {
  console.log(req.body);
  const country = new Country({
    name: req.body.name,
    vat: req.body.vat
  });

  const savedCountry = await country.save();
  try {
    res.json(savedCountry);
  } catch (err) {
    res.json({ message: err });
  }
});

// Specific country
router.get("/:countryId", async (req, res) => {
  try {
    const country = await Country.findById(req.params.countryId);
    res.json(country);
  } catch (error) {
    res.json({ message: error });
  }
});

// Delete specific country 
router.delete("/:countryId", async (req, res) => {
  try {
    const removedCountry = await Country.remove({
      _id: req.params.countryId
    });
    res.json(removedCountry);
  } catch (error) {
    res.json({ message: error });
  }
});

router.patch("/:countryId", async (req, res) => {
  try {
    const updatedCountry = await Country.updateOne(
      {
        _id: req.params.countryId
      },
      {
        $set: {
          name: req.body.name
        }
      }
    );
    res.json(updatedCountry);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
