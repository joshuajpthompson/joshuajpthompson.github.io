const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();


// Privacy-friendly site statistics: Cloudflare Web Analytics.
// Set this to the *site token* copied from Cloudflare Web Analytics > Manage site.
// Leave it empty to disable analytics entirely. Do NOT paste Cloudflare API tokens.
const cloudflareWebAnalyticsSiteToken = '';

if (cloudflareWebAnalyticsSiteToken.trim()) {
  const cloudflareBeacon = document.createElement('script');
  cloudflareBeacon.type = 'module';
  cloudflareBeacon.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  cloudflareBeacon.setAttribute(
    'data-cf-beacon',
    JSON.stringify({ token: cloudflareWebAnalyticsSiteToken.trim() })
  );
  document.body.appendChild(cloudflareBeacon);
}
