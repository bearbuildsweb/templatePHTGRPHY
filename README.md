# eko PHTGRPHY — Portfolio

> Photographing the people and places that make a city feel alive.

Editorial showcase and photography portfolio for **eko PHTGRPHY**, crafted with React, TypeScript, Vite, and Tailwind CSS.

---

## 🚀 GitHub Pages Deployment Guide

This project is fully pre-configured for GitHub Pages deployment. You can deploy either automatically using GitHub Actions (recommended) or manually via the `gh-pages` script.

### Method 1: Automatic Deployment via GitHub Actions (Recommended)

The repository includes a production-ready GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

1. Push your code to GitHub on the `main` or `master` branch.
2. In your GitHub repository, navigate to **Settings** > **Pages** (in the left sidebar under *Code and automation*).
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. That's it! Every time you push to `main` or `master` (or click **Run workflow** in the Actions tab), GitHub will build and publish the site automatically.

### Method 2: Manual Deployment via `gh-pages`

If you prefer to deploy from your terminal to the `gh-pages` branch:

```bash
# 1. Install dependencies
npm install

# 2. Build and deploy directly
npm run deploy
```

Then in **Settings** > **Pages**, ensure the Source is set to **Deploy from a branch** and select the `gh-pages` branch (`/ (root)`).

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Key Features & Architecture

- **Relative Asset Resolution**: Configured with `base: './'` so the site works automatically on any GitHub subpath (e.g., `https://<username>.github.io/<repo-name>/`) as well as custom domains.
- **SPA Fallback**: Automatically creates `404.html` on build to handle client-side routing on GitHub Pages without 404 errors.
- **Bypass Jekyll Processing**: Automatically bundles `.nojekyll` so GitHub Pages serves all assets directly without interference.
- **On-Brand Monogram & Favicon**: Custom vector "E" monogram brandmark and SVG favicon.
- **Zero Backend Dependencies**: Clean, purely client-side static bundle ready for CDN edge serving.
