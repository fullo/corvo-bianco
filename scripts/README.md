# scripts/

Build automation per il progetto Corvo Bianco. **Stub per ora** — site/ è mantenuto a mano.

## Quando implementare

Quando la frequenza di update del design system supererà ~1 volta a settimana, gli stub vanno completati per evitare drift fra:

- `colors_and_type.css` (design tokens root) ↔ `docs/assets/css/style.css` (token sito)
- `fonts/` ↔ `docs/assets/fonts/`
- `ui_kits/site/*.jsx` (componenti React) ↔ `docs/index.html` (HTML statico)

## File

| Script | Cosa farà | Stato |
|---|---|---|
| `build-site.mjs` | Genera `docs/` da root: copia font, sincronizza CSS, opzionalmente renderizza JSX → HTML statico | stub |

## Esecuzione (futura)

```bash
node scripts/build-site.mjs
```

## Nota

Il sito attuale è 100% vanilla HTML/CSS/JS e gira già su GitHub Pages senza alcun build. Lo script è una *qualità della vita* per il maintainer, non un requirement di deploy.
