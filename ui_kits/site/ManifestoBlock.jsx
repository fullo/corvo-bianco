// ManifestoBlock.jsx — sezione del manifesto con label, h2 e paragrafi.
// Misura del testo: --measure-base (640px). Allineato a sinistra.

window.ManifestoBlock = function ManifestoBlock({ label, title, children }) {
  return (
    <article style={{
      maxWidth: "var(--measure-base)",
      margin: "0 auto var(--space-7)",
    }}>
      <span className="cb-section-label" style={{ display: "block", marginBottom: "var(--space-3)" }}>
        {label}
      </span>
      <h2 style={{
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: "var(--fs-xl)",
        lineHeight: "1.2",
        letterSpacing: "-0.005em",
        color: "var(--sumi)",
        margin: "0 0 var(--space-4)",
      }}>
        {title}
      </h2>
      <div style={{
        fontFamily: "var(--font-body)",
        fontSize: "var(--fs-md)",
        lineHeight: "1.7",
        color: "var(--sumi)",
      }}>
        {children}
      </div>
    </article>
  );
};

// Inline motto helper — italic + tracking
window.Motto = function Motto({ children = "respice finem" }) {
  return (
    <span style={{
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontSize: "var(--fs-lg)",
      letterSpacing: "0.04em",
      color: "var(--sumi)",
    }}>
      {children}
    </span>
  );
};
