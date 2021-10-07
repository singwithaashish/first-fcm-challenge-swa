const navMenu = document.querySelector('.nav-open')
const navToggler = document.querySelector('.menu-icon')

navToggler.addEventListener('click', () => {
    navMenu.classList.toggle('active')
})