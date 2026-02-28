<p align="center">
  <a href="https://arepaswithfriends.com">
    <img src="public/images/logo.png" alt="Arepas With Friends" width="200" />
  </a>
</p>

<h1 align="center">arepaswithfriends.com</h1>

<p align="center">
  <a href="https://arepaswithfriends.com"><strong>arepaswithfriends.com</strong></a>
</p>

---

Source code for the [Arepas With Friends](https://arepaswithfriends.com) website — a Venezuelan arepa experience for groups in Buenos Aires.

## Stack

- [Astro](https://astro.build/) (SSG) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v3
- Deployed via GitHub Pages

## Getting started

```bash
cp .env.development.example .env.development   # Fill in your dev values
npm install
npm run dev            # Development server  (uses .env.development)
npm run build          # Production build     (uses .env.production)
npm run preview        # Preview the build
```

## Environments

The project uses two environment files, both gitignored. Copy the templates and fill in your values:

| File | Used by | Purpose |
|------|---------|---------|
| `.env.development` | `npm run dev` | Local dev server — use a personal/test number |
| `.env.production` | `npm run build` | Production build — use the real number |

Switching is automatic: Vite loads the matching file based on the build mode.

**To test a production build locally:**
```bash
cp .env.production.example .env.production   # Fill in the real number
npm run build && npm run preview
```

### Environment variables

**Secrets** (sensitive — encrypted in GitHub):

| Variable | Description |
|----------|-------------|
| `WHATSAPP_NUMBER` | Phone number in international format without `+` (e.g. `5491112345678`) |
| `FORM_ENDPOINT` | Formspree form URL (e.g. `https://formspree.io/f/xxxxxxxx`) |

**Variables** (non-sensitive — plaintext in GitHub):

| Variable | Description |
|----------|-------------|
| `MAINTENANCE_MODE` | `true` to show only the maintenance page, `false` otherwise |
| `INSTAGRAM_URL` | Full Instagram profile URL |

### GitHub Actions (CI/CD)

In CI the values come from GitHub Secrets and Variables, not from `.env` files.

**Adding secrets** (Settings → Secrets and variables → Actions → Secrets):
- `WHATSAPP_NUMBER`
- `FORM_ENDPOINT`

**Adding variables** (Settings → Secrets and variables → Actions → Variables):
- `MAINTENANCE_MODE`
- `INSTAGRAM_URL`

## Configuration

All other editable values are in [`src/config.ts`](src/config.ts):

| Variable | Description |
|----------|-------------|
| `INSTAGRAM_URL` | Instagram profile URL |
| `FORM_ENDPOINT` | Formspree form endpoint |
| `IMAGES` | Image paths |
