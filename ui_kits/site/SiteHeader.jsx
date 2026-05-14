// SiteHeader.jsx — header semplice con brand-mark a sinistra e label a destra.
// Tratta come "tratto sumi-e" iniziale: una sola linea sotto, niente sfondo distinto.

window.SiteHeader = function SiteHeader({ rightLabel = "Respice finem", italicRight = true }) {
  return (
    <header style={{
      padding: "var(--space-3) 0",
      borderBottom: "1px solid var(--ink-line)",
    }}>
      <div className="cb-container" style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <a href="#top" style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--fs-md)",
          fontStyle: "italic",
          letterSpacing: "0.02em",
          color: "var(--sumi)",
          textDecoration: "none",
          border: "none",
        }} onMouseEnter={(e)=>e.currentTarget.style.color="var(--vermilion)"}
           onMouseLeave={(e)=>e.currentTarget.style.color="var(--sumi)"}>
          Corvo Bianco
        </a>
        <span className="cb-section-label">
          {italicRight ? <em>{rightLabel}</em> : rightLabel}
        </span>
      </div>
    </header>
  );
};
