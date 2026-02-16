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
npm install
npm run dev       # Development server
npm run build     # Production build (dist/)
npm run preview   # Preview production build
```

## Configuration

All editable values are in [`src/config.ts`](src/config.ts):

| Variable | Description |
|----------|-------------|
| `WHATSAPP_NUMBER` | Phone number (international format) |
| `INSTAGRAM_URL` | Instagram profile URL |
| `FORM_ENDPOINT` | Formspree form endpoint |
| `IMAGES` | Image paths |
