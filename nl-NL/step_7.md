## Maak de keuze definitief

In deze stap gebruik je de lokale opslag in de webbrowser van de gebruiker om de keuze die zij maken op te slaan, dus wanneer de pagina wordt geladen, worden de kleuren en inhoud van de keuze dus bewaard!

### De keuze van de gebruiker opslaan

Je gaat regels toevoegen aan elk van je opties functies om een variabele in localStorage in te stellen wanneer de gebruiker een optie selecteert.

--- task ---

Open `scripts.js` en zoek je `option1()` functie.

--- /task ---

--- task ---

Voeg onderaan de functie `localStorage.setItem()` toe, waarmee een opslagvariabele wordt gemaakt.

Binnen de haakjes:

- Geef de naam van de variabele: `"keuze"`
- Voeg de naam van je eerste optie toe tussen aanhalingstekens `""`, gescheiden door een komma.

Het voetbalvoorbeeld ziet er zo uit:

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 7
---
  slot3.classList.add("liverpool");
  slot3.innerHTML = "<h1>Topspelers</h1> \n \
    <p>Mohamed Salah</p>\n \
    <p>Virgil van Dijk</p>\n \
    <p>Trent Alexander-Arnold</p>";

  localStorage.setItem("choice", "liverpool");
}

--- /code ---

--- /task ---

--- task ---

Kopieer de regel en plaats deze onderaan de functies `option2()` en `option3()`, wijzig de waarde van de variabele zodat deze overeenkomt met die keuzes.

--- /task ---

### Controleer de keuze wanneer de pagina is geladen

Vervolgens ga je een functie maken die controleert of de variabele is ingesteld wanneer de pagina wordt geladen.

--- task ---

Zoek in `scripts.js` naar de opmerking `// Laden gebeurtenis`.

Gebruik eronder `document.addEventListener()` om een functie te maken die wordt uitgevoerd wanneer de pagina wordt geladen.

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 2-3
---
// Laden gebeurtenis
document.addEventListener("DOMContentLoaded", function () {

});

--- /code ---

--- /task ---

--- task ---

Maak in de event listener een nieuwe `constante` aan om de waarde in de variabele `keuze` in `localStorage` vast te houden.

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 3
---
// Laden gebeurtenis
document.addEventListener("DOMContentLoaded", function () {
  const choice = localStorage.getItem("choice");
});

--- /code ---

--- /task ---

--- task ---

Maak een `if`-instructie om te controleren of de `keuze`-waarde de eerste optie is.

Als dat zo is, roep dan de functie `option1()` aan.

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 4-6
---
// Laden gebeurtenis
document.addEventListener("DOMContentLoaded", function () {
  const choice = localStorage.getItem("choice");
  
  if (choice == "liverpool"){
    option1();
  }
});

--- /code ---

--- /task ---

--- task ---

Voeg ten slotte twee `else if`-instructies toe om te controleren op de andere twee opties en hun functies aan te roepen.

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 7-10
---

// Laden gebeurtenis
document.addEventListener("DOMContentLoaded", function () {
  const choice = localStorage.getItem("choice");
  
  if (choice == "liverpool"){
    option1();
  } else if (choice == "man-city"){
    option2();
  } else if (choice == "tottenham"){
    option3();
  }
});

--- /code ---

--- /task ---

--- task ---

**Klik op Run**

- Kies een optie.

**Klik op Run** (nogmaals)

- De pagina moet hetzelfde blijven.

Probeer opties te veranderen en klik vervolgens opnieuw op **Run**, de pagina moet de laatste optie die je hebt gekozen behouden.

--- /task ---

### Reset de keuze

Je moet ook een optie creëren waarmee de gebruiker zijn keuze kan resetten en de instructies opnieuw kan bekijken.

--- task ---

Zoek in `scripts.js` naar de opmerking `// Reset`.

Maak een nieuwe functie met de naam `reset`.

Met deze functie worden de keuzes gewist, de inhoud verborgen, de instructies weergegeven en de variabele `localStorage` gewist.

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 2-7
---

// Reset
function reset(){
  clear();
  content.style.display = "";
  instruction.style.display = 'flex';
  localStorage.setItem("choice", "");
}

--- /code ---

--- /task ---

--- task ---

Open `index.html`

Voeg een nieuwe knop toe aan je keuzelijst, zodat de gebruiker de pagina opnieuw kan instellen.

--- code ---
---
language: html
filename: index.html
line_numbers: false
line_highlights: 5
---

        <div id="dropdown-options">
          <button onclick="option1()">Liverpool</button>
          <button onclick="option2()">Manchester City</button>
          <button onclick="option3()">Tottenham</button>
          <button onclick="reset()">Reset</button>
        </div>

--- /code ---

--- /task ---

--- task ---

**Klik op Run**

- Test je reset knop door een optie te kiezen, opnieuw op **Run** te klikken en daarna opnieuw te resetten.

--- /task ---

Goed gedaan, je hebt een geweldige fanpagina gemaakt en je nieuwe CSS- en JavaScript-vaardigheden gebruikt om hem fantastisch te maken!
