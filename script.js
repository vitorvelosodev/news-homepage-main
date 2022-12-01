menu = document.querySelector('#menu-mobile');

function openMenu() {
    const menuBtn = document.querySelector('#menu-icon');
    menuBtn.addEventListener('click', (event) => {
        event.preventDefault();
        menu.style.opacity = 1;
        menu.style.visibility = 'visible';
        // menu.classList.remove('disabled-menu');
    });
}

function closeMenu() {
    const closeMenuBtn = document.querySelector('#close-btn');
    closeMenuBtn.addEventListener('click', (event) => {
        event.preventDefault();
        menu.style.opacity = 0;
        menu.style.visibility = 'hidden';
        // menu.classList.add('disabled-menu');
    });
}

openMenu();
closeMenu();
