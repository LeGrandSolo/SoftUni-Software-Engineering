const mongoose = require("mongoose");
const Cube = require("../models/Item");

const connStr = "mongodb://localhost:27017/cubicle";

async function startMongo() {
  await mongoose.connect(connStr, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("Database ready!");
}

module.exports = startMongo;
