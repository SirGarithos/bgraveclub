# Belgrade Rave Club Website

A modern, fully-featured website for Belgrade Rave Club with dynamic content management, stunning visuals, and responsive design.

## Features

- **Dynamic DJ Slots**: Showcase exactly 5 DJs with profiles, images, genres, and social links
- **About Section**: Comprehensive club information with features and location
- **Party Gallery**: Interactive photo gallery with lightbox functionality for 12+ images
- **Events Section**: Display upcoming events with dates, lineups, and descriptions
- **Responsive Design**: Mobile-first approach, works perfectly on all devices
- **Modern Aesthetic**: Dark theme with neon accents, glassmorphism effects, and smooth animations
- **Easy Content Management**: All content controlled via a single config.js file
- **Performance Optimized**: Lazy loading, smooth scrolling, and fast load times
- **Accessibility**: Keyboard navigation, screen reader support, reduced motion support

## Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables, Grid, and Flexbox
- **Vanilla JavaScript**: No frameworks required - lightweight and fast
- **Font Awesome**: Icon library
- **Google Fonts**: Geo and Orbitron fonts

## File Structure

```
bgraveclub/
├── index.html              # Main HTML file
├── style.css               # All styles and responsive design
├── script.js               # JavaScript functionality
├── config.js               # Content configuration (EDIT THIS TO UPDATE CONTENT)
├── assets/
│   └── images/
│       ├── background.webp     # Hero section background
│       ├── djs/                # DJ profile images
│       │   ├── dj1.jpg
│       │   ├── dj2.jpg
│       │   ├── dj3.jpg
│       │   ├── dj4.jpg
│       │   └── dj5.jpg
│       └── gallery/            # Party photos
│           ├── party1.jpg
│           ├── party2.jpg
│           └── ... (12 total)
├── docs/
│   ├── FEATURE_PLAN.md         # Complete feature specifications
│   ├── TASK_DEPENDENCIES.md    # Development task mapping
│   └── CUSTOMIZATION.md        # Detailed customization guide
└── README.md                   # This file
```

## Quick Start

The website is deployed and ready to use. For local development, simply open `index.html` in any modern web browser:
```bash
cd /home/shaddar/Documents/workspace/personal/websites/bgraveclub
open index.html  # macOS
xdg-open index.html  # Linux
start index.html  # Windows
```

## How to Customize Content

All content is managed through the `config.js` file. Simply edit this file to update:

### Update DJ Information
```javascript
// In config.js, find the djs array:
djs: [
  {
    id: 1,
    name: "DJ Neon",              // Change DJ name
    genre: "Techno / House",      // Change genre
    bio: "Your bio here...",      // Update bio
    image: "assets/images/djs/dj1.jpg",  // Change image path
    socialLinks: {
      instagram: "https://instagram.com/djneon",  // Update links
      soundcloud: "https://soundcloud.com/djneon"
    }
  },
  // ... 4 more DJs
]
```

### Update About Section
```javascript
// In config.js, find the about object:
about: {
  title: "About Belgrade Rave Club",
  paragraphs: [
    "First paragraph...",
    "Second paragraph...",
    "Third paragraph..."
  ],
  features: [
    {
      icon: "fa-music",           // Font Awesome icon
      title: "Feature Title",
      description: "Description"
    }
    // ... more features
  ]
}
```

### Update Gallery Images
```javascript
// In config.js, find the gallery array:
gallery: [
  {
    id: 1,
    src: "assets/images/gallery/party1.jpg",  // Image path
    alt: "Description for accessibility",
    caption: "Caption shown in lightbox"
  },
  // ... add or remove images
]
```

### Update Events
```javascript
// In config.js, find the events array:
events: [
  {
    id: 1,
    title: "Techno Odyssey",
    date: "2025-11-15",           // YYYY-MM-DD format
    time: "23:00 - 06:00",
    lineup: ["DJ Neon", "DJ Voltage"],
    description: "Event description...",
    ticketLink: "#"               // Link to tickets
  }
]
```

### Change Colors/Theme
```javascript
// In config.js, find the theme object:
theme: {
  primaryColor: "#ff00cc",    // Hot pink
  secondaryColor: "#00ffff",  // Cyan
  accentColor: "#9d00ff"      // Purple
}
```

Or edit CSS variables in `style.css`:
```css
:root {
  --primary-color: #ff00cc;
  --secondary-color: #00ffff;
  --accent-color: #9d00ff;
}
```

## Adding/Replacing Images

### Background Image
1. Place your image in `assets/images/`
2. Rename it to `background.webp` (or update path in style.css line 285)
3. Recommended size: 1920x1080px or larger

### DJ Images
1. Place images in `assets/images/djs/`
2. Name them: `dj1.jpg`, `dj2.jpg`, etc.
3. Update paths in `config.js` if using different names
4. Recommended size: 500x500px square images
5. Supported formats: JPG, PNG, WebP

### Gallery Images
1. Place images in `assets/images/gallery/`
2. Name them: `party1.jpg`, `party2.jpg`, etc.
3. Add/update entries in `config.js` gallery array
4. Recommended size: 800x600px or larger
5. The system will use placeholders if images don't exist

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images**: Use WebP format for better compression
2. **Image Sizes**:
   - Background: 1920x1080px, under 500KB
   - DJ Images: 500x500px, under 100KB each
   - Gallery: 800x600px, under 150KB each
3. **Use Image Compression**: Tools like TinyPNG or Squoosh
4. **Lazy Loading**: Already implemented for gallery images

## Sections Overview

### 1. Home/Hero Section
- Full-screen background image
- Animated title with glitch effect
- Call-to-action buttons
- Scroll indicator

### 2. About Section
- Club description (3 paragraphs)
- Feature cards (4 highlights)
- Location information
- Glassmorphism card design

### 3. DJs Section
- 5 DJ cards in responsive grid
- Hover effects reveal social links
- Profile images with overlay
- Genre tags and bios

### 4. Gallery Section
- 12+ party photos in responsive grid
- Click to open lightbox
- Keyboard navigation (arrows, ESC)
- Next/Previous navigation
- Captions for each image

### 5. Events Section
- Upcoming event cards
- Date badges with day/month
- Lineup information
- Event descriptions
- "Get Tickets" buttons

### 6. Footer
- Contact information
- Social media links
- Copyright notice

## Navigation

- **Desktop**: Sticky header with navigation links
- **Mobile**: Hamburger menu with slide-out navigation
- **Smooth Scrolling**: Click any nav link to smoothly scroll to section
- **Active Highlighting**: Current section highlighted in nav

## Customization Examples

### Add a 6th DJ
While the design is optimized for 5 DJs, you can add more:

```javascript
// In config.js, add to djs array:
{
  id: 6,
  name: "DJ Phoenix",
  genre: "Trance / Progressive",
  bio: "Trance specialist bringing euphoric melodies...",
  image: "assets/images/djs/dj6.jpg",
  socialLinks: {
    instagram: "https://instagram.com/djphoenix"
  }
}
```

### Add More Gallery Images
```javascript
// In config.js, add to gallery array:
{
  id: 13,
  src: "assets/images/gallery/party13.jpg",
  alt: "New party photo",
  caption: "Amazing night"
}
```

### Change Navigation Links
Edit `index.html` line 28-33:
```html
<nav id="nav">
  <a href="#home" class="active">Home</a>
  <a href="#about">About</a>
  <a href="#djs">DJs</a>
  <a href="#gallery">Gallery</a>
  <a href="#events">Events</a>
  <!-- Add new links here -->
</nav>
```

## Troubleshooting

### Images Not Loading
- Check file paths in `config.js`
- Ensure images exist in correct directories
- Check file extensions match (case-sensitive on Linux)
- Placeholder images will show if files are missing

### Animations Not Working
- Ensure JavaScript is enabled in browser
- Check browser console for errors (F12)
- Some users may have "reduced motion" enabled (intentional)

### Mobile Menu Not Opening
- Check if JavaScript is loaded
- Ensure `script.js` is in the same directory as `index.html`
- Try hard-refresh (Ctrl+F5 or Cmd+Shift+R)

### Sections Not Scrolling Smoothly
- Ensure browser supports `scroll-behavior: smooth`
- Try a modern browser (Chrome, Firefox, Edge)
- Check if hardware acceleration is enabled

## Deployment

The website is already deployed and hosted. All changes made to the repository will be automatically deployed via the configured CI/CD pipeline.

## Development

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding section in `config.js`
3. Create render function in `script.js`
4. Style the section in `style.css`
5. Add navigation link

### Modifying Styles
- All styles are in `style.css`
- Uses CSS variables for easy theming
- Mobile-first responsive design
- Comments indicate each section

### Extending Functionality
- All dynamic functionality in `script.js`
- Functions are modular and well-commented
- Easy to add new features

## Resources

- [Font Awesome Icons](https://fontawesome.com/icons)
- [Google Fonts](https://fonts.google.com/)
- [Unsplash](https://unsplash.com/) - Free stock photos
- [Pexels](https://www.pexels.com/) - Free stock photos
- [TinyPNG](https://tinypng.com/) - Image compression
- [Squoosh](https://squoosh.app/) - Advanced image optimization

## License

This project is free to use and modify for personal or commercial purposes.

## Credits

- **Design & Development**: Created with modern web technologies
- **Fonts**: Geo and Orbitron from Google Fonts
- **Icons**: Font Awesome 6
- **Background Image**: User provided (0f25ee2d869ef533343ffaed0b830712.webp)

## Support

For detailed customization instructions, see `docs/CUSTOMIZATION.md`
For feature specifications, see `docs/FEATURE_PLAN.md`
For development tasks, see `docs/TASK_DEPENDENCIES.md`

---

Made with love for the Belgrade underground scene.
