const express = require("express");
const app = express();
const database = require("./db/knex");
const path = require("path");
const cors = require("cors");

require("dotenv").config({
  path: "../../.env",
});

app.use(express.json());
app.use(cors());

app.get("/getall", async (req, res) => {
  await database("items")
    .select()
    .then((result) => {
      // console.log("result in app.js", result);
      res.send(result);
    });
});

app.post("/post", async (req, res) => {
  await database("items").insert({
    name: req.body.name,
    amount: req.body.amount,
    purchace_date: req.body.purchaseDate + " 00:00",
    method: req.body.method,
  });
});

module.exports = app;
