function validateForm() {
    let valid = true;

    // Name validation
    let nameRegex = /^[A-Za-z]{3,}$/;
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let firstNameError = document.getElementById("firstNameError");
    let lastNameError = document.getElementById("lastNameError");

    if (!nameRegex.test(firstName.value)) {
        firstNameError.innerText = "Minimum 3 letters, no numbers or special characters.";
        firstNameError.style.visibility = "visible";
        valid = false;
    } else {
        firstNameError.style.visibility = "hidden";
    }

    if (!nameRegex.test(lastName.value)) {
        lastNameError.innerText = "Minimum 3 letters, no numbers or special characters.";
        lastNameError.style.visibility = "visible";
        valid = false;
    } else {
        lastNameError.style.visibility = "hidden";
    }

    document.getElementById("fullName").value = firstName.value + " " + lastName.value;

    // Email validation
    let email = document.getElementById("email").value;
    let emailError = document.getElementById("emailError");
    let emailPattern = /^[^@\s]+@[^@\s]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        emailError.innerText = "Invalid email format.";
        emailError.style.visibility = "visible";
        valid = false;
    } else {
        emailError.style.visibility = "hidden";
    }

    // Phone number validation
    let country = document.getElementById("country").value;
    let phoneNo = document.getElementById("phoneNo").value;
    let phoneError = document.getElementById("phoneError");

    if (country === "India" && !/^\d{10}$/.test(phoneNo)) {
        phoneError.innerText = "Phone number must have 10 digits.";
        phoneError.style.visibility = "visible";
        valid = false;
    } else if (country === "USA" && !/^\d{3}-\d{3}-\d{4}$/.test(phoneNo)) {
        phoneError.innerText = "Format: XXX-XXX-XXXX.";
        phoneError.style.visibility = "visible";
        valid = false;
    } else {
        phoneError.style.visibility = "hidden";
    }

    // Password validation
    let password = document.getElementById("password").value;
    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Min 6 characters required.";
        document.getElementById("passwordError").style.visibility = "visible";
        valid = false;
    }

    return valid;
}

function togglePassword() {
    let pwd = document.getElementById("password");
    pwd.type = pwd.type === "password" ? "text" : "password";
}

function confirmReset() {
    if (confirm("Are you sure you want to reset the form?")) {
        document.getElementById("regForm").reset();
    }
}
