import { render as litRender } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";
import { logout, showLogin, showRegister } from "./users.js";
import { getUserData } from "./api/util.js";
import { showHome } from "./home.js";
import { showDashboard } from "./dashboard.js";
import { showCreateOffer } from "./addNewOffer.js";
import { showDetails } from "./details.js";
const main = document.querySelector("main");

const userNavView = document.querySelector(".user");
const guestNavView = document.querySelector(".guest");
checkIfLoggedIn();
document.getElementById("logout").addEventListener("click", logout);
page(decorateCtx);
page("index.html", "/");
page("/", showHome);
page("/login", showLogin);
page("/register", showRegister);
page("/dashboard", showDashboard);
page("/create-offer", showCreateOffer);
page('/details/:id', showDetails)
page("/details/:id/edit", () => null);
page.start();

function render(template) {
  litRender(template, main);
}

function decorateCtx(ctx, next) {
  checkIfLoggedIn();
  ctx.render = render;
  next();
}
function checkIfLoggedIn() {
  if (!getUserData()) {
    userNavView.style.display = "none";
    guestNavView.style.display = "block";
  } else {
    userNavView.style.display = "block";
    guestNavView.style.display = "none";
  }
}
