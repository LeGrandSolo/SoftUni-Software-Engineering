import { get } from "./api.js";
import { html } from "./lib.js";
const detailsCard = (result) => html`
  <h1>Meme Title: ${result.title}</h1>
  <div class="meme-details">
    <div class="meme-img">
      <img alt="meme-alt" src="${result.imageUrl}" />
    </div>
    <div class="meme-description">
      <h2>Meme Description</h2>
      <p>${result.description}</p>

      <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
      <a class="button warning" href="#">Edit</a>
      <button class="button danger">Delete</button>
    </div>
  </div>
`;

export async function showDetails(ctx) {
  const url = `/data/memes/${ctx.params.id}`;
  try {
    const result = await get(url);
    ctx.render(detailsCard(result));
  } catch (err) {
    alert(err.message);
  }
  function deleteMeme(params) {
    
  }
}
