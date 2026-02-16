# Quick Start Checklist

Use this checklist to quickly customize your website before deployment.

## ✅ Essential Customizations

### 1. Add Your Files
- [ ] Add profile photo: `public/images/profile.png` (512x512px recommended)
- [ ] Add resume PDF: `public/resume.pdf`

### 2. Update Personal Information

#### In `src/app/page.tsx`:
- [ ] Line 17: Update the bio text
- [ ] Line 26-29: Update LinkedIn and GitHub URLs
- [ ] Lines 70-85: Update project cards with your actual projects
- [ ] Line 74: Add your Kaggle competition details

#### In `src/components/Navigation.tsx`:
- [ ] Line 28: Update "Rohit Ramaprasad" to your name

#### In `src/components/Footer.tsx`:
- [ ] Line 12: Update copyright name
- [ ] Line 18: Update GitHub URL
- [ ] Line 29: Update LinkedIn URL  
- [ ] Line 40: Update Medium URL

#### In `src/app/layout.tsx`:
- [ ] Line 7: Update page title
- [ ] Line 8: Update description
- [ ] Line 9: Update keywords

### 3. Social Media Links

Replace all instances of:
- `https://github.com/yourusername` → Your GitHub profile
- `https://linkedin.com/in/yourusername` → Your LinkedIn profile
- `https://medium.com/@yourusername` → Your Medium profile

Files to update:
- `src/app/page.tsx` (lines 30-58)
- `src/components/Footer.tsx` (lines 18-47)

### 4. Content

- [ ] Review sample blog post: `content/blog/my-first-post.md`
- [ ] Review sample deep dive: `content/deep-dives/derivative-of-exponential.md`
- [ ] Delete or modify sample posts as needed
- [ ] Add your own blog posts and deep dives

## 🔧 Optional Customizations

### Google Analytics
- [ ] Create `.env.local` file
- [ ] Add: `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`

### GitHub Pages Configuration
- [ ] If using project site (not `username.github.io`), update `next.config.ts`:
  - Uncomment and set `basePath: '/your-repo-name'`
  - Uncomment and set `assetPrefix: '/your-repo-name'`

### Styling
- [ ] Customize colors in `src/app/globals.css`
- [ ] Adjust component styling with Tailwind classes

## 🚀 Testing Before Deployment

Run these commands to test locally:

```bash
# Install dependencies (if not done)
npm install

# Start development server
npm run dev

# Test production build
npm run build
```

Visit http://localhost:3000 and check:
- [ ] Home page loads correctly
- [ ] Profile image appears
- [ ] All links work
- [ ] Blog page shows posts
- [ ] Deep Dives page shows content
- [ ] Individual post pages work
- [ ] Resume PDF opens
- [ ] Mobile view is responsive
- [ ] Dark mode works

## 📦 Ready to Deploy?

Once everything above is complete:

1. Follow the instructions in `DEPLOYMENT.md`
2. Push to GitHub
3. Enable GitHub Pages
4. Wait for deployment
5. Visit your live site!

## 🎨 Color Scheme

Current colors (customize in `src/app/globals.css`):
- Primary accent: Blue (#3b82f6)
- Background (light): White (#ffffff)
- Background (dark): Dark gray (#0a0a0a)
- Text (light): Dark gray (#171717)
- Text (dark): Light gray (#ededed)

## 📝 Adding New Content

### Blog Post
```bash
# Create: content/blog/post-slug.md
---
title: "Post Title"
date: "2026-02-04"
description: "Description"
tags: ["tag1", "tag2"]
type: "local"
---

# Content here
```

### Deep Dive
```bash
# Create: content/deep-dives/dive-slug.md
---
title: "Dive Title"
date: "2026-02-04"
description: "Description"
tags: ["tag1", "tag2"]
---

# Content with LaTeX: $E = mc^2$
```

### Medium Link
```bash
# Create: content/blog/medium-post.md
---
title: "Medium Post"
date: "2026-02-04"
description: "Description"
tags: ["medium"]
type: "medium"
link: "https://medium.com/@you/post"
---
```

---

Happy building! 🎉
