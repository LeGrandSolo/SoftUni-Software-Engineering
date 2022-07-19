async function solve() {
  document.querySelector("#loadBooks").addEventListener("click", loadBooks);
  const tbody = document.querySelector("tbody");
  const form = document.querySelector("form");
  const titleInp = document.querySelector("[name=title]");
  const authorInp = document.querySelector("[name=author]");
  let isEditing = false;
  let id = "";
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (isEditing) {
      submit("PUT", id);
    } else {
      submit();
    }
  });
  async function loadBooks() {
    tbody.replaceChildren();
    const res = await fetch(
      "http://localhost:3030/jsonstore/collections/books"
    );
    const data = await res.json();
    Object.entries(data).forEach((element) => {
      const tr = document.createElement("tr");
      const title = document.createElement("td");
      title.textContent = element[1].title;
      const author = document.createElement("td");
      author.textContent = element[1].author;
      const td = document.createElement("td");
      console.log(data);
      const btnEdit = document.createElement("button");
      const btnDel = document.createElement("button");
      btnEdit.textContent = "Edit";
      btnDel.textContent = "Delete";
      btnEdit.addEventListener("click", () => {
        document.querySelector("h3").textContent = "Edit FORM";
        form.querySelector("button").textContent = "Save";
        titleInp.value = element[1].title;
        authorInp.value = element[1].author;
        isEditing = true;
        id = element[0];
      });
      btnDel.addEventListener("click", async () => {
        await fetch(
          `http://localhost:3030/jsonstore/collections/books/${element[0]}`,
          {
            method: "DELETE",
          }
        );
        loadBooks();
      });
      td.append(btnEdit, btnDel);
      tr.append(title, author, td);
      tbody.appendChild(tr);
    });
  }
  async function submit(method, id) {
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
      document.querySelector("h3").textContent = "FORM";
      form.querySelector("button").textContent = "Submit";
      isEditing = false;
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
    titleInp.value = "";
    authorInp.value = "";
    loadBooks();
  }
}
solve();
