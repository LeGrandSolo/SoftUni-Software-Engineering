import { render as litRender } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";
import { logout, showLogin, showRegister } from "./users.js";
import { getUserData } from "./api/util.js";
import { showDashboard } from "./dashboard.js";
import { showAddBook } from "./addBook.js";
import { showDetails } from "./details.js";
import { showMyBooks } from "./myBooks.js";
const main = document.querySelector("main");

const userNavView = document.getElementById("user");
const guestNavView = document.getElementById("guest");
checkIfLoggedIn();
document.getElementById("logout").addEventListener("click", logout);
page(decorateCtx);
page("index.html", "/");
page("/dashboard", "/");
page("/", showDashboard);
page("/details/:id/edit", () => null);
page("/details/:id", showDetails);
page("/my-books", showMyBooks);
page("/add-book", showAddBook);
page("/login", showLogin);
page("/register", showRegister);
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
    userNavView.querySelector("span").textContent =
      "Welcome, " + getUserData().email;
    guestNavView.style.display = "none";
  }
}
