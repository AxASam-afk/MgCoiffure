/**
 * MG COIFFURE - MAIN JAVASCRIPT
 * Animations GSAP, Three.js, Interactions
 */

// ============================================
// INITIALISATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initHero();
    initAnimations();
    initGalerie();
    initThreeJS();
    initScrollEffects();
});

// ============================================
// NAVIGATION
// ============================================

function initNavigation() {
    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = nav.offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu
                navMenu.classList.remove('active');
            }
        });
    });
}

// ============================================
// HERO SECTION
// ============================================

function initHero() {
    const heroImage = document.getElementById('heroImage');
    const heroContent = document.querySelector('.hero-content');
    
    // Parallax effect on hero image
    gsap.registerPlugin(ScrollTrigger);
    
    if (heroImage) {
        gsap.to(heroImage, {
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            },
            scale: 1.2,
            y: 100
        });
    }
    
    // Hero content fade in
    gsap.from(heroContent.children, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.5
    });
}

// ============================================
// THREE.JS - 3D EFFECTS
// ============================================

function initThreeJS() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Particles system
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 200;
    const posArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 20;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.05,
        color: 0xd4af37,
        transparent: true,
        opacity: 0.6
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    camera.position.z = 5;
    
    // Animation
    function animate() {
        requestAnimationFrame(animate);
        
        particlesMesh.rotation.y += 0.001;
        particlesMesh.rotation.x += 0.0005;
        
        renderer.render(scene, camera);
    }
    
    animate();
    
    // Handle resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
    
    // Logo 3D effect
    const logo3D = document.getElementById('heroLogo3D');
    if (logo3D) {
        gsap.to(logo3D, {
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            },
            rotationY: 15,
            rotationX: -5,
            scale: 0.8,
            opacity: 0
        });
    }
}

// ============================================
// GSAP ANIMATIONS
// ============================================

function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate elements on scroll
    const animatedElements = document.querySelectorAll('[data-animation]');
    
    animatedElements.forEach((element, index) => {
        const animationType = element.getAttribute('data-animation');
        const delay = parseFloat(element.getAttribute('data-delay')) || 0;
        
        let animationProps = {
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            delay: delay,
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        };
        
        switch (animationType) {
            case 'fade-up':
                animationProps.y = 0;
                gsap.from(element, animationProps);
                break;
            case 'fade-right':
                animationProps.x = 0;
                gsap.from(element, animationProps);
                break;
            case 'fade-left':
                animationProps.x = 0;
                gsap.from(element, animationProps);
                break;
        }
    });
    
    // Salon cards 3D effect
    const salonCards = document.querySelectorAll('.salon-card');
    salonCards.forEach(card => {
        const cardWrapper = card.querySelector('.card-3d-wrapper');
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            gsap.to(cardWrapper, {
                duration: 0.3,
                rotateX: rotateX,
                rotateY: rotateY,
                transformPerspective: 1000
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(cardWrapper, {
                duration: 0.5,
                rotateX: 0,
                rotateY: 0
            });
        });
    });
    
    // Carte cards 3D effect
    const carteCards = document.querySelectorAll('.carte-card');
    carteCards.forEach(card => {
        const cardWrapper = card.querySelector('.carte-3d-wrapper');
        
        ScrollTrigger.create({
            trigger: card,
            start: 'top 80%',
            onEnter: () => {
                gsap.from(cardWrapper, {
                    rotationY: -30,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out'
                });
            }
        });
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;
            
            gsap.to(cardWrapper, {
                duration: 0.3,
                rotateX: rotateX,
                rotateY: rotateY,
                transformPerspective: 1000
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(cardWrapper, {
                duration: 0.5,
                rotateX: 0,
                rotateY: 0
            });
        });
    });
    
    // Services before/after animation
    const servicesVisual = document.querySelector('.services-visual');
    if (servicesVisual) {
        ScrollTrigger.create({
            trigger: servicesVisual,
            start: 'top 70%',
            onEnter: () => {
                gsap.from(servicesVisual, {
                    scale: 0.8,
                    opacity: 0,
                    duration: 1.5,
                    ease: 'power3.out'
                });
            }
        });
    }
    
    // Coffrets slider animation
    const coffretsItems = document.querySelectorAll('.coffret-item');
    coffretsItems.forEach((item, index) => {
        ScrollTrigger.create({
            trigger: item,
            start: 'top 80%',
            onEnter: () => {
                gsap.from(item, {
                    x: index % 2 === 0 ? -100 : 100,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out',
                    delay: index * 0.1
                });
            }
        });
    });
    
    // Fusion timeline animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        ScrollTrigger.create({
            trigger: item,
            start: 'top 80%',
            onEnter: () => {
                gsap.from(item, {
                    scale: 0,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'back.out(1.7)',
                    delay: index * 0.2
                });
            }
        });
    });
}

// ============================================
// SCROLL EFFECTS
// ============================================

function initScrollEffects() {
    // Parallax for sections
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionImage = section.querySelector('.image-placeholder');
        
        if (sectionImage) {
            gsap.to(sectionImage, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                },
                y: 100,
                scale: 1.1
            });
        }
    });
    
    // Zoom effect on scroll
    const zoomElements = document.querySelectorAll('.card-image, .coffret-image');
    zoomElements.forEach(element => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: true
            },
            scale: 1.05
        });
    });
}

// ============================================
// GALERIE LIGHTBOX
// ============================================

function initGalerie() {
    const galerieItems = document.querySelectorAll('.galerie-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    
    let currentImageIndex = 0;
    const images = Array.from(galerieItems).map(item => {
        const img = item.querySelector('.image-placeholder');
        return img ? window.getComputedStyle(img).backgroundImage.slice(5, -2).replace(/"/g, '') : null;
    }).filter(Boolean);
    
    // Open lightbox
    galerieItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentImageIndex = index;
            openLightbox();
        });
    });
    
    function openLightbox() {
        if (images[currentImageIndex]) {
            lightboxImage.src = images[currentImageIndex];
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Animation
            gsap.from(lightboxImage, {
                scale: 0.8,
                opacity: 0,
                duration: 0.5,
                ease: 'power3.out'
            });
        }
    }
    
    function closeLightbox() {
        gsap.to(lightboxImage, {
            scale: 0.8,
            opacity: 0,
            duration: 0.3,
            ease: 'power2.in',
            onComplete: () => {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateLightboxImage();
    }
    
    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateLightboxImage();
    }
    
    function updateLightboxImage() {
        gsap.to(lightboxImage, {
            opacity: 0,
            scale: 0.8,
            duration: 0.2,
            onComplete: () => {
                lightboxImage.src = images[currentImageIndex];
                gsap.to(lightboxImage, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.3
                });
            }
        });
    }
    
    // Event listeners
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    
    if (lightboxNext) {
        lightboxNext.addEventListener('click', showNextImage);
    }
    
    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', showPrevImage);
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            } else if (e.key === 'ArrowLeft') {
                showPrevImage();
            }
        }
    });
    
    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

// ============================================
// IMAGE ERROR HANDLING
// ============================================

// Handle missing images gracefully
function handleImageErrors() {
    const imagePlaceholders = document.querySelectorAll('.image-placeholder');
    
    imagePlaceholders.forEach(placeholder => {
        const bgImage = window.getComputedStyle(placeholder).backgroundImage;
        
        if (bgImage && bgImage !== 'none') {
            const imgUrl = bgImage.slice(5, -2).replace(/"/g, '');
            const img = new Image();
            
            img.onerror = () => {
                // Image failed to load - apply fallback style
                placeholder.style.backgroundColor = 'var(--color-brown-light)';
                placeholder.style.backgroundImage = 'none';
                placeholder.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: rgba(255,255,255,0.5); font-size: 0.9rem;">Image à venir</div>';
            };
            
            img.src = imgUrl;
        }
    });
}

// Initialize image error handling
handleImageErrors();

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Smooth scroll polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15/dist/smooth-scroll.polyfills.min.js';
    document.head.appendChild(script);
}

