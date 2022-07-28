import { getFormData, post } from "./api.js";
import { displayError } from "./app.js";
import { html, page } from "./lib.js";
const createMemeTemplate = (onSubmit) => html`<section id="create-meme">
  <form id="create-form" @submit=${onSubmit}>
    <div class="container">
      <h1>Create Meme</h1>
      <label for="title">Title</label>
      <input id="title" type="text" placeholder="Enter Title" name="title" />
      <label for="description">Description</label>
      <textarea
        id="description"
        placeholder="Enter Description"
        name="description"
      ></textarea>
      <label for="imageUrl">Meme Image</label>
      <input
        id="imageUrl"
        type="text"
        placeholder="Enter meme ImageUrl"
        name="imageUrl"
      />
      <input type="submit" class="registerbtn button" value="Create Meme" />
    </div>
  </form>
</section> `;
export function createMeme(ctx) {
  const url = "/data/memes";
  ctx.render(createMemeTemplate(onSubmit));
  async function onSubmit(ev) {
    const data = getFormData(ev);
    try {
      Object.values(data).map((v) => {
        if (v === "") {
          throw new Error("All fields are required!");
        }
      });
      const result = await post(url, data);
      page.redirect("/");
    } catch (error) {
      displayError(error.message);
    }
  }
}
