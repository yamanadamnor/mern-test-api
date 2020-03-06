const express = require("express");
const app = express();
const cors =  require("cors");
const mongoose = require("mongoose");

require("dotenv/config");

// Middlewares
// Built body-parser in express
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Cors 
app.use(cors());

// Import route
const postsRoute = require("./routes/posts");
const usersRoute = require("./routes/users");

app.use("/posts", postsRoute);
app.use("/users", usersRoute);

// Home route
app.get("/", (req, res) => {
  res.send("We are on home");
});

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, db) => {
    if (err) throw err;
    console.log("connected to db");
  }
);

// Listening to the server
app.listen(3000);
