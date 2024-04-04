
export function saveData() {
  let username, password, logonError_invalid;
  logonError_invalid = document.getElementById("logonError_invalid");
  username = document.getElementById("username").value;
  password = document.getElementById("password").value;

  let user_records = new Array();
  user_records = JSON.parse(sessionStorage.getItem("users"))
    ? JSON.parse(sessionStorage.getItem("users"))
    : [];
  if (
    user_records.some((v) => {
      return v.username === username && v.password === password;
    })
  ) {
    let current_user = user_records.filter((v) => {
      return v.username === username && v.password === password;
    })[0];
    sessionStorage.setItem("username", current_user.username);
    window.location.href = "index.html";
  } else {
    logonError_invalid.style.display = "block"
  }
}

