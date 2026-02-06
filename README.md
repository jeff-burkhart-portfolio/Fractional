# Jeff Burkhart Engineering

This is a Vite + React + Tailwind site.

Run locally:
```bash
npm install
npm run dev
```

### Calendar booking link (optional)
This site can show a **“Schedule a 30-minute intro call”** CTA that links to your calendar tool.

- Edit `src/siteConfig.js` and set `calendarUrl` to your booking URL.
- If `calendarUrl` is blank, CTAs fall back to the contact form section.

#### Calendly (recommended)
1. Create a Calendly event type (e.g. “30 Minute Intro”).
2. Copy your scheduling link (it will look like `https://calendly.com/<your-handle>/<event-slug>`).
3. Paste it into `src/siteConfig.js`:

```js
calendarUrl: 'https://calendly.com/<your-handle>/<event-slug>',
```

### Node version
Deploy environments should use **Node 20 LTS** (see `.nvmrc` and `package.json` `engines`).