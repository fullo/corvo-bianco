# docs/ — sito istituzionale (pronto per GitHub Pages)

Questo è il **sito deployabile su GitHub Pages**. Self-contained: tutti gli asset (font, CSS, JS, immagini) vivono in questa cartella. Nessuna dipendenza da Google Fonts o CDN esterni a runtime.

La cartella si chiama `docs/` perché GitHub Pages permette il deploy diretto da `/docs` su `main`.

## Struttura

```
docs/
├── index.html              # Landing: manifesto + decalogo
├── styleguide.html         # Riferimento visivo del design system
└── assets/
    ├── css/style.css       # Tokens + dark variant + componenti
    ├── js/main.js          # Inline-injection del logo + theme toggle
    ├── fonts/              # 4 famiglie OFL locali (.ttf)
    │   ├── Cardo-{Regular,Italic,Bold}.ttf
    │   ├── EBGaramond-VariableFont_wght.ttf (+ Italic)
    │   ├── IBMPlexSans-VariableFont_wdth,wght.ttf (+ Italic)
    │   └── IBMPlexMono-{Regular,Italic,Medium,MediumItalic}.ttf
    └── images/
        ├── yatagarasu.png        # raster
        ├── yatagarasu.svg        # vettoriale (fill #000)
        └── yatagarasu-paint.svg  # vettoriale (fill currentColor) — usato dal sito
```

## Deploy su GitHub Pages

```
Settings → Pages → Source → Deploy from branch → main → /docs (folder)
```

Nessun build necessario. Il sito è 100% statico.

## Sviluppo locale

```bash
cd docs
python3 -m http.server 8000
# poi http://localhost:8000
```

Aprire `index.html` direttamente nel browser **non funziona** perché `fetch()` per il logo richiede HTTP — non `file://`. Usare sempre un server statico.

## Sincronia con il design system

Il CSS di `docs/assets/css/style.css` è una versione self-contained dei token in `colors_and_type.css` (root del progetto). Quando si aggiornano i token nel design system, replicare le modifiche qui (o eseguire `scripts/build-site.mjs` quando sarà implementato — vedi `scripts/README.md`).
