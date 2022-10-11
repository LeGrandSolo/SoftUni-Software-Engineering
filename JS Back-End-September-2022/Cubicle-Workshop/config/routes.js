const homeController = require("../controllers/homeController");
const aboutController = require("../controllers/aboutController");
const defaultController = require("../controllers/defaultController");
const createController = require("../controllers/createController");


module.exports = (app) => {
  app.use(homeController);
  app.use("/about", aboutController);
  app.use("/create", createController);
  app.use(defaultController);
};
