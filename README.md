# 🎮 Mostafa Fero - Game Developer Portfolio

A modern, dark-themed portfolio website for showcasing game development work, skills, and experience.

## 📁 Folder Structure

```
Portfolio-Play/
├── index.html              # Main HTML file (structure only)
├── css/
│   └── style.css          # Custom styles and animations
├── js/
│   ├── content.js         # ⚠️ EDIT THIS: All your portfolio content
│   └── main.js            # Navigation and UI logic
├── images/
│   ├── projects/          # Your project screenshots
│   └── companies/         # Company logos
├── assets/
│   └── *.pdf              # Your CV/Resume files
└── README.md              # This file
```

## ✏️ How to Edit Your Portfolio

### 🎯 Primary Edit File: `js/content.js`

**This is the main file you'll edit!** All your content is marked with 📝 EDIT comments.

#### 1. **Personal Information** (Lines 8-26)
```javascript
const personalInfo = {
    name: "Your Name",                    // Your full name
    title: "Your Job Title",              // Your professional title
    yearsOfExperience: "X+",              // Years of experience
    profileImage: "images/profile.jpg",   // 📸 Add your photo
    cvFile: "assets/YourCV.pdf",          // 📄 Add your CV
    location: "Your City, Country",
    email: "your.email@example.com",
    phone: "+1234567890",
    
    socialLinks: {
        linkedin: "https://linkedin.com/in/yourprofile",  // Update all links
        github: "https://github.com/yourusername",
        discord: "https://discord.com/users/yourhandle",
        spotify: "https://open.spotify.com/user/yourprofile"
    }
};
```

#### 2. **Home Page Content** (Lines 30-51)
Update your subtitle, greeting, tagline, and professional summary paragraphs.

#### 3. **Projects** (Lines 57-125)
```javascript
const projects = [
    {
        title: "Your Project Name",
        image: "images/projects/project-screenshot.png",  // 📸 Add screenshot
        description: "Your project description...",
        contributions: [
            "What you built or implemented",
            "Technologies you used",
            "Problems you solved"
        ],
        technologies: ["Unity", "C#", "VR"],
        links: {
            demo: "https://your-demo-link.com",
            repo: "https://github.com/you/project",
            playStore: "https://play.google.com/store/apps/details?id=..."
        }
    },
    // Copy this structure to add more projects
];
```

#### 4. **Skills** (Lines 131-177)
- **Technical Skills**: Add/remove skills from the array
- **Specializations**: Update with your expertise areas

#### 5. **Education** (Lines 183-197)
Update your educational background.

#### 6. **Work Experience** (Lines 203-298)
```javascript
const experience = [
    {
        position: "Your Job Title",
        company: "Company Name",
        logo: "images/companies/company-logo.png",  // 📸 Add logo
        startDate: "MM/YYYY",
        endDate: "MM/YYYY" or "Present",
        current: true,  // if still working there
        responsibilities: [
            "<strong>Key Area:</strong> What you did...",
            "Another achievement or responsibility"
        ]
    },
    // Copy this structure to add more positions
];
```

---

## 🖼️ Adding Images

### Project Screenshots
1. Save your images in: `images/projects/`
2. Recommended size: 800x450px (16:9 ratio)
3. Update the `image` field in `js/content.js`:
   ```javascript
   image: "images/projects/your-screenshot.png"
   ```

### Company Logos
1. Save logos in: `images/companies/`
2. Format: PNG with transparent background (recommended)
3. Update the `logo` field in work experience:
   ```javascript
   logo: "images/companies/company-logo.png"
   ```

### Profile Photo
1. Save in: `images/`
2. Recommended size: 256x256px or larger (square)
3. Update in `js/content.js`:
   ```javascript
   profileImage: "images/your-photo.jpg"
   ```

---

## 📄 Adding Your CV/Resume

1. Save your PDF in: `assets/`
2. Update in `js/content.js`:
   ```javascript
   cvFile: "assets/Your-Name-CV-2025.pdf"
   ```

---

## 🎨 Customizing Styles

Edit `css/style.css` to modify:
- Colors and theme
- Animations
- Timeline styles
- Scrollbar appearance

The orange color theme (#f97316) can be changed throughout the CSS file.

---

## 🚀 Quick Start Checklist

- [ ] Replace profile image in `images/`
- [ ] Add project screenshots to `images/projects/`
- [ ] Add company logos to `images/companies/`
- [ ] Add your CV to `assets/`
- [ ] Update `js/content.js` with your information:
  - [ ] Personal info and contact details
  - [ ] Social media links
  - [ ] Professional summary
  - [ ] Projects (with images and links)
  - [ ] Skills and technologies
  - [ ] Work experience (with dates and responsibilities)
  - [ ] Education

---

## 🌐 Viewing Your Portfolio

Simply open `index.html` in a web browser. For best results:
1. Use a modern browser (Chrome, Firefox, Edge, Safari)
2. For local testing, you can use a local server:
   - Python: `python -m http.server 8000`
   - Node.js: `npx serve`
   - VS Code: Install "Live Server" extension

---

## 📝 Important Notes

### Files You Should Edit:
- ✅ `js/content.js` - **Your portfolio content (MAIN FILE)**
- ✅ `css/style.css` - Styling customizations
- ✅ Add images to `images/` folder
- ✅ Add CV to `assets/` folder

### Files You Should NOT Edit (unless you know what you're doing):
- ❌ `index.html` - Page structure (already set up)
- ❌ `js/main.js` - Navigation logic (already working)

---

## 🎨 Color Theme

The portfolio uses a dark theme with orange accents:
- **Primary**: #f97316 (Orange)
- **Background**: #000000 (Black)
- **Surface**: #111111 (Dark Gray)
- **Border**: #222222 (Darker Gray)

To change the theme, update colors in `css/style.css` and the Tailwind config in `index.html`.

---

## 🆘 Troubleshooting

### Images not showing?
- Check file paths are correct (case-sensitive!)
- Ensure images are in the correct folders
- File names should not have spaces (use dashes or underscores)

### CV download not working?
- Verify the PDF is in the `assets/` folder
- Check the filename matches exactly in `content.js`

### Content not updating?
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for errors (F12)
- Verify JavaScript files are loading correctly

---

## 📱 Responsive Design

The portfolio is fully responsive and works on:
- 💻 Desktop
- 📱 Mobile
- 📱 Tablet

Test on different screen sizes to ensure everything looks great!

---

## 📧 Contact Form

The contact form is currently a static UI. To make it functional:
1. Set up a backend service (e.g., Formspree, EmailJS, or custom backend)
2. Add form handling logic in `js/main.js`
3. Update the form submit button in the contact page template

---

## 🎉 You're Ready!

Start by editing `js/content.js` and adding your images. The portfolio will automatically update!

Good luck with your portfolio! 🚀
