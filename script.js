// Mobile Navigation

const menuBtn = document.getElementById("menuBtn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
});


// Product Price & Quantity

const sizeSelect = document.getElementById("size");
const quantityDisplay = document.getElementById("quantity");
const totalPrice = document.getElementById("totalPrice");

const minusBtn = document.getElementById("minusBtn");
const plusBtn = document.getElementById("plusBtn");

let quantity = 1;


// Calculate and display total price

function updateTotal() {

    const price = Number(sizeSelect.value);
    const total = price * quantity;

    totalPrice.textContent =
        "₹" + total.toLocaleString("en-IN");
}


// Update price when size changes

sizeSelect.addEventListener("change", function () {
    updateTotal();
});


// Increase quantity

plusBtn.addEventListener("click", function () {

    quantity++;

    quantityDisplay.textContent = quantity;

    updateTotal();
});


// Decrease quantity

minusBtn.addEventListener("click", function () {

    if (quantity > 1) {

        quantity--;

        quantityDisplay.textContent = quantity;

        updateTotal();
    }
});


// Enquiry Form Validation

const enquiryForm = document.getElementById("enquiryForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");

const successMessage =
    document.getElementById("successMessage");


// Allow only numeric phone numbers

phoneInput.addEventListener("input", function () {

    this.value = this.value.replace(/\D/g, "");

    this.value = this.value.slice(0, 10);
});


// Validate form on submission

enquiryForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const message = messageInput.value.trim();


    // Check required fields

    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        message === ""
    ) {

        successMessage.textContent =
            "Please fill in all the fields.";

        return;
    }


    // Validate email

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        successMessage.textContent =
            "Please enter a valid email address.";

        return;
    }


    // Validate 10-digit phone number

    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {

        successMessage.textContent =
            "Please enter a valid 10-digit phone number.";

        return;
    }


    // Display success message

    successMessage.textContent =
        "Thank you! Your enquiry has been submitted successfully.";

    enquiryForm.reset();

    quantity = 1;

    quantityDisplay.textContent = quantity;

    updateTotal();
});