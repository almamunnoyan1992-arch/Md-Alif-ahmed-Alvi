// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Simple form validation
        if (name.trim() && email.trim() && message.trim()) {
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe skill cards and project cards
document.querySelectorAll('.skill-card, .project-card, .stat').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Add scroll effect to navbar
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        if (navbar) navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    } else {
        if (navbar) navbar.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Highlight active nav link based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Initialize AOS-like effect for hero
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '1';
    }
    
    // Load dynamic profile data on homepage
    loadProfileDataOnHome();
});

// Load profile data on homepage
function loadProfileDataOnHome() {
    const profileData = JSON.parse(localStorage.getItem('profileData')) || {
        fullName: 'MD Abdullah AL Alif',
        profession: 'Web Developer & Creative Thinker',
        bio: 'Crafting beautiful and functional web experiences.'
    };

    if (document.getElementById('heroName')) {
        document.getElementById('heroName').textContent = profileData.fullName;
    }
    if (document.getElementById('heroTitle')) {
        document.getElementById('heroTitle').textContent = profileData.profession;
    }
    if (document.getElementById('heroDesc')) {
        document.getElementById('heroDesc').textContent = profileData.bio;
    }

    if (document.getElementById('aboutPara1')) {
        document.getElementById('aboutPara1').textContent = profileData.bio;
    }
    if (document.getElementById('aboutPara2')) {
        document.getElementById('aboutPara2').textContent = 'My journey in web development started with a curiosity about how things work on the internet, and it has evolved into a professional career where I help businesses and individuals establish their digital presence.';
    }

    const contactInfo = JSON.parse(localStorage.getItem('contactInfo')) || {
        email: 'almamunfire10@gmail.com',
        mobile: '+8801611979710',
        location: 'Mymenshingh, Haluaghat'
    };

    const heroEmail = document.getElementById('heroEmail');
    const heroPhone = document.getElementById('heroPhone');
    const heroLocation = document.getElementById('heroLocation');
    const contactEmailLink = document.getElementById('contactEmailLink');
    const contactPhoneLink = document.getElementById('contactPhoneLink');
    const contactLocation = document.getElementById('contactLocation');

    if (heroEmail) {
        heroEmail.href = `mailto:${contactInfo.email}`;
        heroEmail.textContent = contactInfo.email;
    }
    if (heroPhone) {
        heroPhone.href = `tel:${contactInfo.mobile}`;
        heroPhone.textContent = contactInfo.mobile;
    }
    if (heroLocation) {
        heroLocation.textContent = contactInfo.location;
    }
    if (contactEmailLink) {
        contactEmailLink.href = `mailto:${contactInfo.email}`;
        contactEmailLink.textContent = contactInfo.email;
    }
    if (contactPhoneLink) {
        contactPhoneLink.href = `tel:${contactInfo.mobile}`;
        contactPhoneLink.textContent = contactInfo.mobile;
    }
    if (contactLocation) {
        contactLocation.textContent = contactInfo.location;
    }

    const bioSkills = JSON.parse(localStorage.getItem('bioSkills'));
    if (bioSkills && Array.isArray(bioSkills.skills) && bioSkills.skills.length) {
        renderHomeSkills(bioSkills.skills);
    }

    // Load profile picture
    const profilePic = localStorage.getItem('profilePic');
    const heroProfilePic = document.getElementById('heroProfilePic');
    const staticProfilePic = 'assets/profile.svg';
    if (profilePic && heroProfilePic) {
        heroProfilePic.innerHTML = `<img src="${profilePic}" alt="Profile Picture">`;
    } else if (heroProfilePic) {
        const testProfile = new Image();
        testProfile.onload = () => {
            heroProfilePic.innerHTML = `<img src="${staticProfilePic}" alt="Profile Picture">`;
        };
        testProfile.src = staticProfilePic;
    }

    // Load background picture
    const backgroundPic = localStorage.getItem('backgroundPic');
    const heroSection = document.getElementById('home');
    const staticBackgroundPic = 'assets/background.svg';
    if (backgroundPic && heroSection) {
        heroSection.style.backgroundImage = `url(${backgroundPic})`;
        heroSection.style.backgroundSize = 'cover';
        heroSection.style.backgroundPosition = 'center';
    } else if (heroSection) {
        const testBackground = new Image();
        testBackground.onload = () => {
            heroSection.style.backgroundImage = `url(${staticBackgroundPic})`;
            heroSection.style.backgroundSize = 'cover';
            heroSection.style.backgroundPosition = 'center';
        };
        testBackground.src = staticBackgroundPic;
    }
}

function renderHomeSkills(skills) {
    const skillsGrid = document.getElementById('skillsGrid');
    if (!skillsGrid) return;

    skillsGrid.innerHTML = skills.map(skill => `
        <div class="skill-card">
            <div class="skill-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h3>${skill}</h3>
            <p>Expertise in ${skill} development</p>
        </div>
    `).join('');
}

console.log('Portfolio website loaded successfully!');
