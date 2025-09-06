# Painted by Aamy - Art Gallery Website

A beautiful, responsive GitHub Pages website to showcase and sell Aamy's original paintings. Features a modern design inspired by premium gallery websites with an aesthetic similar to Gymshark's gallery view.

## Features

- 🎨 **Modern Gallery Layout**: Grid-based design with hover effects and modal views
- 📱 **Fully Responsive**: Optimized for all devices from mobile to desktop  
- 🚀 **Fast Loading**: Optimized images and lazy loading
- ✉️ **Contact Integration**: Contact form with mailto functionality
- 🎯 **SEO Optimized**: Meta tags and Open Graph support
- ♿ **Accessible**: WCAG compliant with proper ARIA labels
- 🌟 **Smooth Animations**: CSS transitions and scroll-triggered animations

## Quick Setup for GitHub Pages

1. **Create a new repository** on GitHub (or use this one)
2. **Upload all files** to your repository
3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click Save

Your website will be available at: `https://yourusername.github.io/repository-name/`

## Customization Guide

### 1. Replace Images

Add your painting images to the `assets/images/` folder:

- `hero-painting.jpg` - Main hero section image
- `artist-photo.jpg` - About section artist photo  
- `painting1.jpg` through `painting6.jpg` - Gallery images
- `favicon.ico` - Website favicon

**Recommended image specs:**
- Gallery images: 800x600px minimum, JPG format
- Hero image: 1200x800px, JPG format
- Artist photo: 600x600px, JPG format

### 2. Update Content

Edit the following in `assets/js/script.js`:

```javascript
const paintings = [
    {
        id: 1,
        title: "Your Painting Title",
        description: "Description of your painting",
        price: "$250",
        size: "16\" x 20\"",
        medium: "Acrylic on Canvas",
        image: "assets/images/your-image.jpg",
        featured: true
    },
    // Add more paintings...
];
```

### 3. Update Contact Information

In `index.html`, update:
- Artist name and bio in the About section
- Contact email in the JavaScript (search for `mailto:artist@example.com`)
- Social media links in the footer

### 4. Customize Colors and Fonts

Main color variables in `assets/css/style.css`:
- Primary color: `#2c2c2c` (dark gray)
- Accent color: `#8b7355` (warm brown)
- Background: `#fafafa` (light gray)

## File Structure

```
HOME-WEBSITE/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css      # All styles
│   ├── js/
│   │   └── script.js      # JavaScript functionality
│   └── images/            # Image assets
├── README.md              # This file
└── _config.yml            # Jekyll config (optional)
```

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Performance Features

- CSS Grid and Flexbox for modern layouts
- Intersection Observer API for scroll animations
- Lazy loading for images
- Optimized CSS with minimal dependencies
- Compressed and minified assets ready

## Customization Tips

### Adding More Paintings

1. Add images to `assets/images/`
2. Update the `paintings` array in `script.js`
3. Images will automatically appear in the gallery

### Changing the Layout

- Modify `gallery-grid` CSS for different grid layouts
- Adjust `grid-template-columns` for more/fewer columns
- Update breakpoints in media queries for responsive behavior

### Adding E-commerce

For actual sales, consider integrating:
- **PayPal Buy Now buttons**
- **Stripe Payment Links** 
- **Square Online** integration
- **Etsy** or other marketplace links

### SEO Improvements

1. Update meta descriptions and titles
2. Add structured data markup
3. Create an XML sitemap
4. Add Google Analytics tracking

## Support

This website template is designed to be beginner-friendly while maintaining professional quality. The code is well-commented and follows modern web standards.

For advanced customizations, the codebase uses:
- Vanilla JavaScript (no frameworks)
- Modern CSS (Grid, Flexbox, Custom Properties)
- Progressive Enhancement principles

## License

This template is free to use for personal and commercial projects. Attribution appreciated but not required.

---

**Created with ❤️ for showcasing beautiful home paintings**
