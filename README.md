# Linfield Labs Website

A modern, futuristic landing page for Linfield Labs - AI Agents & Automation services.

## 🚀 Deploy to GitHub Pages

### Step-by-Step Deployment
1. **Create a new repository on GitHub** (e.g., `linfield-labs-website`)
2. **Push this code to your repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/linfield-labs-website.git
   git push -u origin main
   ```
3. **Enable GitHub Pages:**
   - Go to your repository Settings → Pages
   - Select "Deploy from a branch" → "main" branch
   - Click Save
4. **Your site will be live at:** `https://YOUR_USERNAME.github.io/website`

## 🌐 Custom Domain Setup (linfieldlabs.com)

### Step 1: Configure GitHub Pages
1. Go to your repository Settings → Pages
2. Under "Custom domain", enter: `linfieldlabs.com`
3. Check "Enforce HTTPS"
4. Click Save

### Step 2: DNS Configuration
Configure these DNS records with your domain provider:

**For Apex Domain (linfieldlabs.com):**
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 3600

Type: A  
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

**For WWW Subdomain (www.linfieldlabs.com):**
```
Type: CNAME
Name: www
Value: linfieldlabs.github.io
TTL: 3600
```

### Step 3: Verify Domain
- Wait 24-48 hours for DNS propagation
- Visit `https://linfieldlabs.com` to verify
- GitHub will show a green checkmark when configured correctly

### 🎯 Benefits of GitHub Pages
- ✅ **Completely free** hosting
- ✅ **Custom domain** support
- ✅ **HTTPS** enabled by default
- ✅ **Automatic deployments** on every push
- ✅ **CDN** for fast global loading
- ✅ **No build process** required for static sites

## 📁 Project Structure
```
├── index.html          # Main landing page
├── logo.svg           # Company logo (header)
├── logo-hero.svg      # Company logo (hero section)
├── CNAME              # Custom domain configuration
├── .gitignore         # Git ignore rules
└── README.md          # This file
```

## ✨ Features
- Responsive design
- Modern CSS animations
- SEO optimized
- Fast loading
- Mobile-friendly

## 🎨 Customization
- Update company details in `index.html`
- Replace `logo.svg` with your actual logo
- Modify colors in the CSS variables section
- Update contact email in the CTA section

## 📧 Contact
For questions about this website, contact: hello@linfieldlabs.com
