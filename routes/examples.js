// TODO: Cleanup this shit

const express = require("express");
const router = express.Router();
const Example = require("../models/Example");
const http = require("http");

// All examples
router.get("/", async (req, res) => {
  try {
    const examples = await Example.find();
    res.json(examples);
    // res.json({message: "hej"});
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  http .get("http://localhost:3001/routes", resp => {
      let routes = "";

      // A chunk of data has been recieved.
      resp.on("data", chunk => {
        routes += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on("end", () => {
        // console.log(JSON.parse(data).explanation);
        routes.map(route => {
          route.methods.map(method => {
            let example = new Example({
              path: route.path,
              method: method,
              response: "response",
              error: "error"
            });
            example.save();
          });
        });
      });
    })
    .on("error", err => {
      console.log("Error: " + err.message);
    });

  try {
    res.json({ message: "success" });
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
