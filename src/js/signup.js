const signupForm = document.forms["signupForm"];

export function saveData() {
  let username, password, signupError, fieldEmpty, signupSuccess;
  signupError = document.getElementById("signupError");
  fieldEmpty = document.getElementById("fieldEmpty");
  signupSuccess = document.getElementById("signupSuccess");
  username = document.getElementById("username").value;
  password = document.getElementById("password").value;

  if (!username || !password) {
    fieldEmpty.style.display = "block";
    return false;
  }

  let user_records = new Array();
  user_records = JSON.parse(sessionStorage.getItem("users")) || [];
  if (
    user_records.findIndex((v) => {
      return v.username === username;
    }) > -1
  ) {
    signupError.style.display = "block";
  } else {
    signupSuccess.style.display = "block";
    signupError.style.display = "none";
    user_records.push({
      username: username,
      password: password,
    });
    sessionStorage.setItem("users", JSON.stringify(user_records));
  }
}
