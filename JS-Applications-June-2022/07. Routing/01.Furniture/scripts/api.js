const host = "http://localhost:3030";
export async function request(method, url, data, token) {
  const options = { method, headers: {} };
  if (token) {
    options.headers["X-Authorization"] = token;
  }
  if (data) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }
  try {
    const res = await fetch(host + url, options);
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message);
    }
    if (res.status === 204) {
      return null;
    }
    const data = await res.json();
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
}
export function getFormDataForAuth(ev, isRegister) {
  ev.preventDefault();
  const formData = new FormData(ev.target);
  if (!(formData.get("email") || formData.get("password"))) {
    throw new Error("All fields required");
  }
  if (isRegister && formData.get("password") !== formData.get("rePass")) {
    throw new Error("Passwords don't match");
  }
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  return data;
}
