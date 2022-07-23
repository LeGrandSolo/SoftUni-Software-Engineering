import { html, render } from "./node_modules/lit-html/lit-html.js";
import { styleMap } from "./node_modules/lit-html/directives/style-map.js";
async function solve() {
  const wholeTemplate = (books, isEditing, bookId = "") => html` <button
      id="loadBooks"
      @click=${loadBooks}
    >
      LOAD ALL BOOKS
    </button>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        ${books}
      </tbody>
    </table>
    <form
      @submit=${(e) => {
        e.preventDefault();
        addBook();
      }}
      id="add-form"
      style=${styleMap(isEditing ? { display: "none" } : { display: "block" })}
    >
      <h3>Add book</h3>
      <label>TITLE</label>
      <input type="text" name="title" placeholder="Title..." />
      <label>AUTHOR</label>
      <input type="text" name="author" placeholder="Author..." />
      <input type="submit" value="Submit" />
    </form>

    <form
      @submit=${(e) => {
        e.preventDefault();
        editBook(bookId);
      }}
      id="edit-form"
      style=${styleMap(isEditing ? { display: "block" } : { display: "none" })}
    >
      <input type="hidden" name="id" />
      <h3>Edit book</h3>
      <label>TITLE</label>
      <input type="text" name="title" placeholder="Title..." />
      <label>AUTHOR</label>
      <input type="text" name="author" placeholder="Author..." />
      <input type="submit" value="Save" />
    </form>`;
  const bookTemplete = (book) => html`
    <tr id=${book._id}>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>
        <button class="edit" @click=${showEditForm}>Edit</button>
        <button class="delete" @click=${() => deleteBook(book._id)}>
          Delete
        </button>
      </td>
    </tr>
  `;
  render(wholeTemplate(""), document.querySelector("body"));
  let books;
  async function loadBooks() {
    const res = await fetch(
      "http://localhost:3030/jsonstore/collections/books"
    );
    const data = await res.json();
    Object.entries(data).map((ent) => (ent[1]._id = ent[0]));
    books = Object.values(data).map((book) => bookTemplete(book));
    render(wholeTemplate(html`${books}`), document.querySelector("body"));
  }
  async function editBook(bookId) {
    const form = document.querySelector("#edit-form");
    await submit("PUT", form, bookId);
    loadBooks();
  }
  async function deleteBook(id) {
    const res = await fetch(
      `http://localhost:3030/jsonstore/collections/books/${id}`,
      {
        method: "DELETE",
      }
    );
    loadBooks();
  }
  function showEditForm(e) {
    render(
      wholeTemplate(html`${books}`, true, e.target.parentNode.parentNode.id),
      document.querySelector("body")
    );
  }
  async function addBook() {
    const form = document.querySelector("#add-form");
    await submit("POST", form);
    loadBooks();
  }
  async function submit(method, form, id) {
    const formData = new FormData(form);
    const data = {
      title: formData.get("title"),
      author: formData.get("author"),
    };
    if (method === "PUT") {
      const res = await fetch(
        `http://localhost:3030/jsonstore/collections/books/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
    } else {
      const res = await fetch(
        "http://localhost:3030/jsonstore/collections/books",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
    }
  }
}
solve();
