let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function prevSlide() {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    items[currentIndex].classList.add('active');
}

function nextSlide() {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add('active');
}
