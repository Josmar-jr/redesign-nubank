// ==================== SCROLL HEADER ====================
function scrollHeader() {
    const nav = document.getElementById('header')
    
    if (this.scrollY >= 50) nav.classList.add('active-header'); else nav.classList.remove('active-header')
}

window.addEventListener('scroll', scrollHeader)

// ==================== DROPDOWN MENU ====================

const menuDropDown = document.querySelectorAll('.nav-link-desktop');
const dropDown = document.querySelectorAll('.dropdown-menu');

menuDropDown.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        showDrop(index);
    });
})

dropDown.forEach((item) => {
    item.addEventListener('mouseleave', () => {
        removeDrop(item);
    });
})

function removeDrop(item) {
    item.classList.remove('active-dropdown-menu');
}

function showDrop(index) {
    dropDown.forEach((item) => {
        item.classList.remove('active-dropdown-menu');
    })
    dropDown[index].classList.toggle('active-dropdown-menu');
}

// ==================== MENU MOBILE ====================
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('active-menu-mobile')
            toggle.classList.toggle('active-bx')
        })
    }
}

showMenu('bx', 'menu-mobile')