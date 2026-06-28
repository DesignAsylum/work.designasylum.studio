/* Capabilities landing (work.designasylum.studio) — navbar, H1, e-commerce-style
   listing: left multi-select filter sidebar (Industry / Company size / Services)
   + 2-up project grid. Each card shows cover, client name, service tags, a one-
   line description, and two result highlights. All tiles link to /<Client>/. */
(function () {
  const D = 'var(--font-display)';
  const S = 'var(--font-serif)';
  const INK = 'var(--color-obsidian-ink)';
  const GRAPHITE = 'var(--color-graphite)';

  /* ---- canonical filter option lists (drive the sidebar + matching) ---- */
  const SIZES = ['Startup', 'Mid-size', 'Enterprise'];
  const INDUSTRIES = [
    'Manufacturing', 'Health Care', 'Skincare', 'edTech', 'Artificial Intelligence',
    'Pharmaceuticals', 'Neutraceuticals', 'Fashion & Apparel', 'Wellness', 'Spiritual',
    'Automobiles', 'Finance', 'Home & Living', 'Sports',
  ];
  const SERVICES = [
    'Naming', 'Strategy', 'Brand Communication', 'Identity', 'Guidelines', 'Collaterals',
    'Website', 'Mobile App', 'Software', 'Development', 'Social Media Marketing', 'Performance Marketing',
  ];

  /* 21 projects — placeholder content spread across every filter option so the
     filtering is demonstrable. All industry/size/service values are verbatim
     from the lists above. */
  const PROJECTS = [
    { name: 'Sevenloop',  cover: 'var(--color-block-ink)',    word: 'var(--color-solar-bloom)',  href: '/Sevenloop/',
      size: 'Startup', industries: ['edTech', 'Artificial Intelligence'],
      services: ['Strategy', 'Identity', 'Website', 'Performance Marketing'],
      desc: 'A founder-led edtech platform rebrand: new naming territory, identity system, and a conversion-focused marketing site shipped in eight weeks.',
      highlights: ['40% increase in revenue', '20% fewer drop-offs'] },
    { name: 'Northwind',  cover: 'var(--color-block-iris)',   word: 'var(--color-paper-white)',  href: '/Northwind/',
      size: 'Enterprise', industries: ['Manufacturing', 'Automobiles'],
      services: ['Strategy', 'Identity', 'Guidelines', 'Collaterals'],
      desc: 'A full brand identity overhaul for a legacy industrial manufacturer, unifying fourteen product lines under one disciplined visual system.',
      highlights: ['32% lift in qualified leads', '2x faster sales onboarding'] },
    { name: 'Foundry',    cover: 'var(--color-block-maroon)', word: 'var(--color-paper-white)',  href: '/Foundry/',
      size: 'Mid-size', industries: ['Finance'],
      services: ['Website', 'Development', 'Identity'],
      desc: 'A high-trust marketing site and design system for a fintech lender, balancing regulatory clarity with a confident, modern brand voice.',
      highlights: ['48% increase in sign-ups', '35% lower bounce rate'] },
    { name: 'Vantage',    cover: 'var(--color-block-solar)',  word: 'var(--color-obsidian-ink)', href: '/Vantage/',
      size: 'Enterprise', industries: ['Sports', 'Wellness'],
      services: ['Strategy', 'Brand Communication', 'Social Media Marketing'],
      desc: 'A brand-and-film campaign for a national sports nutrition label, building a story that travelled across broadcast, retail, and social.',
      highlights: ['3.1M campaign views', '25% retail sell-through gain'] },
    { name: 'Lumen',      cover: 'var(--color-block-teal)',   word: 'var(--color-solar-bloom)',  href: '/Lumen/',
      size: 'Startup', industries: ['Health Care', 'Wellness'],
      services: ['Website', 'Development', 'Mobile App'],
      desc: 'A Webflow build and companion app for a telehealth startup, turning a complex care journey into a calm, guided digital experience.',
      highlights: ['52% more bookings', '18% better retention'] },
    { name: 'Halcyon',    cover: 'var(--color-block-ink)',    word: 'var(--color-paper-white)',  href: '/Halcyon/',
      size: 'Mid-size', industries: ['Wellness', 'Spiritual'],
      services: ['Naming', 'Strategy', 'Identity', 'Guidelines'],
      desc: 'A ground-up rebrand for a meditation and retreat brand, distilling a sprawling offering into one serene, ownable identity.',
      highlights: ['44% membership growth', '30% higher renewal rate'] },
    { name: 'Cinder',     cover: 'var(--color-block-iris)',   word: 'var(--color-solar-bloom)',  href: '/Cinder/',
      size: 'Startup', industries: ['Artificial Intelligence', 'Finance'],
      services: ['Strategy', 'Brand Communication', 'Collaterals'],
      desc: 'Brand strategy and a sharp messaging framework for an AI fraud-detection startup preparing for its Series A raise.',
      highlights: ['Closed $12M round', '60% faster pitch cycle'] },
    { name: 'Meridian',   cover: 'var(--color-block-maroon)', word: 'var(--color-paper-white)',  href: '/Meridian/',
      size: 'Enterprise', industries: ['Finance', 'Health Care'],
      services: ['Website', 'Development', 'Software'],
      desc: 'A website and internal platform build for an insurer, replacing scattered legacy tools with one coherent, accessible product suite.',
      highlights: ['41% drop in support tickets', '2.4x faster claims'] },
    { name: 'Tessellate', cover: 'var(--color-block-solar)',  word: 'var(--color-obsidian-ink)', href: '/Tessellate/',
      size: 'Mid-size', industries: ['Home & Living', 'Fashion & Apparel'],
      services: ['Identity', 'Collaterals', 'Guidelines'],
      desc: 'Print and identity for a premium homeware label, crafting a tactile system that reads as luxurious across packaging and stores.',
      highlights: ['28% higher basket value', '50% press pickup increase'] },
    { name: 'Quanta',     cover: 'var(--color-block-teal)',   word: 'var(--color-paper-white)',  href: '/Quanta/',
      size: 'Enterprise', industries: ['Pharmaceuticals', 'Health Care'],
      services: ['Brand Communication', 'Social Media Marketing', 'Performance Marketing'],
      desc: 'A brand-video and paid-media program for a pharmaceutical group, translating dense science into clear, human stories for patients.',
      highlights: ['5.6M qualified impressions', '22% lower cost per lead'] },
    { name: 'Verdant',    cover: 'var(--color-block-ink)',    word: 'var(--color-solar-bloom)',  href: '/Verdant/',
      size: 'Startup', industries: ['Neutraceuticals', 'Wellness'],
      services: ['Naming', 'Identity', 'Collaterals'],
      desc: 'A brand identity for a plant-based supplement startup, building shelf-ready packaging and a name that travels across markets.',
      highlights: ['38% increase in revenue', '19% fewer drop-offs'] },
    { name: 'Helix',      cover: 'var(--color-block-iris)',   word: 'var(--color-paper-white)',  href: '/Helix/',
      size: 'Mid-size', industries: ['Artificial Intelligence', 'edTech'],
      services: ['Website', 'Development', 'Mobile App', 'Software'],
      desc: 'A website and product design refresh for an adaptive-learning platform, making a data-rich experience feel effortless for teachers.',
      highlights: ['46% trial-to-paid lift', '27% more active users'] },
    { name: 'Ardent',     cover: 'var(--color-block-maroon)', word: 'var(--color-paper-white)',  href: '/Ardent/',
      size: 'Startup', industries: ['Skincare', 'Wellness'],
      services: ['Naming', 'Strategy', 'Identity', 'Brand Communication'],
      desc: 'Naming and branding for a clean-skincare startup, defining a warm, science-backed voice that stands apart in a crowded category.',
      highlights: ['2.7x DTC revenue', '24% repeat-purchase gain'] },
    { name: 'Solstice',   cover: 'var(--color-block-solar)',  word: 'var(--color-obsidian-ink)', href: '/Solstice/',
      size: 'Mid-size', industries: ['Fashion & Apparel', 'Sports'],
      services: ['Strategy', 'Identity', 'Website', 'Social Media Marketing'],
      desc: 'A rebrand and site for an activewear label, knitting performance credibility and lifestyle aspiration into one cohesive story.',
      highlights: ['34% online sales growth', '21% higher engagement'] },
    { name: 'Orbit',      cover: 'var(--color-block-teal)',   word: 'var(--color-solar-bloom)',  href: '/Orbit/',
      size: 'Startup', industries: ['Artificial Intelligence'],
      services: ['Website', 'Development', 'Performance Marketing'],
      desc: 'A Webflow build and growth-marketing launch for an AI analytics startup, taking the product from stealth to public beta.',
      highlights: ['1,800 beta sign-ups', '29% lower acquisition cost'] },
    { name: 'Basalt',     cover: 'var(--color-block-ink)',    word: 'var(--color-paper-white)',  href: '/Basalt/',
      size: 'Enterprise', industries: ['Manufacturing', 'Automobiles'],
      services: ['Strategy', 'Guidelines', 'Collaterals'],
      desc: 'Brand strategy and a global guidelines system for an automotive parts manufacturer operating across nine regional markets.',
      highlights: ['Unified 9 markets', '31% faster asset delivery'] },
    { name: 'Cascade',    cover: 'var(--color-block-iris)',   word: 'var(--color-solar-bloom)',  href: '/Cascade/',
      size: 'Mid-size', industries: ['Home & Living', 'Wellness'],
      services: ['Brand Communication', 'Social Media Marketing', 'Performance Marketing'],
      desc: 'A brand-and-film program for a sustainable home brand, building a content engine that turned values into measurable demand.',
      highlights: ['4.2M video views', '26% increase in revenue'] },
    { name: 'Pinnacle',   cover: 'var(--color-block-maroon)', word: 'var(--color-paper-white)',  href: '/Pinnacle/',
      size: 'Enterprise', industries: ['Finance', 'Software'],
      services: ['Website', 'Software', 'Development'],
      desc: 'A website and platform build for a wealth-management firm, pairing institutional trust with a genuinely modern client portal.',
      highlights: ['37% more consultations', '23% faster onboarding'] },
    { name: 'Lattice',    cover: 'var(--color-block-solar)',  word: 'var(--color-obsidian-ink)', href: '/Lattice/',
      size: 'Mid-size', industries: ['edTech', 'Spiritual'],
      services: ['Identity', 'Guidelines', 'Collaterals'],
      desc: 'Print and identity for a mindfulness-education brand, building a flexible system that scales from workbooks to large events.',
      highlights: ['43% enrolment growth', '20% fewer drop-offs'] },
    { name: 'Forge',      cover: 'var(--color-block-teal)',   word: 'var(--color-paper-white)',  href: '/Forge/',
      size: 'Startup', industries: ['Manufacturing', 'Sports'],
      services: ['Naming', 'Strategy', 'Identity'],
      desc: 'Branding for a direct-to-consumer fitness equipment startup, forging a bold, durable identity for a competitive retail shelf.',
      highlights: ['2.2x launch revenue', '17% better conversion'] },
    { name: 'Aether',     cover: 'var(--color-block-ink)',    word: 'var(--color-solar-bloom)',  href: '/Aether/',
      size: 'Enterprise', industries: ['Pharmaceuticals', 'Artificial Intelligence'],
      services: ['Strategy', 'Identity', 'Website', 'Software'],
      desc: 'A brand identity and platform for an AI drug-discovery company, giving deep-tech research a clear, investable public face.',
      highlights: ['Closed $40M Series B', '33% more partner inbound'] },
  ];

  /* a single highlight chip (accent dot + label) */
  function Highlight({ text }) {
    return (
      <span className="cap-highlight">
        <span aria-hidden className="cap-highlight-dot" />
        <span className="cap-highlight-label">{text}</span>
      </span>
    );
  }

  /* a single project card (cover + name/size + tags + desc + highlights) */
  function TileInner({ p }) {
    return (
      <React.Fragment>
        <div className="cap-tile-cover" style={{ background: p.cover }}>
          <div aria-hidden className="cap-tile-glow" />
          <span aria-hidden className="cap-tile-word" style={{ color: p.word }}>{p.name}</span>
          <span className="cap-tile-cta" aria-hidden>
            Visit project <span>&rarr;</span>
          </span>
        </div>
        <div className="cap-tile-body">
          <div className="cap-tile-meta">
            <span className="cap-tile-name">{p.name}</span>
            <span className="cap-tile-size">{p.size}</span>
          </div>
          <div className="cap-tile-tags">
            {p.services.map((s) => <span key={s} className="cap-tag">{s}</span>)}
          </div>
          <p className="cap-tile-desc">{p.desc}</p>
          <div className="cap-tile-highlights">
            {p.highlights.map((h) => <Highlight key={h} text={h} />)}
          </div>
        </div>
      </React.Fragment>
    );
  }

  /* one accordion filter group: collapsible header (with selected-count badge)
     + multi-select checkbox list */
  function FilterGroup({ title, options, selected, onToggle, open, onToggleOpen }) {
    return (
      <div className={'cap-filter-group' + (open ? ' is-open' : '')}>
        <button type="button" className="cap-filter-head" aria-expanded={open} onClick={onToggleOpen}>
          <span className="cap-filter-head-label">
            {title}
            {selected.length > 0 && <span className="cap-filter-badge">{selected.length}</span>}
          </span>
          <span aria-hidden className="cap-filter-chevron">&#9660;</span>
        </button>
        {open && (
          <div className="cap-filter-opts">
            {options.map((opt) => {
              const on = selected.indexOf(opt) !== -1;
              return (
                <label key={opt} className={'cap-filter-opt' + (on ? ' is-on' : '')}>
                  <input type="checkbox" checked={on} onChange={() => onToggle(opt)} />
                  <span aria-hidden className="cap-check" />
                  {opt}
                </label>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  function CapPage() {
    const [selIndustries, setSelIndustries] = React.useState([]);
    const [selSizes, setSelSizes] = React.useState([]);
    const [selServices, setSelServices] = React.useState([]);
    /* which accordion panels are expanded (Industry open by default) */
    const [openGroups, setOpenGroups] = React.useState({ Industry: true, 'Company size': false, Services: false });

    function toggleOpen(title) {
      setOpenGroups(function (prev) {
        const next = {}; for (const k in prev) next[k] = prev[k];
        next[title] = !prev[title];
        return next;
      });
    }

    /* setter + value -> remove if present, else add */
    function toggleValue(setter) {
      return function (value) {
        setter(function (prev) {
          return prev.indexOf(value) !== -1
            ? prev.filter(function (v) { return v !== value; })
            : prev.concat([value]);
        });
      };
    }
    const toggleIndustry = toggleValue(setSelIndustries);
    const toggleSize = toggleValue(setSelSizes);
    const toggleService = toggleValue(setSelServices);

    function clearAll() { setSelIndustries([]); setSelSizes([]); setSelServices([]); }

    const activeCount = selIndustries.length + selSizes.length + selServices.length;

    /* flat list of active selections for the chips row (label + remover) */
    const chips = []
      .concat(selIndustries.map(function (v) { return { value: v, remove: toggleIndustry }; }))
      .concat(selSizes.map(function (v) { return { value: v, remove: toggleSize }; }))
      .concat(selServices.map(function (v) { return { value: v, remove: toggleService }; }));

    /* AND across groups, OR within a group; empty group = no constraint */
    const visible = PROJECTS.filter(function (p) {
      const okSize = selSizes.length === 0 || selSizes.indexOf(p.size) !== -1;
      const okInd = selIndustries.length === 0 || p.industries.some(function (i) { return selIndustries.indexOf(i) !== -1; });
      const okSvc = selServices.length === 0 || p.services.some(function (s) { return selServices.indexOf(s) !== -1; });
      return okSize && okInd && okSvc;
    });

    return (
      <React.Fragment>
        <SLNav />

        <header className="da-wrap" style={{ paddingTop: 150 }}>
          <div style={{ marginBottom: 24 }}><Eyebrow>Capabilities</Eyebrow></div>
          <h1 style={{ margin: 0, maxWidth: 1180, fontFamily: D, fontWeight: 400, textTransform: 'none', letterSpacing: '-0.025em', lineHeight: 1.0, fontSize: 'clamp(40px,5vw,84px)', color: INK }}>
            Capabilities &mdash; Design Asylum Studio
          </h1>
          <p style={{ margin: '28px 0 0', maxWidth: 640, fontFamily: S, fontSize: 'clamp(18px,1.6vw,22px)', lineHeight: 1.55, color: GRAPHITE }}>
            A selection of branding, website and film work. Filter by industry, company size or service &mdash; pick any project to open its client hub.
          </p>
        </header>

        <section className="da-wrap" style={{ paddingTop: 'clamp(48px,5vw,80px)', paddingBottom: 'var(--section-pad-y)' }}>
          <div className="cap-layout">
            <aside className="cap-filters" aria-label="Filter projects">
              <div className="cap-filters-head">
                <span className="cap-filters-count">Showing {visible.length} of {PROJECTS.length}</span>
                <button type="button" className="cap-filter-clear" onClick={clearAll} disabled={activeCount === 0}>
                  Clear filters
                </button>
              </div>
              <FilterGroup title="Industry" options={INDUSTRIES} selected={selIndustries} onToggle={toggleIndustry} open={openGroups['Industry']} onToggleOpen={() => toggleOpen('Industry')} />
              <FilterGroup title="Company size" options={SIZES} selected={selSizes} onToggle={toggleSize} open={openGroups['Company size']} onToggleOpen={() => toggleOpen('Company size')} />
              <FilterGroup title="Services" options={SERVICES} selected={selServices} onToggle={toggleService} open={openGroups['Services']} onToggleOpen={() => toggleOpen('Services')} />
            </aside>

            <div>
              {chips.length > 0 && (
                <div className="cap-chips">
                  {chips.map((c) => (
                    <span key={c.value} className="cap-chip">
                      {c.value}
                      <button type="button" className="cap-chip-x" aria-label={'Remove ' + c.value} onClick={() => c.remove(c.value)}>&times;</button>
                    </span>
                  ))}
                  <button type="button" className="cap-chips-clear" onClick={clearAll}>Clear all</button>
                </div>
              )}
              {visible.length === 0
                ? <p className="cap-empty">No projects match these filters. Try clearing one or more.</p>
                : (
                  <div className="cap-grid">
                    {visible.map((p) => (
                      <a key={p.name} className="cap-tile is-live" href={p.href} aria-label={p.name + ' — ' + p.size + ' client hub'}>
                        <TileInner p={p} />
                      </a>
                    ))}
                  </div>
                )}
            </div>
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
