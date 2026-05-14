// SiteFooter.jsx — sigillo + brand + motto. Centrato.

window.SiteFooter = function SiteFooter() {
  return (
    <footer style={{
      padding: "var(--space-5) 0 var(--space-4)",
      borderTop: "1px solid var(--ink-line)",
      textAlign: "center",
    }}>
      <div className="cb-container">
        <span style={{
          display: "inline-block",
          width: "24px",
          height: "24px",
          marginBottom: "var(--space-2)",
          backgroundColor: "var(--vermilion)",
          borderRadius: "2px",
          opacity: 0.85,
        }}></span>
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--fs-xs)",
          color: "var(--kohaku)",
          margin: 0,
          lineHeight: 1.6,
        }}>
          Corvo Bianco
        </p>
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--fs-xs)",
          color: "var(--kohaku)",
          margin: 0,
          lineHeight: 1.6,
        }}>
          <em>Respice finem</em>
        </p>
      </div>
    </footer>
  );
};
