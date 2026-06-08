const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let current = 0;

function goToSlide(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');

    current = index;

    slides[current].classList.add('active');
    dots[current].classList.add('active');
}

function nextSlide() {
    let nextIndex = (current +1) % slides.length;
    goToSlide(nextIndex);
}

function prevSlide() {
    let prevIndex = (current -1 + slides.length) % slides.length;
    goToSlide(prevIndex);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

setInterval(nextSlide, 4000);