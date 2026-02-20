# Netlify Deployment Guide

If you're deploying this site to Netlify, here are the correct settings:

1. **Build Command**: `npm run build`
2. **Publish Directory**: `dist/public`

**Troubleshooting "DNS" or Site Loading Issues:**

1. **Check Build Settings**: Make sure Netlify is set to use `npm run build`.
2. **Check Publish Directory**: It MUST be `dist/public`. If you set it to just `dist`, the site won't load.
3. **Redirects**: I've added a `_redirects` file to ensure the app loads correctly even if you refresh the page.

If you're still having issues, try re-linking the repository in your Netlify dashboard.
