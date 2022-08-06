import { html } from "../node_modules/lit-html/lit-html.js";
import { styleMap } from "../node_modules/lit-html/directives/style-map.js";
import page from "../node_modules/page/page.mjs";
import { deleteReq, get, getFormData, post, put } from "./api/api.js";
import { getUserData } from "./api/util.js";
const detailsTemplate = (
  post,
  onEdit,
  onDelete,
  userData,
  onApply,
  applicationCount,
  hasApplied
) => html`<section id="details">
  <div id="details-wrapper">
    <img id="details-img" src=${post.imageUrl} alt="example1" />
    <p id="details-title">${post.title}</p>
    <p id="details-category">
      Category: <span id="categories">${post.category}</span>
    </p>
    <p id="details-salary">
      Salary: <span id="salary-number">${post.salary}</span>
    </p>
    <div id="info-wrapper">
      <div id="details-description">
        <h4>Description</h4>
        <span>${post.description}</span>
      </div>
      <div id="details-requirements">
        <h4>Requirements</h4>
        <span>${post.requirements}</span>
      </div>
    </div>
    <p>Applications: <strong id="applications">${applicationCount}</strong></p>

    <!--Edit and Delete are only for creator-->
    <div id="action-buttons">
      <a
        href="/details/${post._id}/edit"
        id="edit-btn"
        @click=${onEdit}
        style=${styleMap(
          userData?._id === post._ownerId
            ? { display: "block" }
            : { display: "none" }
        )}
        >Edit</a
      >
      <a
        href="javascript:void(0)"
        id="delete-btn"
        @click=${onDelete}
        style=${styleMap(
          userData?._id === post._ownerId
            ? { display: "block" }
            : { display: "none" }
        )}
        >Delete</a
      >

      <!--Bonus - Only for logged-in users ( not authors )-->
      <a
        href="javascript:void(0)"
        id="apply-btn"
        style=${styleMap(
          userData !== null && userData._id !== post._ownerId && !hasApplied
            ? { display: "inline-block" }
            : { display: "none" }
        )}
        @click=${onApply}
        >Apply</a
      >
    </div>
  </div>
</section>`;
const editTemplate = (post, onSubmit) => html`<section id="edit">
  <div class="form" @submit=${onSubmit}>
    <h2>Edit Offer</h2>
    <form class="edit-form">
      <input
        type="text"
        name="title"
        id="job-title"
        placeholder="Title"
        .value=${post.title}
      />
      <input
        type="text"
        name="imageUrl"
        id="job-logo"
        placeholder="Company logo url"
        .value=${post.imageUrl}
      />
      <input
        type="text"
        name="category"
        id="job-category"
        placeholder="Category"
        .value=${post.category}
      />
      <textarea
        id="job-description"
        name="description"
        placeholder="Description"
        rows="4"
        cols="50"
        .value=${post.description}
      ></textarea>
      <textarea
        id="job-requirements"
        name="requirements"
        placeholder="Requirements"
        rows="4"
        cols="50"
        .value=${post.requirements}
      ></textarea>
      <input
        type="text"
        name="salary"
        id="job-salary"
        placeholder="Salary"
        .value=${post.salary}
      />

      <button type="submit">post</button>
    </form>
  </div>
</section>`;
export async function showDetails(ctx) {
  const url = `/data/offers/${ctx.params.id}`;
  try {
    const result = await get(url);
    const userData = getUserData();
    const applicationUrl = `/data/applications?where=offerId%3D%22${result._id}%22&distinct=_ownerId&count`;
    const applicationCount = await get(applicationUrl);
    const hasAppliedUrl = `/data/applications?where=offerId%3D%22${result._id}%22%20and%20_ownerId%3D%22${userData?._id}%22&count`;
    const hasApplied = await get(hasAppliedUrl);
    ctx.render(
      detailsTemplate(
        result,
        onEdit,
        onDelete,
        userData,
        onApply,
        applicationCount,
        hasApplied
      )
    );
    function onEdit() {
      ctx.render(editTemplate(result, onSubmit));
      async function onSubmit(ev) {
        try {
          const formData = getFormData(ev);
          Object.values(formData).map((v) => {
            if (v === "") {
              throw new Error("All fields required!");
            }
          });
          await put(url, formData);
          page.redirect("/dashboard");
        } catch (err) {
          alert(err);
        }
      }
    }
    async function onDelete() {
      await deleteReq(url);
      page.redirect("/dashboard");
    }
    async function onApply() {
      await post("/data/applications", { offerId: result._id });
      page.redirect(`/details/${result._id}`);
    }
  } catch (err) {
    alert(err);
  }
}
