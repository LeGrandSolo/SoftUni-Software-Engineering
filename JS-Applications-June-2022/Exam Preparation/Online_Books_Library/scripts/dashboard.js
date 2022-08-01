import { html } from "../node_modules/lit-html/lit-html.js";
import { styleMap } from "../node_modules/lit-html/directives/style-map.js";
import { get } from "./api/api.js";
const dashboardTemplate = (books) => html`<section
  id="dashboard-page"
  class="dashboard"
>
  <h1>Dashboard</h1>
  <!-- Display ul: with list-items for All books (If any) -->
  <ul
    class="other-books-list"
    style=${styleMap(
      books.length > 0 ? { display: "flex" } : { display: "none" }
    )}
  >
    ${books.map(bookCard)}
  </ul>
  <!-- Display paragraph: If there are no books in the database -->
  <p
    class="no-books"
    style=${styleMap(
      books.length > 0 ? { display: "none" } : { display: "block" }
    )}
  >
    No books in database!
  </p>
</section> `;
export const bookCard = (book) => html`<li class="otherBooks">
  <h3>${book.title}</h3>
  <p>Type: ${book.type}</p>
  <p class="img"><img src="${book.imageUrl}" /></p>
  <a class="button" href="/details/${book._id}">Details</a>
</li>`;
export async function showDashboard(ctx) {
  const url = "/data/books?sortBy=_createdOn%20desc";
  let books = [];
  try {
    books = await get(url);
  } catch (err) {
    alert(err);
  }
  ctx.render(dashboardTemplate(books));
}
