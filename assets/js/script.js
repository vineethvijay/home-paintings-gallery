// Painting collection - Van Gogh inspired artwork by Aamy
const paintings = [
    {
        id: 1,
        title: "Starry Night Dreams",
        description: "A mesmerizing interpretation of the night sky with swirling clouds and brilliant stars. This iconic composition brings celestial wonder and movement to any space, perfect for creating a focal point that inspires imagination.",
        price: "$450",
        size: "24\" x 30\"",
        medium: "Oil on Canvas",
        image: "assets/images/painting1.jpg",
        featured: true
    },
    {
        id: 2,
        title: "Wheat Field Serenity",
        description: "Golden wheat fields under a dramatic sky, capturing the beauty of rural landscapes. The dynamic brushwork and warm earth tones create a sense of movement and natural harmony ideal for living spaces.",
        price: "$380",
        size: "20\" x 28\"",
        medium: "Oil on Canvas",
        image: "assets/images/painting2.jpg",
        featured: true
    },
    {
        id: 3,
        title: "The Olive Grove",
        description: "Peaceful olive trees with characteristic twisted trunks and silvery leaves. The interplay of light and shadow creates a Mediterranean atmosphere that brings tranquility and natural beauty indoors.",
        price: "$420",
        size: "22\" x 26\"",
        medium: "Oil on Canvas",
        image: "assets/images/painting3.jpg",
        featured: true
    },
    {
        id: 4,
        title: "Pink Orchard Blossoms",
        description: "Delicate pink blossoms on flowering fruit trees, celebrating the renewal of spring. The soft pastels and gentle brushwork create a romantic, uplifting atmosphere perfect for bedrooms or intimate spaces.",
        price: "$360",
        size: "18\" x 24\"",
        medium: "Oil on Canvas",
        image: "assets/images/painting4.jpg",
        featured: false
    },
    {
        id: 5,
        title: "The Sower at Sunset",
        description: "A solitary figure sowing seeds against a magnificent sunset backdrop. This powerful composition speaks to themes of hope, growth, and the eternal cycle of life, making it a meaningful addition to any home.",
        price: "$400",
        size: "20\" x 24\"",
        medium: "Oil on Canvas",
        image: "assets/images/painting5.jpg",
        featured: true
    },
    {
        id: 6,
        title: "House at Auvers",
        description: "A charming countryside home with distinctive thatched roof and rustic charm. The bold colors and expressive brushwork capture the essence of rural French architecture and peaceful village life.",
        price: "$340",
        size: "18\" x 22\"",
        medium: "Oil on Canvas",
        image: "assets/images/painting6.jpg",
        featured: false
    }
];

// DOM Elements
const galleryGrid = document.getElementById('galleryGrid');
const modal = document.getElementById('paintingModal');
const modalClose = document.querySelector('.modal-close');
const contactForm = document.getElementById('contactForm');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    loadGallery();
    initializeModal();
    initializeContactForm();
    initializeNavigation();
    initializeScrollAnimations();
    initializeSmoothScrolling();
    initializeGalleryFilters();
    initializeContactFormPrefill();
});

// Load gallery items
function loadGallery() {
    if (!galleryGrid) return;
    
    galleryGrid.innerHTML = '';
    
    paintings.forEach(painting => {
        const galleryItem = createGalleryItem(painting);
        galleryGrid.appendChild(galleryItem);
    });
}

// Create gallery item HTML
function createGalleryItem(painting) {
    const item = document.createElement('div');
    item.className = 'gallery-item fade-in';
    item.setAttribute('data-painting-id', painting.id);
    
    item.innerHTML = `
        <img src="${painting.image}" alt="${painting.title}" loading="lazy" 
             onerror="this.src='assets/images/placeholder.jpg'">
        <div class="gallery-overlay">
            <h3 class="gallery-title">${painting.title}</h3>
            <p class="gallery-price">${painting.price}</p>
            <p class="gallery-description">${painting.description}</p>
        </div>
    `;
    
    item.addEventListener('click', () => openModal(painting.id));
    
    return item;
}

// Modal functionality
function initializeModal() {
    if (!modal) return;
    
    // Close modal when clicking the X
    modalClose?.addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}

function openModal(paintingId) {
    const painting = paintings.find(p => p.id === paintingId);
    if (!painting) return;
    
    // Update modal content
    document.getElementById('modalImage').src = painting.image;
    document.getElementById('modalImage').alt = painting.title;
    document.getElementById('modalTitle').textContent = painting.title;
    document.getElementById('modalDescription').textContent = painting.description;
    document.getElementById('modalSize').textContent = painting.size;
    document.getElementById('modalMedium').textContent = painting.medium;
    document.getElementById('modalPrice').textContent = painting.price;
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add animation class
    setTimeout(() => {
        modal.querySelector('.modal-content').style.transform = 'scale(1)';
        modal.querySelector('.modal-content').style.opacity = '1';
    }, 10);
}

function closeModal() {
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.transform = 'scale(0.9)';
    modalContent.style.opacity = '0';
    
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

function openInquiry() {
    closeModal();
    
    // Get painting title for pre-filling
    const paintingTitle = document.getElementById('modalTitle').textContent;
    
    // Redirect to contact page with painting info
    const contactUrl = `contact.html?painting=${encodeURIComponent(paintingTitle)}`;
    window.location.href = contactUrl;
}

// Contact form functionality
function initializeContactForm() {
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Show loading state
        const submitButton = contactForm.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        submitButton.innerHTML = '<span class="loading"></span> Sending...';
        submitButton.disabled = true;
        
        // Simulate form submission (replace with actual form handling)
        setTimeout(() => {
            // Create mailto link
            const subject = `Art Inquiry: ${data.inquiry}`;
            const body = `Name: ${data.name}%0D%0AEmail: ${data.email}%0D%0AInquiry Type: ${data.inquiry}%0D%0A%0D%0AMessage:%0D%0A${data.message}`;
            const mailtoLink = `mailto:artist@example.com?subject=${encodeURIComponent(subject)}&body=${body}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Reset form
            contactForm.reset();
            
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            
            // Show success message
            showNotification('Thank you! Your message has been prepared in your email client.', 'success');
            
        }, 1500);
    });
}

// Navigation functionality
function initializeNavigation() {
    if (!navToggle || !navMenu) return;
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
}

// Scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 70; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Utility function for notifications
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '16px 24px',
        background: type === 'success' ? '#4CAF50' : '#2196F3',
        color: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        zIndex: '3000',
        transform: 'translateX(400px)',
        transition: 'transform 0.3s ease'
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Lazy loading for images
function initializeLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// Filter functionality (for future enhancement)
function filterGallery(category = 'all') {
    const items = document.querySelectorAll('.gallery-item');
    
    items.forEach(item => {
        const paintingId = parseInt(item.dataset.paintingId);
        const painting = paintings.find(p => p.id === paintingId);
        
        if (category === 'all' || 
            (category === 'featured' && painting.featured) ||
            (category === 'available' && !painting.sold)) {
            item.style.display = 'block';
            item.classList.add('fade-in');
        } else {
            item.style.display = 'none';
        }
    });
}

// Search functionality (for future enhancement)
function searchGallery(query) {
    const items = document.querySelectorAll('.gallery-item');
    const searchTerm = query.toLowerCase();
    
    items.forEach(item => {
        const paintingId = parseInt(item.dataset.paintingId);
        const painting = paintings.find(p => p.id === paintingId);
        
        const matchesSearch = painting.title.toLowerCase().includes(searchTerm) ||
                             painting.description.toLowerCase().includes(searchTerm) ||
                             painting.medium.toLowerCase().includes(searchTerm);
        
        if (matchesSearch || searchTerm === '') {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Performance optimization: Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
window.addEventListener('resize', debounce(() => {
    // Recalculate any layout-dependent functionality
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
}, 250));

// Preload critical images
function preloadImages() {
    const criticalImages = [
        'assets/images/hero-painting.jpg',
        'assets/images/painting1.jpg',
        'assets/images/painting2.jpg'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize preloading
preloadImages();

// Gallery filter functionality
function initializeGalleryFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter gallery
            const filter = this.dataset.filter;
            filterGallery(filter);
        });
    });
}

// Enhanced filter functionality
function filterGallery(category = 'all') {
    const items = document.querySelectorAll('.gallery-item');
    
    items.forEach(item => {
        const paintingId = parseInt(item.dataset.paintingId);
        const painting = paintings.find(p => p.id === paintingId);
        
        let shouldShow = false;
        
        if (category === 'all') {
            shouldShow = true;
        } else if (category === 'featured' && painting.featured) {
            shouldShow = true;
        } else if (category === 'acrylic' && painting.medium.toLowerCase().includes('acrylic')) {
            shouldShow = true;
        } else if (category === 'oil' && painting.medium.toLowerCase().includes('oil')) {
            shouldShow = true;
        } else if (category === 'watercolor' && painting.medium.toLowerCase().includes('watercolor')) {
            shouldShow = true;
        }
        
        if (shouldShow) {
            item.style.display = 'block';
            item.classList.add('fade-in');
        } else {
            item.style.display = 'none';
        }
    });
}

// Contact form pre-fill functionality
function initializeContactFormPrefill() {
    // Check if we're on the contact page and have painting info in URL
    const urlParams = new URLSearchParams(window.location.search);
    const paintingName = urlParams.get('painting');
    
    if (paintingName && contactForm) {
        setTimeout(() => {
            const inquirySelect = document.getElementById('inquiry');
            const messageField = document.getElementById('message');
            const subjectField = document.getElementById('subject');
            
            if (inquirySelect) {
                inquirySelect.value = 'purchase';
            }
            
            if (subjectField) {
                subjectField.value = `Inquiry about "${paintingName}"`;
            }
            
            if (messageField) {
                messageField.value = `Hi Aamy! I'm interested in "${paintingName}". Could you please provide more details about availability, shipping, and any additional information about this piece?`;
                messageField.focus();
            }
        }, 500);
    }
}
