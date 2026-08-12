# Matteo Babetto — Technical Portfolio

Sito statico pronto per **GitHub Pages**.

## File

- `index.html` — contenuto del sito
- `styles.css` — grafica e responsive design
- `script.js` — anno automatico + animazioni leggere
- `assets/` — cartella dove inserire eventuali immagini reali dei progetti

## Prima di pubblicare

Apri `index.html` e sostituisci:

```html
mailto:YOUR_EMAIL@example.com
```

con la tua email.

Sostituisci inoltre:

```html
https://www.linkedin.com/
```

con il tuo profilo LinkedIn.

## Pubblicazione con GitHub Pages

1. Crea un nuovo repository GitHub.
2. Carica tutti i file presenti in questa cartella nella root del repository.
3. Apri **Settings → Pages**.
4. In **Build and deployment**, seleziona:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
5. Salva.
6. GitHub mostrerà l'URL pubblico del sito.

Se il repository si chiama `TUONOME.github.io`, l'indirizzo sarà direttamente:

`https://TUONOME.github.io`

## Inserire immagini vere

La versione iniziale usa illustrazioni tecniche realizzate in puro CSS, quindi non richiede immagini esterne.

Per sostituire una visual con una foto o un render:

1. Copia il file in `assets/`, ad esempio `assets/becto.jpg`.
2. Nel relativo `<div class="project-visual ...">` puoi inserire:

```html
<img class="project-image" src="assets/becto.jpg" alt="BECTO">
```

3. Aggiungi a `styles.css`:

```css
.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
```

Puoi poi eliminare gli elementi grafici CSS presenti dentro quella visual.

## Personalizzazione rapida

Il colore principale è definito all'inizio di `styles.css`:

```css
--accent: #d8ff3e;
```

Puoi cambiarlo con un altro colore senza modificare il resto del sito.
