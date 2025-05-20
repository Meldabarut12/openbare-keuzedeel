document.addEventListener("DOMContentLoaded", function() {
    console.log("Pagina geladen!");

    const navLinks = document.querySelectorAll("nav.menu a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: "smooth"
                });
            }
        });
    });
});


