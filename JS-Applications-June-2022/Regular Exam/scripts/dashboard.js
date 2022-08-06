import { html } from "../node_modules/lit-html/lit-html.js";
import { styleMap } from "../node_modules/lit-html/directives/style-map.js";
import { get } from "./api/api.js";
const dashboardTemplate = (posts) => html`<section id="dashboard">
  <h2>Job Offers</h2>

  <!-- Display a div with information about every post (if any)-->
  ${posts.map(postTemplate)}

  <!-- Display an h2 if there are no posts -->
  <h2
    style=${styleMap(posts.length ? { display: "none" } : { display: "block" })}
  >
    No offers yet.
  </h2>
</section>`;
/* {
    "_ownerId": "847ec027-f659-4086-8032-5173e2f9c93a",
    "title": "Invoice Administrator",
    "imageUrl": "../images/example3.png",
    "category": "Finance, Administration, Data Capture",
    "description": "The manager will oversee quality assurance, quality control, and customer service regarding the invoicing process; ensure adherence to proper invoicing procedures; and interpret and clarify invoicing policies. We are looking for individuals who have a passion for making a difference in the lives of people around the world.",
    "requirements": "Experience with SQL-based accounting software and demonstrated ability to learn and operate new systems in a short period. Experience with accounts payable, general ledger, and client invoicing. Experience with accounting software; Solomon IV experience preferred. Ability to solve technical, managerial, or operational problems and evaluate options based on relevant information, resources, well-rounded experience, and knowledge.",
    "salary": "1700",
    "_createdOn": 1617194295480,
    "_id": "136777f5-3277-42ad-b874-76d043b069cb"
  } */
const postTemplate = (post) => html`<div class="offer">
  <img src=${post.imageUrl} alt="example1" />
  <p><strong>Title: </strong><span class="title">${post.title}</span></p>
  <p><strong>Salary:</strong><span class="salary">${post.salary}</span></p>
  <a class="details-btn" href="/details/${post._id}">Details</a>
</div>`;
export async function showDashboard(ctx) {
  const url = "/data/offers?sortBy=_createdOn%20desc";
  const posts = await get(url);
  ctx.render(dashboardTemplate(posts));
}
