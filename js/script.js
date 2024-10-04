document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 

    // Clear all error messages
    clearErrors();

    let isValid = true;

    // First Name validation
    const firstName = document.getElementById("firstName").value.trim();
    if (firstName === "") {
      showError("firstNameError", "First name is required");
      isValid = false;
    }

    // Last Name validation
    const lastName = document.getElementById("lastName").value.trim();
    if (lastName === "") {
      showError("lastNameError", "Last name is required");
      isValid = false;
    }

    // Email validation
    const email = document.getElementById("email").value.trim();
    if (!validateEmail(email)) {
      showError("emailError", "Please enter a valid email");
      isValid = false;
    }

    // Phone Number validation
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    if (!validatePhone(phoneNumber)) {
      showError("phoneError", "Please enter a valid phone number");
      isValid = false;
    }

    // Password validation
    const password = document.getElementById("password").value.trim();
    if (password.length < 8) {
      showError("passwordError", "Password must be at least 8 characters long");
      isValid = false;
    }

    if (isValid) {
      const formData = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone_number: phoneNumber,
        password: password,
      };
      console.log(formData);
      alert("Form submitted successfully! Check the console for details.");
    }
  });

function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
  errorElement.style.display = "block";
}

function clearErrors() {
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((error) => (error.style.display = "none"));
}

function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return emailPattern.test(email);
}

function validatePhone(phoneNumber) {
  const phonePattern = /^[0-9]{10}$/;
  return phonePattern.test(phoneNumber);
}
