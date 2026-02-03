const linksMap = document.querySelectorAll("ul.map a");

function updateActiveLink() {
    const scrollPosition = window.scrollY;
    linksMap.forEach(link => link.classList.remove("utgrått")); 
    if (scrollPosition < 450) {
        document.querySelector('ul.map a[href="#contact"]').classList.add("utgrått");
        console.log(scrollPosition)
    } else if (scrollPosition >= 450) {
        document.querySelector('ul.map a[href="#ask"]').classList.add("utgrått");
    }
}
window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);