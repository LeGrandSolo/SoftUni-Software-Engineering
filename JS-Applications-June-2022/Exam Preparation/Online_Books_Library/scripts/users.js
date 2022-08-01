import { html } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";
import { get, getFormData, post } from "./api/api.js";
import { clearUserData, setUserData } from "./api/util.js";

const loginTemplate = (onSubmit) => html`
  <section id="login-page" class="login">
    <form id="login-form" @submit=${onSubmit}>
      <fieldset>
        <legend>Login Form</legend>
        <p class="field">
          <label for="email">Email</label>
          <span class="input">
            <input type="text" name="email" id="email" placeholder="Email" />
          </span>
        </p>
        <p class="field">
          <label for="password">Password</label>
          <span class="input">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </span>
        </p>
        <input class="button submit" type="submit" value="Login" />
      </fieldset>
    </form>
  </section>
`;
const registerTemplate = (onSubmit) => html`<section
  id="register-page"
  class="register"
>
  <form id="register-form" @submit=${onSubmit}>
    <fieldset>
      <legend>Register Form</legend>
      <p class="field">
        <label for="email">Email</label>
        <span class="input">
          <input type="text" name="email" id="email" placeholder="Email" />
        </span>
      </p>
      <p class="field">
        <label for="password">Password</label>
        <span class="input">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </span>
      </p>
      <p class="field">
        <label for="repeat-pass">Repeat Password</label>
        <span class="input">
          <input
            type="password"
            name="confirm-pass"
            id="repeat-pass"
            placeholder="Repeat Password"
          />
        </span>
      </p>
      <input class="button submit" type="submit" value="Register" />
    </fieldset>
  </form>
</section>`;

export function showLogin(ctx) {
  ctx.render(loginTemplate(onSubmit));
  async function onSubmit(ev) {
    const url = "/users/login";
    try {
      const data = getFormData(ev);
      const result = await post(url, data);
      setUserData(result);
      page.redirect("/");
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
      const data = getFormData(ev);
      Object.values(data).map((v) => {
        if (v === "") {
          throw new Error("All fields required!");
        }
      });
      if (data["confirm-pass"] !== data.password) {
        throw new Error("Passwords must match!");
      }
      const result = await post(url, data);
      const usrData = {
        _id: result["_id"],
        accessToken: result.accessToken,
        email: result.email,
      };
      setUserData(usrData);
      page.redirect("/");
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
