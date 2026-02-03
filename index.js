const links = document.querySelectorAll(".nav a");
    links.forEach((link) => {
        link.addEventListener("click", () => {
        links.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
        });
    });

const linksMap = document.querySelectorAll("ul.map a");

function updateActiveLink() {
    const scrollPosition = window.scrollY;
    linksMap.forEach(link => link.classList.remove("utgrått")); 
    if (scrollPosition < 460) {
        document.querySelector('ul.map a[href="#about"]').classList.add("utgrått");
    } else if (scrollPosition >= 460 && scrollPosition <990) {
        document.querySelector('ul.map a[href="#skills"]').classList.add("utgrått");
    } else if (scrollPosition >= 990) {
        document.querySelector('ul.map a[href="#exp"]').classList.add("utgrått");
    }
}
window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);
