import { html, render } from "./node_modules/lit-html/lit-html.js";
import { styleMap } from "./node_modules/lit-html/directives/style-map.js";
import { cats } from "./catSeeder.js";
cats.forEach((cat) => {
  cat.info = false;
});
const ul = document.createElement("ul");
document.getElementById("allCats").appendChild(ul);
const catTemplate = (cat) => html`
  <li>
    <img
      src="./images/${cat.imageLocation}.jpg"
      width="250"
      height="250"
      alt="Card image cap"
    />
    <div class="info">
      <button class="showBtn" @click=${showStatusCode}>Show status code</button>
      <div
        class="status"
        style=${styleMap(cat.info ? { display: "block" } : { display: "none" })}
        id=${cat.id}
      >
        <h4>Status Code: ${cat.statusCode}</h4>
        <p>${cat.statusMessage}</p>
      </div>
    </div>
  </li>
`;
showcats();

function showStatusCode(ev) {
  const button = ev.target;
  let catId = ev.target.parentNode.querySelector(".status").id;
  const cat = cats.find((cat) => cat.id === catId);
  cat.info = !cat.info;
  showcats();
}
function showcats() {
  render(
    cats.map((cat) => catTemplate(cat)),
    ul
  );
}
