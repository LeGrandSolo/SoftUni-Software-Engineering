const authenticationController = require("../controllers/authenticationController");
const homeController = require("../controllers/homeController");
const hotelController = require("../controllers/hotelController");
const checkLoggedInStatus = require("../middlewares/checkLoggedInStatus");
const trimBody = require("../middlewares/trimBody");

module.exports = (app) => {
  app.use(checkLoggedInStatus);
  app.use(trimBody);
  app.use(homeController);
  app.use("/hotel", hotelController)
  app.use("/auth", authenticationController);
};
