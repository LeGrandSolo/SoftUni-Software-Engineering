import { request } from "./api.js";
import { redirectToHome } from "./dashboard.js";
export async function logout() {
  try {
    await request(
      "GET",
      "/users/logout",
      null,
      sessionStorage.getItem("accessToken")
    );
  } catch (e) {
    alert(e.message);
  }
  sessionStorage.clear();
  redirectToHome();
}
