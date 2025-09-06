#!/bin/bash

# Home Paintings Gallery - Quick Setup Script
# This script helps initialize the website for GitHub Pages deployment

echo "🎨 Home Paintings Gallery - Setup Script"
echo "========================================"

# Check if git is available
if ! command -v git &> /dev/null; then
    echo "⚠️  Git is not installed. Please install Git first."
    echo "   Visit: https://git-scm.com/downloads"
    exit 1
fi

# Initialize git repository if not already done
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

# Create .gitignore if it doesn't exist
if [ ! -f ".gitignore" ]; then
    echo "📝 Creating .gitignore file..."
    cat > .gitignore << EOF
# macOS
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Editor files
.vscode/
.idea/
*.swp
*.swo
*~

# Logs
*.log
npm-debug.log*

# Dependencies (if using Node.js tools)
node_modules/
package-lock.json

# Jekyll
_site/
.sass-cache/
.jekyll-cache/
.jekyll-metadata

# Temporary files
*.tmp
*.temp
EOF
    echo "✅ .gitignore created"
fi

# Check if files are staged
echo "📋 Checking repository status..."
git add .

# Show status
echo ""
echo "📊 Repository Status:"
git status --short

echo ""
echo "🚀 Next Steps:"
echo "1. Review your files and make any necessary changes"
echo "2. Replace placeholder images in assets/images/ with your actual paintings"
echo "3. Update painting data in assets/js/script.js"
echo "4. Commit your changes:"
echo "   git commit -m 'Initial website setup'"
echo ""
echo "5. Create a GitHub repository and push:"
echo "   git remote add origin https://github.com/USERNAME/REPO-NAME.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "6. Enable GitHub Pages in your repository settings"
echo ""
echo "📖 For detailed instructions, see DEPLOYMENT.md"
echo ""
echo "🎨 Your beautiful paintings gallery website is ready!"
echo "   Don't forget to customize the content with your wife's artwork!"

# Optional: Open the website in browser for preview
read -p "🌐 Would you like to open index.html in your browser for preview? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    if command -v open &> /dev/null; then
        open index.html
    elif command -v xdg-open &> /dev/null; then
        xdg-open index.html
    else
        echo "Please open index.html in your browser manually"
    fi
fi

echo ""
echo "✨ Setup complete! Happy selling! 🎨"
