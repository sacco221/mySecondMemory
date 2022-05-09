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

app.get("/api", async (req, res) => {
  await database("items")
    .select()
    .then((result) => {
      res.send(result);
    });
});

app.post("/post", async (req, res) => {
  await database("items").insert({
    name: req.body.name,
    amount: req.body.amount,
  });
});

module.exports = app;
