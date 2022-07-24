import { getFormDataForAuth, request } from "./api.js";
import { redirectToHome } from "./dashboard.js";
import { createFurnitureTemplate } from "./templates.js";
const url = "/data/catalog";
let outsideCtx;
export function showCreate(ctx) {
  ctx.render(createFurnitureTemplate(ctx, [], []));
  outsideCtx = ctx;
}
export async function create(ev) {
  ev.preventDefault();
  const formData = new FormData(ev.target);
  const data = {
    make: formData.get("make"),
    model: formData.get("model"),
    year: formData.get("year"),
    description: formData.get("description"),
    price: formData.get("price"),
    image: formData.get("img"),
    material: formData.get("material"),
  };
  let invalid = [];
  let valid = [];
  if (
    !(
      data.make &&
      data.model &&
      data.description &&
      data.year &&
      data.price &&
      data.img
    )
  ) {
    Object.entries(data)
      .filter((e) => e[1] === "")
      .map((i) => invalid.push(i));
  }
  if (data.make.length < 4) {
    invalid.push(["make"]);
  }
  if (data.model.length < 4) {
    invalid.push(["model"]);
  }
  if (Number(data.year) < 1950 || Number(data.year) > 2050) {
    invalid.push(["year"]);
  }
  if (data.description.length < 10) {
    invalid.push(["description"]);
  }
  if (data.price < 0) {
    invalid.push(["price"]);
  }
  Object.entries(data)
    .filter((e) => invalid.map((i) => i[0] !== e[0]))
    .map((i) => valid.push(i));
  const invalidIds = invalid.map((elem) => "new-" + elem[0]);
  const validIds = valid.map((elem) => "new-" + elem[0]);
  outsideCtx.render(createFurnitureTemplate(outsideCtx, validIds, invalidIds));
  if (invalidIds.length) {
    return null;
  }
  const resData = request(
    "POST",
    url,
    data,
    sessionStorage.getItem("accessToken")
  );
  redirectToHome();
}
