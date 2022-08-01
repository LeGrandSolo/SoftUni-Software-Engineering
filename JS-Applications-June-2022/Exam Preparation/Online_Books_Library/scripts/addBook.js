import { getFormData, post } from "./api/api.js";
import page from "../node_modules/page/page.mjs";
import { html } from "../node_modules/lit-html/lit-html.js";
const addBookTemplate = (onSubmit) => html` <section
  id="create-page"
  class="create"
>
  <form id="create-form" @submit=${onSubmit}>
    <fieldset>
      <legend>Add new Book</legend>
      <p class="field">
        <label for="title">Title</label>
        <span class="input">
          <input type="text" name="title" id="title" placeholder="Title" />
        </span>
      </p>
      <p class="field">
        <label for="description">Description</label>
        <span class="input">
          <textarea
            name="description"
            id="description"
            placeholder="Description"
          ></textarea>
        </span>
      </p>
      <p class="field">
        <label for="image">Image</label>
        <span class="input">
          <input type="text" name="imageUrl" id="image" placeholder="Image" />
        </span>
      </p>
      <p class="field">
        <label for="type">Type</label>
        <span class="input">
          <select id="type" name="type">
            <option value="Fiction">Fiction</option>
            <option value="Romance">Romance</option>
            <option value="Mistery">Mistery</option>
            <option value="Classic">Clasic</option>
            <option value="Other">Other</option>
          </select>
        </span>
      </p>
      <input class="button submit" type="submit" value="Add Book" />
    </fieldset>
  </form>
</section>`;
export function showAddBook(ctx) {
  ctx.render(addBookTemplate(onSubmit));
  const url = "/data/books";
  async function onSubmit(ev) {
    try {
      const data = getFormData(ev);
      Object.values(data).map((v) => {
        if (v === "") {
          throw new Error("All fields required!");
        }
      });
      await post(url, data);
      page.redirect("/");
    } catch (err) {
      alert(err.message);
    }
  }
}
