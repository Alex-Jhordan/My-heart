(function(){
    var hamburgerMenu = document.getElementById("hamburgerMenu");
    var navbar = document.getElementById("navbar");
    var closeIcon = document.getElementById("closeIcon");

    hamburgerMenu.addEventListener("click", function() {
        navbar.classList.toggle("navbarDisplay");
        closeIcon.classList.toggle("closeIconDisplay");
        hamburgerMenu.classList.toggle("hamburgerMenuDisplay");
    })

    closeIcon.addEventListener("click", function() {
        navbar.classList.toggle("navbarDisplay");
        closeIcon.classList.toggle("closeIconDisplay");
        hamburgerMenu.classList.toggle("hamburgerMenuDisplay");
    })
}())