# Artnode — Design Studio

Next.js site with a minimal black home page and centered logo.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

1. Push this repo to GitHub/GitLab/Bitbucket and [import it in Vercel](https://vercel.com/new).
2. Go to **Settings** → **Build & Development** (Build and Development Settings).
3. Set:
   - **Framework Preset:** `Next.js` (choose from dropdown; do not use "Other").
   - **Root Directory:** leave **empty**.
   - **Build Command:** leave default or `npm run build`.
   - **Output Directory:** leave **empty**. Critical for Next.js — if this is set to anything (e.g. `out`, `.next`), clear it and Save.
4. **Save**, then **Redeploy** (Deployments → … on latest → Redeploy).

### If you still see 404 NOT_FOUND

- **Output Directory:** In Settings → Build & Development, ensure **Output Directory** is blank. Next.js is not static; a custom Output Directory causes NOT_FOUND.
- **Build:** Open the latest deployment → **Building** tab; confirm the build succeeded. A failed build can show 404.
- **URL:** Use the deployment's URL (e.g. `artnode-website-xxx.vercel.app`). For a custom domain, add it under Settings → Domains.
- **Protection:** If the project has Deployment Protection or Trusted IPs, try the deployment URL in incognito or from another network.
