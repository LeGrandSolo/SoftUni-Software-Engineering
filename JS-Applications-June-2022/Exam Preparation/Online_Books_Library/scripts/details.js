import { html } from "../node_modules/lit-html/lit-html.js";
import { styleMap } from "../node_modules/lit-html/directives/style-map.js";
import { getUserData } from "./api/util.js";
import { deleteReq, get, getFormData, post, put } from "./api/api.js";
import page from "../node_modules/page/page.mjs";
const detailsTemp = (
  book,
  showEdit,
  onDelete,
  onLike,
  likes,
  hasLiked
) => html`<section id="details-page" class="details">
  <div class="book-information">
    <h3>${book.title}</h3>
    <p class="type">Type: ${book.type}</p>
    <p class="img"><img src="${book.imageUrl}" /></p>
    <div class="actions">
      <!-- Edit/Delete buttons ( Only for creator of this book )  -->
      <a
        class="button"
        href="#"
        style=${styleMap(
          book._ownerId === getUserData()?._id
            ? { display: "inline-block" }
            : { display: "none" }
        )}
        @click=${showEdit}
        >Edit</a
      >
      <a
        class="button"
        href="#"
        style=${styleMap(
          book._ownerId === getUserData()?._id
            ? { display: "inline-block" }
            : { display: "none" }
        )}
        @click=${onDelete}
        >Delete</a
      >

      <!-- Bonus -->
      <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
      <a
        class="button"
        href="#"
        style=${styleMap(
          getUserData() !== null &&
            book._ownerId !== getUserData()._id &&
            !hasLiked
            ? { display: "inline-block" }
            : { display: "none" }
        )}
        @click=${onLike}
        >Like</a
      >

      <!-- ( for Guests and Users )  -->
      <div class="likes">
        <img class="hearts" src="/images/heart.png" />
        <span id="total-likes">Likes: ${likes}</span>
      </div>
      <!-- Bonus -->
    </div>
  </div>
  <div class="book-description">
    <h3>Description:</h3>
    <p>${book.description}</p>
  </div>
</section>`;
const editTemplate = (book, onSubmit) => html`<section
  id="edit-page"
  class="edit"
>
  <form id="edit-form" @submit=${onSubmit}>
    <fieldset>
      <legend>Edit my Book</legend>
      <p class="field">
        <label for="title">Title</label>
        <span class="input">
          <input type="text" name="title" id="title" value=${book.title} />
        </span>
      </p>
      <p class="field">
        <label for="description">Description</label>
        <span class="input">
          <textarea name="description" id="description">
${book.description}</textarea
          >
        </span>
      </p>
      <p class="field">
        <label for="image">Image</label>
        <span class="input">
          <input
            type="text"
            name="imageUrl"
            id="image"
            value=${book.imageUrl}
          />
        </span>
      </p>
      <p class="field">
        <label for="type">Type</label>
        <span class="input">
          <select id="type" name="type" value=${book.type}>
            <option value="Fiction" selected>Fiction</option>
            <option value="Romance">Romance</option>
            <option value="Mistery">Mistery</option>
            <option value="Classic">Clasic</option>
            <option value="Other">Other</option>
          </select>
        </span>
      </p>
      <input class="button submit" type="submit" value="Save" />
    </fieldset>
  </form>
</section>`;
export async function showDetails(ctx) {
  const bookId = ctx.params.id;
  const url = `/data/books/${bookId}`;
  let hasLiked;
  if (getUserData() !== null) {
    hasLiked = await get(
      `/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${
        getUserData()._id
      }%22&count`
    );
  }
  try {
    const book = await get(url);
    const urlLike = `/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`;
    const likes = await get(urlLike);
    ctx.render(detailsTemp(book, showEdit, onDelete, onLike, likes, hasLiked));
    function showEdit(e) {
      e.preventDefault();
      ctx.render(editTemplate(book, onSubmit));
      async function onSubmit(ev) {
        try {
          const data = getFormData(ev);
          Object.values(data).map((v) => {
            if (v === "") {
              throw new Error("All fields required!");
            }
          });
          await put(url, data);
          page.redirect("/");
        } catch (err) {
          alert(err.message);
        }
      }
    }
    async function onDelete(ev) {
      ev.preventDefault();
      await deleteReq(url);
      page.redirect("/");
    }
    async function onLike(ev) {
      ev.preventDefault();
      const urlLikePost = "/data/likes";
      const likeReqBody = { bookId: bookId };
      await post(urlLikePost, likeReqBody);
      page.redirect(`/details/${bookId}`);
    }
  } catch (err) {
    alert(err.message);
  }
}
