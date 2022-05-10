const app = require("./app");
const PORT = process.env.PORT || 8000;
const database = require("./db/knex");
const path = require("path");

app.use(express.static(path.join(__dirname, "../my-second-memory/build")));

app.listen(PORT, () =>
  console.log(`The server is listening on port: ${PORT} `)
);
