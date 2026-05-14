// Hero.jsx — yatagarasu centrato, motto in display, traduzione sotto.
// Composizione perfettamente centrata: ammessa solo nei momenti rituali.
//
// Il logo è renderizzato come CSS mask, riempito con --sumi (theme-aware):
// inchiostro in light mode, carta calda in dark mode. Sempre in palette.

window.Hero = function Hero({ logoSrc = "../../assets/yatagarasu.svg" }) {
  return (
    <section style={{
      padding: "var(--space-9) 0 var(--space-7)",
      textAlign: "center",
    }}>
      <div className="cb-container">
        <div style={{ maxWidth: "240px", margin: "0 auto var(--space-5)" }}>
          <span
            className="cb-logo-mask"
            role="img"
            aria-label="Yatagarasu — il corvo a tre zampe, marchio di Corvo Bianco"
            style={{
              display: "block",
              width: "100%",
              aspectRatio: "4224 / 2304",
              "--cb-logo-src": `url(${logoSrc})`,
            }}
          />
        </div>
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontSize: "var(--fs-4xl)",
          lineHeight: "1.05",
          letterSpacing: "-0.01em",
          color: "var(--sumi)",
          fontWeight: "400",
          margin: 0,
        }}>
          <em>Respice&nbsp;finem</em>
        </h1>
        <p style={{
          marginTop: "var(--space-3)",
          fontFamily: "var(--font-body)",
          fontSize: "var(--fs-md)",
          color: "var(--kohaku)",
          lineHeight: "1.6",
        }}>
          Guarda al fine — anche quando il quotidiano tira altrove.
        </p>
      </div>
    </section>
  );
};
