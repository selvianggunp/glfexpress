const navbar = document.querySelector('#navbar-menu');
const menu = document.querySelector('#menu');
const icon = document.querySelector('#icon');

document.querySelector('#menu').onclick = (e) => {
    navbar.classList.toggle('active');
    e.preventDefault();
};

document.addEventListener('click', function(e){
    if (!navbar.contains(e.target) && !menu.contains(e.target)){
        navbar.classList.remove('active');
    }
})