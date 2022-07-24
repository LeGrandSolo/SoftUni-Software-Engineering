import {
  createOrEditFurnitureTemplate,
  dashboardTemplate,
  detailsTemplate,
  myFurnitureTemplate,
} from "./templates.js";
import page from "../node_modules/page/page.mjs";
import { logout } from "./logout.js";
import { request } from "./api.js";
import { createOrEdit } from "./createFurniture.js";
let url = "/data/catalog";
let outsideCtx;
export async function showDashboard(ctx) {
  url = "/data/catalog";
  outsideCtx = ctx;
  let furnitureData = await request("GET", url);
  sessionStorage.getItem("accessToken")
    ? ctx.render(dashboardTemplate(ctx, true, furnitureData))
    : ctx.render(dashboardTemplate(ctx, false, furnitureData));
}
export function redirectToHome() {
  page.redirect("/");
}
export async function showMyFurniture(ctx) {
  outsideCtx = ctx;
  let furnitureData = await request("GET", url);
  try {
    console.log(furnitureData);
    furnitureData = furnitureData.filter(
      (d) => d._ownerId === sessionStorage.getItem("userId")
    );
    ctx.render(myFurnitureTemplate(ctx, furnitureData));
  } catch (error) {
    console.log(error.message);
  }
}
let furnitUrl;
export async function showDetails(ev) {
  ev.preventDefault();
  let id = ev.target.parentNode.parentNode.id;
  furnitUrl = `/data/catalog/${id}`;
  const furnitureData = await request("GET", furnitUrl);
  let isOwner = false;
  if (sessionStorage.getItem("userId") === furnitureData._ownerId) {
    isOwner = true;
  }
  outsideCtx.render(detailsTemplate(outsideCtx, furnitureData, isOwner));
}
export async function deleteFurniture(ev) {
  ev.preventDefault();
  alert("Delete?");
  await request(
    "DELETE",
    furnitUrl,
    null,
    sessionStorage.getItem("accessToken")
  );
  redirectToHome();
}
export async function showEdit(ev) {
  ev.preventDefault();
  const furnitureData = await request("GET", furnitUrl);
  console.log(furnitureData);
  outsideCtx.render(
    createOrEditFurnitureTemplate(outsideCtx, [], [], furnitureData, true)
  );
}
export async function edit(ev) {
  createOrEdit(ev, true, furnitUrl, outsideCtx);
}
