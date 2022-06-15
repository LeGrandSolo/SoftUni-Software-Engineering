function validate() {
  let validEmailRegex = /^[a-z]+@[a-z]+.[a-z]+$/;
  let input = document.getElementById("email");
  input.addEventListener("change", () => {
    if (!validEmailRegex.test(input.value)) {
      input.className = "error";
    } else {
      input.className = "";
    }
  });
}
