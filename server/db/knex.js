//read knex.file in the root directory, and connect the database.
const knexConfig = require("../../knexfile");
const environment = knexConfig[process.env.NODE_ENV || "development"];
const knex = require("knex")(environment);

module.exports = knex;
