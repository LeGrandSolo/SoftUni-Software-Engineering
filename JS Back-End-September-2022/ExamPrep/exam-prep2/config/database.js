const mongoose = require("mongoose");

const CONNECTION_STRING = "mongodb://localhost:27017/tutorials";

async function start() {
  try {
    await mongoose.connect(CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Database connected!");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
module.exports = start;
