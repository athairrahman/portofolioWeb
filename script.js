// Navbar Menu
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('#nav-list ul');

    hamburger.addEventListener('click', function () {
        navList.classList.toggle('active');
    });

    // Sembunyikan humburger pada layar yang lebih besar dari 768px
    if (window.innerWidth >= 769) {
        hamburger.style.display = 'none';
        navList.classList.remove('active')
    }
    
    // handler untuk merespon perubahan lebar layar 
    window.addEventListener('resize', function () {
        if (window.innerWidth >= 769) {
            hamburger.style.display = 'none';
            navList.classList.remove('active');
        } else {
            hamburger.style.display = 'block';
        }
    })
})

// scroll animate
const myTop = document.querySelector('.myTop');

window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myTop.style.display = "block";
    } else {
        myTop.style.display = 'none';
    }
})

myTop.addEventListener('click', function myTopEvent() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
} )

