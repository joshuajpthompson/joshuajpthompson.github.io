# Website visitor analytics

This GitHub Pages site is prepared to use **Cloudflare Web Analytics**, a free, cookie-free analytics service. The tracking code is currently **disabled** until you supply a Cloudflare Web Analytics **site token**.

## Enable tracking

1. Sign in to [Cloudflare](https://dash.cloudflare.com/) or create an account.
2. Open **Web Analytics** and choose **Add a site**. Enter **joshuajpthompson.github.io** as the hostname (unless you later use a custom domain).
3. In **Manage site**, find the JavaScript snippet and copy the **site token** from the `data-cf-beacon` value (not your Cloudflare API token, password or account credentials).
4. In `script.js`, change:

   ```js
   const cloudflareWebAnalyticsSiteToken = '';
   ```

   to the site token inside the quotes. Alternatively, send the **site token** in chat and ask to update the website.
5. Commit the change. All site pages using `script.js` will then load the Cloudflare analytics beacon. Visit the website in a normal browser and check **Cloudflare > Web Analytics** for the results.

## What you can see

- Website visits and page views over time
- Most visited pages
- External referring sites
- Aggregate countries, device types and browsers
- Page speed and Web Vitals

Metrics are aggregate, not a list of identifiable visitors. Tracking only begins when enabled; earlier website visits cannot be recovered. Some privacy extensions and blockers can prevent beacons from being counted.

To disable tracking, empty the site token in `script.js`.

Cloudflare states that Web Analytics does not use cookies or collect visitors' personal data. Make sure the site's public privacy notice and any applicable local privacy requirements are addressed before enabling visitor measurements.

Official setup guide: https://developers.cloudflare.com/web-analytics/get-started/
