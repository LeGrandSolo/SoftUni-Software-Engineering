function validate() {
  const usrname = document.getElementById("username");
  const email = document.getElementById("email");
  const passwd = document.getElementById("password");
  const confPasswd = document.getElementById("confirm-password");
  const isCompany = document.getElementById("company");
  const companyNumber = document.getElementById("companyNumber");
  const companyInfo = document.getElementById("companyInfo");
  let validDiv = document.getElementById("valid");
  let submitButton = document.getElementById("submit");
  let usrnameRegex = /^[A-Za-z0-9]{3,20}$/;
  let passwdRegex = /^[\w]{5,15}$/;
  let emailRegex = /^.*@.*\..*$/;
  submitButton.addEventListener("click", checkForInvalidFields);
  isCompany.addEventListener("change", () => {
    if (isCompany.checked) {
      companyInfo.style.display = "block";
    } else {
      companyInfo.style.display = "none";
    }
  });
  function checkForInvalidFields(e) {
    e.preventDefault();
    let isValid = true;
    if (!usrnameRegex.test(usrname.value)) {
      usrname.style.border = '';
      usrname.style.borderColor = "red";
      isValid = false;
    } else {
      usrname.style.border = "none";
    }
    if (
      !(passwdRegex.test(passwd.value) && passwd.value === confPasswd.value)
    ) {
      passwd.style.border = '';
      confPasswd.style.border = '';
      passwd.style.borderColor = "red";
      confPasswd.style.borderColor = "red";
      isValid = false;
    } else {
      passwd.style.border = "none";
      confPasswd.style.border = "none";
    }
    if (!emailRegex.test(email.value)) {
      email.style.border = '';
      email.style.borderColor = "red";
      isValid = false;
    } else {
      email.style.border = "none";
    }

    if (
      (companyNumber.value === "" ||
        Number(companyNumber.value) > 9999 ||
        Number(companyNumber.value) < 1111) &&
      companyInfo.style.display === "block"
    ) {
      companyNumber.style.border = '';
      companyNumber.style.borderColor = "red";
      isValid = false;
    } else {
      companyNumber.style.border = "none";
    }
    if (isValid) {
      validDiv.style.display = "block";
    } else {
      validDiv.style.display = "none";
    }
  }
}
