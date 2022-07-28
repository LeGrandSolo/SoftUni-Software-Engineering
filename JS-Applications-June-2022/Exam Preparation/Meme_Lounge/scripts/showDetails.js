import { deleteReq, get, getFormData, put } from "./api.js";
import { displayError } from "./app.js";
import { html, styleMap, page } from "./lib.js";
import { getUserData } from "./util.js";
const detailsCard = (result, userData, showEdit, deleteMeme) => html`
  <section id="meme-details">
    <h1>Meme Title: ${result.title}</h1>
    <div class="meme-details">
      <div class="meme-img">
        <img alt="meme-alt" src="${result.imageUrl}" />
      </div>
      <div class="meme-description">
        <h2>Meme Description</h2>
        <p>${result.description}</p>

        <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
        <a
          class="button warning"
          href="/allMemes/${result._id}/edit"
          style=${styleMap(
            result._ownerId == userData._id
              ? { display: "inline-block" }
              : { display: "none" }
          )}
          @click=${showEdit}
          >Edit</a
        >
        <button
          class="button danger"
          style=${styleMap(
            result._ownerId == userData._id
              ? { display: "inline-block" }
              : { display: "none" }
          )}
          @click=${deleteMeme}
        >
          Delete
        </button>
      </div>
    </div>
  </section>
`;
const editTemplate = (meme, onSubmit) => html`
  <section id="edit-meme">
    <form id="edit-form" @submit=${onSubmit}>
      <h1>Edit Meme</h1>
      <div class="container">
        <label for="title">Title</label>
        <input
          id="title"
          type="text"
          placeholder="Enter Title"
          name="title"
          .value=${meme.title}
        />
        <label for="description">Description</label>
        <textarea
          id="description"
          placeholder="Enter Description"
          name="description"
        >
${meme.description}</textarea
        >
        <label for="imageUrl">Image Url</label>
        <input
          id="imageUrl"
          type="text"
          placeholder="Enter Meme ImageUrl"
          name="imageUrl"
          .value=${meme.imageUrl}
        />
        <input type="submit" class="registerbtn button" value="Edit Meme" />
      </div>
    </form>
  </section>
`;
export async function showDetails(ctx) {
  let userData = getUserData();
  const url = `/data/memes/${ctx.params.id}`;
  let result;
  try {
    result = await get(url);
    if (userData === null) {
      userData = { _id: "" };
    }
    ctx.render(detailsCard(result, userData, showEdit, deleteMeme));
  } catch (err) {
    displayError(error.message);
  }
  async function deleteMeme() {
    await deleteReq(url);
    page.redirect("/");
  }
  function showEdit(e) {
    e.preventDefault();
    ctx.render(editTemplate(result, onSubmit));
    async function onSubmit(ev) {
      try {
        const data = getFormData(ev);
        Object.entries(data).map((e) => {
          if (e[1] === "") {
            throw new Error("All fields are required!");
          }
        });
        await put(url, data);
        page.redirect("/");
      } catch (error) {
        displayError(error.message);
      }
    }
  }
}
