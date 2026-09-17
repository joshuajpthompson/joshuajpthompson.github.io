const nav = document.querySelector('.site-nav');
const talksSection = document.getElementById('talks');

// Keep the homepage headline on the current wording.
const heroTitle = document.querySelector('.hero-copy h1');
if (heroTitle) heroTitle.textContent = 'Where light and energy meet in materials';

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

// Add research figures to cards 2, 3 and 4 without upscaling or cropping them.
const researchCards = document.querySelectorAll('#research .research-card');
const addResearchFigure = (card, src, alt, extraClass = '') => {
  if (!card || card.querySelector('.research-figure')) return;
  const figure = document.createElement('figure');
  figure.className = `research-figure ${extraClass}`.trim();
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  img.loading = 'lazy';
  img.decoding = 'async';
  figure.appendChild(img);
  const heading = card.querySelector('h3');
  if (heading) card.insertBefore(figure, heading);
};

addResearchFigure(
  researchCards[1],
  'assets/research-hybrid-materials.webp',
  'Molecular structure illustrating a low-dimensional hybrid material.',
  'research-figure-native research-figure-hybrid'
);
addResearchFigure(
  researchCards[2],
  'assets/research-phonons.png',
  'Exciton phonon bottleneck diagram showing bright, dark and gray exciton branches.',
  'research-figure-native'
);
addResearchFigure(
  researchCards[3],
  'assets/research-quantum-materials.jpg',
  'Illustration of topological and trivial exciton transport with phonon scattering.',
  'research-figure-wide'
);

const researchFigureStyle = document.createElement('style');
researchFigureStyle.textContent = `
  .research-card .research-figure {
    margin: 18px 0 22px;
    border-radius: 18px;
    overflow: hidden;
    background: rgba(255,255,255,.04);
    border: 1px solid rgba(237,169,137,.12);
    min-height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
  }
  .research-card .research-figure img {
    display: block;
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 360px;
    object-fit: contain;
  }
  .research-card .research-figure-native img {
    max-width: 396px;
  }
  .research-card .research-figure-hybrid {
    background: transparent;
  }
  .research-card .research-figure-hybrid img {
    width: 240px;
    max-width: 100%;
  }
  .research-card .research-figure-wide img {
    width: 100%;
  }
  .research-card:has(.research-figure) h3 {
    margin-top: 18px;
  }
`;
document.head.appendChild(researchFigureStyle);

// Keep the collaborators section in sync regardless of the markup in index.html.
let collaboratorsSection = document.getElementById('collaborators');
if (!collaboratorsSection && talksSection) {
  collaboratorsSection = document.createElement('section');
  collaboratorsSection.id = 'collaborators';
  collaboratorsSection.className = 'section section-wrap';
  talksSection.parentNode.insertBefore(collaboratorsSection, talksSection);
}

if (collaboratorsSection) {
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

    <div class="timeline">
      <article class="timeline-item"><span class="timeline-label">Bartomeu Monserrat</span><div><h3>University of Cambridge</h3><p>United Kingdom</p></div></article>
      <article class="timeline-item"><span class="timeline-label">Ermin Malic</span><div><h3>Philipps-Universität Marburg</h3><p>Germany</p></div></article>
      <article class="timeline-item"><span class="timeline-label">Wojciech J. Jankowski</span><div><h3>University of Cambridge</h3><p>United Kingdom</p></div></article>
      <article class="timeline-item"><span class="timeline-label">Robert-Jan Slager</span><div><h3>University of Manchester</h3><p>United Kingdom</p></div></article>
      <article class="timeline-item"><span class="timeline-label">Paulina Płochocka</span><div><h3>Wrocław University of Science and Technology</h3><p>Poland</p></div></article>
      <article class="timeline-item"><span class="timeline-label">Michał Baranowski</span><div><h3>Wrocław University of Science and Technology</h3><p>Poland</p></div></article>
      <article class="timeline-item"><span class="timeline-label">Libai Huang</span><div><h3>Purdue University</h3><p>United States</p></div></article>
      <article class="timeline-item"><span class="timeline-label">Richard Friend</span><div><h3>University of Cambridge</h3><p>United Kingdom</p></div></article>
      <article class="timeline-item"><span class="timeline-label">Marcin Mucha-Kruczyński</span><div><h3>University of Bath</h3><p>United Kingdom</p></div></article>
      <article class="timeline-item"><span class="timeline-label">Aran García-Lekue</span><div><h3>University of the Basque Country (UPV/EHU) / Donostia International Physics Center</h3><p>Spain</p></div></article>
    </div>`;
}

// Keep supervision content in sync as well.
let supervisionSection = document.getElementById('supervision');
if (!supervisionSection && talksSection) {
  supervisionSection = document.createElement('section');
  supervisionSection.id = 'supervision';
  supervisionSection.className = 'section section-wrap';
  talksSection.parentNode.insertBefore(supervisionSection, talksSection);
}

if (supervisionSection) {
  supervisionSection.innerHTML = `
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
}

// Keep the full talks, conferences and workshops record in sync.
if (talksSection) {
  talksSection.innerHTML = `
    <div class="section-head split-head">
      <div>
        <p class="kicker">Talks</p>
        <h2>Conferences, workshops and invited talks.</h2>
      </div>
      <p>Invited and contributed presentations spanning excitons, optoelectronics, two-dimensional materials and graphene.</p>
    </div>

    <div class="timeline">
      <article class="timeline-item"><span class="timeline-label">2025 · Invited talk</span><div><h3>University of Bath</h3><p><strong>Harnessing excitons for optoelectronics</strong></p></div></article>
      <article class="timeline-item"><span class="timeline-label">2025 · Contributed oral</span><div><h3>NOEKS 17</h3><p><strong>Enhancing optoelectronic devices with exciton topology</strong> · Marburg, Germany</p></div></article>
      <article class="timeline-item"><span class="timeline-label">2025 · Contributed oral</span><div><h3>CMQM 2025</h3><p><strong>Enhancing optoelectronic devices with exciton topology</strong> · Bristol, UK</p></div></article>
      <article class="timeline-item"><span class="timeline-label">2025 · Contributed poster</span><div><h3>New Frontiers in Topological Materials</h3><p>Cambridge, UK</p></div></article>
      <article class="timeline-item"><span class="timeline-label">2025 · Contributed oral</span><div><h3>APS 2025</h3><p><strong>Enhancing optoelectronic devices with exciton topology</strong> · Los Angeles, US</p></div></article>
      <article class="timeline-item"><span class="timeline-label">2024 · Contributed poster</span><div><h3>Simons Collaboration on the Localization of Waves Annual Meeting</h3><p>New York, US</p></div></article>
      <article class="timeline-item"><span class="timeline-label">2023 · Contributed oral</span><div><h3>Graphene 2023</h3><p><strong>Exciton optics and dynamics in organic/TMD heterostructures</strong> · Manchester, UK</p></div></article>
      <article class="timeline-item"><span class="timeline-label">2023 · Contributed poster</span><div><h3>IWEPNM 2023</h3><p><strong>Exciton optics and dynamics in organic/TMD heterostructures</strong> · Kirchberg in Tirol, Austria</p></div></article>
      <article class="timeline-item"><span class="timeline-label">2022 · Contributed poster</span><div><h3>Flatlands 2022</h3><p>Lanzarote</p></div></article>
      <article class="timeline-item"><span class="timeline-label">2022 · Invited talk</span><div><h3>CMD 29</h3><p><strong>Interlayer Excitons in WS₂/Tetracene heterostructures</strong> · Manchester, UK</p></div></article>
      <article class="timeline-item"><span class="timeline-label">2022 · Contributed oral</span><div><h3>CMQM 2022</h3><p><strong>Anisotropic diffusion and angle-resolved photoluminescence in transition-metal dichalcogenide monolayers</strong> · Bath, UK</p></div></article>
      <article class="timeline-item"><span class="timeline-label">2019 · Contributed oral</span><div><h3>Frontiers in Condensed Matter Physics</h3><p><strong>Probing the electronic properties of twisted graphene layers with light</strong> · Bristol, UK</p></div></article>
      <article class="timeline-item"><span class="timeline-label">2018 · Contributed poster</span><div><h3>Graphene Week 2018</h3><p>San Sebastián, Spain</p></div></article>
      <article class="timeline-item"><span class="timeline-label">2018 · Contributed poster</span><div><h3>Graphene 2018</h3><p>Dresden, Germany · Royal Society poster prize</p></div></article>
    </div>`;
}

// Correct publication metadata that should override older static markup.
Array.from(document.querySelectorAll('#publications .publication-item')).forEach(item => {
  const title = item.querySelector('h3')?.textContent.trim();

  if (title === 'Twist Angle Tuning of Moiré Exciton Polaritons in van der Waals Heterostructures') {
    const authors = item.querySelector('p');
    if (authors) authors.innerHTML = 'J. M. Fitzgerald, <strong>J. J. P. Thompson</strong>, E. Malic.';
  }

  if (title === 'Infrared conductivity of twisted bilayer graphene') {
    item.innerHTML = `
      <div class="publication-meta">2019 · Physical Review B · <a href="https://doi.org/10.1103/PhysRevB.99.085420" target="_blank" rel="noreferrer">paper ↗</a></div>
      <div><h3>Valley-polarized tunneling currents in bilayer graphene tunneling transistors</h3><p><strong>J. J. P. Thompson</strong>, D. J. Leech, M. Mucha-Kruczyński.</p></div>`;
  }

  if (title === 'Tunable infrared optoelectronic devices based on graphene') {
    item.innerHTML = `
      <div class="publication-meta">2018 · Physical Review Applied · <a href="https://doi.org/10.1103/PhysRevApplied.10.034014" target="_blank" rel="noreferrer">paper ↗</a></div>
      <div><h3>Negative Differential Resistance in van der Waals Heterostructures Due to Moiré-Induced Spectral Reconstruction</h3><p>D. J. Leech, <strong>J. J. P. Thompson</strong>, M. Mucha-Kruczyński.</p></div>`;
  }

  if (title === 'Electronic phenomena in graphene based van der Waals heterostructures') {
    item.remove();
  }
});

// Update contact section copy and public email address.
const contactSection = document.getElementById('contact');
if (contactSection) {
  const contactHeading = contactSection.querySelector('h2');
  if (contactHeading) contactHeading.textContent = 'Where to find me.';

  const contactLinks = contactSection.querySelector('.contact-links');
  if (contactLinks) {
    const existingEmail = Array.from(contactLinks.children).find(el =>
      el.textContent.trim().toLowerCase().startsWith('email') ||
      el.getAttribute('href')?.startsWith('mailto:')
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