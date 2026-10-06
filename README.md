# NOVA Performance Sneakers

A responsive product landing page developed as a practical assignment for the Web Developer Intern position.

The project showcases a NOVA Performance Sneakers product with responsive navigation, product size selection, dynamic pricing, quantity control, and an enquiry form with JavaScript validation.

## Project Overview

The NOVA Performance Sneakers landing page is built using only HTML, CSS, and JavaScript.

The main goal of the project is to create a clean, responsive, and interactive product landing page that works across desktop, tablet, and mobile devices.

## Features

- Responsive header and navigation
- Mobile hamburger menu
- Product hero section
- NOVA Performance Sneakers product section
- Product image
- Product description
- Product features
- Size selection
- Dynamic price based on selected size
- Quantity increase and decrease controls
- Dynamic total price calculation
- Enquiry form
- Name, email, phone, and message validation
- 10-digit phone number validation
- Success message after valid form submission
- Responsive design for desktop, tablet, and mobile
- No horizontal scrolling on mobile devices

## Product Details

### NOVA Performance Sneakers

Features:

- Lightweight Design
- Breathable Material
- Cushioned Sole

### Available Sizes

| Size | Price |
|------|------:|
| 7 | ₹2,999 |
| 8 | ₹3,199 |
| 9 | ₹3,399 |

The total price is calculated dynamically according to the selected size and quantity.

## Technologies Used

- HTML5
- CSS3
- JavaScript

No external frameworks or ready-made templates were used.

## JavaScript Functionality

JavaScript is used for the interactive functionality of the website.

### Mobile Navigation

The hamburger button opens and closes the navigation menu on smaller screens.

### Dynamic Pricing

The product price changes when the user selects a different shoe size.

### Quantity Control

The `+` and `−` buttons increase or decrease the quantity.

The minimum quantity is maintained at 1.

### Total Price

The total price is calculated using:

`Selected Size Price × Quantity`

### Form Validation

The enquiry form checks:

- Required fields
- Valid email format
- Valid 10-digit phone number
- Numeric phone input

After successful validation, a confirmation message is displayed.

## Project Structure

```text
webconstructive-sneakers/
│
├── assets/
│   └── sneaker.png
│
├── index.html
├── style.css
├── script.js
└── README.md
