import { get } from "./api/api.js";
import { html } from "../node_modules/lit-html/lit-html.js";
import { styleMap } from "../node_modules/lit-html/directives/style-map.js";
import { getUserData } from "./api/util.js";
import { bookCard } from "./dashboard.js";

const myBooksTemp = (books) => html`<section
  id="my-books-page"
  class="my-books"
>
  <h1>My Books</h1>
  <!-- Display ul: with list-items for every user's books (if any) -->
  <ul
    class="my-books-list"
    style=${styleMap(
      books.length > 0 ? { display: "float" } : { display: "none" }
    )}
  >
    ${books.map(bookCard)}
  </ul>

  <!-- Display paragraph: If the user doesn't have his own books  -->
  <p
    class="no-books"
    style=${styleMap(
      books.length > 0 ? { display: "none" } : { display: "block" }
    )}
  >
    No books in database!
  </p>
</section>`;
export async function showMyBooks(ctx) {
  const url = `/data/books?where=_ownerId%3D%22${
    getUserData()._id
  }%22&sortBy=_createdOn%20desc`;
  const books = await get(url);
  ctx.render(myBooksTemp(books));
}
