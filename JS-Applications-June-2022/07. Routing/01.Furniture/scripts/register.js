import { getFormDataForAuth, request } from "./api.js";
import { redirectToHome } from "./dashboard.js";
import { registerTemplate } from "./templates.js";

const registerUrl = "/users/register";
export function showRegister(ctx) {
  ctx.render(registerTemplate(ctx));
}
export async function register(ev) {
  let formData;
  try {
    formData = getFormDataForAuth(ev, true);
  } catch (e) {
    alert(e.message);
  }
  try {
    const registerData = await request("POST", registerUrl, formData);
    sessionStorage.setItem("accessToken", registerData.accessToken);
    console.log(sessionStorage.getItem("accessToken"));
    redirectToHome();
  } catch (e) {
    alert(e.message);
  }
}
