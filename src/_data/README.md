# Boston (MA) Alumni Chapter - Eleventy Website Data Files

## Project Overview

These JSON data files are prepared for rebuilding the Boston (MA) Alumni Chapter of Kappa Alpha Psi Fraternity, Inc. website using Eleventy (11ty) static site generator.

**Goal:** Win the Ronald R. Young Website of the Year Award from the Northeastern Province.

## Data Files Included

| File | Description |
|------|-------------|
| `site.json` | Global site configuration, branding colors, contact info, leadership |
| `founders.json` | All 10 Kappa Alpha Psi founders with full biographies |
| `polemarchs.json` | All 36 past polemarchs of Boston Alumni Chapter |
| `charterMembers.json` | 37 charter members from June 3, 1950 |
| `undergradChapters.json` | 3 undergraduate chapters (Chi, Theta Iota, Lambda Xi) |
| `navigation.json` | Complete site navigation structure |
| `programs.json` | Kappa League and Cuts and Curls program details |

## Setup Instructions for Claude Code

### 1. Initialize the Project

```bash
mkdir bostonkapsi && cd bostonkapsi
git init
npm init -y
npm install @11ty/eleventy
```

### 2. Create Directory Structure

```
bostonkapsi/
├── src/
│   ├── _data/          ← PUT THESE JSON FILES HERE
│   ├── _includes/
│   │   ├── layouts/
│   │   └── partials/
│   ├── assets/
│   │   ├── css/
│   │   ├── images/
│   │   └── js/
│   └── pages/
├── .eleventy.js
├── package.json
└── README.md
```

### 3. Copy Data Files

Place all JSON files from this package into `src/_data/`

### 4. Key Branding Requirements (from Kappa Media Kit)

**Colors:**
```css
:root {
  --crimson: #70110C;
  --cream: #F2EBD7;
  --cream-digital: #EDEBEB;
}
```

**Typography (Google Fonts - Free):**
- Headings: Source Sans Pro
- Body: Open Sans
- Accents: Roboto

### 5. Award Criteria Checklist

The site must include:

- [ ] Consistent navigation on every page
- [ ] Kappa Crest prominently displayed (5 pts)
- [ ] NO improper Kappa Diamond display (-25 pts penalty)
- [ ] All images with alt tags
- [ ] No page longer than 4 scrolls (add "Back to Top" links)
- [ ] Links to National (kappaalphapsi1911.com)
- [ ] Links to Province (kapsinep.org)
- [ ] Links to Regional chapters
- [ ] Anti-hazing statement on membership page
- [ ] National, Provincial, AND Local history
- [ ] Membership criteria explained
- [ ] Community program impact shown

### 6. Data Inconsistencies to Verify

Before building, confirm with chapter leadership:

1. **Current Polemarch**: Data says Anthony Munro (36th) - verify this is current
2. **Phone Number**: Listed as "TBD" - get actual chapter phone
3. **Social Media URLs**: Currently empty - get chapter social links

### 7. Git Workflow

Commit incrementally as you build:

```bash
git add .
git commit -m "Initial Eleventy setup with data files"

# After each major milestone:
git commit -m "Add base layout with Kappa branding"
git commit -m "Create founders page with data loop"
git commit -m "Add past polemarchs page"
# etc.
```

## Required Pages

1. **Home** (`/`)
2. **Fraternity History** (`/fraternity/history/`)
3. **Our Founders** (`/fraternity/founders/`)
4. **Grand Chapter Leadership** (`/fraternity/leadership/`)
5. **Chapter History** (`/chapter/history/`)
6. **Chapter Leadership** (`/chapter/leadership/`)
7. **Past Polemarchs** (`/chapter/past-polemarchs/`)
8. **Undergraduate Chapters** (`/chapter/undergraduate-chapters/`)
9. **Kappa League** (`/programs/kappa-league/`)
10. **Cuts and Curls** (`/programs/cuts-and-curls/`)
11. **Membership** (`/membership/`)
12. **Reclamation** (`/membership/reclamation/`)
13. **Contact** (`/contact/`)
14. **Privacy Policy** (`/privacy-policy/`)

## External Resources

- **Kappa Media Kit**: https://kappamediakit.com/
- **Coat of Arms Download**: https://kappamediakit.com/wp-content/uploads/2020/11/coatofarms_large.png
- **Official Photo Gallery**: https://kappaalphapsi1911.smugmug.com/

## Legal Requirements

From Chapter Certification Procedure:
- ❌ NO Playboy bunny logo
- ❌ NO sexually explicit content
- ❌ NO alcoholic imagery or drug paraphernalia
- ✅ Anti-hazing statement required
- ✅ SSL certificate required (HTTPS)

---

*Prepared for Stanley, IT Chair, Boston (MA) Alumni Chapter*
*Data scraped from bostonkapsi.org on January 2025*
