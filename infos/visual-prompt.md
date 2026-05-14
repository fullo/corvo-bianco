# Visual Prompt — Logo Corvo Bianco

Quattro varianti per la generazione del logo, ordinate dall'attuale verso la direzione scelta (sumi-e yatagarasu bianco senza occhio).

Ogni prompt è pensato per generatori image-to-image / text-to-image (Midjourney, DALL·E, Stable Diffusion, Imagen). Le variabili stilistiche sono esplicite per permettere iterazione controllata.

---

## Variante 1 — Versione attuale (archivio)

*Stato: placeholder esistente. Conservato come riferimento storico e per eventuale uso secondario (merchandising, archivio brand).*

**Prompt:**

> Black raven holding a single human eye in its beak, side profile, detailed pen-and-ink illustration, vintage engraving style, sharp linework, dramatic shadows, aged parchment background with subtle texture and scratches, gothic blackletter title "CORVO BIANCO" above and Latin motto "RESPICE FINEM" below, sepia-cream paper tone, medieval bestiary aesthetic, occult curio shop signage, 19th-century natural history plate, high contrast, hand-drawn quality.

**Note di lettura:** simbolismo forte (occhio = visione, sguardo) ma estetica medievale-occidentale in tensione con il posizionamento orientale del brand. Da pensionare come logo primario.

---

## Variante 2 — Sumi-e yatagarasu (direzione scelta, composizione classica)

*Stato: candidata primaria. Da iterare fino al risultato definitivo.*

**Prompt:**

> A white three-legged crow (yatagarasu) in traditional Japanese sumi-e ink painting style, single fluid brushstroke composition, minimal black ink strokes on aged washi paper background, the bird standing in profile with confident posture, three legs clearly visible and grounded, beak closed, gaze directed forward and slightly upward, asymmetric composition with generous negative space, off-center placement, hand-painted quality with visible brush texture and slight ink bleeds, no other elements, no text, no eye in beak, restrained and meditative aesthetic, museum-quality scroll painting reference, Hasegawa Tōhaku influence.

**Note di lettura:** la direzione coerente con il manifesto. Tre zampe a terra (yatagarasu autentico), nessun occhio nel becco (sottrazione richiesta), bianco non come colore ma come **assenza** di tratto (il corpo emerge dalla carta, definito dai tratti di contorno).

---

## Variante 3 — Sumi-e yatagarasu (composizione minimale, gesto unico)

*Stato: alternativa più radicale. Da considerare se Variante 2 risulta ancora troppo descrittiva.*

**Prompt:**

> Extreme minimalist sumi-e ink painting of a three-legged crow, suggested with the fewest possible brushstrokes — perhaps seven or eight gestures total, no more, capturing only the essential silhouette: arched back, beak, three legs, hint of tail, on plain off-white washi paper, dramatic negative space dominating ninety percent of the composition, single calligraphic gesture aesthetic, zen brush painting, Sengai Gibon influence, no detail, no shading, no text, just essence, the bird almost dissolving into white, the white itself being the subject.

**Note di lettura:** più aderente al principio sumi-e ("essenza per sottrazione"), ma meno riconoscibile come marchio. Funziona se usato grande (es. background del sito); rischia di scomparire ai piccoli formati (favicon, social).

---

## Variante 4 — Sumi-e yatagarasu con sigillo (composizione tradizionale completa)

*Stato: variante "tradizione completa". Da valutare per applicazioni cerimoniali o documenti formali.*

**Prompt:**

> Sumi-e ink painting of a three-legged white crow (yatagarasu) on aged ivory washi paper, traditional Japanese scroll composition, the bird positioned in upper-left third of the composition in classic asymmetric balance, accompanied by a single vermillion red hanko seal in lower-right corner containing stylized kanji or abstract mark, minimal black ink strokes defining the bird's contour, visible brush texture, slight ink bleed at stroke edges, generous negative space, fine paper grain visible, museum-quality traditional sumi-e aesthetic, no other text or decoration, the red seal as the only chromatic element, deep vermillion against ink black against warm paper white.

**Note di lettura:** introduce il rosso vermiglione come unico accento cromatico — coerente con la palette del brand (vermiglione come "sigillo", non come decorazione). Più carico simbolicamente ma anche più rituale; da usare con parsimonia perché rischia di sembrare appropriazione invece che convergenza.

---

## Criteri di selezione fra Variante 2, 3, 4

Domande da farsi davanti ai render generati:

1. **Riconoscibilità a piccoli formati**: il logo funziona a 32×32 px (favicon)? A 16×16? Se no, è grafica, non identità.
2. **Espressione del bianco**: il "bianco" è leggibile come scelta intenzionale o come "assenza di colore"? Il primo è il brand; il secondo è un default.
3. **Tre zampe visibili**: lo yatagarasu autentico ne ha tre. Se il render ne mostra due, è un corvo generico — perde la specificità mitologica giapponese.
4. **Postura**: il corvo è in atto di **guardare** (testa rivolta verso l'alto o in avanti) o in atto di **mangiare/raccogliere** (testa abbassata)? Il brand vuole il primo. *Respice finem*: lo sguardo si solleva.
5. **Carta**: il fondo washi è leggibile o sembra solo "sfondo beige stock"? La qualità della carta è metà del lavoro nel sumi-e.

---

## Riferimenti visivi per i prompt

Artisti e opere da menzionare come influence per guidare il generatore:

- **Hasegawa Tōhaku** (1539–1610), *Pine Trees* (Shōrin-zu byōbu) — maestro della sottrazione, paragone di equilibrio fra inchiostro e vuoto
- **Sengai Gibon** (1750–1837) — gesto zen estremo, ironico, leggero
- **Hokusai** — quando serve un tratto più dinamico, meno meditativo
- **Yosa Buson** — per la qualità "haiku-pittura" del gesto singolo
- **Itō Jakuchū** — per il bianco-come-soggetto (i suoi galli bianchi)

---

## Note tecniche per la generazione

- **Formato**: quadrato 1:1 per logo primario; orizzontale 16:9 per header sito; verticale 9:16 per applicazioni mobile/social.
- **Risoluzione di partenza**: almeno 2048×2048 px, da rifinire manualmente in vettoriale (SVG) per uso brand.
- **Colore**: rigorosamente bicromatico (inchiostro + carta) per le varianti 2 e 3; tricromatico (inchiostro + carta + vermiglione) per la variante 4.
- **Output finale**: il render generato è punto di partenza. Il logo definitivo va ridisegnato in vettoriale per garantire scalabilità.
