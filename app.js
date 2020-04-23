// TODO: faker.js kan användas för att generera fake data
// TODO: Add example routes that returns response and error examples

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const endpoints = require("express-list-endpoints");
const fetch = require("node-fetch");

require("dotenv/config");

// Middlewares
// Built body-parser in express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Cors
app.use(cors());

// Import route
const countriesRoutes = require("./routes/countries");
const routesRoutes = require("./routes/routes");

app.use("/countries", countriesRoutes);
app.use("/routes", routesRoutes);

// Connect to DB
// Backup
// mongoose.connect(
//   process.env.DB_CONNECTION,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   (err, db) => {
//     if (err) throw err;
//     console.log("connected to db");
//   }
// );

const connectionString = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:${process.env.DB_PORT}/${process.env.DB_NAME}`;
// const connectionString = `mongodb://localhost:${process.env.DB_PORT}/${process.env.DB_NAME}`;
// console.log(connectionString);
mongoose.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, db) => {
    if (err) throw err;
    console.log("connected to db");
  }
);

// Seed routes v1
// app.get("/seedRoutes", (req, res) => {
//   try {
//     const routes = endpoints(app);
//     const url = "http://localhost:3001/routes";

//     routes.map((route) => {
//       route.methods.map((method) => {
//         let postData = {
//           path: route.path,
//           method: method,
//         };
//         needle.post(url, postData, (needleErr, needleRes) => {});
//       });
//     });
//     res.json({ message: "seeding success" });
//   } catch (error) {
//     res.json({ message: error });
//   }
// });

app.get("/seedRoutes", (req, res) => {
  try {
    // let postData = JSON.stringify({
    //   path: "Wade Wilson",
    //   method: "Murderer",
    // });
    let postData = {
      path: "Wade Wilson",
      method: "Murderer",
    };

    fetch("https://httpbin.org/post", {
      method: "post",
      body: JSON.stringify(postData),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => console.log(json));

    res.json({ message: "seeding success" });
  } catch (error) {
    res.json({ message: error });
  }
});

// Seed routes v2
app.get("/seedRoutes2", async (req, res) => {
  try {
    const routes = endpoints(app);
    const url = "http://localhost:3001/routes";

    routes.map(async (route) => {
      let postData = {
        path: route.path,
        method: route.methods,
      };
      console.log(route.path);
      console.log(route.methods);
      console.log(JSON.stringify(postData));
      const request = await fetch(url, {
        method: "POST",
        body: JSON.stringify(postData),
        headers: { "Content-Type": "application/json" },
      });
      const response = await request.json();
      console.log(response);
    });
    res.json({ message: "seeding success" });
  } catch (error) {
    res.json({ message: error });
  }
});

// Delete all routes
app.get("/deleteRoutes", async (req, res) => {
  try {
    const response = await fetch("http://localhost:3001/routes");
    const routes = await response.json();

    routes.map(async (route) => {
      const url = `http://localhost:3001/routes/${route._id}`;
      const request = await fetch(url, { method: "DELETE" });
      const response = await request.json();
    });

    res.json({ message: "Routes deleted successfully" });
  } catch (error) {
    res.json({ message: error });
  }
});

// Listening to the server
app.listen(3001);
