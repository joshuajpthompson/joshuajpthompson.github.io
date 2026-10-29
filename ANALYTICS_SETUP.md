# Website visitor analytics

**Cloudflare Web Analytics is enabled** for the GitHub Pages website at [joshuajpthompson.github.io](https://joshuajpthompson.github.io/). The site loads Cloudflare's cookie-free analytics beacon from the shared `script.js` file, so tracking applies across all normal pages.

## View your traffic

1. Sign in to [Cloudflare](https://dash.cloudflare.com/) using the account where you added the site.
2. Open **Web Analytics**, then select **joshuajpthompson.github.io**.
3. View visits, page views, popular pages, referral sources and aggregate visitor locations.

New visits can take some time to appear. You cannot recover visits from before analytics was enabled, and some browser privacy protections or blockers may prevent the beacon from being counted. The site token used by the public beacon is not a Cloudflare API token.

## Manage or disable tracking

The public **site token** is configured in `script.js` as `cloudflareWebAnalyticsSiteToken`. To disable future collection, set that variable to an empty string and commit the change. To switch to a different Cloudflare Web Analytics site, replace it with that site's token.

Metrics are aggregates, not visitor-identifying records. Review your public privacy notice and applicable local requirements when using site analytics.

Official setup and management guide: https://developers.cloudflare.com/web-analytics/get-started/
