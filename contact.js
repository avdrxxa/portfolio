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

let namn= document.querySelector('.namn')
let email= document.querySelector('.email')
let comm= document.querySelector('.comm')

let submit= document.querySelector('button.submit')

let askers=[]

submit.addEventListener('click', ()=>{
    namn= namn.value 
    email=email.value
    comm= comm.value
    if(namn===undefined||email===undefined||comm===''){
        alert('Make sure you entered the corect values!')
        return
    }else{
        askers.push(namn, email, comm)
        console.log(askers)
    }
})

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);