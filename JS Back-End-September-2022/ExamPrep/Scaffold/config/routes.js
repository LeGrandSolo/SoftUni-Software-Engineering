const authenticationController = require("../controllers/authenticationController");
const homeController = require("../controllers/homeController");
const checkLoggedInStatus = require("../middlewares/checkLoggedInStatus");
const errorMessages = require("../middlewares/errorMessages");
const trimBody = require("../middlewares/trimBody");

module.exports = (app) => {
  app.use(checkLoggedInStatus);
  app.use(errorMessages)
  app.use(trimBody);
  app.use(homeController);
  app.use("/auth", authenticationController);
};
