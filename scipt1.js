// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Sticky Navigation Bar
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Modal Functionality
const modal = document.getElementById("myModal");
const btn = document.querySelector(".cta"); // Contoh: tombol "Learn More"
const span = document.getElementsByClassName("close")[0];

// Buka modal saat tombol diklik
btn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = "block";
});

// Tutup modal saat tombol 'x' diklik
span.addEventListener('click', () => {
    modal.style.display = "none";
});

// Tutup modal saat klik di luar konten modal
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

// Dark Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Cek preferensi mode sebelumnya dari localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.src = 'assets/icons/moon.svg';
}

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.src = 'assets/icons/moon.svg';
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.src = 'assets/icons/sun.svg';
        localStorage.setItem('theme', 'light');
    }
});

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Initialize Swiper for Services
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    }
});

// Initialize Swiper for Testimonials
const testimonialSwiper = new Swiper('.testimonials-slider', {
    loop: true,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Toggle Menu for Mobile
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('show');
});

// Form Validation
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

const formSuccess = document.getElementById('form-success');
const formError = document.getElementById('form-error');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    let isValid = true;

    // Reset error messages
    nameError.style.display = 'none';
    emailError.style.display = 'none';
    messageError.style.display = 'none';
    formSuccess.style.display = 'none';
    formError.style.display = 'none';

    // Validasi Nama
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Please enter your name.';
        nameError.style.display = 'block';
        isValid = false;
    }

    // Validasi Email
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Please enter your email.';
        emailError.style.display = 'block';
        isValid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.display = 'block';
        isValid = false;
    }

    // Validasi Pesan
    if (messageInput.value.trim() === '') {
        messageError.textContent = 'Please enter your message.';
        messageError.style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        // Simulasi pengiriman form (Anda bisa menggantinya dengan AJAX atau metode lainnya)
        // Misalnya menggunakan fetch untuk mengirim data ke server
        // Di sini kita hanya menampilkan pesan sukses
        formSuccess.textContent = 'Your message has been sent successfully!';
        formSuccess.style.display = 'block';
        contactForm.reset();
    } else {
        formError.textContent = 'Please fix the errors above and try again.';
        formError.style.display = 'block';
    }
});

// Fungsi untuk memvalidasi format email
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}
