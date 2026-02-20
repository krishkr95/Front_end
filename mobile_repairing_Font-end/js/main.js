// Data Definitions
const services = [
    {
        title: "Screen Replacement",
        description: "Cracked or non-responsive screen? We replace it with high-quality displays in 30 minutes.",
        icon: "fa-mobile-alt",
        price: "From $49"
    },
    {
        title: "Battery Replacement",
        description: "Phone dying too fast? Get a new high-capacity battery and restore your device's life.",
        icon: "fa-battery-full",
        price: "From $29"
    },
    {
        title: "Water Damage Repair",
        description: "Dropped your phone in water? Our advanced ultrasonic cleaning can save your device.",
        icon: "fa-tint",
        price: "From $59"
    },
    {
        title: "Charging Port Fix",
        description: "Phone not charging? We can clean or replace your charging port quickly.",
        icon: "fa-bolt",
        price: "From $35"
    }
];

const testimonials = [
    {
        name: "John Doe",
        text: "Fixed my iPhone 13 screen in just 20 minutes. Highly professional and the best price in town!",
        rating: 5,
        role: "Graphic Designer"
    },
    {
        name: "Sarah Smith",
        text: "The battery replacement worked wonders. My phone feels like new again. Excellent service!",
        rating: 5,
        role: "Teacher"
    },
    {
        name: "Michael Chen",
        text: "They saved my phone after water damage. I thought it was gone forever. Thank you FixIt!",
        rating: 5,
        role: "Software Engineer"
    }
];

// Initialize UI Functions
document.addEventListener('DOMContentLoaded', () => {
    initStickyHeader();
    initMobileMenu();
    populateServices();
    populateTestimonials();
    initScrollAnimations();
});

// Sticky Header
function initStickyHeader() {
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.boxShadow = 'var(--shadow-md)';
        } else {
            header.style.padding = '0';
            header.style.boxShadow = 'none';
        }
    });
}

// Mobile Menu
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');

    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);

    // Populate Mobile Nav
    mobileNav.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
            <div class="logo"><i class="fas fa-mobile-alt"></i> <span>Fix</span>It</div>
            <button id="close-menu" style="background: none; font-size: 1.5rem;"><i class="fas fa-times"></i></button>
        </div>
        <ul style="display: flex; flex-direction: column; gap: 1.5rem;">
            <li><a href="index.html" style="font-size: 1.25rem; font-weight: 600;">Home</a></li>
            <li><a href="services.html" style="font-size: 1.25rem; font-weight: 600;">Services</a></li>
            <li><a href="pricing.html" style="font-size: 1.25rem; font-weight: 600;">Pricing</a></li>
            <li><a href="about.html" style="font-size: 1.25rem; font-weight: 600;">About</a></li>
            <li><a href="gallery.html" style="font-size: 1.25rem; font-weight: 600;">Gallery</a></li>
            <li><a href="blog.html" style="font-size: 1.25rem; font-weight: 600;">Blog</a></li>
            <li><a href="faq.html" style="font-size: 1.25rem; font-weight: 600;">FAQ</a></li>
            <li><a href="contact.html" style="font-size: 1.25rem; font-weight: 600;">Contact</a></li>
        </ul>
        <div style="margin-top: 3rem;">
            <a href="booking.html" class="btn btn-primary" style="width: 100%;">Book Repair</a>
        </div>
    `;

    const closeBtn = document.getElementById('close-menu');

    const toggleMenu = () => {
        mobileNav.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    };

    menuBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
}

// Populate Services Snapshot
function populateServices() {
    const grid = document.getElementById('services-grid');
    if (!grid) return;

    grid.innerHTML = services.map(service => `
        <div class="service-card animate-on-scroll">
            <div class="service-icon">
                <i class="fas ${service.icon}"></i>
            </div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <div class="text-primary font-bold">${service.price}</div>
        </div>
    `).join('');
}

// Populate Testimonials
function populateTestimonials() {
    const slider = document.getElementById('testimonial-slider');
    if (!slider) return;

    slider.className = 'testimonial-grid'; // Using grid for simplicity in first pass
    slider.innerHTML = testimonials.map(t => `
        <div class="testimonial-card animate-on-scroll">
            <div class="stars">
                ${'<i class="fas fa-star"></i>'.repeat(t.rating)}
            </div>
            <p class="testimonial-text">${t.text}</p>
            <div class="customer-info">
                <div class="customer-avatar">
                    <i class="fas fa-user"></i>
                </div>
                <div>
                    <div class="customer-name">${t.name}</div>
                    <div class="customer-role">${t.role}</div>
                </div>
            </div>
        </div>
    `).join('');
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// Global UI Elements (WhatsApp & Back to Top)
document.addEventListener('DOMContentLoaded', () => {
    // WhatsApp Button
    const waBtn = document.createElement('a');
    waBtn.href = "https://wa.me/1234567890";
    waBtn.className = "whatsapp-float";
    waBtn.target = "_blank";
    waBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
    document.body.appendChild(waBtn);

    // Back to Top Button
    const bttBtn = document.createElement('button');
    bttBtn.className = "back-to-top";
    bttBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(bttBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            bttBtn.classList.add('active');
        } else {
            bttBtn.classList.remove('active');
        }
    });

    bttBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    initCounter();
});

// Counter Animation
function initCounter() {
    const counters = document.querySelectorAll('.counter-item h3');
    const speed = 200;

    const startCounter = (counter) => {
        const targetStr = counter.innerText;
        const target = +targetStr.replace(/[^0-9]/g, '');
        const suffix = targetStr.replace(/[0-9]/g, '');
        let count = 0;

        const updateCount = () => {
            const inc = target / speed;
            if (count < target) {
                count += inc;
                counter.innerText = Math.ceil(count) + suffix;
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target + suffix;
            }
        };
        updateCount();
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 1 });

    counters.forEach(c => observer.observe(c));
}

