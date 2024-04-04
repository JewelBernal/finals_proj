var username = document.forms["signupForm"]["username"];
var password = document.forms["signupForm"]["password"];
let fieldEmpty, signupError;
username.addEventListener("change", username_Verify);
password.addEventListener("change", password_Verify);
fieldEmpty = document.getElementById("fieldEmpty");
signupError = document.getElementById("signupError");

export function validated() {
  if (username.value.length < 1) {
    username.style.border = "2px solid red";
    fieldEmpty.style.display = "block";
    return false;
  }
  if (password.value.length < 1) {
    password.style.border = "2px solid red";
    fieldEmpty.style.display = "block";
    return false;
  } else {
  }
}
export function username_Verify() {
  if (username.value.length >= 1) {
    username.style.border = "2px solid rgb(21 128 61)";
    fieldEmpty.style.display = "none";
    signupError.style.display = "none";
    return true;
  }
}
export function password_Verify() {
  if (password.value.length >= 1) {
    password.style.border = "2px solid rgb(21 128 61)";
    fieldEmpty.style.display = "none";
    signupError.style.display = "none";
    return true;
  }
}
