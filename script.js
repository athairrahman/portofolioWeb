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