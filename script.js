// =========================================
// MOBILE NAVIGATION
// =========================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// Close menu when a link is clicked

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// =========================================
// COPYRIGHT YEAR
// =========================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// =========================================
// SIMPLE SCROLL ANIMATION
// =========================================

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },

    {
        threshold: 0.1
    }

);


document
    .querySelectorAll(
        ".skill-card, .project-feature, .timeline-item, .cert-card"
    )
    .forEach(element => {

        element.style.opacity = "0";

        element.style.transform = "translateY(30px)";

        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        observer.observe(element);

    });


// ANIMATED ROBOT HAND CURSOR

const robotCursor = document.querySelector(".robot-cursor");

if (robotCursor && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {

    document.addEventListener("mousemove", event => {

        robotCursor.style.left = `${event.clientX}px`;
        robotCursor.style.top = `${event.clientY}px`;
        robotCursor.classList.add("visible");

    });

    document.addEventListener("mousedown", () => {
        robotCursor.classList.add("pressed");
    });

    document.addEventListener("mouseup", () => {
        robotCursor.classList.remove("pressed");
    });

}
