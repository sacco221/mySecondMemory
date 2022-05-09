const express = require("express");
const app = express();
const database = require("./db/knex");
const path = require("path");
const cors = require("cors");
// const config = require("../knexfile");
// const knex = require("knex")(config);

require("dotenv").config({
  path: "../../.env",
});

app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
  database("items")
    .select()
    .then((result) => {
      // console.log("result in app.js", result);
      res.send(result);
    });
});

module.exports = app;
