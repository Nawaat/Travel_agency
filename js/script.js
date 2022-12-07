const header = document.querySelector("header");

// Au scroll ajouter la class sticky au header 
window.addEventListener ("scroll",()=>{
    header.classList.toggle ("sticky", window.scrollY > 0)
})

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Au click sur l'icon menu ouvrir la navbar
menu.addEventListener("click", ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
})
