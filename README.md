# JNTUH SGPA Calculator

A simple, free calculator for JNTUH students to calculate **SGPA** (Semester Grade Point Average) and **CGPA** (Cumulative Grade Point Average).

## ✨ Features

- ✅ **SGPA Calculator** - Calculate semester GPA instantly
- ✅ **CGPA Calculator** - Calculate cumulative GPA across all semesters
- ✅ **Mobile Friendly** - Works on phones and computers
- ✅ **Free & Easy** - No registration needed
- ✅ **Educational Content** - Learn about grading system and tips
- ✅ **Offline Support** - Works without internet (PWA)
- ✅ **Fast** - Real-time calculations

## 📊 JNTUH Grading System

| Grade | Points | Range |
|-------|--------|-------|
| O | 10 | 90-100 |
| A+ | 9 | 80-89 |
| A | 8 | 70-79 |
| B+ | 7 | 60-69 |
| B | 6 | 50-59 |
| C | 5 | 40-49 |
| F | 0 | <40 |

## 🧮 How It Works

**SGPA = (Credit × Grade Point) ÷ Total Credits**

Example: If you scored O (10) in 4 credits and A (8) in 3 credits:
- SGPA = (4×10 + 3×8) ÷ (4+3) = 64÷7 = **9.14**

## 🚀 Quick Setup

### Step 1: Update Domain
Replace `sgpacalc.example.com` with your domain in these files:
- `index.html` (line 7, 8, 10, 11, 12 in head)
- `cgpa.html` (line 7, 8, 10, 11, 12 in head)
- `sitemap.xml` (all URLs)

### Step 2: Upload Files
Upload all files to your web hosting (Apache server required)

### Step 3: Enable .htaccess
Make sure `.htaccess` is uploaded and Apache has `mod_rewrite` enabled

### Step 4: Submit to Google
1. Go to Google Search Console (https://search.google.com/search-console)
2. Add your website
3. Submit `sitemap.xml`

### Step 5: Set Up Analytics (Optional)
1. Go to Google Analytics (https://analytics.google.com)
2. Create property for your website
3. Copy tracking ID and add to `index.html` and `cgpa.html` in the `<head>` section

## 📁 Files Included

```
├── index.html      - SGPA calculator page
├── cgpa.html       - CGPA calculator page
├── script.js       - SGPA calculator logic
├── cgpa.js         - CGPA calculator logic
├── robots.txt      - For search engines
├── sitemap.xml     - For search engines
├── manifest.json   - PWA (install as app)
├── sw.js           - PWA (offline support)
├── .htaccess       - Server configuration
└── README.md       - This file
```

## 💻 Technology

- **HTML5** & **CSS3** (Tailwind CSS)
- **JavaScript** (Vanilla - no dependencies)
- **Font Awesome** - Icons
- **PWA** - Works offline and can be installed as app

## 📱 Install as App

1. Open website in Chrome, Edge, or Firefox on mobile
2. Click "Install" button or use browser menu
3. App will appear on home screen
4. Works offline after first load

## 🔒 Security

- HTTPS ready
- Security headers configured
- No tracking or ads (unless you add them)
- User data stays on device (all calculations done locally)

## 🎓 For Students

This helps you:
- ✅ Calculate SGPA/CGPA correctly
- ✅ Track academic performance
- ✅ Prepare for placements (know your GPA before interviews)
- ✅ Plan for higher education
- ✅ Improve grades (understand what grades you need)

## 👨‍💻 Author

**Sameer Challa**  
LinkedIn: https://www.linkedin.com/in/sameer-challa-3897b6367

## 📄 License

Free to use for educational purposes.

---

**Status:** ✅ Production Ready  
**Last Updated:** April 14, 2026

