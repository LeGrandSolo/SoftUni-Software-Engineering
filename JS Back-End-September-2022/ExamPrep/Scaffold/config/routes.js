const authenticationController = require("../controllers/authenticationController");
const homeController = require("../controllers/homeController");
const trimBody = require("../middlewares/trimBody");

module.exports = (app) => {
  app.use(trimBody)
  app.use(homeController);
  app.use("/auth", authenticationController)
};
