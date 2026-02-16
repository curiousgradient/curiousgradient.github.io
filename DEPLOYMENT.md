# Deployment Guide for GitHub Pages

This guide will help you deploy your personal website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your computer
3. Your website files ready (profile photo, resume PDF)

## Step 1: Prepare Your Content

Before deploying, make sure to:

1. **Add your profile photo**:
   - Place your photo at `public/images/profile.png`
   - Recommended: 512x512 pixels, square aspect ratio

2. **Add your resume**:
   - Place your PDF at `public/resume.pdf`

3. **Update personal information**:
   - Edit `src/app/page.tsx` - Update bio and project descriptions
   - Edit `src/components/Navigation.tsx` - Update your name
   - Edit `src/components/Footer.tsx` - Update social media links
   - Edit `src/app/layout.tsx` - Update site metadata

4. **Optional: Set up Google Analytics**:
   - Copy `.env.local.example` to `.env.local`
   - Add your GA4 tracking ID: `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`

## Step 2: Initialize Git Repository

If you haven't already initialized a git repository:

```bash
cd rohit_website
git init
git add .
git commit -m "Initial commit: Personal website"
```

## Step 3: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Choose a repository name:
   - For personal site: `yourusername.github.io`
   - For project site: any name like `portfolio` or `website`
4. Keep it **Public** (required for free GitHub Pages)
5. **Do NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

## Step 4: Push Your Code to GitHub

Copy the commands from GitHub and run them:

```bash
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

## Step 5: Configure GitHub Pages

### Important: Choose Your URL Structure

**Option A: User/Organization Site** (`yourusername.github.io`)
- Repository name MUST be: `yourusername.github.io`
- Site will be at: `https://yourusername.github.io`
- **No changes needed** to `next.config.ts`

**Option B: Project Site** (`yourusername.github.io/repo-name`)
- Repository can have any name (e.g., `portfolio`)
- Site will be at: `https://yourusername.github.io/repo-name`
- **MUST update** `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/repo-name',        // Uncomment and set your repo name
  assetPrefix: '/repo-name',     // Uncomment and set your repo name
};
```

### Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under "Build and deployment":
   - Source: Select **GitHub Actions**
5. That's it! The workflow will run automatically

## Step 6: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You'll see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (usually 1-2 minutes)
4. Once complete, your site will be live!

## Step 7: Visit Your Site

- User site: `https://yourusername.github.io`
- Project site: `https://yourusername.github.io/repo-name`

## Future Updates

Every time you push to the `main` branch, GitHub Actions will automatically rebuild and redeploy your site:

```bash
# Make changes to your files
git add .
git commit -m "Update blog post"
git push
```

Wait 1-2 minutes and your changes will be live!

## Adding Content

### Adding a Blog Post

1. Create a new `.md` file in `content/blog/`:

```bash
# Example: content/blog/my-new-post.md
---
title: "My New Post"
date: "2026-02-04"
description: "Description here"
tags: ["tag1", "tag2"]
type: "local"
---

# Your content here
```

2. Commit and push:

```bash
git add content/blog/my-new-post.md
git commit -m "Add new blog post"
git push
```

### Linking a Medium Article

Create a file in `content/blog/` with `type: "medium"`:

```markdown
---
title: "My Medium Article"
date: "2026-02-04"
description: "Article description"
tags: ["medium"]
type: "medium"
link: "https://medium.com/@you/your-article"
---
```

### Adding a Deep Dive

Create a new `.md` file in `content/deep-dives/`:

```bash
# Example: content/deep-dives/algorithm-proof.md
---
title: "Algorithm Proof"
date: "2026-02-04"
description: "Mathematical proof"
tags: ["algorithms", "proofs"]
---

# Content with LaTeX support

$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$
```

## Custom Domain (Optional)

If you want to use a custom domain like `rohitr.com`:

1. Buy a domain from a registrar (Namecheap, GoDaddy, etc.)
2. In your repository, create a file `public/CNAME` with your domain:
   ```
   rohitr.com
   ```
3. In your domain registrar's DNS settings, add:
   - **A Records** pointing to GitHub's IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - **CNAME Record**: `www` pointing to `yourusername.github.io`
4. In GitHub Settings → Pages, enter your custom domain
5. Wait for DNS propagation (can take up to 48 hours)

## Troubleshooting

### Build Fails

1. Check the Actions tab for error messages
2. Common issues:
   - Missing dependencies: Run `npm install` locally
   - TypeScript errors: Run `npm run build` locally to see errors
   - Missing files: Make sure all referenced files exist

### Site Not Loading

1. Check if the Action completed successfully
2. Verify GitHub Pages is enabled in Settings
3. Check the correct URL (with or without repo name in path)
4. Clear browser cache and try again

### Images Not Showing

1. Ensure images are in the `public/` directory
2. Reference them with `/images/filename.jpg` (not `public/images/...`)
3. If using project site, verify `basePath` is set correctly

### 404 Errors

1. For project sites, make sure `basePath` is configured
2. Verify file paths are correct
3. Check that markdown files have correct frontmatter

## Getting Help

If you run into issues:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review the [GitHub Pages documentation](https://docs.github.com/en/pages)
3. Open an issue in your repository with the error message

---

Good luck with your website! 🚀
