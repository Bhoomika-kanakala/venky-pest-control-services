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

// =========================================================
// 3D VIDEO CAROUSEL
// =========================================================


const carouselTrack = document.querySelector(".carousel-track");
const carouselCards = document.querySelectorAll(".carousel-track .work-card");

const previousButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");

const carouselDots = document.querySelector(".carousel-dots");


let currentSlide = 0;

let cardsPerView = 4;

let totalSlides = 0;


// =========================================================
// FIND HOW MANY CARDS SHOULD BE VISIBLE
// =========================================================

function getCardsPerView() {

    if (window.innerWidth <= 600) {

        return 1;

    }

    if (window.innerWidth <= 1000) {

        return 2;

    }

    return 4;
}


// =========================================================
// UPDATE CARDS PER VIEW
// =========================================================

function updateCarouselSettings() {

    cardsPerView = getCardsPerView();

    totalSlides =
        Math.max(
            0,
            carouselCards.length - cardsPerView
        );

    if (currentSlide > totalSlides) {

        currentSlide = totalSlides;

    }

    createDots();

    moveCarousel();

}


// =========================================================
// MOVE CAROUSEL
// =========================================================

function moveCarousel() {

    if (!carouselCards.length) {

        return;

    }


    const cardWidth =
        carouselCards[0].offsetWidth;


    const gap =
        parseFloat(
            getComputedStyle(carouselTrack).gap
        ) || 0;


    const moveAmount =
        currentSlide * (cardWidth + gap);


    carouselTrack.style.transform =
        `translateX(-${moveAmount}px)`;


    updateActiveDot();

}


// =========================================================
// NEXT BUTTON
// =========================================================

function nextSlide() {

    if (currentSlide < totalSlides) {

        currentSlide++;

    } else {

        currentSlide = 0;

    }

    moveCarousel();

}


// =========================================================
// PREVIOUS BUTTON
// =========================================================

function previousSlide() {

    if (currentSlide > 0) {

        currentSlide--;

    } else {

        currentSlide = totalSlides;

    }

    moveCarousel();

}


// =========================================================
// BUTTON EVENTS
// =========================================================

nextButton.addEventListener(
    "click",
    nextSlide
);


previousButton.addEventListener(
    "click",
    previousSlide
);


// =========================================================
// CREATE DOTS
// =========================================================

function createDots() {

    carouselDots.innerHTML = "";


    const numberOfDots =
        totalSlides + 1;


    for (
        let i = 0;
        i < numberOfDots;
        i++
    ) {

        const dot =
            document.createElement("button");


        dot.classList.add("carousel-dot");


        dot.type = "button";


        dot.setAttribute(
            "aria-label",
            "Go to slide " + (i + 1)
        );


        dot.addEventListener(
            "click",
            function() {

                currentSlide = i;

                moveCarousel();

            }
        );


        carouselDots.appendChild(dot);

    }


    updateActiveDot();

}


// =========================================================
// ACTIVE DOT
// =========================================================

function updateActiveDot() {

    const dots =
        document.querySelectorAll(
            ".carousel-dot"
        );


    dots.forEach(
        function(dot, index) {

            if (index === currentSlide) {

                dot.classList.add("active");

            } else {

                dot.classList.remove("active");

            }

        }
    );

}


// =========================================================
// AUTOMATIC SLIDE
// =========================================================

let autoSlide =
    setInterval(
        nextSlide,
        5000
    );


// =========================================================
// STOP AUTO SLIDE WHEN MOUSE IS OVER CAROUSEL
// =========================================================

const carouselContainer =
    document.querySelector(
        ".carousel-container"
    );


carouselContainer.addEventListener(
    "mouseenter",
    function() {

        clearInterval(autoSlide);

    }
);


carouselContainer.addEventListener(
    "mouseleave",
    function() {

        autoSlide =
            setInterval(
                nextSlide,
                5000
            );

    }
);


// =========================================================
// RESPONSIVE RESIZE
// =========================================================

window.addEventListener(
    "resize",
    function() {

        updateCarouselSettings();

    }
);


// =========================================================
// START CAROUSEL
// =========================================================

updateCarouselSettings();
