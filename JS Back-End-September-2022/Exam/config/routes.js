const authenticationController = require("../controllers/authenticationController");
const blogController = require("../controllers/blogController");
const catalogController = require("../controllers/catalogController");
const homeController = require("../controllers/homeController");
const profileController = require("../controllers/profileController");
const notFound = require("../middlewares/notFound");
const checkLoggedInStatus = require("../middlewares/checkLoggedInStatus");
const errorMessages = require("../middlewares/errorMessages");
const trimBody = require("../middlewares/trimBody");

module.exports = (app) => {
  app.use(checkLoggedInStatus);
  app.use(errorMessages);
  app.use(trimBody);
  app.use(homeController);
  app.use("/auth", authenticationController);
  app.use("/blog", blogController);
  app.use("/catalog", catalogController);
  app.use("/profile", profileController);
  app.use(notFound);
};
