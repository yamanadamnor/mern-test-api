// TODO: faker.js kan användas för att generera fake data

const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const mongoose = require("mongoose");
const endpoints = require("express-list-endpoints");


require("dotenv/config");

// Middlewares
// Built body-parser in express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Cors
app.use(cors());

// Import route
const postsRoute = require("./routes/posts");
const usersRoute = require("./routes/users");
const countriesRoute = require("./routes/countries");

app.use("/posts", postsRoute);
app.use("/users", usersRoute);
app.use("/countries", countriesRoute);

// Home route
// app.get("/", (req, res) => {
//   res.json({ message: "We are on home" });
// });

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, db) => {
    if (err) throw err;
    console.log("connected to db");
  }
);

app.get("/routes", (req, res) => {
  const routes = endpoints(app);
  res.json(routes);
});

// Listening to the server
app.listen(3001);
