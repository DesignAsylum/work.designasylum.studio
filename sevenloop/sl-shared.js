/* Shared globals for all pages on work.designasylum.studio.
   Loaded as <script type="text/babel" data-presets="react"> — assigns to window. */
(function () {
  const D = 'var(--font-display)';
  const S = 'var(--font-serif)';
  const INK = 'var(--color-obsidian-ink)';
  const GRAPHITE = 'var(--color-graphite)';

  /* ---- useReveal ----
     Attaches IntersectionObserver to every .sl-reveal element.
     Adds class "is-in" when the element enters the viewport. */
  window.useReveal = function useReveal() {
    React.useEffect(function () {
      const els = document.querySelectorAll('.sl-reveal');
      if (!('IntersectionObserver' in window)) {
        els.forEach(function (el) { el.classList.add('is-in'); });
        return;
      }
      const io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-in');
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08 }
      );
      els.forEach(function (el) { io.observe(el); });
      return function () { io.disconnect(); };
    }, []);
  };

  /* ---- Eyebrow ----
     Small uppercase tracking label, used above H1 headings. */
  window.Eyebrow = function Eyebrow({ children }) {
    return (
      <span style={{
        display: 'inline-block',
        fontFamily: D,
        fontWeight: 400,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        fontSize: '11px',
        color: GRAPHITE,
      }}>
        {children}
      </span>
    );
  };

  /* ---- SLNav ----
     Fixed top navigation bar with the Design Asylum Studio wordmark. */
  window.SLNav = function SLNav() {
    return (
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 var(--da-gutter)',
        height: '72px',
        background: 'var(--color-paper-white)',
        borderBottom: '1px solid var(--color-ash)',
      }}>
        <a href="/" style={{
          fontFamily: D,
          fontWeight: 400,
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          fontSize: '13px',
          color: INK,
          textDecoration: 'none',
        }}>
          Design Asylum Studio
        </a>
        <a href="mailto:hello@designasylum.in" className="da-mail" style={{
          fontFamily: D,
          fontWeight: 400,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          fontSize: '11px',
          color: INK,
          textDecoration: 'none',
        }}>
          hello@designasylum.in
          <span className="da-mail-arrow">&#8599;</span>
        </a>
      </nav>
    );
  };

  /* ---- SLFooter ----
     Footer with breadcrumb trail. trail = [{ label, href? }, ...].
     Last item is the current page (no href). */
  window.SLFooter = function SLFooter({ trail }) {
    if (!trail) trail = [];
    return (
      <footer style={{
        borderTop: '1px solid var(--color-ash)',
        marginTop: 'clamp(64px,8vw,120px)',
        padding: 'clamp(32px,4vw,56px) var(--da-gutter)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
        maxWidth: 'var(--page-max-width)',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>
        <nav className="sl-crumb" aria-label="Breadcrumb">
          {trail.map(function (crumb, i) {
            const isLast = i === trail.length - 1;
            return (
              <React.Fragment key={crumb.label}>
                {i > 0 && <span className="sl-crumb-sep" aria-hidden>/</span>}
                {crumb.href && !isLast
                  ? <a href={crumb.href} style={{ color: GRAPHITE }}>{crumb.label}</a>
                  : <span style={{ color: isLast ? INK : GRAPHITE }}>{crumb.label}</span>
                }
              </React.Fragment>
            );
          })}
        </nav>
        <span style={{
          fontFamily: D,
          fontWeight: 400,
          fontSize: '11px',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          color: GRAPHITE,
        }}>
          &copy; Design Asylum Studio
        </span>
      </footer>
    );
  };
})();
