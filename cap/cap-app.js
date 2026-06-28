/* Capabilities landing (work.designasylum.studio) — navbar, H1, 3-up project
   thumbnail grid (21 tiles), footer. All tiles are clickable and open the
   "<Client> Client Hub" page at /<ClientName>/. */
(function () {
  const D = 'var(--font-display)';
  const S = 'var(--font-serif)';
  const INK = 'var(--color-obsidian-ink)';
  const GRAPHITE = 'var(--color-graphite)';

  /* 21 projects — all live, each linking to its own Client Hub. */
  const PROJECTS = [
    { name: 'Sevenloop',  service: 'Branding & website', cover: 'var(--color-block-ink)',    word: 'var(--color-solar-bloom)',   href: '/Sevenloop/' },
    { name: 'Northwind',  service: 'Brand identity',     cover: 'var(--color-block-iris)',   word: 'var(--color-paper-white)',  href: '/Northwind/' },
    { name: 'Foundry',    service: 'Website design',     cover: 'var(--color-block-maroon)', word: 'var(--color-paper-white)',  href: '/Foundry/' },
    { name: 'Vantage',    service: 'Brand & film',       cover: 'var(--color-block-solar)',  word: 'var(--color-obsidian-ink)', href: '/Vantage/' },
    { name: 'Lumen',      service: 'Webflow build',      cover: 'var(--color-block-teal)',   word: 'var(--color-solar-bloom)',  href: '/Lumen/' },
    { name: 'Halcyon',    service: 'Rebrand',            cover: 'var(--color-block-ink)',    word: 'var(--color-paper-white)',  href: '/Halcyon/' },
    { name: 'Cinder',     service: 'Brand strategy',     cover: 'var(--color-block-iris)',   word: 'var(--color-solar-bloom)',  href: '/Cinder/' },
    { name: 'Meridian',   service: 'Website & build',    cover: 'var(--color-block-maroon)', word: 'var(--color-paper-white)',  href: '/Meridian/' },
    { name: 'Tessellate', service: 'Print & identity',   cover: 'var(--color-block-solar)',  word: 'var(--color-obsidian-ink)', href: '/Tessellate/' },
    { name: 'Quanta',     service: 'Brand video',        cover: 'var(--color-block-teal)',   word: 'var(--color-paper-white)',  href: '/Quanta/' },
    { name: 'Verdant',    service: 'Brand identity',     cover: 'var(--color-block-ink)',    word: 'var(--color-solar-bloom)',  href: '/Verdant/' },
    { name: 'Helix',      service: 'Website design',     cover: 'var(--color-block-iris)',   word: 'var(--color-paper-white)',  href: '/Helix/' },
    { name: 'Ardent',     service: 'Branding',           cover: 'var(--color-block-maroon)', word: 'var(--color-paper-white)',  href: '/Ardent/' },
    { name: 'Solstice',   service: 'Rebrand & site',     cover: 'var(--color-block-solar)',  word: 'var(--color-obsidian-ink)', href: '/Solstice/' },
    { name: 'Orbit',      service: 'Webflow build',      cover: 'var(--color-block-teal)',   word: 'var(--color-solar-bloom)',  href: '/Orbit/' },
    { name: 'Basalt',     service: 'Brand strategy',     cover: 'var(--color-block-ink)',    word: 'var(--color-paper-white)',  href: '/Basalt/' },
    { name: 'Cascade',    service: 'Brand & film',       cover: 'var(--color-block-iris)',   word: 'var(--color-solar-bloom)',  href: '/Cascade/' },
    { name: 'Pinnacle',   service: 'Website design',     cover: 'var(--color-block-maroon)', word: 'var(--color-paper-white)',  href: '/Pinnacle/' },
    { name: 'Lattice',    service: 'Print & identity',   cover: 'var(--color-block-solar)',  word: 'var(--color-obsidian-ink)', href: '/Lattice/' },
    { name: 'Forge',      service: 'Branding',           cover: 'var(--color-block-teal)',   word: 'var(--color-paper-white)',  href: '/Forge/' },
    { name: 'Aether',     service: 'Brand identity',     cover: 'var(--color-block-ink)',    word: 'var(--color-solar-bloom)',  href: '/Aether/' },
  ];

  /* a single thumbnail tile (cover + meta row) */
  function TileInner({ p }) {
    return (
      <React.Fragment>
        <div className="cap-tile-cover" style={{ background: p.cover }}>
          <div aria-hidden className="cap-tile-glow" />
          <span className="cap-tile-word" style={{ color: p.word }}>{p.name}</span>
          <span className="cap-tile-cta" aria-hidden>
            Visit project <span>&rarr;</span>
          </span>
        </div>
        <div className="cap-tile-meta">
          <span className="cap-tile-name">{p.name}</span>
          <span className="cap-tile-service">{p.service}</span>
        </div>
      </React.Fragment>
    );
  }

  function CapPage() {
    window.useReveal();
    return (
      <React.Fragment>
        <SLNav />

        <header className="da-wrap" style={{ paddingTop: 150 }}>
          <div style={{ marginBottom: 24 }}><Eyebrow>Capabilities</Eyebrow></div>
          <h1 style={{ margin: 0, maxWidth: 1180, fontFamily: D, fontWeight: 400, textTransform: 'none', letterSpacing: '-0.025em', lineHeight: 1.0, fontSize: 'clamp(40px,5vw,84px)', color: INK }}>
            Capabilities &mdash; Design Asylum Studio
          </h1>
          <p style={{ margin: '28px 0 0', maxWidth: 640, fontFamily: S, fontSize: 'clamp(18px,1.6vw,22px)', lineHeight: 1.55, color: GRAPHITE }}>
            A selection of branding, website and film work. Pick any project to open its client hub.
          </p>
        </header>

        <section className="da-wrap" style={{ paddingTop: 'clamp(48px,5vw,80px)', paddingBottom: 'var(--section-pad-y)' }}>
          <div className="cap-grid sl-reveal">
            {PROJECTS.map((p) => (
              <a key={p.name} className="cap-tile is-live" href={p.href}>
                <TileInner p={p} />
              </a>
            ))}
          </div>
        </section>

        <SLFooter trail={[{ label: 'Home', href: '/' }, { label: 'Capabilities' }]} />
      </React.Fragment>
    );
  }

  function mount() {
    const ready = window.ReactDOM && window.SLNav && window.SLFooter && window.useReveal && window.Eyebrow;
    if (!ready) { return setTimeout(mount, 50); }
    ReactDOM.createRoot(document.getElementById('root')).render(<CapPage />);
  }
  mount();
})();
