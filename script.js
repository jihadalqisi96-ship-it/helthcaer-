// Healthcare Guide Website - Professional JavaScript Implementation

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize Application
function initializeApp() {
    setupNavigation();
    setupSearch();
    setupExpandableSections();
    setupBackToTop();
    setupLazyLoading();
    setupHealthTips();
    setupMobileMenu();
}

// Navigation Setup
function setupNavigation() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            // Close mobile menu if open
            closeMobileMenu();
        });
    });
}

// Search Functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('nav a[href^="#"]');

            sections.forEach(section => {
                const content = section.textContent.toLowerCase();
                const isVisible = content.includes(query) || query === '';
                section.style.display = isVisible ? 'block' : 'none';

                // Update navigation highlighting
                const navLink = document.querySelector(`nav a[href="#${section.id}"]`);
                if (navLink) {
                    navLink.style.fontWeight = isVisible && query !== '' ? 'bold' : 'normal';
                    navLink.style.color = isVisible && query !== '' ? '#007bff' : 'white';
                }
            });
        });
    }
}

// Expandable Sections
function setupExpandableSections() {
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        const content = section.querySelector('p, ul, table');
        if (content && content.textContent.length > 300) {
            const readMoreBtn = document.createElement('button');
            readMoreBtn.textContent = 'Read More';
            readMoreBtn.className = 'read-more-btn';
            readMoreBtn.addEventListener('click', function() {
                if (content.classList.contains('expanded')) {
                    content.classList.remove('expanded');
                    this.textContent = 'Read More';
                } else {
                    content.classList.add('expanded');
                    this.textContent = 'Read Less';
                }
            });
            section.appendChild(readMoreBtn);
        }
    });
}

// Back to Top Button
function setupBackToTop() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'backToTop';
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.className = 'back-to-top';
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Lazy Loading for Images
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Health Tips Rotator
function setupHealthTips() {
    const tips = [
        "Stay hydrated: Drink at least 8 glasses of water daily.",
        "Exercise regularly: Aim for 30 minutes of moderate activity most days.",
        "Eat a balanced diet: Include fruits, vegetables, and whole grains.",
        "Get enough sleep: Adults need 7-9 hours per night.",
        "Practice stress management: Try meditation or deep breathing.",
        "Schedule regular check-ups: Prevention is key to good health."
    ];

    const tipElement = document.getElementById('healthTip');
    if (tipElement) {
        let currentTip = 0;
        setInterval(() => {
            tipElement.textContent = tips[currentTip];
            currentTip = (currentTip + 1) % tips.length;
        }, 5000);
    }
}



// Mobile Menu Setup
function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('nav ul');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }
}

function closeMobileMenu() {
    const nav = document.querySelector('nav ul');
    if (nav) {
        nav.classList.remove('active');
    }
}



// Show modal on page load
window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('welcomeModal').style.display = 'flex';
});

// Function to close welcome modal
function closeModal() {
    document.getElementById('welcomeModal').style.display = 'none';
}



// Function to open feedback modal
function openFeedbackModal() {
    document.getElementById('feedbackModal').style.display = 'flex';
}

// Function to close feedback modal
function closeFeedbackModal() {
    document.getElementById('feedbackModal').style.display = 'none';
}

// Handle feedback form submission
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Simulate sending feedback to email
    const name = document.querySelector('#feedbackForm input[type="text"]').value;
    const email = document.querySelector('#feedbackForm input[type="email"]').value;
    const feedback = document.querySelector('#feedbackForm textarea').value;

    // In a real application, this would use EmailJS or a backend service
    alert(`Thank you for your feedback, ${name}! Your message has been sent to jhadalqysy29@gmail.com.`);
    closeFeedbackModal();
});

// Close modals when clicking outside of them
window.onclick = function(event) {
    var welcomeModal = document.getElementById('welcomeModal');
    var feedbackModal = document.getElementById('feedbackModal');
    if (event.target == welcomeModal) {
        welcomeModal.style.display = 'none';
    }
    if (event.target == feedbackModal) {
        feedbackModal.style.display = 'none';
    }
}

// Function to toggle home section content
function toggleHomeContent() {
    const expandableContent = document.querySelector('#home .expandable-content');
    const readMoreBtn = document.querySelector('#home .read-more-btn');

    if (expandableContent.style.display === 'none' || expandableContent.style.display === '') {
        expandableContent.style.display = 'block';
        readMoreBtn.textContent = 'READ LESS';
    } else {
        expandableContent.style.display = 'none';
        readMoreBtn.textContent = 'READ MORE';
    }
}
