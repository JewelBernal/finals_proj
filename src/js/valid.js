var username = document.forms["form"]["username"];
var password = document.forms["form"]["password"];
username.addEventListener("textInput", username_Verify);
password.addEventListener("textInput", password_Verify);

export function validated() {
  if (username.value.length < 1) {
    username.style.border = "2px solid red";
    return false;
  }
  if (password.value.length < 1) {
    password.style.border = "2px solid red";
    return false;
  }
}
export function username_Verify() {
  if (username.value.length >= 1) {
    username.style.border = "2px solid rgb(21 128 61)";
    return true;
  }
}
export function password_Verify() {
  if (password.value.length >= 1) {
    password.style.border = "2px solid rgb(21 128 61)";
    return true;
  }
}
