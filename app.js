const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')

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
    document.querySelector('#about-section').scrollIntoView({behavior: 'smooth'})
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-section')
    const portfolioMenu = document.querySelector('#portfolio-section')
    const aboutMenu = document.querySelector('#about__me-section')
    let scrollPos = window.scrollY
    console.log(scrollPos);

    //Adds highlight class to menu items
    if(window.innerWidth > 960 && scrollPos < 600){
        homeMenu.classList.add('highlight')
        portfolioMenu.classList.remove('highlight')
        return
    } else if(window.innerWidth > 960 && scrollPos < 1400){
        portfolioMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        aboutMenu.classList.remove('highlight')
        return
    } else if(window.innerWidth > 960 && scrollPos < 2345){
        aboutMenu.classList.add('highlight')
        portfolioMenu.classList.remove('highlight')
        return
    }

    if(elem && window.innerWidth < 960 && scrollPos < 600 || elem){
        elem.classList.remove('highlight')
    }
};

window.addEventListener('scroll',highlightMenu)
window.addEventListener('click',highlightMenu)

