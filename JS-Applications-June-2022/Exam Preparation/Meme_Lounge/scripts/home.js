import { get } from "./api.js";
import { html } from "./lib.js";
import { navTemplate } from "./navBar.js";
import { getUserData } from "./util.js";

const welcomeGuest = (ctx) => html`
  <div id="welcome-container">
    <h1>Welcome To Meme Lounge</h1>
    <img src="/images/welcome-meme.jpg" alt="meme" />
    <h2>Login to see our memes right away!</h2>
    <div id="button-div">
      <a href="/login" class="button">Login</a>
      <a href="/register" class="button">Register</a>
    </div>
  </div>
`;
const allMemesTemplate = (memes) => html`
  <h1>All Memes</h1>
  <div id="memes">
    <!-- Display : All memes in database ( If any ) -->
    ${memes.map(memeCard)}
    <!-- Display : If there are no memes in database -->
    <p class="no-memes">No memes in database.</p>
  </div>
`;
const memeCard = (meme) => html`
  <div class="meme">
    <div class="card">
      <div class="info">
        <p class="meme-title">${meme.title}</p>
        <img class="meme-image" alt="meme-img" src=${meme.imageUrl} />
      </div>
      <div id="data-buttons">
        <a class="button" href="#">Details</a>
      </div>
    </div>
  </div>
`;
export async function renderHome(ctx) {
  const userData = getUserData();
  if (!userData) {
    ctx.render(welcomeGuest(ctx));
  } else {
    const url = "/data/memes?sortBy=_createdOn%20desc";
    const memes = await get(url);
    ctx.render(allMemesTemplate(memes));
  }
}
