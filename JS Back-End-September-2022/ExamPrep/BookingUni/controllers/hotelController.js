const Hotel = require("../models/hotel");
const {
  createHotel,
  fetchHotels,
  bookHotel,
  editHotel,
} = require("../services/hotelServices");
const parseError = require("../utils/errorParser");
const { signToken } = require("../utils/jwt");

const hotelController = require("express").Router();

hotelController.get("/:id/details", async (req, res) => {
  if (!req.isLogged) {
    res.redirect("/auth/login");
  } else {
    try {
      const hotel = await fetchHotels(req.params.id);
      let isOwner = false;
      if (req.username === hotel.owner) {
        isOwner = true;
      }
      let hasBooked = false;
      for (const bookedHotel of req.bookedHotels) {
        if (bookedHotel._id == hotel._id) {
          hasBooked = true;
        }
      }
      res.render("details", { hotel, isOwner, hasBooked });
    } catch (error) {
      res.redirect("/");
    }
  }
});

hotelController.get("/:id/book", async (req, res) => {
  try {
    const hotel = await fetchHotels(req.params.id);
    for (const bookedHotel of req.bookedHotels) {
      if (bookedHotel._id == hotel._id) {
        throw new Error("Already booked!")
      }
    }
    res.cookie("token", await bookHotel(req));
    res.redirect("/");
  } catch (error) {
    res.redirect("/");
  }
});
hotelController.get("/:id/edit", async (req, res) => {
  try {
    const hotel = await fetchHotels(req.params.id);
    if(hotel.owner != req.username){
      throw new Error("You are not the owner!")
    }
    res.render("edit", { hotel });
  } catch (error) {
    res.redirect("/");
  }
});
hotelController.post("/:id/edit", async (req, res) => {
  try {
    const hotel = await fetchHotels(req.params.id);
    if(hotel.owner != req.username){
      throw new Error("You are not the owner!")
    }
    await editHotel(
      req.params.id,
      req.body.hotel,
      req.body.city,
      req.body["free-rooms"],
      req.body.imgUrl
    );
    res.redirect("/");
  } catch (error) {
    res.redirect("/");
  }
});
hotelController.get("/:id/delete", async (req, res) => {
  try {
    const hotel = await fetchHotels(req.params.id);
    if(hotel.owner != req.username){
      throw new Error("You are not the owner!")
    }
    await Hotel.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (error) {
    res.redirect
  }
});

hotelController.get("/create", (req, res) => {
  if (!req.isLogged) {
    res.redirect("/auth/login");
  }else{
    res.render("create");
  }
});

hotelController.post("/create", async (req, res) => {
  try {
    if (!req.isLogged) {
      throw new Error("Not logged in")
    }
    await createHotel(
      req.body.hotel,
      req.body.city,
      req.body["free-rooms"],
      req.body.imgUrl,
      req.username
    );
    res.redirect("/");
  } catch (error) {
    error = parseError(error);
    const body = {
      hotel: req.body.hotel,
      city: req.body.city,
      freeRooms: req.body["free-rooms"],
      imgUrl: req.body.imgUrl,
    };
    res.render("create", { body, error });
  }
});

module.exports = hotelController;
