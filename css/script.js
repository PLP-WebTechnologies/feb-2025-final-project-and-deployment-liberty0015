// Hamburger Menu Toggle (for mobile)
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.createElement('button');
    navToggle.className = 'nav-toggle';
    navToggle.innerHTML = '☰';
    document.querySelector('header .container').prepend(navToggle);

    navToggle.addEventListener('click', () => {
        document.querySelector('nav ul').classList.toggle('show');
    });
});