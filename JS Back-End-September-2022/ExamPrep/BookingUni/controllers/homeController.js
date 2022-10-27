const { fetchHotels } = require("../services/hotelServices");

const homeController = require("express").Router();

homeController.get("/", async (req, res) => {
    const hotels = await fetchHotels()
  res.render("home",{hotels});
});

module.exports = homeController;
