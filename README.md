# MD Abdullah AL Alif - Personal Portfolio Website

A modern, responsive personal portfolio website with admin dashboard for managing profile, media gallery, and contact information.

## 🌟 Features

### 🎨 Public Portfolio
- Clean and minimalist interface
- Smooth animations and transitions
- Fully responsive layout
- Profile picture display
- Contact information visible
- Email and phone links

### 📸 Media Gallery
- Photo and video gallery
- Filter by media type (All, Photos, Videos)
- Lightbox viewer with navigation
- **Download functionality** for all media
- Drag-and-drop media management

### 🔐 Admin Dashboard
- **Secure login system** with email authentication
- Profile management (name, title, bio)
- Profile picture upload
- Contact information management
- Bio and skills editor
- Media gallery upload and management

## � Admin Login Credentials

**Email:** almamunfire10@gmail.com  
**Password:** `12345678`  
**Login URL:** [login.html](login.html)

## 📁 File Structure

```
.
├── index.html          # Main portfolio homepage
├── login.html          # Admin login page
├── dashboard.html      # Admin control panel
├── gallery.html        # Public media gallery
├── styles.css          # Complete styling
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## 🚀 Quick Start

1. **Open in Browser**: Simply open `index.html` in any modern web browser
2. **No Build Process**: This is a static website with no server required
3. **No Installation Needed**: Works out of the box

## 📋 How to Use

### For Visitors:

1. **View Portfolio**: Open `index.html`
2. **Browse Gallery**: Click "Gallery" in navigation
3. **Download Media**: Hover over media items and click the download button
4. **Contact**: Use the contact form or click email/phone links

### For Admin (You):

1. **Access Dashboard**: 
   - Click "Admin" button in top navigation
   - Or go to `login.html`

2. **Login**: Use your email and password "admin123"

3. **Manage Profile**:
   - Upload your profile picture
   - Edit your name, title, and bio
   - Changes appear instantly on homepage

4. **Manage Contact Info**:
   - Update email address
   - Update mobile number
   - Add alternate phone
   - Add location

5. **Upload Media**:
   - Go to Media Gallery section
   - Drag and drop files or click to browse
   - Support for images and videos
   - Media appears on public gallery

6. **Media Management**:
   - Download any media file
   - Delete files you don't want
   - Filter by type in public gallery

## 🛠️ Customization Guide

### Update Contact Information

Edit the hero section in `index.html`:
```html
<a href="mailto:your-email@example.com" class="contact-badge">
    <i class="fas fa-envelope"></i> your-email@example.com
</a>
```

### Change Colors

Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --secondary-color: #1e40af;    /* Darker shade */
    --text-dark: #1f2937;          /* Main text */
    --text-light: #6b7280;         /* Secondary text */
    --bg-light: #f9fafb;           /* Light background */
}
```

### Change Login Password

Edit `login.html` script section:
```javascript
if (password === 'your-new-password') {
    // Login successful
}
```

### Enable Persistent Login

The "Remember me" checkbox stores your email locally for next login.

## 📱 Features Breakdown

### Profile Section
- Dynamic profile picture
- Auto-updating hero section
- Email and phone display
- Mobile-responsive design

### Media Gallery
- Supports JPG, PNG, GIF images
- Supports MP4, WebM videos
- Searchable by media type
- Lightbox with keyboard controls (Arrow keys, Esc)

### Dashboard
- Responsive design for desktop and tablet
- LocalStorage for data persistence
- Separate sections for organization
- One-click save functionality

## 🔒 Security Notes

This is a **client-side only** application:
- All data stored in browser LocalStorage
- No server backend required
- Data persists across browser sessions
- Clear browser data to reset

For production use with backend:
- Implement server-side authentication
- Use database for storage
- Implement secure file upload
- Add HTTPS encryption

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📲 Mobile Access

The dashboard is mobile-responsive:
- Sidebar becomes horizontal menu on mobile
- Touch-friendly buttons and inputs
- Optimized for phones and tablets

## 🚀 Deployment Options

### GitHub Pages (Free)
1. Create a GitHub repository named `yourusername.github.io`
2. Add these files to the repository:
   - `index.html`
   - `dashboard.html`
   - `gallery.html`
   - `login.html`
   - `script.js`
   - `styles.css`
   - `deploy.bat` (optional)
   - `assets/profile.svg` বা `assets/profile.jpg` (optional: আপনার প্রোফাইল ছবি)
   - `assets/background.svg` বা `assets/background.jpg` (optional: আপনার ব্যাকগ্রাউন্ড ছবি)
3. Go to Settings → Pages
4. Choose branch `main` and folder `root`
5. Save and wait a few minutes
6. আপনার সাইট হবে: `https://yourusername.github.io`

> Image support: আপনি `assets/profile.svg`/`assets/profile.jpg` এবং `assets/background.svg`/`assets/background.jpg` যোগ করলে সেগুলো স্বয়ংক্রিয়ভাবে লোড হবে। অথবা `dashboard.html` এ ঢুকে প্রোফাইল ছবি আপলোড করতে পারেন।

### Netlify (Free)
1. Drag and drop folder
2. Site goes live instantly
3. Custom domain optional

### Vercel (Free)
1. Connect GitHub repo
2. Auto-deploys on push
3. Fast CDN delivery

### Firebase Hosting
1. Install Firebase CLI
2. Deploy files
3. Free SSL certificate included

## 💾 Data Storage

All data is stored in browser's **localStorage**:
- Profile information
- Contact details
- Uploaded media (as base64)
- Login preference

⚠️ **Note**: Media files are stored as base64 in localStorage. For many large files, consider limiting storage or implementing cloud upload.

## 🎯 Next Steps / Enhancements

- [ ] Add backend database
- [ ] Implement real email sending
- [ ] Add blog section
- [ ] Social media integration
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Analytics tracking
- [ ] SEO optimization

## 📄 License

© 2026 Alif Ahmed Alvi. All rights reserved.

## 💬 Support

For questions or customization needs, feel free to modify any section to match your personal brand!

---

**Version**: 2.0 (Dashboard & Gallery Update)  
**Last Updated**: April 2026
