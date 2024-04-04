import { validated } from "./valid.js";
import { saveData } from "./saveData.js";

const loginForm = document.forms["form"];

loginForm.addEventListener("submit", function (e) {
  // prevent the default behavior of forms when clicking the submit button
  e.preventDefault();

  // do input validations (check if username and password is correct)
  validated();
  saveData();
});
