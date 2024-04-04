import { saveData } from "./signup.js";
import { validated } from "./signupFields.js";

const signupForm = document.forms["signupForm"];

function resetAlerts() {}

signupForm.addEventListener("submit", function (e) {
  e.preventDefault();

  validated();
  saveData();
});
