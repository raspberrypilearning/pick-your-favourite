## Animeer de secties

In deze stap maak je **drie** kruispuntobservatoren die detecteren wanneer je slots de viewport binnenkomen en er dan animaties op toepassen.

### Maak de eerste waarnemer aan

\--- task ---

Open `scripts.js` en zoek het commentaar `// Observatoren`.

\--- /task ---

\--- task ---

Maak een nieuwe `IntersectionOberver`-constante met de naam `slot1observer`.

Voeg de entries array en de `if` verklaring toe die controleert of de entry overlapt.

Voor deze waarnemers wil je dat het **hele** target in de viewport staat. Stel daarom de `drempel` in op `1`.

## --- code ---

language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 2-9
---------------------------------------------------------

// Observatoren
const slot1observer = new IntersectionObserver(
(entries) => {
if (entries[0].isIntersecting) {

```
}
```

},
{ threshold: 1 }
);

\--- /code ---

\--- /task ---

\--- task ---

Schrijf in de `if`-instructie de code die een klasse toevoegt aan `slot1`. Laat de `""` voorlopig leeg.

## --- code ---

language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 5
-------------------------------------------------------

// Observatoren
const slot1observer = new IntersectionObserver(
(entries) => {
if (entries[0].isIntersecting) {
slot1.classList.add("");
}
},
{ threshold: 1 }
);

\--- /code ---

\--- /task ---

\--- task ---

**Kies** welke animatie je wilt gebruiken voor je eerste slot.

Er zijn 5 animaties die vooraf voor je zijn gedefinieerd in **style.css**:

1. `fade-in` (vervagen)
2. `grow-in` (groei in)
3. `rise-in` (opstijgen in)
4. `slide-left` (schuif naar links)
5. `slide-right` (schuif naar rechts)

Zet de naam van je animatie tussen de `""` binnen je waarnemer.

Je kunt het later altijd wijzigen als je een andere wilt gebruiken.

## --- code ---

language: javascript
filename: scripts.js
line_numbers: false
line_number_start: 5
------------------------------------------------------------------------------

// Observatoren
const slot1observer = new IntersectionObserver(
(entries) => {
if (entries[0].isIntersecting) {
slot1.classList.add("rise-in");
}
},
{ threshold: 1 }
);

\--- /code ---

\--- /task ---

\--- task ---

Nu moet je je `IntersectionObserver` instellen om de pagina te observeren.

Voeg de aanroep toe.

## --- code ---

language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 10
--------------------------------------------------------

// Observatoren
const slot1observer = new IntersectionObserver(
(entries) => {
if (entries[0].isIntersecting) {
slot1.classList.add("");
}
},
{ threshold: 1 }
);
slot1observer.observe(slot1);

\--- /code ---

\--- /task ---

\--- task ---

**Klik op Run**

- Selecteer een optie en scroll naar beneden, je ziet het eerste slot verschijnen en dan wordt er een animatie op toegepast.

\--- collapse ---

---

## title: Mijn inhoud is lang en mijn animatie werkt niet

Als er veel content in jouw slot staat, wordt deze waarschijnlijk nooit volledig in de viewport weergegeven en omdat je `drempel` is ingesteld op `1` (100% van het element), zal je animatie niet worden geactiveerd.

Om dit op te lossen, kun je de drempelwaarde als volgt volledig verwijderen:

## --- code ---

language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 10
--------------------------------------------------------

// Observeratoren
const slot1observer = new IntersectionObserver(
(entries) => {
if (entries[0].isIntersecting) {
slot1.classList.add("");
}
}
);
slot1observer.observe(slot1);

\--- /code ---

Of je kunt de hoeveelheid (van het element) die nodig is om de animatie te activeren verminderen. Dit zou bijvoorbeeld de helft van het element vereisen om te activeren...

## --- code ---

language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 10
--------------------------------------------------------

// Observatoren
const slot1observer = new IntersectionObserver(
(entries) => {
if (entries[0].isIntersecting) {
slot1.classList.add("");
}
},
{ threshold: 0.5 }
);
slot1observer.observe(slot1);

\--- /code ---

\--- /collapse ---

\--- /task ---

Het ziet er niet zo mooi uit als je slot zichtbaar is voordat de animatie plaatsvindt, daarom ga je je content slots onzichtbaar maken totdat ze geanimeerd zijn.

\--- task ---

Open `style.css` en zoek de `.content` selector.

Voeg de eigenschap `opacity` toe en stel deze in op `0`.

## --- code ---

language: css
filename: style.css
line_numbers: false
line_number_start: 103
line_highlights: 110
---------------------------------------------------------

.content {
width: 100%;
border-radius: 5px;
box-shadow: 5px 5px black;
padding: 5px;
font-size: 32px;
opacity: 0;
}

\--- /code ---

**Klik op Run**

- Scroll om je animatie opnieuw te zien. Het slot mag niet verschijnen totdat deze animeert.

\--- /task ---

### Waarnemers toevoegen voor de andere twee slots

\--- task ---

Open `scripts.js`.

Kopieer je eerste waarnemer.

\--- /task ---

\--- task ---

Plak het eronder.

Verander alle `slot1` referenties naar `slot2`.

Je kunt dezelfde animatie gebruiken of een andere kiezen.

\--- collapse ---

---

## title: De animaties

Er zijn 5 animaties waaruit je kunt kiezen:

1. `fade-in` (vervagen)
2. `grow-in` (groei in)
3. `rise-in` (opstijgen in)
4. `slide-left` (schuif naar links)
5. `slide-right` (schuif naar rechts)

\--- /collapse ---

## --- code ---

language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 2, 5, 10
--------------------------------------------------------------

// Observatoren
const slot2observer = new IntersectionObserver(
(entries) => {
if (entries[0].isIntersecting) {
slot2.classList.add("slide-left");
}
},
{ threshold: 1 }
);
slot2observer.observe(slot2);

\--- /code ---

**Klik op Run**

- Test je tweede animatie.

\--- /task ---

\--- task ---

Kopieer de waarnemer opnieuw en plak hem eronder.

\--- /task ---

\--- task ---

Verander alle verwijzingen zodat er `slot3` staat en kies eventueel een andere animatie.

## --- code ---

language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 2, 5, 10
--------------------------------------------------------------

// Observatoren
const slot3observer = new IntersectionObserver(
(entries) => {
if (entries[0].isIntersecting) {
slot3.classList.add("grow-in");
}
},
{ threshold: 1 }
);
slot3observer.observe(slot3);

\--- /code ---

**Klik op Run**

- Test je derde animatie.

\--- /task ---

Vervolgens ga je `localStorage` gebruiken om de keuze van de gebruiker definitief te maken!
