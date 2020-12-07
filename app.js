const navSlide = function(){
    const burger = document.querySelector(".hamburger");
    const nav = document.querySelector(".dropdown-menu");
    const dropdownItems = document.querySelectorAll('.dropdown-menu li')

    
    burger.addEventListener('click', function(){
        // * Toggle slider
        nav.classList.toggle('dropdown-menu-active');

        // * Animate links
        dropdownItems.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else{
                link.style.animation = `dropdownLinkFade 0.5s ease forwards ${index / 7 +0.3}s`;
            }
        });
    });

}

navSlide()