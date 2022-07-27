import { deleteReq, get, getFormData, post } from "./api.js";
import { html, page } from "./lib.js";
import { navTemplate } from "./navBar.js";
import { clearUserData, setUserData } from "./util.js";

const loginTemplate = (onSubmit) => html`
  <form id="login-form" @submit=${onSubmit}>
    <div class="container">
      <h1>Login</h1>
      <label for="email">Email</label>
      <input id="email" placeholder="Enter Email" name="email" type="text" />
      <label for="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="Enter Password"
        name="password"
      />
      <input type="submit" class="registerbtn button" value="Login" />
      <div class="container signin">
        <p>Dont have an account?<a href="/register">Sign up</a>.</p>
      </div>
    </div>
  </form>
`;
const registerTemplate = (onSubmit) => html` <form
  id="register-form"
  @submit=${onSubmit}
>
  <div class="container">
    <h1>Register</h1>
    <label for="username">Username</label>
    <input
      id="username"
      type="text"
      placeholder="Enter Username"
      name="username"
    />
    <label for="email">Email</label>
    <input id="email" type="text" placeholder="Enter Email" name="email" />
    <label for="password">Password</label>
    <input
      id="password"
      type="password"
      placeholder="Enter Password"
      name="password"
    />
    <label for="repeatPass">Repeat Password</label>
    <input
      id="repeatPass"
      type="password"
      placeholder="Repeat Password"
      name="repeatPass"
    />
    <div class="gender">
      <input type="radio" name="gender" id="female" value="female" />
      <label for="female">Female</label>
      <input type="radio" name="gender" id="male" value="male" checked />
      <label for="male">Male</label>
    </div>
    <input type="submit" class="registerbtn button" value="Register" />
    <div class="container signin">
      <p>Already have an account?<a href="/login">Sign in</a>.</p>
    </div>
  </div>
</form>`;
export function renderLogin(ctx) {
  ctx.render(loginTemplate(onSubmit));
  async function onSubmit(ev) {
    const url = "/users/login";
    const data = getFormData(ev);
    try {
      const result = await post(url, data);
      const userData = {
        email: result.email,
        username: result.username,
        accessToken: result.accessToken,
        _id: result._id,
      };
      setUserData(userData);
      page.redirect("/");
    } catch (err) {
      alert(err.message);
    }
  }
}
export function renderRegister(ctx) {
  ctx.render(registerTemplate(onSubmit));
  async function onSubmit(ev) {
    const url = "/users/register";
    const data = getFormData(ev);
    try {
      Object.values(data).map((v) => {
        if (v === "") {
          throw new Error("All fields are required!");
        }
      });
      if (data.password !== data.repeatPass) {
        throw new Error("Passwords must be the same!");
      }
      const result = await post(url, data);
      const userData = {
        email: result.email,
        username: result.username,
        accessToken: result.accessToken,
        _id: result._id,
      };
      setUserData(userData);
      page.redirect("/");
    } catch (err) {
      alert(err.message);
    }
  }
}
export async function logout() {
  const url = "/users/logout";
  await get(url)
  clearUserData();
  page.redirect("/");
}
