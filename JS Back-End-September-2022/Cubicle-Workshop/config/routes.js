const homeController = require("../controllers/homeController");
const aboutController = require("../controllers/aboutController");
const defaultController = require("../controllers/defaultController");
const createController = require("../controllers/createController");
const detailsController = require("../controllers/detailsController");
const addAccessoryController = require("../controllers/addAccessoryController");
const attachAccessoryController = require("../controllers/attachAccessory");

module.exports = (app) => {
  app.use(homeController);
  app.use("/about", aboutController);
  app.use("/create", createController);
  app.use("/create/accessory", addAccessoryController);
  app.use("/attach/accessory", attachAccessoryController);
  app.use(detailsController);
  app.all("*", defaultController);
};
