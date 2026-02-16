# Personal Website - Rohit Ramaprasad

A modern, responsive personal website built with Next.js, TypeScript, and Tailwind CSS. Features include a blog system supporting both local Markdown posts and Medium articles, a "Deep Dives" section for advanced technical content with LaTeX support, and Google Analytics integration.

## Features

- ✨ Modern, clean design with dark mode support
- 📱 Fully responsive (mobile, tablet, desktop)
- 📝 Blog system with dual content support:
  - Local Markdown posts with full LaTeX rendering
  - Links to external Medium articles
- 🧮 Deep Dives section for advanced technical content
- 📊 Google Analytics integration
- 🚀 Optimized for GitHub Pages deployment
- ⚡ Fast static site generation with Next.js
- 🎨 Tailwind CSS for easy customization

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Markdown**: gray-matter, react-markdown
- **Math Rendering**: KaTeX (via rehype-katex)
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/rohit_website.git
   cd rohit_website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### 1. Personal Information

Update the following files with your information:

- **Navigation**: `src/components/Navigation.tsx` - Update your name
- **Footer**: `src/components/Footer.tsx` - Update social media links
- **Home Page**: `src/app/page.tsx` - Update bio, projects, and links
- **Layout**: `src/app/layout.tsx` - Update metadata (title, description)

### 2. Profile Photo

Replace the placeholder with your profile photo:
- Place your photo at: `public/images/profile.png`
- Recommended: 512x512 pixels or larger, square aspect ratio

### 3. Resume

Add your resume PDF:
- Place your resume at: `public/resume.pdf`

### 4. Social Media Links

Update social media URLs in:
- `src/components/Footer.tsx`
- `src/app/page.tsx`

Replace placeholders:
- `https://github.com/yourusername` → Your GitHub profile
- `https://linkedin.com/in/yourusername` → Your LinkedIn profile
- `https://medium.com/@yourusername` → Your Medium profile

## Adding Content

### Blog Posts

Create a new Markdown file in `content/blog/`:

```markdown
---
title: "Your Post Title"
date: "2026-02-04"
description: "Brief description of your post"
tags: ["tag1", "tag2"]
type: "local"
---

# Your content here

Write your post content using Markdown. Math is supported:

Inline: $E = mc^2$

Block:
$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$
```

### Medium Articles

To link a Medium article, create a Markdown file with type "medium":

```markdown
---
title: "Article on Medium"
date: "2026-01-15"
description: "Description of your Medium article"
tags: ["medium"]
type: "medium"
link: "https://medium.com/@yourusername/your-article"
---
```

### Deep Dives

Create a new Markdown file in `content/deep-dives/`:

```markdown
---
title: "Advanced Topic"
date: "2026-02-01"
description: "Description of your deep dive"
tags: ["mathematics", "proofs"]
type: "local"
---

# Your advanced content with LaTeX support
```

## Google Analytics Setup (Optional)

1. Get your Google Analytics 4 tracking ID from [analytics.google.com](https://analytics.google.com/)
2. Create a `.env.local` file (copy from `.env.local.example`)
3. Add your tracking ID:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

## Deployment to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Under "Build and deployment", select "GitHub Actions" as the source
4. The included workflow (`.github/workflows/deploy.yml`) will automatically deploy on push to `main`

### Option 2: Manual Deployment

1. Build the site:
   ```bash
   npm run build
   ```

2. The static files will be in the `out/` directory

3. Deploy the `out/` directory to your hosting service

### Important Notes for GitHub Pages

- If deploying to `username.github.io/repo-name` (not root), uncomment and update these lines in `next.config.ts`:
  ```typescript
  basePath: '/repo-name',
  assetPrefix: '/repo-name',
  ```

- If deploying to `username.github.io` (root), no changes needed

## Project Structure

```
rohit_website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── content/
│   ├── blog/                   # Blog post markdown files
│   └── deep-dives/             # Deep dive markdown files
├── public/
│   ├── images/
│   │   └── profile.jpg         # Your profile photo
│   └── resume.pdf              # Your resume
├── src/
│   ├── app/
│   │   ├── blog/               # Blog pages
│   │   ├── deep-dives/         # Deep dives pages
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   ├── ProjectCard.tsx
│   │   └── MarkdownRenderer.tsx
│   └── lib/
│       └── markdown.ts         # Markdown utilities
├── next.config.ts              # Next.js configuration
└── package.json
```

## Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Customizing Styles

The website uses Tailwind CSS v4. You can customize:

- **Colors**: Update CSS variables in `src/app/globals.css`
- **Components**: Modify Tailwind classes in component files
- **Typography**: Adjust prose styles in `globals.css`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own website!

## Questions or Issues?

If you have questions or run into issues, please open an issue on GitHub.

---

Built with ❤️ using Next.js and Tailwind CSS
