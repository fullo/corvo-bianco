# UI kit — Sito istituzionale Corvo Bianco

Ricreazione 1:1 della homepage di Corvo Bianco (`site/index.html` nel repo originale) come componenti React modulari. **Non è una nuova interpretazione**: replica fedele del sito originale, copia-incolla del testo dal manifesto, stessi token visivi.

## File

| File | Cosa |
|---|---|
| `index.html` | Demo navigabile completa: header + hero + manifesto (Perché/Cosa/Come) + decalogo + footer. |
| `SiteHeader.jsx` | Header con `brand-mark` a sinistra e label di sezione a destra. |
| `Hero.jsx` | Yatagarasu centrato + motto `Respice finem` in display + traduzione. |
| `ManifestoBlock.jsx` | Blocco generico del manifesto: label di sezione, h2, paragrafi. Esporta anche `Motto` (inline). |
| `DecalogoList.jsx` | Lista "X più che Y" su fondo `--rice`. |
| `SiteFooter.jsx` | Sigillo vermiglione + brand + motto. |

## Eseguire localmente

`index.html` carica React + Babel da CDN. Aprirlo direttamente nel browser, oppure servirlo con qualsiasi static server:

```bash
cd ui_kits/site
python3 -m http.server 8000
# poi http://localhost:8000
```

> Il sito originale è HTML/CSS/JS vanilla. Qui usiamo React solo perché il design system esige componibilità — i componenti restano semplici e cosmetici.

## Cosa NON è qui

- Nessun routing, nessun blog, nessuna newsletter. Il sito istituzionale di Corvo Bianco è una landing singola — questo UI kit la riflette.
- Nessuna pagina secondaria (Metodo, Partner, Contatti). Il manifesto stesso del brand è chiaro su questo: *"non prima di avere il primo partner o cliente"*.
