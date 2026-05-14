# Corvo Bianco — Design System

> *Respice finem*: guardare al fine anche quando il quotidiano tira altrove.

Sistema di design per **Corvo Bianco**, brand di consulenza strategica avanzata. Estetica sumi-e (墨絵) applicata al web: sottrazione, respiro, asimmetria, vermiglione solo come sigillo.

---

## Brand context

**Corvo Bianco** è il brand parallelo (e separato) di Daruma Consulting — del medesimo proprietario, Francesco Fullone. Posizionamento: **alta sartoria strategica**, 1–2 progetti l'anno, 6–12 mesi minimo per ingaggio.

- **Cosa fa**: ripensamento strategico, OKR, teoria del cambiamento, pensiero critico, sperimentazione misurata.
- **Cosa non fa**: consulenza operativa, esecuzione, progetti brevi. Tutto questo è dominio di Daruma.
- **Modello brand**: collettivo, estendibile a partner (modello KodamaHQ). Non è un alias personale.
- **Nemico del brand**: l'ottimizzazione locale, gli obiettivi comodi, l'abitudine come memoria che ha smesso di fare domande.
- **Origine del nome**: rovescio del *cigno nero* di Taleb. Il cigno nero è l'evento raro che non sapevi di non sapere; il corvo bianco è lo sguardo che scegli di tenere in tempo.
- **Marchio**: **yatagarasu** (八咫烏), il corvo a tre zampe della mitologia giapponese, in sumi-e *bianco* — corpo che emerge dalla carta, definito dai tratti di contorno.

### Fonti di questo design system

Il design system è derivato dal sito istituzionale ufficiale:
**https://github.com/fullo/corvo-bianco** (branch `main`)

In particolare:
- `infos/manifesto.md` e `infos/decalogo.md` — fonti di verità del testo
- `infos/CLAUDE.md` — contesto progetto e decisioni di branding
- `infos/visual-prompt.md` — prompt per la generazione del logo
- `docs/assets/css/style.css` — design tokens self-contained per il sito (replica di `colors_and_type.css`)
- `design-system/styleguide.html` — styleguide visiva originale del repo
- `assets/yatagarasu.png` / `.svg` / `-paint.svg` — logo (raster + vettoriale + variante paintable con `currentColor`)

Per chi vuole approfondire o aggiornare il sistema: aprire il repository, leggere i documenti `infos/`, e iterare nel rispetto dei principi qui descritti.

---

## Content fundamentals

### Lingua e voce

- **Italiano, sempre.** Il brand è italiano-only come scelta di posizionamento. Nessuna traduzione inglese al momento.
- **Forma impersonale o "noi" implicito.** Nessuna prima persona singolare nel manifesto. Il "noi" compare solo nel decalogo, dove serve un soggetto che *sceglie*.
- **Registro**: colto ma non accademico. Si può citare Taleb e le tradizioni mitologiche, ma niente termini tecnici nudi (no "dilemma del prigioniero", no "tragedia dei beni comuni" — si traducono in immagini).
- **Stile compositivo**: **sottrazione**. Sumi-e applicato al testo. Frasi brevi quando possibile, ritmo curato, nessuna ridondanza retorica.

### Tono — cosa NON fare

- ❌ Niente CTA aggressivi ("Scopri come trasformare il tuo business!")
- ❌ Niente toni motivazionali, niente "wow", niente exclamation marks
- ❌ Niente claim quantitativi non sostanziati ("+300% efficienza")
- ❌ Niente buzzword da consulenza standard (synergy, leverage, win-win, growth hacking)
- ❌ Niente emoji nel copy serio del brand
- ❌ Mai usare "io" o forme dirette del fondatore

### Esempi canonici di voce

**Apertura manifesto:**
> Le organizzazioni decidono ogni giorno con razionalità locale e cecità sistemica. Ottimizzano la parte e perdono il tutto. Vincono la partita di oggi e perdono quella che conta.

**Definizione del brand:**
> Il cigno nero di Taleb è l'evento raro che non sapevi di non sapere. Il corvo bianco è il suo rovescio: non l'evento che ti sorprende, ma lo sguardo che scegli di tenere in tempo.

**Chiusura del Come:**
> Pochi clienti l'anno, percorsi lunghi, nessuna fretta. Solo lo sguardo, e dove sceglie di posarsi.

**Decalogo (forma "X più che Y"):**
> **La domanda giusta** più che la risposta rapida.
> **La disciplina dello sguardo** più che l'esercizio della previsione.

### Casing e tipografia di testo

- **Maiuscole**: solo a inizio frase e nomi propri. Niente Title Case nei titoli (è inglese, non si addice al brand).
- **Motto latino**: sempre in italico, *Respice finem*. Mai in maiuscoletto, mai in tutto maiuscolo, mai senza spazio non-breaking nel motto display (`Respice&nbsp;finem`).
- **Section labels**: uppercase con `letter-spacing: 0.18em` (es. "PERCHÉ", "COSA", "COME"). È l'unico uso ammesso dell'uppercase oltre alle sigle.
- **Virgolette**: italiane curve `« »` quando si cita, o doppi apici tipografici `" "`. Mai `"droga"` dritti.
- **Trattini**: il trattino lungo `—` (em-dash) per le inflessioni, separato da spazi. Mai `--`.

---

## Visual foundations

Il principio guida è **sottrazione**. Tutto il resto deriva da lì.

### Colori

Bicromia (inchiostro + carta) con un solo accento: **vermiglione come sigillo**, mai come superficie.

| Token | Hex | Ruolo |
|---|---|---|
| `--sumi` | `#1a1817` | Inchiostro: testo primario, tratti |
| `--sumi-soft` | `#3a3530` | Inchiostro diluito: testo secondario |
| `--kohaku` | `#6b5b4f` | Ambra calda: didascalie, etichette |
| `--washi` | `#f5f0e6` | Carta washi: sfondo primario |
| `--rice` | `#faf7f0` | Carta più chiara: superfici secondarie |
| `--vermilion` | `#b53127` | Sigillo (hanko): accento puntuale, mai decorativo |
| `--vermilion-soft` | `#d97264` | Vermiglione attenuato: hover, focus |

**Regola del vermiglione:** nel sumi-e tradizionale il rosso del sigillo occupa <1% della composizione. Stessa regola qui. Usarlo per: hover sui link, separatori puntuali, marchio finale del footer, indicatori micro. **Mai** per superfici di bottoni, sfondi di sezione, gradienti, decorazioni grandi.

### Tipografia

Quattro famiglie, **tutte SIL Open Font License 1.1** (OFL) — open-source, ridistribuibili, embeddabili senza royalty. Caricate da Google Fonts. **Tutte e quattro sono brand font ufficiali**, ciascuna con un ruolo distinto.

| Ruolo | Famiglia | Licenza | Quando usare |
|---|---|---|---|
| Display | **Cardo** (Regular + Italic) | OFL 1.1 — David Perry | Titoli rituali, motto, etichette di sezione, brand mark — la **voce cerimoniale** |
| Body | **EB Garamond** (400/500/600 + Italic) | OFL 1.1 — Georg Duffner | Prosa lunga, manifesto, lettura immersiva — la **voce contemplativa** |
| Sans | **IBM Plex Sans** (400/500/600 + Italic) | OFL 1.1 — Bold Monday | UI, slide, dashboard, form, navigazione, label tecniche — la **voce operativa** |
| Mono | **IBM Plex Mono** (400/500) | OFL 1.1 — Bold Monday | Codice, token, numerali tabulari, citazioni grezze |

**Due tradizioni in dialogo.** I serif italiani (Cardo, EB Garamond) reggono il **registro alto** del brand: manifesto, motto, narrazione. I Plex (Sans, Mono) reggono il **registro operativo**: ciò che si compila, si misura, si configura. La transizione non è una caduta di tono, è un cambio di contesto.

**Quando un sans, quando un serif?**
- *Serif* per: manifesto, motto, titoli di pagina, testo di brand, comunicazione narrativa, proposte cliente, copy editoriale.
- *Sans* per: dashboard, form, UI di prodotto, slide tecniche, badge, etichette di stato, navigazione, microcopy di interazione.
- *Misti*: una pagina può combinare h1 in Cardo + UI controls in Plex Sans nello stesso layout, purché la gerarchia resti chiara (serif = contenuto, sans = strumenti).

Scala basata sul **rapporto perfetto quarto (1.333)** a partire da 16px. Vedi `colors_and_type.css` per la scala completa e le classi semantiche (`.cb-h1`…`.cb-h4`, `.cb-p`, `.cb-sans`, `.cb-mono`).

### Spaziatura

Base 8px. Le sezioni respirano con padding generoso (**`space-7` = 96px minimo**). Il whitespace è il vero protagonista della composizione — più della tipografia, più del colore. *Nel dubbio, raddoppiare lo spazio.*

### Backgrounds

- **Sfondo principale**: tinta unita `--washi` (#f5f0e6).
- **Texture sottile carta**: due `radial-gradient` quasi-invisibili (opacità 2.5–3%) in alto-destra e basso-sinistra, simulano la grana del washi senza diventare pattern.
- **Mai**: immagini di sfondo full-bleed, gradienti decorativi, pattern ripetuti.
- **Sezioni alternate**: `--rice` per il decalogo (un solo tono-su-tono per pagina). No carosello di colori.
- **Hero**: la stessa carta. Il logo (yatagarasu) è l'unica figura, centrata, con respiro generoso sopra e sotto.

### Animazioni

**Solo transizioni silenziose**: cambio colore, fade leggeri. Durata 200ms (base) o 400ms (slow).

- ❌ Nessun parallax
- ❌ Nessuna animazione di scroll (no reveal, no fade-in-on-scroll)
- ❌ Nessun cursore custom
- ❌ Nessun "wow factor"
- ✅ `prefers-reduced-motion`: tutto disattivato a 0.01ms

### Stati: hover, focus, press

- **Link hover**: testo passa a `--vermilion`, border-bottom passa a `--vermilion-soft`. Nessun underline-on-hover stile-anni-90; il bordo c'è già di default come tratto sumi-e.
- **Link non-hover**: `border-bottom: 1px solid rgba(26,24,23,0.12)` — un tratto sottile, come graffiato.
- **Focus visible**: `outline: 2px solid var(--vermilion)` con `outline-offset: 4px`. Il focus è importante (accessibilità), il vermiglione è giustificato qui.
- **Press**: nessuno stato attivo decorativo. Il browser default basta.
- **Brand mark hover**: solo cambio colore a `--vermilion`, nessun border.

### Bordi e radii

- **Raggi**: praticamente zero. `--radius-none` (0) è il default. `--radius-xs` (2px) è il massimo, riservato al **sigillo** (24×24px square con appena un addolcimento).
- **Bordi**: sempre 1px solid, mai più spessi. `--ink-line` (rgba 12% opacity) per separatori; `--ink-line-strong` (32%) per tratti più presenti.
- **Mai**: bordi colorati su un solo lato (la trope "card con barra accento a sinistra"), bordi tratteggiati, bordi spessi.

### Ombre

- **Sostanzialmente assenti.** Nel sumi-e l'ombra è suggerita dalla diluizione dell'inchiostro, non da un drop-shadow.
- Token `--shadow-none` è il default.
- `--shadow-subtle: 0 1px 0 var(--ink-line)` esiste solo per casi limite (separazione minima).
- ❌ Mai `box-shadow` per "depth", "elevation", "card lift".

### Cards

- **I "card" classici non esistono in Corvo Bianco.** Il contenuto è separato da **whitespace** e **linee sottili orizzontali**, non da contenitori riquadrati.
- Quando serve un raggruppamento visivo, usare: padding generoso + `border-top` o `border-bottom` 1px in `--ink-line`. Niente box completo, niente sfondo distinto, niente ombra.

### Trasparenza e blur

- **Blur**: mai usato. Il sumi-e è precisione del tratto; il blur è disfacimento.
- **Trasparenza**: ammessa solo nelle linee divisorie (`rgba(26,24,23,0.12)`) e nelle texture di sfondo (3% opacity). Mai sui testi, mai sui contenitori, mai per simulare "frosted glass".

### Layout

- **Composizione asimmetrica**, controllata. Le composizioni perfettamente centrate sono ammesse solo nei **momenti rituali**: hero, motto, chiusura del decalogo, footer. Il resto vive di equilibrio asimmetrico.
- **Misure di testo**: `--measure-base` (640px) per il manifesto è la regola; `--measure-narrow` (512px) per la prosa più intima; `--measure-wide` (896px) per la pagina ospite di stili (styleguide).
- **No fixed nav** sopra il fold: il sito ha un header semplice e poi scrolla. Tutto vive nel flusso.
- **No sticky elements**, no overlay, no modali. Le pagine sono leggibili linearmente.

### Composizione tipografica (regole)

1. **Sottrazione prima di addizione.** Ogni elemento aggiunto deve giustificare la sua presenza.
2. **Tipografia come gesto.** Niente ombre, niente bordi, niente sfumature sui caratteri. Il peso visivo viene dal carattere stesso e dal tracking.
3. **Bicromia + sigillo.** Inchiostro su carta. Vermiglione come accento puntuale.
4. **Whitespace generoso.** Lo spazio bianco è il soggetto, non lo sfondo.

---

## Iconography

### Approccio

Corvo Bianco **non usa un sistema di icone**. È una scelta di brand, non una mancanza:

- ❌ Nessuna icon font (no Font Awesome, Material Icons, ecc).
- ❌ Nessun set SVG ricorrente.
- ❌ Nessuna emoji nel copy ufficiale del brand.
- ❌ Nessuna unicode-as-icon (no ▶, no ✓, no ★).
- ✅ Un solo elemento "iconico": **il sigillo vermiglione** (`.cb-seal`), 24×24px, quadrato con 2px di radius e 85% opacity. È la firma del brand, equivalente all'hanko (印鑑) giapponese.
- ✅ Un solo marchio: **lo yatagarasu** in sumi-e (`assets/yatagarasu.png` e `.svg`). Compare grande nell'hero, piccolo nella favicon, e nient'altro.

### Se proprio serve un'icona

In pagine future (es. metodo, partner, contatti) dove un'icona è inevitabile (es. icona "menu", "close"):

- **Usare tratti sottili (1px stroke) in inchiostro sumi**, formato SVG inline, mai PNG.
- **Geometria essenziale**, no fill, no double-stroke, no ornamenti.
- **Sostituto CDN consigliato (se non c'è asset)**: [Lucide](https://lucide.dev/) — stroke 1.5px, stile lineare, geometria pulita. Si avvicina al sumi-e di più di Heroicons o Material.
- **Flag al designer**: Lucide è una sostituzione operativa. La direzione brand resta "niente icone se non strettamente necessarie".

### Asset visivi disponibili

- `assets/yatagarasu.png` — logo raster (369KB, 2562×1376 ca.)
- `assets/yatagarasu.svg` — logo vettoriale (27KB)

Il sigillo vermiglione è generato in CSS (`.cb-seal`), non è un asset image.

---

## Note di sostituzione font

I font ufficiali — **Cardo**, **EB Garamond**, **IBM Plex Sans**, **IBM Plex Mono** — sono **tutti SIL Open Font License 1.1**, caricati da Google Fonts. Open-source, ridistribuibili, embeddabili in qualsiasi documento o software senza royalty. Nessuna sostituzione necessaria.

Se in futuro serve un fallback offline o un download diretto:
- Cardo → **`fonts/Cardo-*.ttf`** (Regular, Italic, Bold) — file locali ✓
- EB Garamond → **`fonts/EBGaramond-VariableFont_wght.ttf`** + Italic variant — file locali ✓ (variable, wght 400–800)
- IBM Plex Sans → **`fonts/IBMPlexSans-VariableFont_wdth,wght.ttf`** + Italic — file locali ✓ (variable, wght 100–700, wdth 75–100%)
- IBM Plex Mono → **`fonts/IBMPlexMono-*.ttf`** (Regular/Medium + Italic) — file locali ✓

---

## Dark variant — "inchiostro su carta notturna"

Il design system include una variante dark ufficiale. Attivazione:

```html
<html data-theme="dark">
<!-- oppure -->
<body data-theme="dark">
```

I CSS custom properties si invertono automaticamente:

| Token | Light | Dark |
|---|---|---|
| `--washi` (sfondo) | `#f5f0e6` | `#16140f` |
| `--rice` (alt) | `#faf7f0` | `#1f1c17` |
| `--sumi` (testo) | `#1a1817` | `#ede5d3` |
| `--sumi-soft` | `#3a3530` | `#bfb3a0` |
| `--kohaku` (muted) | `#6b5b4f` | `#8a7e6c` |
| `--vermilion` (sigillo) | `#b53127` | `#c9483d` *(leggermente innalzato per leggibilità)* |

**Logo yatagarasu in dark mode**: il PNG sorgente è inchiostro su carta bianca. Il design system applica automaticamente `filter: invert(1) + mix-blend-mode: screen` agli elementi `img.cb-logo` (o `.cb-logo-yatagarasu`) quando `[data-theme="dark"]` è attivo. **Aggiungi la classe `cb-logo` all'`<img>`** del logo per ottenere l'inversione corretta.

**Regola del sigillo invariata**: il vermiglione resta accento puntuale anche in dark mode. La carta cambia, l'hanko no.

**Esempio live**: apri `ui_kits/site/index.html` (UI kit React) o `docs/index.html` (sito statico per GitHub Pages) e usa il toggle "Notte / Giorno" in alto a destra (persiste in `localStorage`).

---

## Indice del progetto

```
corvo-bianco-design-system/
├── README.md                    ← questo file
├── SKILL.md                     ← skill cross-compatibile per Claude Code
├── colors_and_type.css          ← design tokens (CSS vars + classi semantiche)
│
├── assets/                      ← asset di brand (riferimento globale)
│   ├── yatagarasu.png           ← logo (raster, alta risoluzione)
│   ├── yatagarasu.svg           ← logo (vettoriale, fill #000)
│   └── yatagarasu-paint.svg     ← logo (vettoriale, fill currentColor) — paintable via CSS
│
├── fonts/                       ← 4 famiglie OFL (file .ttf locali)
│   ├── Cardo-{Regular,Italic,Bold}.ttf
│   ├── EBGaramond-VariableFont_wght.ttf (+ Italic)
│   ├── IBMPlexSans-VariableFont_wdth,wght.ttf (+ Italic)
│   └── IBMPlexMono-{Regular,Italic,Medium,MediumItalic}.ttf
│
├── docs/                        ← SITO STATICO per GitHub Pages (deploy from /docs)
│   ├── README.md
│   ├── index.html               ← landing: manifesto + decalogo
│   ├── styleguide.html          ← riferimento visivo del design system
│   └── assets/
│       ├── css/style.css        ← design tokens self-contained
│       ├── js/main.js           ← inline-injection del logo + theme toggle
│       ├── fonts/               ← copia dei font per indipendenza del sito
│       └── images/              ← logo (3 varianti) per il sito
│
├── ui_kits/
│   └── site/                    ← UI kit React del sito istituzionale (recreation)
│       ├── README.md
│       ├── index.html           ← demo navigabile (Manifesto + Decalogo)
│       ├── SiteHeader.jsx
│       ├── Hero.jsx
│       ├── ManifestoBlock.jsx
│       ├── DecalogoList.jsx
│       └── SiteFooter.jsx
│
├── preview/                     ← card per il Design System tab
│   ├── colors-palette.html
│   ├── colors-accent.html
│   ├── colors-semantic.html
│   ├── dark-palette.html
│   ├── dark-hero.html
│   ├── type-display.html
│   ├── type-scale.html
│   ├── type-special.html
│   ├── type-two-voices.html
│   ├── fonts-licensing.html
│   ├── spacing-scale.html
│   ├── radii-borders.html
│   ├── shadows-motion.html
│   ├── motto-component.html
│   ├── decalogo-component.html
│   ├── seal-component.html
│   ├── link-states.html
│   ├── logo-mark.html
│   ├── composition-rules.html
│   └── brand-voice.html
│
├── infos/                       ← documenti originali del repo (fonti di verità testuali)
│   ├── CLAUDE.md                ← contesto progetto, decisioni di branding
│   ├── manifesto.md             ← manifesto narrativo (Perché / Cosa / Come)
│   ├── decalogo.md              ← decalogo aforismatico
│   └── visual-prompt.md         ← prompt per la generazione del logo
│
├── design-system/               ← styleguide originale del repo (riferimento)
│   └── styleguide.html
│
└── scripts/                     ← build automation (stub per ora)
    ├── README.md
    └── build-site.mjs
```

---

## Come usare questo design system

1. **Per un nuovo artefatto**: importare `colors_and_type.css`, riprodurre l'estetica usando i token e le classi `.cb-*`. Copiare `assets/yatagarasu.png` per il logo. Mantenere il principio di sottrazione.
2. **Per Claude Code**: leggere `SKILL.md`, che indica come comportarsi.
3. **Per dubbi**: ritornare al manifesto (`infos/manifesto.md`). Il brand vive del manifesto, tutto il resto è esecuzione.

---

## Caveat

- Il **logo definitivo non è ancora rifinito in vettoriale puro**: l'SVG attuale è un tracciato del PNG sumi-e. Per applicazioni a scala variabile (favicon 16×16, stampe grandi formato) andrà ridisegnato a mano.
- **Mancano i favicon ottimizzati** (16×16, 32×32, apple-touch). Il sito originale usa il PNG full-size, che è OK per ora ma non per produzione.
- **Manca la pagina Metodo / Partner / Contatti**. È una scelta deliberata del brand owner ("minimum viable brand" fino al primo partner reale).
- **OpenGraph / social card**: placeholder. Da rifare quando il logo è finalizzato.
