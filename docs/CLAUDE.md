# CLAUDE.md — Contesto progetto Corvo Bianco

> Questo file serve a Claude Code (o a Claude in altre sessioni) per riprendere il lavoro sul progetto senza dover ricostruire il contesto da zero. Aggiornare ad ogni decisione strutturale.

---

## Identità del progetto

**Corvo Bianco** è un brand di consulenza strategica avanzata, parallelo e separato da Daruma Consulting (consulenza generica del medesimo proprietario, Francesco Fullone). Posizionamento: alta sartoria per pochi clienti l'anno (1-2 progetti, 6-12 mesi minimo).

**Cosa fa:** ripensamento strategico, OKR, teoria del cambiamento, pensiero critico, sperimentazione misurata.

**Cosa non fa:** consulenza operativa, esecuzione, progetti brevi. Tutto questo è dominio di Daruma.

**Modello brand:** non è un alias personale. È pensato per ospitare partner e collaboratori, sul modello di KodamaHQ. Il sito e il brand devono reggere la presenza di voci multiple, non essere costruiti attorno alla biografia del fondatore.

---

## Regole di funzionamento del brand (decise, non negoziabili)

1. **Routing dei clienti**: Corvo Bianco accetta solo clienti arrivati da libri, contenuti tematici (sito, LinkedIn, newsletter), o partner. I clienti trovati direttamente dal fondatore finiscono in Daruma.
2. **Soglia di successo a 12 mesi**: un partner attivo *e* un cliente con contratto 6-12 mesi.
3. **Nessun travaso**: un cliente Daruma resta cliente Daruma anche se emerge un bisogno strategico. Corvo Bianco vive solo se attrae da fuori.
4. **Chiusura a 12 mesi senza risultato**: il brand viene chiuso, non rinviato. Logo e motto restano come asset didattici (workshop OKR, materiale d'aula).
5. **Brand collettivo**: estendibile a partner, non personale.

Queste regole sono il *respice finem* operativo del progetto stesso. Vanno rilette ad ogni check-in trimestrale.

---

## Identità visiva — direzione

- **Stile illustrativo**: sumi-e (墨絵), pittura giapponese a inchiostro.
- **Soggetto**: yatagarasu (八咫烏), il corvo a tre zampe della mitologia giapponese, **bianco** (corpo che emerge dalla carta, definito da tratti di contorno).
- **Niente occhio nel becco**: la versione attuale del logo è stata pensionata. Lo yatagarasu è già di per sé "guida", non gli serve l'oggetto-occhio.
- **Tipografia**: serif classici di sensibilità mediterranea (italiana/latina), accompagnati da accenti tipografici giapponesi solo quando appropriato.
- **Palette**: inchiostro sumi (#1a1817), carta washi (#f5f0e6), vermiglione (#b53127) come unico accento — usato come hanko, mai decorativo.

Le quattro varianti di prompt per il logo sono in `visual-prompt.md`. La variante 2 (sumi-e classica) è la direzione primaria.

---

## Architettura del sito

**Stack:** HTML/CSS/JS vanilla. Nessun framework, nessun build tool, nessuna dipendenza JavaScript. Deploybile direttamente su GitHub Pages, Netlify, o qualsiasi static host.

**File principali:**

```
corvo-bianco/
├── index.html              # Landing page con manifesto + decalogo
├── styleguide.html         # Riferimento visivo per design system
├── assets/
│   ├── css/style.css       # Stili condivisi (design tokens + componenti)
│   ├── js/main.js          # Interazioni minime (può restare vuoto)
│   └── images/             # Logo, asset visivi
├── content/
│   ├── manifesto.md        # Testo canonico del manifesto narrativo
│   └── decalogo.md         # Testo canonico del decalogo aforismatico
├── visual-prompt.md        # Prompt per generazione logo
├── CLAUDE.md               # Questo file
├── README.md               # Introduzione repository
└── .gitignore
```

**Principio:** i file `.md` in `content/` sono la **fonte di verità** del testo. Le pagine HTML lo trascrivono. Se i due divergono, il markdown vince. Una futura iterazione può introdurre un piccolo script di generazione che inietta il markdown nell'HTML — per ora la duplicazione è accettata in cambio della semplicità.

---

## Tono di voce

- **Italiano**, sempre. Eventuali traduzioni inglesi saranno decise in seguito; per ora il brand è italiano-only, come scelta di posizionamento.
- **Forma impersonale o "noi" implicito**. Nessuna prima persona singolare nel manifesto. Il "noi" compare solo nella chiusa del decalogo, dove serve un soggetto che *sceglie*.
- **Registro**: colto ma non accademico. Il manifesto può citare Taleb e le tradizioni mitologiche; il decalogo deve essere riconoscibile esperienzialmente, senza nominare termini tecnici (niente "dilemma del prigioniero", niente "tragedia dei beni comuni" — si traducono in immagini).
- **Stile compositivo**: sottrazione (sumi-e applicato al testo). Frasi brevi quando possibile, ritmo curato, nessuna ridondanza retorica.

---

## Decisioni di branding già prese

- **Nome**: Corvo Bianco (rovescio del cigno nero di Taleb).
- **Motto**: *Respice finem* (latino, dalla forma estesa medievale *Quidquid agis, prudenter agas, et respice finem*).
- **Apparato simbolico**: trans-culturale (norreni Huginn/Muninn, giapponese yatagarasu, celti, nativi americani). Tutti uniti dalla figura del corvo come animale che vede e ricorda.
- **Nemico del brand**: gli obiettivi comodi, l'ottimizzazione locale, l'abitudine come memoria senza domande. Articolato in forma narrativa nel manifesto (Perché).
- **Struttura del manifesto**: Teoria del Cambiamento (Perché → Cosa → Come). Il manifesto stesso è una dimostrazione del metodo del brand.
- **Forma breve del manifesto**: decalogo in stile Manifesto Agile (coppie comparative "X più che Y"), apertura con *respice finem*, 7 coppie.

---

## Decisioni aperte

- **Stack di deploy**: GitHub Pages, Netlify, altro? Da decidere quando il sito è pronto al lancio.
- **Domain**: da registrare. Candidati: `corvobianco.it`, `corvo-bianco.com`, altro.
- **Pagine future**: oltre a landing + styleguide, prevedibili: *Manifesto* (pagina dedicata estesa), *Metodo* (descrizione dei processi: OKR, ToC, sperimentazione misurata), *Partner* (quando esisteranno), *Contatti*. **Non prima** di avere il primo partner o cliente — il sito attuale è il *minimum viable brand*.
- **Newsletter / blog**: posticipato. Il brand parla attraverso il manifesto, finché non c'è abbastanza materiale per giustificare una voce continuativa.
- **Logo finale**: da generare a partire dai prompt in `visual-prompt.md`, poi rifinire in vettoriale.
- **Favicon e OpenGraph**: da derivare dal logo definitivo.

---

## Come riprendere il lavoro

Se stai aprendo questo progetto dopo un'interruzione, in ordine:

1. **Leggi `content/manifesto.md` e `content/decalogo.md`**. Sono il cuore del progetto; tutto il resto è esecuzione.
2. **Apri `styleguide.html` nel browser**. Verifica che il design system regga ancora la tua intenzione.
3. **Apri `index.html`**. Verifica che il manifesto sia leggibile come pensato.
4. **Controlla `visual-prompt.md`** se devi iterare sul logo.
5. **Aggiorna questo file** se hai preso nuove decisioni strutturali.

---

## Note per Claude (in qualsiasi sessione)

- **Mantieni il registro**: italiano, forma impersonale, sottrazione. Non aggiungere CTA aggressivi, non scrivere copy da landing-page-vendita ("Scopri come trasformare il tuo business!"), non introdurre toni motivazionali. Corvo Bianco non vende, seleziona.
- **Non aggiungere pagine senza chiedere**: ogni nuova pagina è una decisione di brand, non un'aggiunta tecnica.
- **Rispetta la palette**: vermiglione solo come accento puntuale (link in hover, indicatori, mai grandi superfici).
- **Niente immagini stock**. Quando servono, vanno generate o commissionate in coerenza sumi-e.
- **Niente animazioni decorative**. Le micro-interazioni sono ammesse solo se silenziose (transizioni di colore, fade leggeri). Nessun parallax, nessun cursore custom, nessun "wow factor".
