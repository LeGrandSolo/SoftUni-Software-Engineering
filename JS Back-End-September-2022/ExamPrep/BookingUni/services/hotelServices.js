const Hotel = require("../models/hotel");
const User = require("../models/User");
const { verifyToken, signToken } = require("../utils/jwt");

async function createHotel(name, city, freeRooms, imageUrl, owner) {
  const hotel = new Hotel({
    name,
    city,
    freeRooms,
    imageUrl,
    owner,
  });
  await hotel.save();
}
async function editHotel(id, name, city, freeRooms, imageUrl) {
  await Hotel.findByIdAndUpdate(id, {
    name,
    city,
    freeRooms,
    imageUrl,
  });
}

async function fetchHotels(id) {
  if (id) {
    return await Hotel.findById(id).lean();
  } else {
    return await Hotel.find({}).sort({ freeRooms: -1 }).lean();
  }
}

async function bookHotel(req) {
  const hotel = await fetchHotels(req.params.id);
  const bookedHotels = req.bookedHotels;
  const user = await User.findOne({ username: req.username });
  user.bookedHotels.push(hotel._id);
  await user.save();
  bookedHotels.push(hotel);
  payload = { username: req.username, bookedHotels };
  const token = signToken(payload);
  return token;
}

module.exports = { createHotel, fetchHotels, bookHotel, editHotel };
