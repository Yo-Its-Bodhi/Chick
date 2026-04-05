# Crazy Chicken ($CHICK) Website

Official website for the Crazy Chicken token on Shido Network.

## Tech Stack

- React 18 + Vite
- Tailwind CSS v4
- Framer Motion
- tsparticles
- GeckoTerminal API (live price data)

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy to Netlify

1. Push this repo to GitHub
2. In Netlify: **Add new site → Import from Git → Select repo**
3. Build settings are auto-detected from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy**

### Custom Domain (crazychicken.net)

1. In Netlify dashboard → **Domain management → Add custom domain**
2. Enter `crazychicken.net`
3. Update DNS at domain registrar:
   - **Option A (recommended):** Point nameservers to Netlify's DNS
   - **Option B:** Add a CNAME record pointing to `<your-site>.netlify.app`
4. Netlify auto-provisions SSL via Let's Encrypt

## Environment

No environment variables required. The GeckoTerminal API is public and requires no authentication.

## Token Info

| Token | Contract |
|-------|----------|
| $CHICK | `0x37385e458bb1b19c614c238e5109e59ac605df7a` |
| $EGG | Coming Soon |

**Network:** Shido Network
**Pool:** `0x600c9561b00e3bc569211dbb47ac134fd46d6746`
