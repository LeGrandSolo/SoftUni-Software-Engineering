import { litRender, page, html } from "./lib.js";
import { renderLogin, renderRegister } from "./users.js";
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
        <span>MESSAGE</span>
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

page(decorateCtx);
page("/index.html", "/");
page("/allMemes", allMemes)
page("/allMemes/:id", showDetails)
page("/", renderHome);
page("/login", renderLogin);
page("/register", renderRegister);
page("/create-meme", createMeme)
page.start();
function renderMain(template) {
  litRender(currentView(template), body);
}
function decorateCtx(ctx, next) {
  ctx.render = renderMain;
  next();
}
