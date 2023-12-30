// input elements reference.

const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");

// error elements reference for input fields.

const loginEmailError = document.getElementById("loginEmailError");
const loginPasswordError = document.getElementById("loginPasswordError");

// booking form reference
const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("loginButton");

function validateNotEmpty(value, errorElement, errorMessage) {
  if (!value) {
    errorElement.textContent = errorMessage;
    return false;
  } else {
    errorElement.textContent = "";
    return true;
  }
}

function validatePositiveInteger(value, errorElement, errorMessage) {
  if (value.length === 10) {
    errorElement.textContent = errorMessage;
    return false;
  } else {
    errorElement.textContent = "";
    return true;
  }
}

function validateDateNotInPast(
  value,
  currentDateValue,
  errorElement,
  errorMessage
) {
  if (value > currentDateValue) {
    errorElement.textContent = errorMessage;
    return false;
  } else {
    errorElement.textContent = "";
    return true;
  }
}

const handleLogin = () => {
  var isValid = true;
  if (!loginEmail.value || !loginPassword.value) {
    isValid &= validateNotEmpty(
      loginEmail.value,
      loginEmailError,
      "Error: Complete this field."
    );
    isValid &= validateNotEmpty(
      loginPassword.value,
      loginPasswordError,
      "Error: Complete this field."
    );
  }

  if (isValid) {
    alert(`Thank You!\nYou Login has been  successfully `);
    loginForm.reset();
    setTimeout(() => {
      window.location.href = "index.html";
    }, 500);
  }
};

// event listener to submit the form on button click.
loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  handleLogin();
});

// event listener to submit the form on form submit.
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  handleLogin();
  loginForm.reset();
});

// Event listeners to remove the error message from input fields when value is updated.

document.getElementById("loginEmail").addEventListener("input", function () {
  loginEmailError.textContent = "";
});

document.getElementById("loginPassword").addEventListener("input", function () {
  loginPasswordError.textContent = "";
});

const handleRedirectToSignUp = () => {
  window.location.href = "/register.html";
};
