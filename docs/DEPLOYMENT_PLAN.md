# Deployment Plan

The deployment target is Vercel.

## Simple Release Flow

1. Run local checks:

```bash
npm run build
```

2. Commit changes:

```bash
git status
git add .
git commit -m "Prepare SiteBrain demo"
```

3. Push to GitHub:

```bash
git push
```

4. Import the project in Vercel.

5. Confirm build settings:

- framework: Next.js;
- build command: `npm run build`;
- output handled by Vercel defaults.

6. Deploy and get the public URL.

7. Generate a QR code for the public URL.

8. Test the QR code on a real phone.

## Pre-Demo Verification

Before sharing the QR code:

- open the Vercel URL in a desktop browser;
- open it on a phone;
- check all demo routes;
- confirm there is no login wall;
- confirm the page is readable on mobile data;
- confirm the architecture page explains the system clearly.

## Important Notes

This demo is designed to run on mock data. No database or real AI worker is required for the public stage version.
