const homeController = require("../controllers/homeController");
const aboutController = require("../controllers/aboutController");
const defaultController = require("../controllers/defaultController");
const createController = require("../controllers/createController");
const detailsController = require("../controllers/detailsController");
const addAccessoryController = require("../controllers/addOrAttachAccessoryController");

module.exports = (app) => {
  app.use(homeController);
  app.use("/about", aboutController);
  app.use("/create", createController);
  app.use("/create/accessory", addAccessoryController);
  app.use(detailsController);
  app.all("*", defaultController);
};
