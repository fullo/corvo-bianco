# Corvo Bianco

> *Respice finem*: guardare al fine anche quando il quotidiano tira altrove.

Repository del sito istituzionale di **Corvo Bianco**, brand di consulenza strategica avanzata.

## Cos'è questo repository

Il sito istituzionale di Corvo Bianco, pubblicato come pagine statiche HTML/CSS/JS vanilla. Nessun framework, nessun build tool, nessuna dipendenza esterna a runtime — solo i font caricati da Google Fonts.

## Struttura

```
corvo-bianco/
├── index.html              # Landing page
├── styleguide.html         # Riferimento visivo del design system
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── images/
├── content/
│   ├── manifesto.md        # Manifesto narrativo (fonte di verità)
│   └── decalogo.md         # Decalogo aforismatico (fonte di verità)
├── visual-prompt.md        # Prompt per generazione logo
├── CLAUDE.md               # Contesto progetto per Claude Code
└── README.md
```

## Come visualizzare in locale

Nessun build necessario. Apri direttamente `index.html` nel browser, oppure servi la cartella con un qualsiasi static server:

```bash
# Python
python3 -m http.server 8000

# Node (npx)
npx serve .
```

Poi apri `http://localhost:8000`.

## Deploy

Il sito è pensato per static hosting. Compatibile con GitHub Pages, Netlify, Cloudflare Pages, Vercel — nessuna configurazione richiesta oltre al puntamento alla root del repo.

## Documentazione

- **`CLAUDE.md`** — contesto progetto, decisioni di branding prese, convenzioni di voce e stile. Da leggere prima di contribuire.
- **`content/manifesto.md`** — il manifesto narrativo, fonte di verità del testo. Le pagine HTML lo trascrivono; in caso di divergenza, il markdown vince.
- **`content/decalogo.md`** — il decalogo aforismatico, stessa logica.
- **`visual-prompt.md`** — quattro varianti di prompt per la generazione del logo, dalla versione attuale (placeholder) alla direzione scelta (sumi-e yatagarasu).

## Licenza

Da definire. Il codice del sito potrà essere rilasciato come open source; il contenuto del manifesto, il nome e l'identità visiva sono asset di brand riservati.
