const progress = document.querySelector('.progress');
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) } }), { threshold: .12 });
reveals.forEach(el => observer.observe(el));
window.addEventListener('scroll', () => { const max = document.documentElement.scrollHeight - innerHeight; progress.style.width = (max > 0 ? scrollY / max * 100 : 0) + '%' });
const navLinks = document.querySelectorAll('.desktop-nav a');
const sections = [...document.querySelectorAll('main section[id]')];
window.addEventListener('scroll', () => { let current = 'home'; for (const s of sections) { if (scrollY >= s.offsetTop - 180) current = s.id } navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current)) }, { passive: true });
// Mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const desktopNav = document.querySelector('.desktop-nav');

if (menuToggle && desktopNav) {
    menuToggle.addEventListener('click', () => {
        desktopNav.classList.toggle('mobile-open');

        const isOpen = desktopNav.classList.contains('mobile-open');
        menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    // Close menu after selecting a link
    desktopNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            desktopNav.classList.remove('mobile-open');
            menuToggle.setAttribute('aria-label', 'Open menu');
        });
    });
}
