/**
 * Belgrade Rave Club - Content Configuration
 *
 * This file contains all the dynamic content for the website.
 * To customize the website, simply update the values in this file.
 *
 * HOW TO USE:
 * 1. Update DJ information in the 'djs' array
 * 2. Update about section text in 'about' object
 * 3. Add/remove gallery images in 'gallery' array
 * 4. Update social media links in 'socialMedia' object
 * 5. Update events in 'events' array
 */

const config = {
  // ==================== SITE INFO ====================
  site: {
    name: "Belgrade Rave Club",
    tagline: "Where the Night Comes Alive",
    description: "Belgrade's psytrance haven - retro vibes, night-time grooves, and full-on energy",
    location: "Savamala District, Belgrade, Serbia",
    email: "info@belgraderaveclub.com",
    phone: "+381 11 123 4567"
  },

  // ==================== DJ LINEUP (5 DJs) ====================
  // To add/change DJs, update this array
  // Each DJ should have: name, genre, bio, image, and socialLinks
  djs: [
    {
      id: 1,
      name: "Chris",
      genre: "Full-On / Night Psytrance",
      bio: "Spinning full-on madness when the sun goes down. Chris knows how to ride that sweet spot between driving basslines and twisted melodies, keeping the floor moving without ever losing the plot. Less talk, more trance.",
      image: "assets/images/djs/chris/chris1.jpeg",
      images: [
        "assets/images/djs/chris/chris1.jpeg",
        "assets/images/djs/chris/chris2.jpeg",
        "assets/images/djs/chris/chris3.jpeg",
        "assets/images/djs/chris/chris4.jpeg"
      ],
      socialLinks: {
        soundcloud: "https://on.soundcloud.com/pgDpCcZ0UzYJgELrNj"
      }
    },
    {
      id: 2,
      name: "Enigma",
      genre: "Night Psytrance / Dark Progressive",
      bio: "Deep into the night when the vibe shifts darker, Enigma takes over. Atmospheric layers, rolling bass, and just enough edge to keep things interesting. No gimmicks, just solid night-time psytrance that hits different.",
      image: "assets/images/djs/enigma/enigma1.jpeg",
      images: [
        "assets/images/djs/enigma/enigma1.jpeg",
        "assets/images/djs/enigma/enigma2.jpeg",
        "assets/images/djs/enigma/enigma3.jpeg"
      ],
      socialLinks: {
        soundcloud: "https://soundcloud.com/discover",
        instagram: "https://instagram.com/d2l_zero"
      }
    },
    {
      id: 3,
      name: "Dexim Lecur",
      genre: "Retro Goa / Classic Psy",
      bio: "Old school heads know what's up. Dexim brings back those classic Goa sounds from the golden era - 303 acid lines, organic grooves, and melodies that actually go somewhere. What psytrance used to be before everyone got obsessed with presets.",
      image: "https://via.placeholder.com/400x400/9d00ff/ffffff?text=DEXIM+LECUR",
      images: [
        "https://via.placeholder.com/400x400/9d00ff/ffffff?text=DEXIM+LECUR"
      ],
      socialLinks: {
        // Coming soon
      }
    },
    {
      id: 4,
      name: "Extremely Rare",
      genre: "Obscure Psy / Forgotten Classics",
      bio: "Digging through DAT tapes and CD-Rs from back in the day. Those tracks that disappeared from the scene but shouldn't have. If you remember hearing it at a forest party in 2003 but can never find it again, Rare probably has it.",
      image: "https://via.placeholder.com/400x400/ff00cc/000000?text=EXTREMELY+RARE",
      images: [
        "https://via.placeholder.com/400x400/ff00cc/000000?text=EXTREMELY+RARE"
      ],
      socialLinks: {
        // Coming soon
      }
    },
    {
      id: 5,
      name: "Fantazija",
      genre: "Melodic Full-On / Progressive Psy",
      bio: "Building those sets that start somewhere and actually take you on a trip. Proper progression, melodies that make sense, and enough energy to keep your feet moving. Fantazija gets that balance between euphoric and driving without going cheesy.",
      image: "https://via.placeholder.com/400x400/00ffff/000000?text=FANTAZIJA",
      images: [
        "https://via.placeholder.com/400x400/00ffff/000000?text=FANTAZIJA"
      ],
      socialLinks: {
        // Coming soon
      }
    }
  ],

  // ==================== ABOUT SECTION ====================
  about: {
    title: "About Belgrade Rave Club",
    paragraphs: [
      "Belgrade Rave Club is where the psytrance heads gather when the night gets serious. We've been doing this since 2018, keeping the vibe real and the music proper. No commercial nonsense, just psychedelic trance the way it's meant to be heard.",

      "You'll find us in Savamala, tucked away from the mainstream spots. The space works - decent sound, enough room to lose yourself, and lighting that enhances rather than distracts. We book DJs who know their stuff, whether they're spinning retro Goa classics, driving full-on, or those darker night-time grooves.",

      "Look, we're not here to reinvent anything. Good music, good people, and a place where you can dance without all the pretentious club politics. If you're into psytrance - the real stuff, not the commercial festival garbage - you'll fit right in. That's pretty much it."
    ],
    features: [
      {
        icon: "fa-music",
        title: "Proper Sound System",
        description: "Funktion-One rig that actually does the bass justice"
      },
      {
        icon: "fa-lightbulb",
        title: "Not Overdone Visuals",
        description: "UV and lasers that work with the music, not against it"
      },
      {
        icon: "fa-users",
        title: "Scene Oriented",
        description: "Supporting local psy DJs and bringing in the right guests"
      },
      {
        icon: "fa-clock",
        title: "Night Sessions",
        description: "Friday & Saturday from 11 PM, sometimes straight through to sunrise"
      }
    ],
    location: {
      address: "Karađorđeva 45, Savamala",
      city: "Belgrade, Serbia",
      directions: "5 min walk from Savski Trg, near the waterfront"
    }
  },

  // ==================== GALLERY IMAGES ====================
  // To add more images, add new entries to this array
  // To remove images, delete entries or comment them out
  gallery: [
    {
      id: 1,
      src: "assets/images/gallery/party1.jpg",
      alt: "Crowd dancing at Belgrade Rave Club",
      caption: "Electric atmosphere on the dance floor"
    },
    {
      id: 2,
      src: "assets/images/gallery/party2.jpg",
      alt: "DJ performing live",
      caption: "Chris live set"
    },
    {
      id: 3,
      src: "assets/images/gallery/party3.jpg",
      alt: "Light show at the venue",
      caption: "Mesmerizing visual experience"
    },
    {
      id: 4,
      src: "assets/images/gallery/party4.jpg",
      alt: "Packed dance floor",
      caption: "When the bass drops"
    },
    {
      id: 5,
      src: "assets/images/gallery/party5.jpg",
      alt: "DJ booth perspective",
      caption: "View from the booth"
    },
    {
      id: 6,
      src: "assets/images/gallery/party6.jpg",
      alt: "Laser lights in action",
      caption: "Laser symphony"
    },
    {
      id: 7,
      src: "assets/images/gallery/party7.jpg",
      alt: "Crowd with hands up",
      caption: "Unity through music"
    },
    {
      id: 8,
      src: "assets/images/gallery/party8.jpg",
      alt: "Silhouettes in neon lights",
      caption: "Lost in the moment"
    },
    {
      id: 9,
      src: "assets/images/gallery/party9.jpg",
      alt: "DJ mixing tracks",
      caption: "Creating the vibe"
    },
    {
      id: 10,
      src: "assets/images/gallery/party10.jpg",
      alt: "Smoke and lights",
      caption: "Atmosphere perfection"
    },
    {
      id: 11,
      src: "assets/images/gallery/party11.jpg",
      alt: "Festival atmosphere",
      caption: "Special event night"
    },
    {
      id: 12,
      src: "assets/images/gallery/party12.jpg",
      alt: "Sunrise session",
      caption: "Dancing into the dawn"
    }
  ],

  // ==================== UPCOMING EVENTS ====================
  events: [
    {
      id: 1,
      title: "To Be Announced",
      date: "",
      dateFormatted: "Date TBA",
      time: "TBA",
      lineup: [],
      description: "We're cooking up something special. Event details will be announced soon - stay tuned to our social media for updates.",
      ticketLink: "#",
      image: "assets/images/events/event1.jpg"
    }
  ],

  // ==================== SOCIAL MEDIA ====================
  socialMedia: {
    facebook: "https://facebook.com/belgraderaveclub",
    instagram: "https://instagram.com/belgraderaveclub",
    twitter: "https://twitter.com/belgraderaveclub",
    soundcloud: "https://soundcloud.com/belgraderaveclub",
    youtube: "https://youtube.com/@belgraderaveclub",
    tiktok: "https://tiktok.com/@belgraderaveclub"
  },

  // ==================== CONTACT INFO ====================
  contact: {
    email: "info@belgraderaveclub.com",
    phone: "+381 11 123 4567",
    bookings: "bookings@belgraderaveclub.com",
    press: "press@belgraderaveclub.com"
  },

  // ==================== THEME CUSTOMIZATION ====================
  // These values can be used in CSS as custom properties
  theme: {
    primaryColor: "#ff00cc",     // Hot pink
    secondaryColor: "#00ffff",   // Cyan
    accentColor: "#9d00ff",      // Purple
    darkBg: "#0a0a0a",           // Almost black
    lightText: "#ffffff",        // White
    overlayBg: "rgba(0, 0, 0, 0.7)" // Semi-transparent black
  }
};

// Make config available globally
if (typeof window !== 'undefined') {
  window.CLUB_CONFIG = config;
}

// Also support ES6 modules if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = config;
}
