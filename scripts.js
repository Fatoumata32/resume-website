document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const sectionId = event.target.getAttribute("href").substring(1);
            const section = document.getElementById(sectionId);
            window.scrollTo({
                top: section.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });
});
