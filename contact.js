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

const submit = document.querySelector('button.submit')

const forum = []

submit.addEventListener('click', () => {
    const namnInput = document.querySelector('.namn')
    const emailInput = document.querySelector('.email')
    const commInput = document.querySelector('.comm')
    const namn = namnInput.value.trim()
    const email = emailInput.value.trim()
    const comm = commInput.value.trim()
    if (namn === '' || email === '' || comm === '') {
        alert('Make sure you entered the correct values!')
        return
    }
    const asker = {
        namn:namnInput.value,
        email:emailInput.value,
        comm:commInput.value
    }
    forum.push(asker)
    console.log(asker)
    console.log(forum)
    namnInput.value = ''
    emailInput.value = ''
    commInput.value = ''
    let myEmail='andreea-raluca.damian@gmail.com'
    const subject = encodeURIComponent(`${asker.namn} has a question:`)
    const body = encodeURIComponent(`Name: ${asker.namn}\nYour email: ${asker.email}\nComment: ${asker.comm}`)
    window.location.href = `mailto:${myEmail}?subject=${subject}&body=${body}`
    const isMobile = /iPhone|Android|iPad/i.test(navigator.userAgent)
    if (isMobile){
        alert("If your email app does not open, please copy the message and send it manually.")
    }
    window.location.href = mailtoLink
})


window.addEventListener("scroll", updateActiveLink)
window.addEventListener("load", updateActiveLink)