# Boston (MA) Alumni Chapter - Kappa Alpha Psi

Official website for the Boston (MA) Alumni Chapter of Kappa Alpha Psi Fraternity, Inc. Serving Greater Boston since 1950.

**Live Site**: [bac1950.pages.dev](https://bac1950.pages.dev)

## Tech Stack

- **Static Site Generator**: [Eleventy (11ty)](https://www.11ty.dev/)
- **Templating**: Nunjucks
- **Image Optimization**: @11ty/eleventy-img (AVIF/WebP with responsive srcset)
- **Hosting**: Cloudflare Pages
- **Styling**: Custom CSS following Apple Human Interface Guidelines

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

The dev server runs at `http://localhost:8080` with hot reload.

## Project Structure

```
src/
├── _data/           # JSON data files (site config, navigation, etc.)
├── _includes/       # Layouts and partials
│   ├── layouts/     # Base layouts (base.njk)
│   └── partials/    # Reusable components (header, footer)
├── assets/
│   ├── css/         # Stylesheets
│   ├── images/      # Optimized images
│   └── js/          # JavaScript
├── pages/           # Content pages organized by section
├── index.njk        # Homepage
├── robots.txt       # Search engine directives
└── sitemap.njk      # XML sitemap generator

legacy-site-reference/  # Archive of old WordPress site for reference
```

## Image Optimization

Images are automatically optimized using the `{% image %}` shortcode:

```njk
{% image "/assets/images/photo.jpg", "Alt text", "100vw", [400, 800, 1200], "lazy" %}
```

This generates:
- AVIF and WebP formats
- Multiple sizes for responsive loading
- Proper width/height attributes for CLS prevention

## Deployment

Push to `main` branch triggers automatic deployment to Cloudflare Pages.

## Performance

Current Lighthouse scores (mobile/desktop):
- Performance: 92 / 99
- Accessibility: 100 / 100
- Best Practices: 100 / 100
- SEO: 100 / 100

## License

All content is property of Boston (MA) Alumni Chapter of Kappa Alpha Psi Fraternity, Inc.
