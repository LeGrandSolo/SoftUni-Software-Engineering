const homeController = require("../controllers/homeController");
const aboutController = require("../controllers/aboutController");
const defaultController = require("../controllers/defaultController");
const createController = require("../controllers/createController");
const detailsController = require("../controllers/detailsController");
const addAccessoryController = require("../controllers/addAccessoryController");
const attachAccessoryController = require("../controllers/attachAccessory");
const loginController = require("../controllers/loginController");
const registerController = require("../controllers/registerController");
const isLogged = require("../middlewares/auth");
const logoutController = require("../controllers/logout");

module.exports = (app) => {
  app.use(isLogged);
  app.use(homeController);
  app.use("/about", aboutController);
  app.use("/create", createController);
  app.use("/create/accessory", addAccessoryController);
  app.use("/attach/accessory", attachAccessoryController);
  app.use("/login", loginController);
  app.use("/register", registerController);
  app.use("/logout", logoutController);
  app.use(detailsController);
  app.all("*", defaultController);
};
