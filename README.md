<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Rossana Signorile Portfolio

This repository contains the portfolio website for Rossana Signorile, built with React and Vite and prepared for deployment on GitHub Pages.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

## Edit Content Locally

The site content can be edited with Decap CMS.

1. Start the local CMS proxy:
   `npm run cms`
2. In another terminal, start the site:
   `npm run dev:local`
3. Open the editor:
   `http://localhost:3000/admin/index.html`

Click **Login** once. In local mode it uses the local proxy, not a real account.

Editable content lives in `src/content/*.json`. Images uploaded in the CMS are saved to `public/uploads`.

## Edit Content on GitHub

The CMS config is prepared for the Decap GitHub backend:

- Repo: `rxssana/RossanaSignorile`
- Branch: `main`
- Admin URL after deployment: `https://rxssana.github.io/RossanaSignorile/admin/index.html`

Editors must have push access to the GitHub repository. GitHub login also requires an OAuth/auth provider; do not commit OAuth secrets to this repository. Use a supported Decap GitHub auth setup, such as Netlify's GitHub auth bridge or another OAuth service, then keep the client secret in that provider.

## CMS Image Uploads

New images uploaded through Decap are committed to `public/uploads` first. On GitHub, the deploy workflow runs:

`npm run optimize:cms-images`

That command resizes uploaded images to a web-friendly maximum of 1600px, writes them into `asset/web`, rewrites the content JSON paths from `/uploads/...` to `/asset/web/...`, and commits the optimized result before building the site.

## Build

Run a production build with:

`npm run build`

## Deploy

The repository includes a GitHub Actions workflow that deploys the site to GitHub Pages when changes are pushed to `main`.
