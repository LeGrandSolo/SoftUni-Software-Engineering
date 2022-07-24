import {
  dashboardTemplate,
  detailsTemplate,
  myFurnitureTemplate,
} from "./templates.js";
import page from "../node_modules/page/page.mjs";
import { logout } from "./logout.js";
import { request } from "./api.js";
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
export async function showDetails(ev) {
  ev.preventDefault();
  let id = ev.target.parentNode.parentNode.id;
  url = `/data/catalog/${id}`;
  const furnitureData = await request("GET", url);
  let isOwner = false;
  if (sessionStorage.getItem("userId") === furnitureData._ownerId) {
    isOwner = true;
  }
  outsideCtx.render(detailsTemplate(outsideCtx, furnitureData, isOwner));
}
export async function deleteFurniture(ev) {
  ev.preventDefault();
  alert("Delete?");
  request("DELETE", url, null, sessionStorage.getItem("accessToken"));
  redirectToHome();
}
export async function edit() {}
