import { get, getFormData, post } from "./api.js";
import { displayError } from "./app.js";
import { html, page, styleMap } from "./lib.js";
import { clearUserData, getUserData, setUserData } from "./util.js";

const loginTemplate = (onSubmit) => html`<section id="login">
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
</section> `;
const registerTemplate = (onSubmit) => html`<section id="register">
  <form id="register-form" @submit=${onSubmit}>
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
  </form>
</section>`;
const myProfileTemplate = (user, userMemes) => html`<section
  id="user-profile-page"
  class="user-profile"
>
  <article class="user-info">
    <img id="user-avatar-url" alt="user-profile" src="/images/female.png" />
    <div class="user-content">
      <p>Username: ${user.username}</p>
      <p>Email: ${user.email}</p>
      <p>My memes count: ${userMemes.length}</p>
    </div>
  </article>
  <h1 id="user-listings-title">User Memes</h1>
  <div class="user-meme-listings">
    <!-- Display : All created memes by this user (If any) -->
    ${userMemes.map(userMemeCard)}
    <!-- Display : If user doesn't have own memes  -->
    <p
      class="no-memes"
      style=${styleMap(
        userMemes.length === 0 ? { display: "block" } : { display: "none" }
      )}
    >
      No memes in database.
    </p>
  </div>
</section>`;
const userMemeCard = (meme) => html` <div class="user-meme">
  <p class="user-meme-title">${meme.title}</p>
  <img class="userProfileImage" alt="meme-img" src=${meme.imageUrl} />
  <a class="button" href="/allMemes/${meme._id}">Details</a>
</div>`;
export function renderLogin(ctx) {
  ctx.render(loginTemplate(onSubmit));
  async function onSubmit(ev) {
    const url = "/users/login";
    const data = getFormData(ev);
    try {
      Object.entries(data).map((e) => {
        if (e[1] === "") {
          throw new Error("All fields are required!");
        }
      });
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
      displayError(err.message);
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
      displayError(err.message);
    }
  }
}
export async function showMyProfile(ctx) {
  const user = getUserData();
  const userMemes = await get(
    `/data/memes?where=_ownerId%3D%22${user._id}%22&sortBy=_createdOn%20desc`
  );
  ctx.render(myProfileTemplate(user, userMemes));
}
export async function logout() {
  const url = "/users/logout";
  await get(url);
  clearUserData();
  page.redirect("/");
}
