import { get } from "./api.js";
import { html, styleMap, page } from "./lib.js";
import { getUserData } from "./util.js";

const welcomeGuest = () => html`<section id="welcome">
  <div id="welcome-container">
    <h1>Welcome To Meme Lounge</h1>
    <img src="/images/welcome-meme.jpg" alt="meme" />
    <h2>Login to see our memes right away!</h2>
    <div id="button-div">
      <a href="/login" class="button">Login</a>
      <a href="/register" class="button">Register</a>
    </div>
  </div>
</section> `;
const allMemesTemplate = (memes) => html`<section id="meme-feed">
  <h1>All Memes</h1>
  <div id="memes">
    <!-- Display : All memes in database ( If any ) -->
    ${memes.map(memeCard)}
    <!-- Display : If there are no memes in database -->
    <p
      class="no-memes"
      style=${styleMap(
        memes.length === 0 ? { display: "block" } : { display: "none" }
      )}
    >
      No memes in database.
    </p>
  </div>
</section> `;
const memeCard = (meme) => html`
  <div class="meme">
    <div class="card">
      <div class="info">
        <p class="meme-title">${meme.title}</p>
        <img class="meme-image" alt="meme-img" src=${meme.imageUrl} />
      </div>
      <div id="data-buttons">
        <a class="button" href="/allMemes/${meme._id}">Details</a>
      </div>
    </div>
  </div>
`;
export async function renderHome(ctx) {
  const userData = getUserData();
  if (!userData) {
    ctx.render(welcomeGuest(ctx));
  } else {
    page.redirect("allMemes");
  }
}
export async function allMemes(ctx) {
  const url = "/data/memes?sortBy=_createdOn%20desc";
  const memes = await get(url);
  ctx.render(allMemesTemplate(memes));
}
