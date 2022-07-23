import { html, render } from "./node_modules/lit-html/lit-html.js";
async function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);
  const template = (student) => html`
    <tr id=${student._id} class=${student.select ? "select" : null}>
      <td>${student.firstName} ${student.lastName}</td>
      <td>${student.email}</td>
      <td>${student.course}</td>
    </tr>
  `;
  const data = await getData();
  async function getData() {
    const res = await fetch("http://localhost:3030/jsonstore/advanced/table");
    const data = await res.json();
    renderNew(data);
    return data;
  }

  async function onClick() {
    const searchField = document.getElementById("searchField");
    const searchedTxt = searchField.value.toLowerCase();
    const filteredSudents = Object.values(data).filter((student) => {
      if (
        student.firstName.toLowerCase().includes(searchedTxt) ||
        student.lastName.toLowerCase().includes(searchedTxt) ||
        student.email.toLowerCase().includes(searchedTxt) ||
        student.course.toLowerCase().includes(searchedTxt)
      ) {
        return true;
      }
      student.select = false;
      return false;
    });
    filteredSudents.map((s) => (s.select = true));
    renderNew(data);
    searchField.value = "";
  }
  function renderNew(data) {
    render(Object.values(data).map(template), document.querySelector("tbody"));
  }
}
solve();
