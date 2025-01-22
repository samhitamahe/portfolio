document.addEventListener("DOMContentLoaded", function () {
    // Select the mouse icon
    const mouseIcon = document.querySelector(".mouse");

    // Add click event listener to the mouse icon
    mouseIcon.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        const aboutSection = document.getElementById("about"); // Get the section to scroll to

        // Scroll to the about section smoothly
        aboutSection.scrollIntoView({ behavior: "smooth" });
    });
});

(function () {
    emailjs.init("vbgKZEJLGmBPvx3U1"); // Replace with your EmailJS user ID
})();

document.getElementById('send-btn').addEventListener('click', function (event) {
    event.preventDefault();

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    // Basic form validation
    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    var templateParams = {
        to_name: 'M.Samhita', // Replace with recipient's name
        from_name: name,
        from_email: email,
        message: message
    };

    emailjs.send('service_tuc8ycb', 'template_ytx7dlv', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
        }, function (error) {
            console.log('FAILED...', error);
            alert('Failed to send message. Please try again later.');
        });
});

var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Backend Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.querySelector(".nav-button.prev");
    const nextButton = document.querySelector(".nav-button.next");
    const container = document.querySelector(".certificates-container");
    const items = document.querySelectorAll(".certificate-item");
    const itemCount = items.length;
    let index = 0;

    function updateSlide() {
        const itemWidth = items[0].clientWidth + parseInt(window.getComputedStyle(items[0]).marginRight, 10);
        container.style.transform = `translateX(-${index * itemWidth}px)`;
    }

    prevButton.addEventListener("click", function () {
        if (index > 0) {
            index--;
        } else {
            index = itemCount - 1; // Go to the last item
        }
        updateSlide();
    });

    nextButton.addEventListener("click", function () {
        if (index < itemCount - 1) {
            index++;
        } else {
            index = 0; // Go to the first item
        }
        updateSlide();
    });

    // Initialize the slide to ensure the container starts in the right position
    updateSlide();
});
document.querySelectorAll('.bar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


