// DecalogoList.jsx — coppie comparative "X più che Y".
// Sezione su fondo --rice (tono-su-tono).

window.DecalogoList = function DecalogoList({ items, opening, closing }) {
  return (
    <section style={{
      padding: "var(--space-7) 0",
      backgroundColor: "var(--rice)",
      borderTop: "1px solid var(--ink-line)",
    }}>
      <div className="cb-container">

        {opening && (
          <div style={{
            maxWidth: "var(--measure-base)",
            margin: "0 auto var(--space-5)",
            textAlign: "center",
          }}>
            <span className="cb-section-label">Decalogo</span>
            <p style={{
              marginTop: "var(--space-3)",
              fontFamily: "var(--font-body)",
              fontSize: "var(--fs-md)",
              lineHeight: "1.7",
              color: "var(--sumi)",
            }}>
              <span style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "var(--fs-lg)",
                letterSpacing: "0.04em",
                display: "block",
                marginBottom: "var(--space-2)",
              }}>
                Respice finem
              </span>
              guardare al fine anche quando il quotidiano tira altrove.
            </p>
            <p style={{
              marginTop: "var(--space-2)",
              fontFamily: "var(--font-body)",
              fontSize: "var(--fs-xs)",
              fontStyle: "italic",
              color: "var(--kohaku)",
            }}>
              Da questa postura, scegliamo:
            </p>
          </div>
        )}

        <ul style={{
          maxWidth: "var(--measure-base)",
          margin: "0 auto",
          listStyle: "none",
          padding: 0,
        }}>
          {items.map((it, i) => (
            <li key={i} style={{
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              gap: "var(--space-3)",
              alignItems: "baseline",
              padding: "var(--space-3) 0",
              borderBottom: i < items.length - 1 ? "1px solid var(--ink-line)" : "none",
              fontFamily: "var(--font-display)",
              fontSize: "var(--fs-md)",
              lineHeight: 1.4,
            }}>
              <span style={{ textAlign: "right", fontWeight: 600, color: "var(--sumi)" }}>
                {it.left}
              </span>
              <span style={{
                fontStyle: "italic",
                color: "var(--kohaku)",
                fontSize: "var(--fs-sm)",
                whiteSpace: "nowrap",
              }}>
                più che
              </span>
              <span style={{ textAlign: "left", color: "var(--sumi-soft)" }}>
                {it.right}
              </span>
            </li>
          ))}
        </ul>

        {closing && (
          <p style={{
            maxWidth: "var(--measure-base)",
            margin: "var(--space-5) auto 0",
            textAlign: "center",
            fontStyle: "italic",
            color: "var(--kohaku)",
            fontSize: "var(--fs-sm)",
            lineHeight: 1.7,
            fontFamily: "var(--font-body)",
          }}>
            Riconosciamo valore a ciò che sta a destra.<br/>
            Scegliamo ciò che sta a sinistra.
          </p>
        )}
      </div>
    </section>
  );
};
