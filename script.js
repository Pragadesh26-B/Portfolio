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
// RESUME BUTTON
// =========================================

function downloadResume(event) {

    event.preventDefault();

    const resumePath = "resume.pdf";

    fetch(resumePath, { method: "HEAD" })
        .then(response => {

            if (response.ok) {

                const link = document.createElement("a");
                link.href = resumePath;
                link.download = "Pragadesh_B_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                link.remove();

            } else {

                alert(
                    "Add your resume PDF as 'resume.pdf' inside the portfolio folder, then this button can download it."
                );

            }

        })
        .catch(() => {

            alert(
                "Add your resume PDF as 'resume.pdf' inside the portfolio folder, then this button can download it."
            );

        });

}


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
