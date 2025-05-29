window.addEventListener("scroll", function(){
    var head = this.document.querySelector("header");
    head.classList.toggle("sticky", this.window.scrollY > 0);
});

function toggleMenu() {
    var toggleMenu = document.querySelector(".toggle");
    var menu = document.querySelector(".menu");
    
    toggleMenu.classList.toggle("active");
    menu.classList.toggle("active");
}