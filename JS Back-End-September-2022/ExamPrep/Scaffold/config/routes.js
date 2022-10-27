const authenticationController = require("../controllers/authenticationController");
const homeController = require("../controllers/homeController");
const checkLoggedInStatus = require("../middlewares/checkLoggedInStatus");
const trimBody = require("../middlewares/trimBody");

module.exports = (app) => {
  app.use(checkLoggedInStatus);
  app.use(trimBody);
  app.use(homeController);
  app.use("/auth", authenticationController);
};
