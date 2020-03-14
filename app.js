// TODO: faker.js kan användas för att generera fake data
// TODO: Add example routes that returns response and error examples

const express = require("express");
const app = express();
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
const postsRoutes = require("./routes/posts");
const usersRoutes = require("./routes/users");
const countriesRoutes = require("./routes/countries");
const exampleRoutes = require("./routes/examples");

app.use("/posts", postsRoutes);
app.use("/users", usersRoutes);
app.use("/countries", countriesRoutes);
app.use("/example", exampleRoutes)


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

// Example routes
app.get("/routes", (req, res) => {
  const routes = endpoints(app);
  res.json(routes);
});

// Listening to the server
app.listen(3001);
