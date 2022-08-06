import { html } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";
import { get, getFormData, post } from "./api/api.js";
import { clearUserData, setUserData } from "./api/util.js";

const loginTemplate = (onSubmit) => html`<section id="login">
  <div class="form">
    <h2>Login</h2>
    <form class="login-form" @submit=${onSubmit}>
      <input type="text" name="email" id="email" placeholder="email" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
      />
      <button type="submit">login</button>
      <p class="message">Not registered? <a href="#">Create an account</a></p>
    </form>
  </div>
</section> `;
const registerTemplate = (onSubmit) => html`<section id="register">
  <div class="form">
    <h2>Register</h2>
    <form class="login-form" @submit=${onSubmit}>
      <input type="text" name="email" id="register-email" placeholder="email" />
      <input
        type="password"
        name="password"
        id="register-password"
        placeholder="password"
      />
      <input
        type="password"
        name="re-password"
        id="repeat-password"
        placeholder="repeat password"
      />
      <button type="submit">register</button>
      <p class="message">Already registered? <a href="#">Login</a></p>
    </form>
  </div>
</section>`;

export function showLogin(ctx) {
  ctx.render(loginTemplate(onSubmit));
  async function onSubmit(ev) {
    const url = "/users/login";
    try {
      const data = getFormData(ev);
      Object.values(data).map((v) => {
        if (v === "") {
          throw new Error("All fields required!");
        }
      });
      const result = await post(url, data);
      setUserData(result);
      page.redirect("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  }
}
export function showRegister(ctx) {
  ctx.render(registerTemplate(onSubmit));
  async function onSubmit(ev) {
    const url = "/users/register";
    try {
      const formData = getFormData(ev);
      Object.values(formData).map((v) => {
        if (v === "") {
          throw new Error("All fields required!");
        }
      });
      if (formData["re-password"] !== formData.password) {
        throw new Error("Passwords must match!");
      }
      const sentData = {
        email: formData.email,
        password: formData.password,
      };
      const result = await post(url, sentData);
      const usrData = {
        _id: result["_id"],
        accessToken: result.accessToken,
        email: sentData.email,
      };
      setUserData(usrData);
      page.redirect("/dashboard");
    } catch (err) {
      alert(err);
    }
  }
}
export async function logout() {
  await get("/users/logout");
  clearUserData();
  page.redirect("/");
}
