const nav = document.querySelector('.site-nav');
const talksSection = document.getElementById('talks');

// Ensure Collaborators and Supervision appear in the main navigation.
if (nav && !nav.querySelector('a[href="#collaborators"]')) {
  const talksLink = nav.querySelector('a[href="#talks"]');
  const collaboratorsLink = document.createElement('a');
  collaboratorsLink.href = '#collaborators';
  collaboratorsLink.textContent = 'Collaborators';

  const supervisionLink = document.createElement('a');
  supervisionLink.href = '#supervision';
  supervisionLink.textContent = 'Supervision';

  if (talksLink) {
    nav.insertBefore(collaboratorsLink, talksLink);
    nav.insertBefore(supervisionLink, talksLink);
  } else {
    nav.append(collaboratorsLink, supervisionLink);
  }
}

// Create the collaborators section if needed, then keep its list in sync.
let collaboratorsSection = document.getElementById('collaborators');
if (talksSection && !collaboratorsSection) {
  collaboratorsSection = document.createElement('section');
  collaboratorsSection.id = 'collaborators';
  collaboratorsSection.className = 'section section-wrap';
  collaboratorsSection.innerHTML = `
    <div class="section-head split-head">
      <div>
        <p class="kicker">Collaborators</p>
        <h2>Selected research collaborators.</h2>
      </div>
      <p>
        Selected recurring collaborators and co-authors across my work on excitons,
        low-dimensional materials, optoelectronics and quantum materials.
      </p>
    </div>
    <div class="timeline"></div>`;
  talksSection.parentNode.insertBefore(collaboratorsSection, talksSection);
}

if (collaboratorsSection) {
  const timeline = collaboratorsSection.querySelector('.timeline');
  if (timeline) {
    timeline.innerHTML = `
      <article class="timeline-item"><span class="timeline-label">Bartomeu Monserrat</span><div><h3>University of Cambridge</h3><p>United Kingdom</p></div></article>
      <article class="timeline-item"><span class="timeline-label">Ermin Malic</span><div><h3>Philipps-Universität Marburg</h3><p>Germany</p></div></article>
      <article class="timeline-item"><span class="timeline-label">Wojciech J. Jankowski</span><div><h3>University of Cambridge</h3><p>United Kingdom</p></div></article>
      <article class="timeline-item"><span class="timeline-label">Robert-Jan Slager</span><div><h3>University of Manchester</h3><p>United Kingdom</p></div></article>
      <article class="timeline-item"><span class="timeline-label">Paulina Płochocka</span><div><h3>Wrocław University of Science and Technology</h3><p>Poland</p></div></article>
      <article class="timeline-item"><span class="timeline-label">Michał Baranowski</span><div><h3>Wrocław University of Science and Technology</h3><p>Poland</p></div></article>
      <article class="timeline-item"><span class="timeline-label">Libai Huang</span><div><h3>Purdue University</h3><p>United States</p></div></article>
      <article class="timeline-item"><span class="timeline-label">Richard Friend</span><div><h3>University of Cambridge</h3><p>United Kingdom</p></div></article>
      <article class="timeline-item"><span class="timeline-label">Marcin Mucha-Kruczyński</span><div><h3>University of Bath</h3><p>United Kingdom</p></div></article>
      <article class="timeline-item"><span class="timeline-label">Aran García-Lekue</span><div><h3>University of the Basque Country (UPV/EHU) / Donostia International Physics Center</h3><p>Spain</p></div></article>`;
  }
}

// Add supervision section directly before talks if it is missing.
if (talksSection && !document.getElementById('supervision')) {
  const supervision = document.createElement('section');
  supervision.id = 'supervision';
  supervision.className = 'section section-wrap';
  supervision.innerHTML = `
    <div class="section-head split-head">
      <div>
        <p class="kicker">Supervision</p>
        <h2>Student supervision.</h2>
      </div>
      <p>PhD co-supervision and Master's research projects.</p>
    </div>

    <h3 class="pub-subheading">PhD</h3>
    <div class="timeline">
      <article class="timeline-item"><span class="timeline-label">Co-supervisor</span><div><h3>Eleanor Davison</h3><p>PhD researcher</p></div></article>
      <article class="timeline-item"><span class="timeline-label">Co-supervisor</span><div><h3>Kai-Wei Chang</h3><p>PhD researcher</p></div></article>
    </div>

    <h3 class="pub-subheading" style="margin-top:48px;">Master's</h3>
    <div class="timeline">
      <article class="timeline-item"><span class="timeline-label">2025</span><div><h3>Will Davie</h3><p>Master's research project</p></div></article>
      <article class="timeline-item"><span class="timeline-label">2025</span><div><h3>Pedro Braga</h3><p>Master's research project</p></div></article>
      <article class="timeline-item"><span class="timeline-label">2024</span><div><h3>Eleanor Davison</h3><p>Master's research project</p></div></article>
    </div>`;

  talksSection.parentNode.insertBefore(supervision, talksSection);
}

// Update contact section copy and public email address.
const contactSection = document.getElementById('contact');
if (contactSection) {
  const contactHeading = contactSection.querySelector('h2');
  if (contactHeading) contactHeading.textContent = 'Where to find me.';

  const contactLinks = contactSection.querySelector('.contact-links');
  if (contactLinks) {
    const existingEmail = Array.from(contactLinks.children).find(el =>
      el.textContent.trim().toLowerCase().startsWith('email')
    );
    const emailLink = document.createElement('a');
    emailLink.href = 'mailto:jjt56@cam.ac.uk';
    emailLink.textContent = 'jjt56@cam.ac.uk';

    if (existingEmail) {
      existingEmail.replaceWith(emailLink);
    } else {
      contactLinks.appendChild(emailLink);
    }
  }
}

const menuButton = document.querySelector('.menu-button');
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
