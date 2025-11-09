# Linfield Labs Website

A modern, futuristic landing page for Linfield Labs - AI Agents & Automation services.

## 🔥 Deploy to Firebase Hosting

### Prerequisites
1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

### Step-by-Step Deployment

1. **Initialize Firebase in your project** (if not already done):
   ```bash
   firebase init hosting
   ```
   - Select "Use an existing project" or "Create a new project"
   - Set public directory to `.` (current directory)
   - Configure as single-page app: **No** (this is a multi-page static site)
   - Set up automatic builds: **No** (for now)

2. **Update `.firebaserc`** with your Firebase project ID:
   ```json
   {
     "projects": {
       "default": "your-actual-project-id"
     }
   }
   ```

3. **Deploy to Firebase:**
   ```bash
   firebase deploy --only hosting
   ```

4. **Your site will be live at:** `https://your-project-id.web.app` or `https://your-project-id.firebaseapp.com`

### 🌐 Custom Domain Setup with Namecheap

Follow these steps to connect your Namecheap domain to Firebase Hosting:

#### Step 1: Add Domain in Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project (`linfield-website-5b4d5`)
3. Navigate to **Hosting** in the left sidebar
4. Click **Add custom domain**
5. Enter your domain name (e.g., `linfieldlabs.com` or `www.linfieldlabs.com`)
6. Click **Continue**

#### Step 2: Get DNS Records from Firebase

Firebase will show you the DNS records you need to add. You'll see one of two scenarios:

**Option A: A Records (for apex domain - linfieldlabs.com)**
- Firebase will provide 2 A records with IP addresses
- Example: `151.101.1.195` and `151.101.65.195`

**Option B: CNAME Record (for www subdomain - www.linfieldlabs.com)**
- Firebase will provide a CNAME record
- Example: `linfield-website-5b4d5.web.app`

**Note:** Firebase recommends using both apex and www. You can add both domains separately.

#### Step 3: Configure DNS in Namecheap

1. **Log in to Namecheap:**
   - Go to [Namecheap.com](https://www.namecheap.com/) and sign in
   - Navigate to **Domain List** from the dashboard

2. **Access DNS Settings:**
   - Click **Manage** next to your domain
   - Go to the **Advanced DNS** tab

3. **Add A Records (for apex domain):**
   - Click **Add New Record**
   - Select **A Record** from the dropdown
   - **Host:** `@` (represents the root domain)
   - **Value:** Enter the first IP address from Firebase
   - **TTL:** `Automatic` or `30 min`
   - Click the checkmark to save
   - Repeat for the second A record with the second IP address

4. **Add CNAME Record (for www subdomain):**
   - Click **Add New Record**
   - Select **CNAME Record** from the dropdown
   - **Host:** `www`
   - **Value:** Enter the CNAME value from Firebase (e.g., `linfield-website-5b4d5.web.app`)
   - **TTL:** `Automatic` or `30 min`
   - Click the checkmark to save

5. **Remove conflicting records (if any):**
   - Delete any existing A records or CNAME records that might conflict
   - Remove any URL Redirect records pointing to the same domain

#### Step 4: Verify Domain in Firebase

1. Return to Firebase Console → Hosting
2. You'll see your domain with a status indicator
3. Firebase will automatically verify the DNS records (this can take a few minutes to 24 hours)
4. Once verified, Firebase will automatically provision an SSL certificate (can take up to 24 hours)

#### Step 5: Final Verification

1. Wait for DNS propagation (usually 5-30 minutes, but can take up to 24 hours)
2. Check domain status in Firebase Console - it should show "Connected" with a green checkmark
3. Visit your domain in a browser - it should load your Firebase-hosted site
4. The SSL certificate will be automatically configured (look for the padlock icon)

#### Troubleshooting

- **DNS not propagating?** Wait up to 24 hours. You can check propagation status at [whatsmydns.net](https://www.whatsmydns.net/)
- **SSL certificate pending?** This can take up to 24 hours after DNS verification
- **Still seeing old site?** Clear your browser cache or try incognito mode
- **Namecheap using BasicDNS?** You may need to switch to PremiumDNS (free) in Namecheap settings for better compatibility

#### Quick Reference: Namecheap DNS Settings

**For apex domain (linfieldlabs.com):**
```
Type: A Record
Host: @
Value: [IP from Firebase]
TTL: Automatic

Type: A Record  
Host: @
Value: [Second IP from Firebase]
TTL: Automatic
```

**For www subdomain (www.linfieldlabs.com):**
```
Type: CNAME Record
Host: www
Value: [CNAME from Firebase, e.g., linfield-website-5b4d5.web.app]
TTL: Automatic
```

### 🎯 Benefits of Firebase Hosting
- ✅ **Free tier** with generous limits
- ✅ **Custom domain** support with automatic SSL
- ✅ **Global CDN** for fast loading worldwide
- ✅ **One-click rollback** to previous versions
- ✅ **Preview channels** for testing before production
- ✅ **Automatic HTTPS** for all domains

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
├── assets/             # Images and static assets
├── css/                # Stylesheets
├── js/                 # JavaScript files
├── industries/         # Industry-specific pages
├── firebase.json       # Firebase Hosting configuration
├── .firebaserc         # Firebase project configuration
├── .firebaseignore     # Files to ignore during deployment
├── CNAME               # Custom domain configuration (GitHub Pages)
└── README.md           # This file
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
