let users = sessionStorage.getItem("users");
if (users) {
  console.log(users);
  const initialUsers = JSON.parse(users) || [];
  const alreadyExists = initialUsers.some((v) => {
    return v.username === "CSELEC03";
  });
  console.log(alreadyExists);
  if (!alreadyExists) {
    const defaultUser = createDefaultUser();
    initialUsers.push(defaultUser);
    sessionStorage.setItem("users", JSON.stringify(initialUsers));
  }
} else {
  const defaultUser = createDefaultUser();
  sessionStorage.setItem("users", JSON.stringify([defaultUser]));
}

if ((username = null)) {
  window.location.href("./src/login.html?=");
}

function createDefaultUser() {
  return {
    username: "CSELEC03",
    password: "webprog",
  };
}
