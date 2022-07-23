import { html, render } from "./node_modules/lit-html/lit-html.js";
async function addItem() {
  const selectMenu = document.querySelector("#menu");
  const template = (value) =>
    html` <option id=${value._id}>${value.text}</option> `;
  document.querySelector("form").addEventListener("submit", postData);
  await getData();
  async function getData() {
    const res = await fetch(
      "http://localhost:3030/jsonstore/advanced/dropdown"
    );
    const data = await res.json();
    render(Object.values(data).map(template), selectMenu);
  }
  async function postData(e) {
    e.preventDefault();
    const itemText = document.getElementById("itemText");
    try {
      const res = await fetch(
        "http://localhost:3030/jsonstore/advanced/dropdown",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: itemText.value }),
        }
      );
      itemText.value = "";
      getData();
    } catch (error) {
      console.log(error);
    }
  }
}
addItem();
