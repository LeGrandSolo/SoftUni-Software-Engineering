import { render as litRender } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";
import { createOrEdit, showCreate } from "./createFurniture.js";
import {
  showDashboard,
  showMyFurniture,
  showDetails,
  deleteFurniture,
  showEdit,
  edit,
} from "./dashboard.js";
import { login, showLogin } from "./login.js";
import { logout } from "./logout.js";
import { register, showRegister } from "./register.js";
const body = document.querySelector("body");
page(decorateCtx);
page("/index.html", "/");
page("/", showDashboard);
page("/login", showLogin);
page("/register", showRegister);
page("/create", showCreate);
page("/my-furniture", showMyFurniture);
page.start();
function render(template) {
  litRender(template, body);
}
function decorateCtx(ctx, next) {
  ctx.render = render;
  ctx.logout = logout;
  ctx.login = login;
  ctx.register = register;
  ctx.createOrEdit = createOrEdit;
  ctx.showDetails = showDetails;
  ctx.delete = deleteFurniture;
  ctx.showEdit = showEdit;
  ctx.edit = edit;
  next();
}
