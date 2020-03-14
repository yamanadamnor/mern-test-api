const express = require("express");
const app = express();
const router = express.Router();
const endpoints = require("express-list-endpoints");
const Route = require("../models/Route");

// All routes
router.get("/", async (req, res) => {
  try {
    const allRoutes = await Route.find();
    res.json(allRoutes);
  } catch (error) {
    res.json({ message: erro });
  }
});

// submit a route
router.post("/", async (req, res) => {
  const route = new Route({
    path: req.body.path,
    method: req.body.method
  });

  const savedRoute = await route.save();
  try {
    res.json(savedRoute);
  } catch (err) {
    res.json({ message: err });
  }
});

// Specific route
router.get("/:routeId", async (req, res) => {
  try {
    const route = await Route.findById(req.params.routeId);
    res.json(route);
  } catch (error) {
    res.json({ message: error });
  }
});

// Delete specific route
router.delete("/:routeId", async (req, res) => {
  try {
    const removedRoute = await Route.remove({
      _id: req.params.routeId
    });
    res.json(removedRoute);
  } catch (error) {
    res.json({ message: error });
  }
});

router.patch("/:routeId", async (req, res) => {
  try {
    const updatedRoute = await Route.updateOne(
      {
        _id: req.params.routeId
      },
      {
        $set: {
          path: req.body.path,
          method: req.body.method
        }
      }
    );
    res.json(updatedRoute);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
