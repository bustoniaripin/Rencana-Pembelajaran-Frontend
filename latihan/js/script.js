const navbarNav = document.querySelector('.navbar-nav');
const humberMenu = document.querySelector('#humberger-menu');
document.querySelector('#humberger-menu') .onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik diluar navbar
document.addEventListener("click", (e) =>{
    if (!humberMenu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});
