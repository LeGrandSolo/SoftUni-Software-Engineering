const express = require("express");
const env = process.env.NODE_ENV || "development";

const config = require("./config/config")[env];
const app = express();

app.use(express.urlencoded({ extended: true }));

require("./config/express")(app);
require("./config/routes")(app);
require("./config/mongoose")()


app.listen(
  config.port,
  console.log(`Listening on port ${config.port}! Now its up to you...`)
);
