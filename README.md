# kisk.no

Personal site for [kisk.no](https://kisk.no), built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Develop

```powershell
npm install
npm run dev
```

Open http://localhost:4321.

## Build

```powershell
npm run build
npm run preview
```

The static site is emitted to `dist/`.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. The `public/CNAME` file binds the site to `kisk.no`.

### One-time GitHub setup

1. In repo **Settings → Pages**, set **Source** to **GitHub Actions**.
2. Under **Custom domain**, enter `kisk.no` and save.
3. Configure DNS at your registrar:
   - Apex `kisk.no` → A records pointing to GitHub Pages:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - `www.kisk.no` → CNAME `kisko.github.io.`
4. Once DNS resolves, enable **Enforce HTTPS** in Settings → Pages.
