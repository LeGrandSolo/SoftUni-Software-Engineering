import { getFormDataForAuth, request } from "./api.js";
import { redirectToHome } from "./dashboard.js";
import { loginFormTemplate } from "./templates.js";
export function showLogin(ctx) {
  ctx.render(loginFormTemplate(ctx));
}
const loginUrl = "/users/login";
let formData;
export async function login(ev) {
  try {
    formData = getFormDataForAuth(ev);
  } catch (e) {
    alert(e.message);
  }
  try {
    const loginData = await request("POST", loginUrl, formData);
    sessionStorage.setItem("accessToken", loginData.accessToken);
    sessionStorage.setItem("userId", loginData._id);
    console.log(sessionStorage.getItem("accessToken"));
    redirectToHome();
  } catch (e) {
    alert(e.message);
  }
}
