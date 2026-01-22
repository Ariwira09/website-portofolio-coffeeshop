document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hover effect untuk menu item
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.borderColor = '#bc9667';
    });
    item.addEventListener('mouseleave', () => {
        item.style.borderColor = '#ccc';
    });
});

// Smooth Scroll (Tetap ada)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Slider Hero Logic
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    // Hilangkan class active dari slide yang sekarang
    slides[currentSlide].classList.remove('active');
    
    // Hitung index slide berikutnya
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Tambahkan class active ke slide baru
    slides[currentSlide].classList.add('active');
}

// Jalankan fungsi ganti slide setiap 5000ms (5 detik)
if (slides.length > 0) {
    setInterval(nextSlide, 5000);
}

/*animasi Tombol Mobile*/
