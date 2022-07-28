import { litRender, page, html, styleMap } from "./lib.js";
import { renderLogin, renderRegister, showMyProfile } from "./users.js";
import { allMemes, renderHome } from "./home.js";
import { showDetails } from "./showDetails.js";
import { navTemplate } from "./navBar.js";
import { createMeme } from "./createMeme.js";

const main = document.querySelector("main");
const body = document.querySelector("body");
const currentView = (template) => html`
  <div id="container">
    <section id="notifications">
      <div id="errorBox" class="notification">
        <span id="errMess">MESSAGE</span>
      </div>
    </section>

    <!-- Navigation -->
    <nav>${navTemplate()}</nav>

    <!-- Main Content -->
    <main>${template}</main>

    <!-- Footer  -->
    <footer class="footer">
      <p>Created by SoftUni Delivery Team</p>
    </footer>
  </div>
`;
export async function displayError(errorMess) {
  document.querySelector(".notification").style.display = "inline-block";
  document.querySelector("#errMess").textContent = errorMess;
  await setTimeout(() => {
    document.querySelector(".notification").style.display = "none";
  }, 3000);
}
page(decorateCtx);
page("/index.html", "/");
page("/allMemes", allMemes);
page("/allMemes/:id", showDetails);
page("/", renderHome);
page("/login", renderLogin);
page("/my-profile", showMyProfile);
page("/register", renderRegister);
page("/create-meme", createMeme);
page.start();
function renderMain(template) {
  litRender(currentView(template), body);
}
function decorateCtx(ctx, next) {
  ctx.render = renderMain;
  next();
}
