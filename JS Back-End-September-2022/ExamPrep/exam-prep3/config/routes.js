const authenticationController = require("../controllers/authenticationController");
const catalogController = require("../controllers/catalogController");
const cryptoController = require("../controllers/cryptoController");
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
  app.use("/crypto", cryptoController)
  app.use("/catalog", catalogController)
};
