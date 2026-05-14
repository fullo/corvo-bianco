---
name: corvo-bianco-design
description: Use this skill to generate well-branded interfaces and assets for Corvo Bianco, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

# Corvo Bianco — design skill

Corvo Bianco è un brand italiano di consulenza strategica avanzata. Estetica **sumi-e** (墨絵, pittura giapponese a inchiostro) applicata al web: sottrazione, respiro, asimmetria, vermiglione solo come sigillo. Voce italiana, impersonale, colta ma non accademica.

## Come usare questa skill

1. **Leggi `README.md`** in questa cartella per il contesto completo: brand context, content fundamentals (tono, casing, esempi di voce), visual foundations (palette, tipografia, animazioni, layout, regole su ombre/bordi/raggi), iconography.
2. **Esplora gli altri file**: `colors_and_type.css` (design tokens), `assets/yatagarasu.png` e `.svg` (logo), `ui_kits/site/` (componenti JSX dell'unico prodotto: il sito istituzionale), `docs/` (manifesto, decalogo, prompt per il logo — fonti di verità testuali), `preview/` (card visive del design system).
3. **Per artefatti visivi** (slide, mock, prototipi throwaway): copia gli asset necessari (logo, `colors_and_type.css`) nel tuo file/cartella di output e produci HTML statico per l'utente. Importa la stylesheet o inlinea i token. Mantieni il principio di **sottrazione**.
4. **Per codice di produzione**: usa direttamente `colors_and_type.css` come fonte dei design token, e ispira i tuoi componenti a quelli in `ui_kits/site/`.

## Regole non negoziabili

- **Bicromia + sigillo.** Inchiostro (`--sumi` `#1a1817`) su carta (`--washi` `#f5f0e6`). Vermiglione (`--vermilion` `#b53127`) **solo** come accento puntuale (hover dei link, sigillo del footer, indicatori micro). Mai grandi superfici rosse, mai gradienti, mai bottoni vistosi.
- **Tipografia**: **quattro brand font ufficiali, tutti OFL 1.1**. *Voce cerimoniale*: **Cardo** (display, motto, titoli rituali) + **EB Garamond** (prosa di brand, manifesto). *Voce operativa*: **IBM Plex Sans** (UI, slide, dashboard, form, navigazione) + **IBM Plex Mono** (codice, token, tabular). Serif per il contenuto, sans per gli strumenti. Niente system fonts, niente Inter al posto di Plex Sans, niente sans-serif al posto del serif nel manifesto.
- **Whitespace generoso.** `--space-7` (96px) è il padding minimo di una sezione. `--space-9` (192px) per gli hero. Nel dubbio, raddoppiare lo spazio.
- **Raggi**: 0 (default) o 2px (solo per il sigillo). Mai card con angoli arrotondati.
- **Ombre**: assenti. Nessun `box-shadow` decorativo.
- **Animazioni**: solo transizioni silenziose 200–400ms su `color` e `border-color`. Niente parallax, scroll-reveal, cursori custom, "wow factor".
- **Lingua**: italiano. Mai inglese (se non per termini tecnici inevitabili). Mai inglese motivazionale ("Discover", "Get Started", "Sign up now").
- **Voce**: impersonale o "noi" implicito. Mai "io". Frasi brevi, ritmo curato. Niente buzzword (synergy, leverage, win-win). Niente emoji nel copy ufficiale.
- **Iconografia**: niente icon system. L'unico elemento iconico è il sigillo vermiglione (`.cb-seal`, 24×24). Se proprio servono icone, usare Lucide (CDN) come sostituzione e flaggarlo all'utente.
- **Logo**: yatagarasu sumi-e (`assets/yatagarasu.png`). Usare grande nell'hero, piccolo nella favicon. Su sfondi chiari applicare `mix-blend-mode: multiply` per fondere il bianco del PNG col washi.
- **Composizione**: asimmetria controllata. Il centrato è ammesso solo nei momenti rituali (hero, motto, footer, chiusura del decalogo). Il resto vive di equilibrio asimmetrico.

## Dark variant

Il sistema include una variante dark ufficiale: **inchiostro su carta notturna**.

- **Attivazione**: `<html data-theme="dark">` o `<body data-theme="dark">`. I CSS vars in `colors_and_type.css` si invertono automaticamente.
- **Logo**: aggiungi `class="cb-logo"` all'`<img>` del yatagarasu. Il sistema applica `filter: invert(1) + mix-blend-mode: screen` per ottenere "corvo bianco su carta notturna" senza richiedere un asset alternativo.
- **Vermiglione**: resta accento puntuale (sigillo) anche in dark — leggermente innalzato in luminosità (`#c9483d`) per la leggibilità su nero.
- **Quando offrirla**: per artefatti che vanno visti in ambienti scuri (slide proiettate, app a tema sistema), o quando l'utente lo chiede. Non è il default — il brand vive di carta `washi` chiara.

## Pattern testuali tipici

- **Motto display**: `<em>Respice&nbsp;finem</em>` in Cardo italic, font-size `--fs-4xl`.
- **Motto inline**: `<span style="font-family: Cardo; font-style: italic; letter-spacing: 0.04em;">respice finem</span>`.
- **Section label**: uppercase, tracking `0.18em`, color `--kohaku`, in Cardo (es. "PERCHÉ", "COSA", "COME").
- **Coppia comparativa del decalogo**: `[Cosa scegliamo] · "più che" · [Cosa rifiutiamo]`. Lato sinistro in semibold, separatore italic in `--kohaku`, lato destro in `--sumi-soft`.

## Cosa fare se l'utente invoca la skill senza guida

Chiedi cosa vuole costruire (slide? landing? proposta cliente? prototipo? mockup di pagina interna?), poi fai 3–5 domande mirate sui contenuti (testi specifici? logo grande o piccolo? sezione hero rituale o piuttosto manifesto-style?). Comportati da designer esperto e produci output coerente con il brand: preferisci HTML statico per artefatti throwaway, codice React/JSX se l'utente sta lavorando in un'app reale.

## File principali della skill

- `README.md` — full brand context (leggere prima di tutto)
- `colors_and_type.css` — design tokens (CSS variables + classi semantiche `.cb-*`)
- `assets/yatagarasu.png` / `.svg` — logo
- `ui_kits/site/` — componenti JSX modulari del sito istituzionale (recreation)
- `docs/` — sito statico self-contained per GitHub Pages (vanilla HTML/CSS/JS)
- `preview/` — card visive dei token (per ispezione rapida)
- `infos/manifesto.md` / `decalogo.md` — testi canonici del brand (citabili tali e quali)
- `infos/CLAUDE.md` — contesto progetto originale (decisioni di branding già prese)
- `infos/visual-prompt.md` — prompt per la generazione del logo
