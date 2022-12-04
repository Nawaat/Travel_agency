const header = document.querySelector("header");

// Au scroll ajouter la class sticky au header 
window.addEventListener ("scroll",()=>{
    header.classList.toggle ("sticky", window.scrollY > 0)
})