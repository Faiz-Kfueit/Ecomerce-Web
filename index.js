// Startup server
const express = require("express");
const app = express();
const movieData = require("./Router/movie");
const ordersData = require("./Router/orders");
const usersData = require("./Router/users");
const genresData = require("./Router/genres ");
app.use(movieData);
app.use(ordersData);
app.use(usersData);
app.use(genresData);
app.listen(8080, () => {
  console.log("server started on port 8080");
});
