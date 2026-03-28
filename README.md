# Garrett Holland Website

Personal website and resume site built with Hugo and the Blowfish theme.

## Stack

- Hugo 0.152.2
- Blowfish theme via git submodule
- GitHub Actions for PR preview artifacts and GitHub Pages deployment

## Local Development

Start the local server:

```bash
hugo serve
```

Build the production output locally:

```bash
hugo build --minify
```

The generated site is written to `public/`. That directory is ignored locally and rebuilt in CI for previews and deployment.

## Content Layout

- `content/_index.md`: homepage copy
- `content/about/index.md`: about page
- `content/experience/`: role pages and the experience timeline
- `content/resume.md`: resume landing page using the PDF shortcode
- `static/resume/resume.pdf`: source PDF rendered on the resume page

## Resume Workflow

The resume page uses a custom `pdf` shortcode defined in `layouts/shortcodes/pdf.html`.

- Styling lives in `static/css/pdf-inline-viewer.css`
- Viewer behavior lives in `static/js/pdf-inline-viewer.js`
- Assets are conditionally injected only on pages that use the `pdf` shortcode through `layouts/partials/extend-head-uncached.html`

To update the resume:

1. Replace `static/resume/resume.pdf`
2. Update supporting site copy in `content/about/index.md`, `content/_index.md`, and `content/experience/` as needed
3. Run `hugo serve` and verify `/resume/`

## Deployment

Deployment is handled by `.github/workflows/hugo-build.yml`.

- Pull requests to `main` build the site and upload a `hugo-preview` artifact
- Pushes to `main` build and publish to GitHub Pages for `https://garrettholland.com`
