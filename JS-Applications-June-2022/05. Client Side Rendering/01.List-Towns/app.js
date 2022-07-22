import { render, html } from "./node_modules/lit-html/lit-html.js";
const template = (town) => html` <li>${town}</li> `;
const root = document.querySelector("#root");
const townsInp = document.getElementById("towns");
const ul = document.createElement("ul");
render(ul, root);
const form = document.querySelector(".content");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const towns = townsInp.value.split(", ");
  render(
    towns.map((town) => template(town)),
    ul
  );
  form.reset();
});
