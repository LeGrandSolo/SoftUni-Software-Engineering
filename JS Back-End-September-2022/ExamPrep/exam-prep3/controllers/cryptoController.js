const Crypto = require("../models/Crypto");
const User = require("../models/User");
const {
  deleteCrypto,
  fetchCryptos,
  createCrypto,
  editCrypto,
} = require("../services/itemServices");
const errorCookie = require("../utils/errorCookie");
const parseError = require("../utils/errorParser");

const cryptoController = require("express").Router();

cryptoController.get("/create", (req, res) => {
  if (!req.locals.username) {
    res.redirect("/");
  } else {
    res.render("create", { title: "Create" });
  }
});
cryptoController.post("/create", async (req, res) => {
  try {
    if (!req.locals.username) {
      throw new Error("You are not logged in!");
    }
    await createCrypto(
      req.body.name,
      req.body.imageUrl,
      req.body.price,
      req.body.description,
      req.body.paymentMethod,
      req.locals.username
    );
    res.redirect("/catalog");
  } catch (error) {
    error = parseError(error);
    console.log(error);
    res.render("create", { error, title: "Create" });
  }
});

cryptoController.get("/:id/details", async (req, res) => {
  try {
    const crypto = await Crypto.findById(req.params.id)
      .populate("owner")
      .populate("usersBuyed")
      .lean();
    crypto.logged = true;
    if (!req.locals.isLogged) {
      crypto.logged = false;
    } else {
      const user = await User.findOne({ username: req.locals.username });
      crypto.isOwner = false;
      crypto.hasBuyed = false;
      console.log(user._id, crypto.owner._id);
      if (String(crypto.owner._id) == String(user._id)) {
        crypto.isOwner = true;
      }
      for (const user of crypto.usersBuyed) {
        if (user.username == req.locals.username) {
          crypto.hasBuyed = true;
        }
      }
    }

    res.render("details", { crypto });
  } catch (error) {
    error = parseError(error);
    console.log(error);
    res.redirect("/");
  }
});

cryptoController.get("/:id/edit", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.locals.username });
    const crypto = await await Crypto.findById(req.params.id)
      .populate("owner")
      .lean();
    console.log(crypto.owner._id, user._id);
    if (String(crypto.owner._id) != String(user._id)) {
      throw new Error("You are not the owner!");
    }
    res.render("edit", { crypto });
  } catch (error) {
    error = parseError(error);
    console.log(error);
    res.redirect("/");
  }
});
cryptoController.post("/:id/edit", async (req, res) => {
  try {
    await editCrypto(
      req,
      req.body.name,
      req.body.imageUrl,
      req.body.price,
      req.body.description,
      req.body.paymentMethod
    );
    res.redirect(`/crypto/${req.params.id}/details`);
  } catch (error) {
    error = parseError(error);
    errorCookie(error, res);
    console.log(error);
    res.redirect(`/crypto/${req.params.id}/edit`);
  }
});
cryptoController.get("/:id/delete", async (req, res) => {
  try {
    await deleteCrypto(req.params.id, req);
    res.redirect("/catalog");
  } catch (error) {
    error = parseError(error);
    console.log(error);
    res.redirect("/");
  }
});
cryptoController.get("/:id/buy", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.locals.username });
    const crypto = await Crypto.findById(req.params.id).populate("usersBuyed");
    for (const userB of crypto.usersBuyed) {
      if (String(userB._id) == String(user._id)) {
        throw new Error("Already booked!")
      }
    }
    crypto.usersBuyed.push(user._id)
    await crypto.save()
    res.redirect("/catalog");
  } catch (error) {
    error = parseError(error);
    console.log(error);
    res.redirect("/catalog");
  }
});
module.exports = cryptoController;
