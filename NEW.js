// Navigation Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const dropdowns = document.querySelectorAll('.dropdown');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            dropdown.classList.toggle('active');
            e.stopPropagation();
        }
    });
});

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
}

// Carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const carouselContent = document.querySelector('.carousel-content');

function showSlide(index) {
    carouselContent.style.transform = `translateX(-${index * 100}%)`;
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

showSlide(currentSlide);

// About Us Read More/Less
const aboutText = document.querySelector('.about-text');
const readMoreBtn = document.querySelector('.read-more-btn');
const readLessBtn = document.querySelector('.read-less-btn');

readMoreBtn.addEventListener('click', () => {
    aboutText.classList.add('expanded');
    readMoreBtn.style.display = 'none';
    readLessBtn.style.display = 'inline-block';
});

readLessBtn.addEventListener('click', () => {
    aboutText.classList.remove('expanded');
    readMoreBtn.style.display = 'inline-block';
    readLessBtn.style.display = 'none';
});