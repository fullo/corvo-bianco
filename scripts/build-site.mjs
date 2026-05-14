// scripts/build-site.mjs
//
// STUB. Da completare quando avremo bisogno di sincronizzare automaticamente
// il sito vanilla (docs/) dal design system (root + ui_kits/site/).
//
// Cosa dovrebbe fare:
//
//   1. Copiare fonts/* → docs/assets/fonts/*
//   2. Generare docs/assets/css/style.css combinando:
//      a. @font-face statements (con path relativi a docs/assets/fonts/)
//      b. il blocco :root e [data-theme="dark"] da colors_and_type.css
//      c. i componenti CSS specifici del sito (header, hero, manifesto,
//         decalogo, footer, sg-* — sezioni dichiarate inline qui sotto)
//   3. Copiare le immagini:
//        assets/yatagarasu.svg       → docs/assets/images/yatagarasu.svg
//        assets/yatagarasu-paint.svg → docs/assets/images/yatagarasu-paint.svg
//        assets/yatagarasu.png       → docs/assets/images/yatagarasu.png
//   4. (Opzionale) Renderizzare ui_kits/site/index.html (React) come HTML statico:
//      - usare jsdom + react-dom/server per fare renderToString dei componenti
//      - sostituire `<div id="root">…</div>` con l'output
//      - rimuovere gli <script type="text/babel"> e i CDN React
//   5. Scrivere docs/index.html e docs/styleguide.html.
//
// Stato attuale: docs/ è mantenuto a mano. Va bene per il livello di iterazione
// del brand in questa fase. Quando la frequenza di update sarà più alta,
// implementare questo script per evitare drift.
//
// Esecuzione (quando implementato):
//   node scripts/build-site.mjs

import { copyFileSync, mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";

console.log("⚠  build-site.mjs is a stub. Site files are currently maintained by hand.");
console.log("   See scripts/README.md for the planned pipeline.");
process.exit(0);
