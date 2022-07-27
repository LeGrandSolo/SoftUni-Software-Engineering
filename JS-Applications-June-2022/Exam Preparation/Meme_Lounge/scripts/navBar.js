import { html, styleMap } from "./lib.js";
import { logout } from "./users.js";
import { getUserData } from "./util.js";
export const navTemplate = () => {
  const userData = getUserData();
  return html` <nav>
    <a href="/allMemes">All Memes</a>
    <!-- Logged users -->
    <div
      class="user"
      style=${styleMap(userData ? { display: "block" } : { display: "none" })}
    >
      <a href="/create-meme">Create Meme</a>
      <div class="profile">
        <span>Welcome, ${userData ? userData.email : "email"}</span>
        <a href="/my-profile">My Profile</a>
        <a href="javascript:void(0)" @click=${logout}>Logout</a>
      </div>
    </div>
    <!-- Guest users -->
    <div
      class="guest"
      style=${styleMap(userData ? { display: "none" } : { display: "block" })}
    >
      <div class="profile">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
      <a class="active" href="/">Home Page</a>
    </div>
  </nav>`;
};
