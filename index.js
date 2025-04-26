// DOM Elements
const clickButton = document.querySelector(".js-click-but");
const firstName = document.querySelector(".js-first-name");
const lastName = document.querySelector(".js-last-name");
const emailAddress = document.querySelector(".js-email-address");
const password = document.querySelector(".js-password");

// Helper function to toggle warning state for a field
const toggleWarning = (field, iconClass, paraClass, isValid) => {
    if (!isValid) {
        field.classList.add("input-data-warn");
        document.querySelector(iconClass).classList.add("not-hidden");
        document.querySelector(paraClass).classList.add("not-hidden");
    } else {
        field.classList.remove("input-data-warn");
        document.querySelector(iconClass).classList.remove("not-hidden");
        document.querySelector(paraClass).classList.remove("not-hidden");
    }
};

// Email validation helper
const isValidEmail = (email) => {
    return email.includes("@") && email.includes(".com");
};

// Main form validation function
const validateForm = () => {
    // First Name validation
    toggleWarning(
        firstName,
        ".js-icon-first-name",
        ".js-para-first-name",
        firstName.value.trim().length > 0
    );

    // Last Name validation
    toggleWarning(
        lastName,
        ".js-icon-last-name",
        ".js-para-last-name",
        lastName.value.trim().length > 0
    );

    // Email validation
    if (!isValidEmail(emailAddress.value)) {
        emailAddress.classList.add("input-data-warn");
        emailAddress.placeholder = "email@example.com";
        toggleWarning(
            emailAddress,
            ".js-icon-email-address",
            ".js-para-email-address",
            false
        );
    } else {
        emailAddress.classList.remove("input-data-warn");
        emailAddress.placeholder = "Email Address";
        toggleWarning(
            emailAddress,
            ".js-icon-email-address",
            ".js-para-email-address",
            true
        );
    }

    // Password validation
    toggleWarning(
        password,
        ".js-icon-password",
        ".js-para-password",
        password.value.trim().length > 0
    );
};

// Event Listeners
clickButton.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent form submission for demo purposes
    validateForm();
});

// Optional: Add input event listeners for real-time validation
firstName.addEventListener("input", () => {
    if (firstName.value.trim().length > 0) {
        toggleWarning(
            firstName,
            ".js-icon-first-name",
            ".js-para-first-name",
            true
        );
    }
});

// Add similar input listeners for other fields as needed...