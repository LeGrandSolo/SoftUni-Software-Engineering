const express = require("express");
const handlebars = require("express-handlebars").create({
  extname: ".hbs",
});
const bodyParser = require("body-parser");

module.exports = (app) => {
  app.engine(".hbs", handlebars.engine);
  app.set("view engine", ".hbs");
  app.use(express.static("static"));
};
