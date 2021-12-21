const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')


// Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// Scroll to Portfolio
function ScrollToPortfolio(){
    document.querySelector('.services').scrollIntoView({behavior: 'smooth'})
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

//Scroll to Home
function ScrollToHome(){
    document.querySelector('#home').scrollIntoView({behavior: 'smooth'})
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

//Scroll to About
function ScrollToAbout(){
    document.querySelector('#img').scrollIntoView({behavior: 'smooth'})
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}