## Kies je kleuren

In deze stap zal je de kleuren van je webpagina veranderen voor alle opties!

--- task ---

**Probeer het uit**

Klik op de opties in de dinosaurus voorbeeld om de kleuren te zien veranderen!

<iframe src="https://editor.raspberrypi.org/nl-NL/embed/viewer/pick-your-favourite-dinosaur" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

--- /task ---

Voor elke optie heb je kleuren nodig voor:

- De `<body>` van de webpagina
- De drie inhoudsslots
- Kop en tekst voor de slots

**Tip:** In deze stap ga je veel code toevoegen, dus zorg ervoor dat je kopiëren (<kbd>Ctrl</kbd>+<kbd>C</kbd> of <kbd>Cmd</kbd>+<kbd>C</kbd>) en plakken (<kbd>Ctrl</kbd>+<kbd>V</kbd> of <kbd>Cmd</kbd>+<kbd>V</kbd>) gebruikt om het proces te versnellen.

### Maak je body kleur klassen aan

--- task ---

Kies voor elk van de drie opties een body kleur en schrijf deze op.

Je kunt een [kleurenkiezer](https://www.w3schools.com/colors/colors_picker.asp){:target="_blank"} gebruiken om je te helpen bij jouw keuze.
--- /task ---

--- task ---

Als je je eigen kleuren wilt toevoegen, kun je `default.css` openen en je eigen variabelen toevoegen aan de `:root` selector.

--- code ---
---
language: css
filename: default.css
line_numbers: true
line_number_start: 5
line_highlights: 10
---

/* Basiskleuren */
  --body-background: #FFFFFF;
  --body-text-colour: #000000;

  --new-colour: #A63CEA;

--- /code ---

--- /task ---

--- task ---

Open `style.css`.

Zoek de opmerking `/* Centrale Gedeelte klassen */`.

Maak daaronder een class selector voor je eerste optie met de `.` identifier.

Stel de eigenschap `background-color:` in op de hoofdkleur voor de eerste optie.

Je kunt ook een `color:` eigenschap instellen om ervoor te zorgen dat de titel tekst zichtbaar is.

Je zou deze klas een naam moeten geven die gerelateerd is aan je optie, het **dinosaurus** voorbeeld ziet er als volgt uit:

--- code ---
---
language: css
filename: style.css
line_numbers: false
line_highlights: 2-5
---

/* Centrale Gedeelte Klassen */
.trex {
  background-color: var(--trex-body);
  color: white;
}

--- /code ---

--- /task ---

--- task ---

Maak daaronder de overige **2 klasseselectoren** aan voor je overige opties.

--- collapse ---

---
title: Hoe zou mijn code er uit moeten zien?
---

Je CSS moet drie klasseselectors bevatten, met de eigenschappen `background-color:` en eventueel `color` ingesteld.

Dit is het **dinosaurus** voorbeeld.

--- code ---
---
language: css
filename: style.css
line_numbers: false
line_highlights:
---

/* Centrale Gedeelte Klassen */
.trex {
  background-color: #41220f;
  color: white;
}

.triceratops {
  background-color: #6a7029;
  color: white;
}

.stegosaurus {
  background-color: rgb(32, 78, 55);
  color: black;
}

--- /code ---

--- /collapse ---

--- /task ---

### Functies maken

Vervolgens moet je functies maken die de wijzigingen aan je pagina aanbrengen wanneer op de opties wordt geklikt.

--- task ---

Open `scripts.js` en zoek het commentaar `// Optie 1`.

Maak een functie met de naam `option1`.

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 2-4
---

// Optie 1
function option1(){

}

--- /code ---

--- /task ---

--- task ---

Wanneer op een optie wordt geklikt, moet je de pagina leegmaken, daarna de instructie verbergen en de `content-holder` instellen om te worden weergegeven als `grid`.

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 3-6
---

// Optie 1
function option1(){
  clear();

  instruction.style.display = 'none';
  content.style.display = "grid";
}

--- /code ---

--- /task ---

--- task ---

Voeg vervolgens de nieuwe klasse die je in `style.css` hebt gemaakt toe aan de body en wijzig de titel zodat deze overeenkomt met jouw optie.

Het **dinosaurus** voorbeeld ziet er zo uit:

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 8-10
---

// Optie 1
function option1(){
  clear();

  instruction.style.display = 'none';
  content.style.display = "grid";

  body.classList.add("trex");

  title.innerHTML = "T-Rex";

--- /code ---

Zorg ervoor dat je een titel gebruikt die overeenkomt met jouw keuze!

--- /task ---

--- task ---

Kopieer de `option1()` functie onder de `// Optie 2` opmerking.

Wijzig:

- De functienaam naar `option2`
- De klassenaam die is toegevoegd aan `body` van de klasse die je eerder hebt gemaakt voor optie 2
- De titel zodat deze bij jouw tweede optie past

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 2, 8, 10
---

// Optie 2
function option2(){
  clear();

  instruction.style.display = 'none';
  content.style.display = "grid";

  body.classList.add("triceratops");

  title.innerHTML = "Triceratops";
}

--- /code ---

--- /task ---

--- task ---

Doe hetzelfde voor je derde optie, onder de opmerking `// Optie 3`.

Zorg ervoor dat je het volgende bijwerkt:

- De functienaam
- De klasse toegevoegd aan de alinea (body)
- De titel

--- collapse ---

---
title: Hoe moet mijn optie3 functie eruit zien?
---

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
---

// Optie 3
function option3(){
  clear();

  instruction.style.display = 'none';
  content.style.display = "grid";

  body.classList.add("stegosaurus");

  title.innerHTML = "Stegosaurus";
}

--- /code ---

--- /collapse ---

--- /task ---

### Laat de opties werken

Om je code te testen moet je de knoppen in de keuzelijst koppelen aan de functies die je zojuist hebt geschreven.

--- task ---

Open `index.html`.

Voeg 'onclick' eigenschappen toe aan elk van je dropdown knoppen, die elk van de drie functies aanroepen.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 15
line_highlights: 16-18
---

<div id="dropdown-options">
  <button onclick="option1()">T-Rex</button>
  <button onclick="option2()">Triceratops</button>
  <button onclick="option3()">Stegosaurus</button>
</div>

--- /code ---

--- /task ---

--- task ---

**Klik op Run**

- Gebruik de keuzelijst en selecteer je opties. Je zou de kleuren moeten zien veranderen!

**Fouten opsporen**: Als jouw kleuren niet veranderen, controleer dan of de klassenamen die je in JavaScript hebt toegevoegd, **exact** overeenkomen met de namen in jouw CSS!.

--- /task ---

Vervolgens kun je de gebruiker toestaan de inhoud van je webpagina te wijzigen wanneer hij een optie kiest!
