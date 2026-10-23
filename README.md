# DIO Capital Partners website

Next.js site for [dio-capital.com](https://www.dio-capital.com). Pushing to `main` deploys to production on Vercel; other branches get preview deployments.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build, also catches type errors
```

## Editing content

All copy lives in `src/content/site.ts`: investment criteria, FAQs, partners and bios, portfolio companies and add-ons, and press releases.

To announce a new acquisition:

1. Add the photo to `public/assets/`.
2. Add a release to the top of `releases` (newest first). It gets its own page at `/news/<slug>` and appears in the homepage News list.
3. Add the company to `platforms`, or to a platform's `addons` with `release: "<slug>"` so its card links to the announcement.

## Broker criteria PDF

`public/DIO-Capital-Partners-Investment-Criteria.pdf` is printed from the `/criteria` page. After changing criteria, portfolio or partner details, run the site locally and regenerate it:

```bash
npm run build && npm run start
"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless=new --no-pdf-header-footer --print-to-pdf="public\DIO-Capital-Partners-Investment-Criteria.pdf" http://localhost:3000/criteria
```

The page must stay on a single Letter page (816×1056 px).
