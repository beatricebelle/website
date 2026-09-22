document.addEventListener("DOMContentLoaded", () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    // 1. Mobile Hamburger Menu Toggle
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('toggle-active');
        navMenu.classList.toggle('nav-active');
    });

    // 2. Smooth Scrolling for Navigation Links & Auto-close Mobile Menu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

            // Close the mobile menu when a link is clicked
            if (navMenu.classList.contains('nav-active')) {
                mobileMenu.classList.remove('toggle-active');
                navMenu.classList.remove('nav-active');
            }
        });
    });

    // 3. Scroll Event for Top-Left Nav Logo Appearance
    const navLogo = document.getElementById('nav-logo');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > window.innerHeight * 0.3) {
            navLogo.classList.add('scrolled-visible');
        } else {
            navLogo.classList.remove('scrolled-visible');
        }
    });

    // 4. Intersection Observer for Scroll Animations
    const revealObserverOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.15 
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, revealObserverOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
});
