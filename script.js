let menu = document.querySelector('menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick =() =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('bx-x');
}; 
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}