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
2. In **Project Settings** → **General** check:
   - **Framework Preset:** Next.js (or leave “Auto”; `vercel.json` sets it).
   - **Root Directory:** leave empty (repository root must be this project).
   - **Build Command:** `npm run build` (default).
   - **Output Directory:** leave empty (do not set for Next.js).
3. **Redeploy** after changing settings.

If you still get **404**:

- Confirm the **Root Directory** is empty (or `.`) so Vercel builds from the folder that contains `package.json` and `app/`.
- In the Vercel dashboard, open the latest deployment → **Building** and ensure the build succeeds (no red errors).
- Use the deployment URL from that build (e.g. `your-project-xxx.vercel.app`), not an old or different link.
