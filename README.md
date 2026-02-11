# JD McCulley — Portfolio

Live site: [jdmcculley.github.io/portfolio](https://jdmcculley.github.io/portfolio/)

## Deploying Changes

After editing any files, commit and push to update the live site:

```bash
cd ~/Library/Mobile\ Documents/com~apple~CloudDocs/Documents/Job\ Docs/Portfolio
git add -A
git commit -m "Describe what you changed"
git push
```

GitHub Pages will automatically redeploy within a couple minutes.

## Design System

Edit `css/design-system.css`, then run the build script to propagate changes to all pages:

```bash
./build.sh
```

## Structure

```
index.html                  ← main portfolio hub
case-study-cashback.html    ← DG Cash Back case study
case-study-wallet.html      ← DG Wallet Redesign case study
ai-design-trends.html       ← AI design trends article
resume.html                 ← resume page
design-system-preview.html  ← design system reference
quote-gallery.html          ← testimonial quotes
css/                        ← design system + theme variants
assets/
  brand/                    ← logos, headshot, SVGs
  images/                   ← product/project screenshots
  testimonials/             ← quote portraits
```
