const express = require("express");
const cookieParser = require("cookie-parser");
const handlebars = require("express-handlebars").create({
  extname: ".hbs",
});

module.exports = (app) => {
  app.engine(".hbs", handlebars.engine);
  app.set("view engine", ".hbs");
  app.use(express.static("static"));
  app.use(cookieParser({ maxAge: 86400000, httpOnly: true }));
};
