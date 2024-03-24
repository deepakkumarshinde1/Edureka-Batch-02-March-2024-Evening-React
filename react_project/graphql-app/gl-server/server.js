// Commonjs Way
const express = require("express");
const server = express();
const glHandler = require("express-graphql");
const schema = require("./schema");

// express routing
// HTTP --> GET, PUT, POST , DELETE (ALL)
server.all(
  "/graphql",
  glHandler({
    schema,
    graphiql: true,
  })
);

// port 3001
let PORT = 3001;
server.listen(PORT, () => {
  console.log("server is running port", PORT);
});
