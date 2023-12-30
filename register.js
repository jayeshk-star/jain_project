// input elements reference.
const name = document.getElementById("name");
const contact = document.getElementById("contact");
const birthDate = document.getElementById("birthDate");
const email = document.getElementById("email");
const password = document.getElementById("password");
const gender = document.getElementById("gender");

// error elements reference for input fields.
const nameError = document.getElementById("nameError");
const contactError = document.getElementById("contactError");
const dateError = document.getElementById("dateError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

// booking form reference
const registerForm = document.getElementById("registerForm");
const registerButton = document.getElementById("registerButton");

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

const handleRegister = () => {
  var currentDate = new Date().toISOString().split("T")[0];
  var isValid = true;
  if (
    !name.value ||
    !contact.value ||
    !birthDate.value ||
    !email.value ||
    !password.value
  ) {
    isValid &= validateNotEmpty(
      name.value,
      nameError,
      "Error: Complete this field."
    );
    isValid &= validateNotEmpty(
      contact.value,
      contactError,
      "Error: Complete this field."
    );
    isValid &= validateNotEmpty(
      birthDate.value,
      dateError,
      "Error: Complete this field."
    );
    isValid &= validateNotEmpty(
      email.value,
      emailError,
      "Error: Complete this field."
    );
    isValid &= validateNotEmpty(
      password.value,
      passwordError,
      "Error: Complete this field."
    );
  } else {
    isValid &= validatePositiveInteger(
      contact.value,
      contactError,
      "Error: InValid Mobile Number"
    );
    isValid &= validateDateNotInPast(
      birthDate.value,
      currentDate,
      dateError,
      "Error: Birth Date cannot be in the future Date."
    );
  }

  if (isValid) {
    alert(`Thank You!\nYou Register has been  successfully `);
    registerForm.reset();
    setTimeout(() => {
      window.location.href = "login.html";
    }, 500);
  }
};

// event listener to submit the form on button click.
registerButton.addEventListener("click", (e) => {
  e.preventDefault();
  handleRegister();
});

// event listener to submit the form on form submit.
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  handleRegister();
  registerForm.reset();
});

// Event listeners to remove the error message from input fields when value is updated.
document.getElementById("name").addEventListener("input", function () {
  nameError.textContent = "";
});

document.getElementById("contact").addEventListener("input", function () {
  contactError.textContent = "";
});

document.getElementById("birthDate").addEventListener("input", function () {
  dateError.textContent = "";
});

document.getElementById("email").addEventListener("input", function () {
  emailError.textContent = "";
});

document.getElementById("password").addEventListener("input", function () {
  passwordError.textContent = "";
});

const handleRedirectToLogin = () => {
  window.location.href = "/login.html";
};
