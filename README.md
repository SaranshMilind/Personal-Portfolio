# Saransh Milind - Portfolio Website

A modern, responsive portfolio website built with HTML5, CSS3, JavaScript, and Bootstrap 5.

## Features

### 🎨 Modern Design
- Clean, professional layout with gradient accents
- Smooth animations and micro-interactions
- Responsive design that works on all devices
- Modern typography with Inter font

### 📱 Sections
- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **About Section**: Personal information, education, and interests
- **Skills Section**: Technical skills with progress bars
- **Projects Section**: Showcase of projects with filtering functionality
- **Contact Section**: Contact form and direct contact information

### ✨ Interactive Features
- Smooth scrolling navigation
- Animated skill bars that fill on scroll
- Project filtering by category (Web, Mobile, Other)
- Hover effects on cards and buttons
- Scroll-to-top button
- Form validation with user feedback

### 🛠 Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations
- **JavaScript**: Interactive functionality
- **Bootstrap 5**: Responsive framework
- **Font Awesome**: Icons
- **Google Fonts**: Typography

## File Structure

```
Portfolio/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
├──  photo.jpg       # Profile picture
└── README.md           # This file
```

## Getting Started

1. **Open the website**: Simply open `index.html` in your web browser
2. **Customize content**: Edit the HTML file to update your information
3. **Add your photo**: Replace `photo.jpg` with your profile picture
4. **Update projects**: Modify the projects section with your actual projects
5. **Adjust skills**: Update the skills and proficiency levels

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    /* ... other variables */
}
```

### Adding Projects
To add new projects, copy the project card structure:
```html
<div class="col-md-6 col-lg-4">
    <div class="project-card" data-category="web">
        <img src="your-image.jpg" alt="Project Name" class="project-img">
        <div class="project-content">
            <h3 class="project-title">Project Name</h3>
            <p class="project-description">Project description</p>
            <div class="project-tech">
                <span class="tech-tag">Technology</span>
                <!-- Add more tech tags -->
            </div>
            <div class="project-links">
                <a href="#" class="btn btn-sm btn-gradient">View Demo</a>
                <a href="#" class="btn btn-sm btn-outline-secondary ms-2">GitHub</a>
            </div>
        </div>
    </div>
</div>
```

### Contact Form
The contact form includes client-side validation. For actual email functionality, you'll need to:
1. Add a backend service (Node.js, PHP, etc.)
2. Use a form service like Formspree or Netlify Forms
3. Integrate with an email API

## Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Performance Tips

1. **Optimize images**: Compress your profile picture and project images
2. **Minify CSS/JS**: Use minification for production
3. **Enable caching**: Set up proper cache headers
4. **Use CDN**: Consider using a CDN for faster loading

## Deployment

### GitHub Pages
1. Push the code to a GitHub repository
2. Go to Settings > Pages
3. Select the main branch and save
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Push to GitHub
2. Connect your repository to Netlify
3. Deploy automatically

### Vercel
1. Push to GitHub
2. Import to Vercel
3. Deploy with one click

## Support

If you encounter any issues or have questions:
1. Check the browser console for errors
2. Ensure all image paths are correct
3. Verify internet connection for CDN resources
4. Test in different browsers

---

Built with ❤️ by Saransh Milind
