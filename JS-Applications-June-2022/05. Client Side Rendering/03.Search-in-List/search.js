import { html, render as litRender } from "./node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js";
function search() {
  const templete = (town, search) =>
    html`
      <li class=${search && town.includes(search) ? "active" : null}>
        ${town}
      </li>
    `;
  const ul = document.createElement("ul");
  render(towns);
  document.getElementById("towns").appendChild(ul);
  document.querySelector("button").addEventListener("click", search);

  function search() {
    const text = document.getElementById("searchText").value;
    render(towns, text);
    countMatches(text);
  }
  function countMatches(text) {
    let matches = towns.filter((t) =>
      t.includes(text)
    ).length;
    document.getElementById("result").textContent = `${matches} matches found`;
  }
  function render(towns, search = "") {
    litRender(
      towns.map((t) => templete(t, search)),
      ul
    );
  }
}
search();
