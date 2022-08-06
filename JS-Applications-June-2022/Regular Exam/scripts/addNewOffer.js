import { html } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";
import { getFormData, post } from "./api/api.js";

const createOfferTemplate = (onSubmit) => html`<section id="create">
  <div class="form">
    <h2>Create Offer</h2>
    <form class="create-form" @submit=${onSubmit}>
      <input type="text" name="title" id="job-title" placeholder="Title" />
      <input
        type="text"
        name="imageUrl"
        id="job-logo"
        placeholder="Company logo url"
      />
      <input
        type="text"
        name="category"
        id="job-category"
        placeholder="Category"
      />
      <textarea
        id="job-description"
        name="description"
        placeholder="Description"
        rows="4"
        cols="50"
      ></textarea>
      <textarea
        id="job-requirements"
        name="requirements"
        placeholder="Requirements"
        rows="4"
        cols="50"
      ></textarea>
      <input type="text" name="salary" id="job-salary" placeholder="Salary" />

      <button type="submit">post</button>
    </form>
  </div>
</section>`;
export function showCreateOffer(ctx) {
  ctx.render(createOfferTemplate(onSubmit));
  async function onSubmit(ev) {
    try {
      const url = "/data/offers";
      const formData = getFormData(ev);
      Object.values(formData).map((v) => {
        if (v === "") {
          throw new Error("All fields required!");
        }
      });
      await post(url, formData);
      page.redirect("/dashboard");
    } catch (err) {
      alert(err);
    }
  }
}
