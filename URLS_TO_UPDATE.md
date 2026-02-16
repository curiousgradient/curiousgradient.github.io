# URLs to Update - Quick Reference

This file lists all the placeholder URLs in your website that need to be updated with your actual profiles.

## 🔗 Social Media URLs to Replace

### GitHub Profile
**Replace**: `https://github.com/yourusername`
**With**: `https://github.com/YOUR_ACTUAL_USERNAME`

**Locations**:
1. `src/app/page.tsx` - Line ~35 (Hero section button)
2. `src/components/Footer.tsx` - Line ~18 (Footer GitHub icon)

### LinkedIn Profile
**Replace**: `https://linkedin.com/in/yourusername`
**With**: `https://linkedin.com/in/YOUR_ACTUAL_USERNAME`

**Locations**:
1. `src/app/page.tsx` - Line ~51 (Hero section button)
2. `src/components/Footer.tsx` - Line ~29 (Footer LinkedIn icon)

### Medium Profile
**Replace**: `https://medium.com/@yourusername`
**With**: `https://medium.com/@YOUR_ACTUAL_USERNAME`

**Locations**:
1. `src/components/Footer.tsx` - Line ~40 (Footer Medium icon)

### Kaggle Competition (Example)
**Replace**: `https://kaggle.com/competitions/your-competition`
**With**: Your actual Kaggle competition URL

**Location**:
1. `src/app/page.tsx` - Line ~77 (Project card link)

### Medium Article Example
**Replace**: `https://medium.com/@yourusername/your-article-slug`
**With**: Your actual Medium article URL

**Location**:
1. `content/blog/medium-article-example.md` - Line 6 (frontmatter link)

## 📝 Text to Update

### Your Name
**Replace**: "Rohit Ramaprasad"
**With**: Your actual name

**Locations**:
1. `src/components/Navigation.tsx` - Line ~28 (Navigation bar)
2. `src/components/Footer.tsx` - Line ~12 (Copyright notice)
3. `src/app/page.tsx` - Line ~20 (Hero section title)
4. `src/app/layout.tsx` - Line 7 (Page title)

### Bio Text
**Update**: `src/app/page.tsx` - Lines 17-22
Current placeholder bio - replace with your actual bio.

### Project Descriptions
**Update**: `src/app/page.tsx` - Lines 70-110
Three project cards with placeholder content - replace with your actual projects.

## 🎨 Optional: Metadata Updates

### Site Title
**Location**: `src/app/layout.tsx` - Line 7
**Current**: "Rohit Ramaprasad - Software Engineer & Data Scientist"
**Update**: Customize to your title/role

### Site Description
**Location**: `src/app/layout.tsx` - Line 8
**Current**: "Personal website of Rohit Ramaprasad..."
**Update**: Customize to describe your site

### Keywords
**Location**: `src/app/layout.tsx` - Line 9
**Update**: Add relevant keywords for SEO

## 🔍 Quick Find & Replace Guide

Use your code editor's find & replace feature:

### Find and Replace All:

1. **Find**: `yourusername`
   **Replace**: Your actual username (varies by platform)

2. **Find**: `Rohit Ramaprasad`
   **Replace**: Your full name

3. **Find**: `https://github.com/yourusername`
   **Replace**: Your GitHub URL

4. **Find**: `https://linkedin.com/in/yourusername`
   **Replace**: Your LinkedIn URL

5. **Find**: `https://medium.com/@yourusername`
   **Replace**: Your Medium URL

## ⚠️ Important Notes

1. **Don't replace** `yourusername` in:
   - `README.md` (it's documentation)
   - `DEPLOYMENT.md` (it's instructions)
   - This file (it's a reference guide)

2. **Only replace** in actual code files:
   - `src/app/page.tsx`
   - `src/components/Navigation.tsx`
   - `src/components/Footer.tsx`
   - `src/app/layout.tsx`
   - `content/blog/medium-article-example.md`

3. After replacing URLs, test all links:
   - Click each social media icon
   - Click each button
   - Verify they go to the correct profiles

## ✅ Checklist

Use this to track your updates:

- [ ] Updated GitHub URL in hero section
- [ ] Updated GitHub URL in footer
- [ ] Updated LinkedIn URL in hero section
- [ ] Updated LinkedIn URL in footer
- [ ] Updated Medium URL in footer
- [ ] Updated name in navigation
- [ ] Updated name in footer
- [ ] Updated name in hero section
- [ ] Updated name in page title
- [ ] Updated bio text
- [ ] Updated project descriptions
- [ ] Updated Kaggle competition link
- [ ] Updated Medium article example
- [ ] Tested all links work correctly

## 🧪 How to Test

After updating URLs:

1. Run `npm run dev`
2. Visit http://localhost:3000
3. Click every link and button
4. Verify each opens the correct profile/page
5. Check both desktop and mobile views

---

**Tip**: Use VS Code or Cursor's "Find in Files" (Cmd/Ctrl + Shift + F) to locate all instances of text you need to replace!
