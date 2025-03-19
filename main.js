const menuIcon = document.getElementById('menu-icon');
const sideBar = document.querySelector('.side-bar');

menuIcon.addEventListener('click', () => {
    sideBar.classList.toggle('hidden');
})

