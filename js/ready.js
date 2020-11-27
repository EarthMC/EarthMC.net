// JS BY __Zuki__

const egg = document.querySelector(".fix_egg");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

egg.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Animation
    egg.classList.toggle("toggle");
});