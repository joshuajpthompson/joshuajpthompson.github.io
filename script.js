// Add research figures to cards 2, 3 and 4.
const researchCards = document.querySelectorAll('#research .research-card');

const addResearchFigure = (card, src, alt, extraClass = '') => {
  if (!card) return;

  // Remove any existing injected figure first so stale/broken ones do not remain.
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
  if (heading) {
    card.insertBefore(figure, heading);
  }
};

// Section 1
addResearchFigure(
  researchCards[0],
  'assets/fig24website.png',
  'Exciton and optical response illustration.',
  'research-figure-optics'
);

// Section 2
addResearchFigure(
  researchCards[1],
  'assets/fig24website.png',
  'Molecular structure illustrating a low-dimensional hybrid material.',
  'research-figure-hybrid'
);

// Section 3
addResearchFigure(
  researchCards[2],
  'assets/fig34website.png',
  'Exciton phonon bottleneck diagram showing bright, dark and gray exciton branches.',
  'research-figure-phonons'
);

// Section 4
addResearchFigure(
  researchCards[3],
  'assets/research-quantum-materials.jpg',
  'Illustration of topological and trivial exciton transport with phonon scattering.',
  'research-figure-quantum'
);

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
