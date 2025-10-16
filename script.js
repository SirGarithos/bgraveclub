/**
 * Belgrade Rave Club - Main JavaScript
 *
 * This file handles all dynamic content loading and interactivity.
 * Content is loaded from config.js for easy customization.
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get config from global scope
  const config = window.CLUB_CONFIG;

  // Initialize all components
  initNavigation();
  loadAboutSection();
  loadDJSection();
  loadGallery();
  loadEvents();
  loadFooter();
  initLightbox();
  initScrollAnimations();
  initMobileMenu();
  initBackgroundRotation();
});

// ==================== NAVIGATION ====================
function initNavigation() {
  const navLinks = document.querySelectorAll('nav a');
  const header = document.getElementById('header');

  // Smooth scrolling for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        // Add active class to clicked link
        this.classList.add('active');

        // Smooth scroll to section
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Close mobile menu if open
        const nav = document.getElementById('nav');
        if (nav.classList.contains('active')) {
          nav.classList.remove('active');
        }
      }
    });
  });

  // Header background on scroll
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Update active nav link based on scroll position
    updateActiveNavOnScroll();
  });

  // Scroll indicator
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function() {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

function updateActiveNavOnScroll() {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('nav a');

  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 200) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + currentSection) {
      link.classList.add('active');
    }
  });
}

// ==================== MOBILE MENU ====================
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
      this.classList.toggle('active');

      // Change icon
      const icon = this.querySelector('i');
      if (nav.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }
}

// ==================== ABOUT SECTION ====================
function loadAboutSection() {
  const config = window.CLUB_CONFIG;
  const aboutTextContainer = document.getElementById('about-text');
  const aboutFeaturesContainer = document.getElementById('about-features');
  const aboutLocationContainer = document.getElementById('about-location');

  // Load about text
  if (aboutTextContainer && config.about) {
    let aboutHTML = '';
    config.about.paragraphs.forEach(paragraph => {
      aboutHTML += `<p>${paragraph}</p>`;
    });
    aboutTextContainer.innerHTML = aboutHTML;
  }

  // Load features
  if (aboutFeaturesContainer && config.about.features) {
    let featuresHTML = '<div class="features-grid">';
    config.about.features.forEach(feature => {
      featuresHTML += `
        <div class="feature-card">
          <i class="fas ${feature.icon}"></i>
          <h3>${feature.title}</h3>
          <p>${feature.description}</p>
        </div>
      `;
    });
    featuresHTML += '</div>';
    aboutFeaturesContainer.innerHTML = featuresHTML;
  }

  // Load location
  if (aboutLocationContainer && config.about.location) {
    const loc = config.about.location;
    aboutLocationContainer.innerHTML = `
      <div class="location-card">
        <i class="fas fa-map-marker-alt"></i>
        <div class="location-info">
          <h3>Find Us</h3>
          <p>${loc.address}</p>
          <p>${loc.city}</p>
          <p class="directions">${loc.directions}</p>
        </div>
      </div>
    `;
  }
}

// ==================== DJ SECTION ====================
function loadDJSection() {
  const config = window.CLUB_CONFIG;
  const djsGrid = document.getElementById('djs-grid');

  if (!djsGrid || !config.djs) return;

  let djsHTML = '';

  config.djs.forEach((dj, index) => {
    // Build social links
    let socialLinksHTML = '<div class="dj-social">';
    for (const [platform, url] of Object.entries(dj.socialLinks)) {
      let icon = platform;
      // Map platform names to Font Awesome icons
      if (platform === 'soundcloud') icon = 'soundcloud';
      else if (platform === 'instagram') icon = 'instagram';
      else if (platform === 'facebook') icon = 'facebook-f';
      else if (platform === 'twitter') icon = 'twitter';
      else if (platform === 'youtube') icon = 'youtube';
      else if (platform === 'spotify') icon = 'spotify';
      else if (platform === 'beatport') icon = 'music';
      else if (platform === 'mixcloud') icon = 'mixcloud';

      socialLinksHTML += `<a href="${url}" target="_blank" rel="noopener"><i class="fab fa-${icon}"></i></a>`;
    }
    socialLinksHTML += '</div>';

    // Use first image from images array, fallback to single image property
    const initialImage = (dj.images && dj.images.length > 0) ? dj.images[0] : dj.image;

    djsHTML += `
      <div class="dj-card" data-aos="fade-up" data-aos-delay="${index * 100}" data-dj-id="${dj.id}">
        <div class="dj-image">
          <img src="${initialImage}" alt="${dj.name}" class="dj-rotating-image" onerror="this.src='https://via.placeholder.com/500x500/1a1a1a/ff00cc?text=${encodeURIComponent(dj.name)}'">
          <div class="dj-overlay">
            ${socialLinksHTML}
          </div>
        </div>
        <div class="dj-info">
          <h3>${dj.name}</h3>
          <p class="dj-genre">${dj.genre}</p>
          <p class="dj-bio">${dj.bio}</p>
        </div>
      </div>
    `;
  });

  djsGrid.innerHTML = djsHTML;

  // Initialize image rotation after DJ cards are loaded
  initDJImageRotation();
}

// ==================== DJ IMAGE ROTATION ====================
function initDJImageRotation() {
  const config = window.CLUB_CONFIG;

  // Store rotation state for each DJ
  const djRotationState = {};

  // Initialize rotation state and preload images for each DJ
  config.djs.forEach(dj => {
    // Only set up rotation if DJ has multiple images
    if (dj.images && dj.images.length > 1) {
      djRotationState[dj.id] = {
        currentIndex: 0,
        images: dj.images,
        preloadedImages: []
      };

      // Preload all images for smooth transitions
      dj.images.forEach(imageSrc => {
        const img = new Image();
        img.src = imageSrc;
        djRotationState[dj.id].preloadedImages.push(img);
      });
    }
  });

  // Set up rotation interval (5 seconds = 5000ms)
  setInterval(() => {
    config.djs.forEach(dj => {
      // Only rotate if DJ has multiple images
      if (djRotationState[dj.id]) {
        const state = djRotationState[dj.id];

        // Move to next image
        state.currentIndex = (state.currentIndex + 1) % state.images.length;

        // Find the DJ card and update the image
        const djCard = document.querySelector(`.dj-card[data-dj-id="${dj.id}"]`);
        if (djCard) {
          const imgElement = djCard.querySelector('.dj-rotating-image');
          if (imgElement) {
            // Add fade effect for smooth transition
            imgElement.style.opacity = '0';

            setTimeout(() => {
              imgElement.src = state.images[state.currentIndex];
              imgElement.style.opacity = '1';
            }, 300); // Wait for fade out before changing image
          }
        }
      }
    });
  }, 5000); // Rotate every 5 seconds
}

// ==================== GALLERY SECTION ====================
function loadGallery() {
  const config = window.CLUB_CONFIG;
  const galleryGrid = document.getElementById('gallery-grid');

  if (!galleryGrid || !config.gallery) return;

  let galleryHTML = '';

  config.gallery.forEach((image, index) => {
    galleryHTML += `
      <div class="gallery-item" data-index="${index}" data-aos="zoom-in" data-aos-delay="${(index % 4) * 50}">
        <img src="${image.src}" alt="${image.alt}" loading="lazy" onerror="this.src='https://via.placeholder.com/800x600/1a1a1a/ff00cc?text=Party+${image.id}'">
        <div class="gallery-overlay">
          <i class="fas fa-search-plus"></i>
        </div>
      </div>
    `;
  });

  galleryGrid.innerHTML = galleryHTML;

  // Add click event to gallery items
  const galleryItems = galleryGrid.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.addEventListener('click', function() {
      const index = parseInt(this.getAttribute('data-index'));
      openLightbox(index);
    });
  });
}

// ==================== LIGHTBOX ====================
let currentLightboxIndex = 0;

function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', () => navigateLightbox(1));
  }

  // Close lightbox on background click
  if (lightbox) {
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (lightbox && lightbox.classList.contains('active')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
      if (e.key === 'ArrowRight') navigateLightbox(1);
    }
  });
}

function openLightbox(index) {
  const config = window.CLUB_CONFIG;
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');

  if (!config.gallery || !config.gallery[index]) return;

  currentLightboxIndex = index;
  const image = config.gallery[index];

  lightboxImg.src = image.src;
  lightboxImg.alt = image.alt;
  lightboxCaption.textContent = image.caption || image.alt;

  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('active');
  document.body.style.overflow = ''; // Restore scrolling
}

function navigateLightbox(direction) {
  const config = window.CLUB_CONFIG;
  const totalImages = config.gallery.length;

  currentLightboxIndex += direction;

  // Loop around
  if (currentLightboxIndex < 0) {
    currentLightboxIndex = totalImages - 1;
  } else if (currentLightboxIndex >= totalImages) {
    currentLightboxIndex = 0;
  }

  const image = config.gallery[currentLightboxIndex];
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');

  lightboxImg.src = image.src;
  lightboxImg.alt = image.alt;
  lightboxCaption.textContent = image.caption || image.alt;
}

// ==================== EVENTS SECTION ====================
function loadEvents() {
  const config = window.CLUB_CONFIG;
  const eventsGrid = document.getElementById('events-grid');

  if (!eventsGrid || !config.events) return;

  let eventsHTML = '';

  config.events.forEach((event, index) => {
    eventsHTML += `
      <div class="event-card" data-aos="fade-up" data-aos-delay="${index * 100}">
        <div class="event-date">
          <span class="date-day">${formatEventDate(event.date).day}</span>
          <span class="date-month">${formatEventDate(event.date).month}</span>
        </div>
        <div class="event-info">
          <h3>${event.title}</h3>
          <p class="event-time"><i class="far fa-clock"></i> ${event.time}</p>
          <p class="event-lineup"><strong>Lineup:</strong> ${event.lineup.join(', ')}</p>
          <p class="event-description">${event.description}</p>
          <a href="${event.ticketLink}" class="btn btn-primary">Get Tickets</a>
        </div>
      </div>
    `;
  });

  eventsGrid.innerHTML = eventsHTML;
}

function formatEventDate(dateString) {
  const date = new Date(dateString);
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  return {
    day: date.getDate(),
    month: months[date.getMonth()]
  };
}

// ==================== FOOTER ====================
function loadFooter() {
  const config = window.CLUB_CONFIG;
  const footerContact = document.getElementById('footer-contact');
  const footerSocial = document.getElementById('footer-social');

  // Load contact info
  if (footerContact && config.contact) {
    footerContact.innerHTML = `
      <p><i class="fas fa-envelope"></i> ${config.contact.email}</p>
      <p><i class="fas fa-phone"></i> ${config.contact.phone}</p>
    `;
  }

  // Load social media icons
  if (footerSocial && config.socialMedia) {
    let socialHTML = '';
    for (const [platform, url] of Object.entries(config.socialMedia)) {
      let icon = platform;
      // Map platform names to Font Awesome icons
      if (platform === 'facebook') icon = 'facebook-f';
      else if (platform === 'twitter') icon = 'twitter';
      else if (platform === 'instagram') icon = 'instagram';
      else if (platform === 'soundcloud') icon = 'soundcloud';
      else if (platform === 'youtube') icon = 'youtube';
      else if (platform === 'tiktok') icon = 'tiktok';

      socialHTML += `<a href="${url}" target="_blank" rel="noopener"><i class="fab fa-${icon}"></i></a>`;
    }
    footerSocial.innerHTML = socialHTML;
  }
}

// ==================== SCROLL ANIMATIONS ====================
function initScrollAnimations() {
  // Simple scroll fade-in animation for elements with data-aos attribute
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
      }
    });
  }, observerOptions);

  // Observe all elements with data-aos attribute
  document.querySelectorAll('[data-aos]').forEach(element => {
    observer.observe(element);
  });
}

// ==================== UTILITY FUNCTIONS ====================

// Debounce function for scroll events
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

// Add glitch effect to title on hover
document.addEventListener('DOMContentLoaded', function() {
  const glitchElement = document.querySelector('.glitch');
  if (glitchElement) {
    glitchElement.addEventListener('mouseenter', function() {
      this.classList.add('glitch-active');
    });
    glitchElement.addEventListener('mouseleave', function() {
      this.classList.remove('glitch-active');
    });
  }
});

// ==================== BACKGROUND ROTATION ====================
function initBackgroundRotation() {
  const homeSection = document.querySelector('.home-section');
  if (!homeSection) return;

  // Array of background images
  const backgroundImages = [
    'assets/images/background.webp',
    'assets/images/background1.png',
    'assets/images/background2.png',
    'assets/images/background3.png'
  ];

  let currentIndex = 0;

  // Set initial background
  homeSection.style.backgroundImage = `url('${backgroundImages[currentIndex]}')`;

  // Rotate background every 2 seconds (2000ms)
  setInterval(() => {
    currentIndex = (currentIndex + 1) % backgroundImages.length;
    homeSection.style.backgroundImage = `url('${backgroundImages[currentIndex]}')`;
  }, 2000);
}
