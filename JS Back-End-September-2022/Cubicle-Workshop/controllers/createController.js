const { create } = require("../services/itemServices");

const router = require("express").Router();
router.get("/", (req, res) => {
  res.render("create", { title: "Create Cube Page" });
});
router.post("/", async (req, res) => {
  create(req.body);
  res.redirect("/");
});

module.exports = router;
