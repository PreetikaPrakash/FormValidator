const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const button = document.getElementById("button");

// functions
// Show input error message
function showError(input, message) {
  const formcontrol = input.parentElement;
  formcontrol.className = "form-control error";
  const small = formcontrol.querySelector("small");
  small.innerText = message;
}
// Show success message
function showSuccess(input) {
  const formcontrol = input.parentElement;
  formcontrol.className = "form-control success";
}
// check email is valid
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
// capitalise first letter of error message
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}
// check password match
function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
}
// Event Listener
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("clicked");

  if (username.value === "") {
    showError(username, "Username is required");
  } else {
    showSuccess(username);
  }
  if (email.value === "") {
    showError(email, "Email is required");
  } else if (!isValidEmail(email.value)) {
    showError(email, "Email is not valid");
  } else {
    showSuccess(email);
  }
  if (password.value === "") {
    showError(password, "Password is required");
  } else {
    showSuccess(password);
  }
  if (password2.value === "") {
    showError(password2, "Password is required");
  } else {
    showSuccess(password2);
  }
  // check length of username
  checkLength(username, 3, 15);
  // check length of password
  checkLength(password, 6, 25);
  // check password match
  checkPasswordMatch(password, password2);
});
