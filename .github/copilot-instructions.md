# AI Coding Agent Instructions for lhy-sara.github.io

## Project Overview
This is a **GitHub Pages portfolio website** showcasing web design and development projects. It contains a mix of:
- **Bootstrap learning projects** (`bt*.html`, `portfolio/`) - Using Bootstrap 4/5 for responsive layouts
- **Custom HTML/CSS assignments** (`as01/` through `as07/`) - Hand-coded layouts without frameworks
- **Practice files** - Experimental work with jQuery, CSS, and layout techniques

The site is deployed via GitHub Pages and serves as both a learning portfolio and practice ground.

## Architecture & File Organization

### Project Structure
```
├── Root Level        # Quick demos and Bootstrap experiments
│   ├── bt*.html      # Bootstrap 4/5 templates (4 variations)
│   ├── jquery.html   # jQuery interaction examples
│   └── practice.html # Sandbox for new techniques
├── as01/ to as07/    # Assignment projects (each self-contained)
│   ├── index.html
│   └── style.css     # Paired local CSS (if present)
└── portfolio/        # Main portfolio site (Bootstrap 5.3.8 + animations)
    ├── index.html    # Complex multi-section layout with Roboto font
    └── *.png         # Project screenshots/images
```

### Key Patterns

**Bootstrap Implementation**
- Versions vary: `bs4` (bt*.html) and `bs5.3.8` (portfolio/)
- Always include CDN links with integrity attributes for security
- Use responsive grid: `col-md-*`, `col-sm-*` classes
- Example: `as01/` uses custom flexbox instead—check project requirements before defaulting to Bootstrap

**Assignment Projects (as01-as07)**
- **Design Pattern**: Self-contained, no external frameworks
- **Layout**: Custom flexbox (`#container` with `flex-direction: column`)
- **Navigation**: Fixed sidebar (`#nav`) or inline links to anchored sections
- **CSS**: Always in paired `style.css` file in the same directory
- Typically use inline `<style>` tags for overrides (e.g., `#scene01 { color: salmon; }`)

**Portfolio Site (portfolio/index.html)**
- **Most complex**: 671 lines with animations, offcanvas sidebar, gradient backgrounds
- **Key techniques**:
  - Fixed circular nav button (top-right, semi-transparent)
  - Offcanvas sidebar with `bootstrap@5.3.8`
  - CSS animations (`@keyframes gradientAnimation`, `fadeIn`)
  - Roboto font via Google Fonts
  - Semi-transparent backgrounds: `rgba(118, 142, 134, 0.7)`
  - Custom styling overrides with `!important` for Bootstrap utility classes

## Development Workflow

### When Adding New Pages
1. **Determine framework**: Assignment? Use vanilla HTML/CSS. Demo/showcase? Use Bootstrap
2. **Check viewport meta tag**: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
3. **Structure**:
   - Bootstrap projects: Link CSS before closing `</head>`, JS before `</body>`
   - Assignment projects: Create paired `index.html` + `style.css`
4. **Test responsiveness**: Bootstrap should adapt (`col-md-*` → stacks on mobile)

### CSS Conventions
- Root-level projects use inline `<style>` tags or external stylesheets
- Assignment projects store CSS in `style.css` in same directory
- Portfolio uses complex animations with `@keyframes` and `:hover` transitions
- Common override pattern: Use `!important` sparingly, only for Bootstrap utility overrides

### Integration Points
- **CDN Dependencies**: Bootstrap (jsDelivr), jQuery (code.jquery.com), Google Fonts
- **No build tools**: Static HTML/CSS/JS only—direct browser execution
- **No backend**: GitHub Pages (static hosting) means no server-side code
- **GitHub Pages specifics**: Files must be valid HTML/CSS; deployment is automatic on push to main branch

## Common Patterns to Follow

| Pattern | Example | Notes |
|---------|---------|-------|
| **Responsive columns** | `<div class="col-md-4 col-sm-12">` | Bootstrap only; custom projects use flexbox |
| **Fixed buttons** | `.nav-btn { position: fixed; }` | Portfolio uses for navigation; see `portfolio/index.html` |
| **Animations** | `@keyframes fadeIn { ... }` | portfolio/ uses CSS animations, not JS |
| **Inline style overrides** | `style="background-color: lightblue;"` | Common in bt*.html for quick tweaks |
| **Section anchors** | `id="scene01"`, `<a href="#scene01">` | Used in as01/ for navigation |

## Things to Avoid

- **Don't mix frameworks carelessly**: Use Bootstrap OR custom CSS per project, not both competing
- **Don't break viewport settings**: Always keep responsive viewport meta tag
- **Don't hardcode colors without reason**: Use semi-transparent `rgba()` for layered effects (portfolio style)
- **Don't assume Bootstrap version**: Check CDN link (`@4.5.3` vs `@5.3.8`) before adding components
- **Don't commit uncommmented code**: These are learning projects—inline comments help future review

## Quick Reference: Key Files

| File | Purpose | Key Learning |
|------|---------|--------------|
| `bt.html` | Bootstrap 4 basics | Row/column grids, jumbotron |
| `as01/` | Flexbox layout | `flex-direction: column`, sidebar + content |
| `portfolio/index.html` | Advanced Bootstrap 5 | Animations, offcanvas sidebar, CSS gradients |
| `jquery.html` | jQuery interactions | Event handlers, DOM manipulation |

---

**Last Updated**: November 2025 | **Scope**: GitHub Pages portfolio site
