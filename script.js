// ===============================
// VENKY PEST CONTROL JAVASCRIPT
// ===============================


// 1. Get the booking form
const bookingForm = document.getElementById("bookingForm");


// 2. Run this when customer submits the form
bookingForm.addEventListener("submit", function(event) {

    // Stop the page from refreshing
    event.preventDefault();


    // Get customer information
    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();
    const service = document.getElementById("service").value;
    const area = document.getElementById("area").value.trim();
    const message = document.getElementById("customerMessage").value.trim();


    // 3. Check whether required fields are filled
    if (name === "" || phone === "" || service === "" || area === "") {

        alert("Please fill in all required fields.");

        return;
    }


    // 4. Check phone number
    if (!/^[6-9]\d{9}$/.test(phone)) {

        alert("Please enter a valid 10-digit Indian mobile number.");

        return;
    }


    // 5. Create WhatsApp message
    const whatsappMessage =
        "Hello Venky Pest Control,%0A%0A" +
        "*New Pest Control Enquiry*%0A%0A" +
        "Name: " + encodeURIComponent(name) + "%0A" +
        "Phone: " + encodeURIComponent(phone) + "%0A" +
        "Service: " + encodeURIComponent(service) + "%0A" +
        "Area: " + encodeURIComponent(area) + "%0A" +
        "Problem: " + encodeURIComponent(message);


    // 6. Your WhatsApp number
    const whatsappNumber = "918688287716";


    // 7. Create WhatsApp link
    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        whatsappMessage;


    // 8. Show success message
    alert("Thank you! Your enquiry is ready to send on WhatsApp.");


    // 9. Open WhatsApp
    window.open(whatsappURL, "_blank");


    // 10. Clear the form
    bookingForm.reset();

});
