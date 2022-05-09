const app = require("./app");
const PORT = process.env.PORT || 8000;
const database = require("./db/knex");

app.listen(PORT, () =>
  console.log(`The server is listening on port: ${PORT} `)
);
