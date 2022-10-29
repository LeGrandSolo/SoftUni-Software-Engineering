const { fetchCryptos } = require("../services/itemServices");

const catalogController = require("express").Router();

catalogController.get("/", async (req, res) => {
  const cryptos = await fetchCryptos();
  res.render("catalog", { cryptos });
});
module.exports = catalogController