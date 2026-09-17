// Research figures
const researchCards = document.querySelectorAll('#research .research-card');

const addResearchFigure = (card, src, alt, extraClass = '') => {
  if (!card) return;
  const oldFigure = card.querySelector('.research-figure');
  if (oldFigure) oldFigure.remove();

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

addResearchFigure(researchCards[0], 'assets/fig14website.png', 'Exciton and optical response illustration.', 'research-figure-optics');
addResearchFigure(researchCards[1], 'assets/fig24website.png', 'Molecular structure illustrating a low-dimensional hybrid material.', 'research-figure-hybrid');
addResearchFigure(researchCards[2], 'assets/fig34website.png', 'Exciton phonon bottleneck diagram showing bright, dark and gray exciton branches.', 'research-figure-phonons');
addResearchFigure(researchCards[3], 'assets/schematic6.png', 'Illustration of topological and trivial exciton transport with phonon scattering.', 'research-figure-quantum');

const researchFigureStyle = document.createElement('style');
researchFigureStyle.textContent = `
  .research-card .research-figure {
    margin: 16px 0 18px;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid rgba(237,169,137,.14);
    background: rgba(255,255,255,.03);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 14px;
    min-height: 170px;
  }
  .research-card .research-figure img {
    display: block;
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 280px;
    object-fit: contain;
  }
  .research-card .research-figure-hybrid {
    background: rgba(255,255,255,.05);
  }
  .research-card .research-figure-hybrid img {
    max-width: 300px;
  }
  .research-card .research-figure-phonons img {
    max-width: 100%;
    max-height: 260px;
  }
  .research-card .research-figure-quantum img {
    max-width: 100%;
    max-height: 280px;
  }
  .research-card:has(.research-figure) h3 {
    margin-top: 18px;
  }
`;
document.head.appendChild(researchFigureStyle);

// Homepage title
const heroTitle = document.querySelector('.hero-copy h1');
if (heroTitle) heroTitle.textContent = 'Where light and energy meet in materials';

// Collaborators
const collaboratorsSection = document.getElementById('collaborators');
if (collaboratorsSection) {
  collaboratorsSection.innerHTML = `
    <div class="section-head split-head">
      <div>
        <p class="kicker">Collaborators</p>
        <h2>Selected research collaborators.</h2>
      </div>
      <p>Selected recurring collaborators and co-authors across my work on excitons, low-dimensional materials, optoelectronics and quantum materials.</p>
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
    </div>
  `;
}

// Talks, conferences and workshops
const talksSection = document.getElementById('talks');
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
    </div>
  `;
}

// Correct the two legacy graphene entries before applying verified author lists.
Array.from(document.querySelectorAll('#publications .publication-item')).forEach(item => {
  const title = item.querySelector('h3')?.textContent.trim();

  if (title === 'Infrared conductivity of twisted bilayer graphene') {
    item.innerHTML = `
      <div class="publication-meta">2019 · Physical Review B · <a href="https://doi.org/10.1103/PhysRevB.99.085420" target="_blank" rel="noreferrer">paper ↗</a></div>
      <div><h3>Valley-polarized tunneling currents in bilayer graphene tunneling transistors</h3><p></p></div>`;
  }

  if (title === 'Tunable infrared optoelectronic devices based on graphene') {
    item.innerHTML = `
      <div class="publication-meta">2018 · Physical Review Applied · <a href="https://doi.org/10.1103/PhysRevApplied.10.034014" target="_blank" rel="noreferrer">paper ↗</a></div>
      <div><h3>Negative Differential Resistance in van der Waals Heterostructures Due to Moiré-Induced Spectral Reconstruction</h3><p></p></div>`;
  }

  if (title === 'Electronic phenomena in graphene based van der Waals heterostructures') item.remove();
});

// Verified complete author lists. No publication is abbreviated with "et al.".
const publicationAuthors = {
  'Microscopic Insights into Magneto-optics and Magneto-transport in 2D Perovskites': 'R. Rosati, J. K. König, S. Terres, <strong>J. J. P. Thompson</strong>, M. Baranowski, P. Płochocka, A. Chernikov, E. Malic.',
  'Ultrafast anisotropic exciton transport in phosphorene': 'K.-W. Chang, <strong>J. J. P. Thompson</strong>, B. Monserrat.',
  'Topologically enhanced exciton transport': '<strong>J. J. P. Thompson</strong>, W. J. Jankowski, R.-J. Slager, B. Monserrat.',
  'Excitonic topology and quantum geometry in organic semiconductors': 'W. J. Jankowski, <strong>J. J. P. Thompson</strong>, B. Monserrat, R.-J. Slager.',
  'Circularly polarized electroluminescence from chiral supramolecular semiconductor thin films': 'R. Chowdhury, M. D. Preuss, H.-H. Cho, <strong>J. J. P. Thompson</strong>, S. Sen, T. K. Baikie, P. Ghosh, Y. Boeije, X. W. Chua, K.-W. Chang, E. Guo, J. van der Tol, B. W. L. van den Bersselaar, A. Taddeucci, N. Daub, D. M. Dekker, S. T. Keene, G. Vantomme, B. Ehrler, S. C. J. Meskers, A. Rao, B. Monserrat, E. W. Meijer, R. H. Friend.',
  'Steric Engineering of Exciton Fine Structure in 2D Perovskites': 'M. Dyksik, M. Baranowski, <strong>J. J. P. Thompson</strong>, Z. Yang, M. Rivera Medina, M. A. Loi, E. Malic, P. Płochocka.',
  'Moiré superlattices in twisted two-dimensional halide perovskites': 'S. Zhang, L. Jin, Y. Lu, L. Zhang, J. Yang, Q. Zhao, D. Sun, <strong>J. J. P. Thompson</strong>, B. Yuan, K. Ma, Akriti, J. Y. Park, Y. H. Lee, Z. Wei, B. P. Finkenauer, D. D. Blach, S. Kumar, H. Peng, A. Mannodi-Kanakkithodi, Y. Yu, E. Malic, G. Lu, L. Dou, L. Huang.',
  'Phonon-Bottleneck Enhanced Exciton Emission in 2D Perovskites': '<strong>J. J. P. Thompson</strong>, M. Dyksik, P. Peksa, K. Posmyk, A. Joki, R. Perea-Causin, P. Erhart, M. Baranowski, M. A. Loi, P. Płochocka, E. Malic.',
  'Control of the valley polarization of monolayer WSe2 by Dexter-like coupling': 'J. Jasiński, <strong>J. J. P. Thompson</strong>, S. Palai, M. Śmiertka, M. Dyksik, T. Taniguchi, K. Watanabe, M. Baranowski, D. K. Maude, A. Surrente, E. Malic, P. Płochocka.',
  'Localization and interaction of interlayer excitons in MoSe2/WSe2 heterobilayers': 'H. Fang, Q. Lin, Y. Zhang, <strong>J. J. P. Thompson</strong>, S. Xiao, Z. Sun, E. Malic, S. P. Dash, W. Wieczorek.',
  'Optical signatures of Förster-induced energy transfer in organic/TMD heterostructures': '<strong>J. J. P. Thompson</strong>, M. Gerhard, G. Witte, E. Malic.',
  'Interlayer exciton landscape in WS2/tetracene heterostructures': '<strong>J. J. P. Thompson</strong>, V. Lumsargis, M. Feierabend, Q. Zhao, K. Wang, L. Dou, L. Huang, E. Malic.',
  'Singlet-exciton optics and phonon-mediated dynamics in oligoacene semiconductor crystals': '<strong>J. J. P. Thompson</strong>, D. Muth, S. Anhäuser, D. Bischof, M. Gerhard, G. Witte, E. Malic.',
  'Angle- and polarization-resolved luminescence from suspended and hexagonal boron nitride encapsulated MoSe2 monolayers': 'B. Han, S. Stephan, <strong>J. J. P. Thompson</strong>, M. Esmann, C. Antón-Solanas, H. Shan, N. Kunte, S. Brem, S. Tongay, C. Lienau, K. Watanabe, T. Taniguchi, M. Silies, E. Malic, C. Schneider.',
  'Exciton optics, dynamics, and transport in atomically thin semiconductors': 'R. Perea-Causin, D. Erkensten, J. M. Fitzgerald, <strong>J. J. P. Thompson</strong>, R. Rosati, S. Brem, E. Malic.',
  'Enhanced excitonic features in an anisotropic ReS2/WSe2 heterostructure': 'A. Usman, M. Adel Aly, H. Masenda, <strong>J. J. P. Thompson</strong>, S. M. Gunasekera, M. Mucha-Kruczyński, S. Brem, E. Malic, M. Koch.',
  'Twist Angle Tuning of Moiré Exciton Polaritons in van der Waals Heterostructures': 'J. M. Fitzgerald, <strong>J. J. P. Thompson</strong>, E. Malic.',
  'Anisotropic exciton diffusion in atomically-thin semiconductors': '<strong>J. J. P. Thompson</strong>, S. Brem, M. Verjans, R. Schmidt, S. Michaelis de Vasconcellos, R. Bratschitsch, E. Malic.',
  'Valley-exchange coupling probed by angle-resolved photoluminescence': '<strong>J. J. P. Thompson</strong>, S. Brem, H. Fang, C. Antón-Solanas, B. Han, H. Shan, S. P. Dash, W. Wieczorek, C. Schneider, E. Malic.',
  'Electronic Raman Scattering in Twistronic Few-Layer Graphene': 'A. García-Ruiz, <strong>J. J. P. Thompson</strong>, M. Mucha-Kruczyński, V. I. Fal’ko.',
  'Criteria for deterministic single-photon emission in two-dimensional atomic crystals': '<strong>J. J. P. Thompson</strong>, S. Brem, H. Fang, J. Frey, S. P. Dash, W. Wieczorek, E. Malic.',
  'Determination of interatomic coupling between two-dimensional crystals using angle-resolved photoemission spectroscopy': '<strong>J. J. P. Thompson</strong>, D. Pei, H. Peng, H. Wang, N. Channa, H. L. Peng, A. Barinov, N. B. M. Schröter, Y. Chen, M. Mucha-Kruczyński.',
  'Valley-polarized tunneling currents in bilayer graphene tunneling transistors': '<strong>J. J. P. Thompson</strong>, D. J. Leech, M. Mucha-Kruczyński.',
  'Negative Differential Resistance in van der Waals Heterostructures Due to Moiré-Induced Spectral Reconstruction': 'D. J. Leech, <strong>J. J. P. Thompson</strong>, M. Mucha-Kruczyński.',
  'Enhancement of exciton radius near a band-gap closing through quantum geometry': 'J.-H. Choi, S.-H. Han, Y.-K. Han, S.-W. Kim, J.-W. Rhim, <strong>J. J. P. Thompson</strong>.',
  'Generalized Shift Vector as the Intrinsic Dipole of Many-Body Correlated Electronic States': 'J. Hu, S. Kundu, Z. Guo, <strong>J. J. P. Thompson</strong>, W. Li, H. Wang, B. Monserrat.'
};

Array.from(document.querySelectorAll('#publications .publication-item')).forEach(item => {
  const title = item.querySelector('h3')?.textContent.trim();
  const authors = item.querySelector('p');
  if (title && authors && publicationAuthors[title]) authors.innerHTML = publicationAuthors[title];

  if (title === 'Enhancement of exciton radius near a band-gap closing through quantum geometry') {
    const meta = item.querySelector('.publication-meta');
    if (meta && !meta.querySelector('a')) meta.innerHTML = '2026 · Preprint · <a href="https://arxiv.org/abs/2607.28731" target="_blank" rel="noreferrer">arXiv ↗</a>';
  }

  if (title === 'Generalized Shift Vector as the Intrinsic Dipole of Many-Body Correlated Electronic States') {
    const meta = item.querySelector('.publication-meta');
    if (meta && !meta.querySelector('a')) meta.innerHTML = '2026 · Preprint · <a href="https://arxiv.org/abs/2605.23431" target="_blank" rel="noreferrer">arXiv ↗</a>';
  }
});

// Contact
const contactSection = document.getElementById('contact');
if (contactSection) {
  const contactHeading = contactSection.querySelector('h2');
  if (contactHeading) contactHeading.textContent = 'Where to find me.';

  const contactLinks = contactSection.querySelector('.contact-links');
  if (contactLinks) {
    const oldEmail = Array.from(contactLinks.children).find(el =>
      el.textContent.toLowerCase().includes('email') || el.getAttribute('href')?.startsWith('mailto:')
    );
    const emailLink = document.createElement('a');
    emailLink.href = 'mailto:jjt56@cam.ac.uk';
    emailLink.textContent = 'jjt56@cam.ac.uk';
    if (oldEmail) oldEmail.replaceWith(emailLink);
    else contactLinks.appendChild(emailLink);
  }
}

// Mobile navigation
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
