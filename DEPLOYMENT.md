# GitHub Pages Deployment Guide

## Quick Setup (5 minutes)

### Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click "New repository" (green button)
3. Name it something like `home-paintings-gallery`
4. Make it **Public** (required for free GitHub Pages)
5. Click "Create repository"

### Step 2: Upload Files
**Option A: Using GitHub Web Interface**
1. Click "uploading an existing file"
2. Drag and drop all website files
3. Write commit message: "Initial website setup"
4. Click "Commit changes"

**Option B: Using Git (if you have it installed)**
```bash
cd /Users/vineeth/projects/others/HOME-WEBSITE
git init
git add .
git commit -m "Initial website setup"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/YOURREPONAME.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under "Source", select **Deploy from a branch**
5. Choose **main** branch
6. Choose **/ (root)** folder
7. Click **Save**

### Step 4: Access Your Website
- Your site will be live at: `https://YOURUSERNAME.github.io/REPONAME/`
- It may take 5-10 minutes for the first deployment

## Customization Checklist

### Before Going Live:
- [ ] Replace all placeholder images in `assets/images/`
- [ ] Update painting data in `assets/js/script.js`
- [ ] Change artist name and bio in `index.html`
- [ ] Update contact email in JavaScript
- [ ] Add your social media links
- [ ] Update `_config.yml` with your details
- [ ] Test the contact form

### Image Requirements:
- **Gallery paintings**: 800x600px minimum, JPG format
- **Hero image**: 1200x800px landscape
- **Artist photo**: 600x600px square
- **File sizes**: Keep under 500KB each for fast loading

### SEO Setup:
- [ ] Update page title and description
- [ ] Add your domain to `_config.yml`
- [ ] Submit sitemap to Google Search Console
- [ ] Add Google Analytics (optional)

## Custom Domain (Optional)

If you want to use your own domain (like `www.yourname.com`):

1. Buy a domain from any registrar
2. In your repository, create a file named `CNAME`
3. Put your domain in the file: `www.yourname.com`
4. Update your domain's DNS settings:
   - Add CNAME record: `www` → `yourusername.github.io`
   - Add A records for apex domain:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

## Maintenance

### Adding New Paintings:
1. Upload image to `assets/images/`
2. Edit `assets/js/script.js`
3. Add new painting object to the array
4. Commit and push changes

### Updating Content:
- Edit `index.html` for main content
- Edit `assets/css/style.css` for styling
- All changes auto-deploy when pushed to main branch

## Troubleshooting

### Site Not Loading:
- Check GitHub Pages is enabled in Settings
- Verify main branch is selected
- Wait 10-15 minutes for first deployment
- Check repository is public

### Images Not Showing:
- Verify image paths in code match actual file names
- Check images are in `assets/images/` folder
- Ensure image files are committed to repository

### Contact Form Issues:
- Default setup opens email client (mailto)
- For web forms, integrate with Netlify Forms or Formspree
- Update the JavaScript in `assets/js/script.js`

### Mobile Display Issues:
- Test on actual mobile devices
- Use browser dev tools mobile simulation
- Check viewport meta tag is present

## Performance Tips

- Optimize images before uploading (use tools like TinyPNG)
- Keep total site size under 100MB
- Use WebP format for better compression (with JPG fallbacks)
- Enable GitHub Pages caching headers

## Security

- Never commit sensitive information
- Use environment variables for API keys
- Keep repository public for free GitHub Pages
- Use HTTPS (automatic with GitHub Pages)

## Analytics & SEO

### Google Analytics Setup:
1. Create Google Analytics account
2. Get tracking ID
3. Add tracking code to `index.html` before `</head>`

### SEO Improvements:
- Add schema markup for artwork
- Create XML sitemap
- Optimize image alt tags
- Use descriptive URLs
- Add Open Graph images

---

**Need Help?** 
- GitHub Pages Documentation: https://docs.github.com/pages
- Jekyll Documentation: https://jekyllrb.com/docs/
- Web Development Resources: https://developer.mozilla.org/
