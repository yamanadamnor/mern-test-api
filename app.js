// TODO: faker.js kan användas för att generera fake data
// TODO: Add example routes that returns response and error examples

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const endpoints = require("express-list-endpoints");
const needle = require("needle");

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

const connectionString = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:${process.env.DB_PORT}/${process.env.DB_NAME}`
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

// Example routes
app.get("/seedRoutes", (req, res) => {
  try {
    const routes = endpoints(app);
    const url = "http://localhost:3003/routes";

    routes.map((route) => {
      route.methods.map((method) => {
        let postData = {
          path: route.path,
          method: method,
        };
        needle.post(url, postData, (needleErr, needleRes) => {});
      });
    });
    res.json({ message: "seeding success" });
  } catch (error) {
    res.json({ message: error });
  }
});

// Listening to the server
app.listen(3003);
