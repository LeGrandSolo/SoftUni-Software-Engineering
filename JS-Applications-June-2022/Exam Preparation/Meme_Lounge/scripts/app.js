import { litRender, page, html } from "./lib.js";
import { renderLogin, renderRegister } from "./users.js";
import { renderHome } from "./home.js";
import { navTemplate } from "./navBar.js";

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
page("/", renderHome);
page("/login", renderLogin);
page("/register", renderRegister);
page.start();
function renderMain(template) {
  litRender(currentView(template), body);
}
function decorateCtx(ctx, next) {
  ctx.render = renderMain;
  next();
}
