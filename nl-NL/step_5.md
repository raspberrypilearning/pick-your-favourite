## Wijzig de rest van de pagina

In deze stap ga je ervoor zorgen dat je hele webpagina wijzigt wanneer de gebruiker een optie kiest.

### Inhoud toevoegen voor slot 2

Het proces om inhoud toe te voegen aan slot 2 lijkt erg op wat je deed in de vorige stap. Om dit proces sneller te laten verlopen, kopieer je de code (<kbd>Ctrl</kbd>+<kbd>C</kbd> of <kbd>Cmd</kbd>+<kbd>C</kbd>) en plak je de code (<kbd>Ctrl</kbd>+<kbd>V</kbd> of <kbd>Cmd</kbd>+<kbd>V</kbd>) op de code die je al hebt geschreven, werk de code vervolgens bij zodat deze overeenkomt met de nieuwe inhoud.

In de laatste stap heb je elke optie één voor één gedaan. Deze keer zal je alle drie de opties in elke stap tegelijk doen: kleuren toevoegen, klassen maken en de code toevoegen.

### Voeg kleuren toe voor slot 2

--- task ---

Open `default.css`.

Voeg **drie** nieuwe kleurvariabelen toe. Wijs kleuren toe aan je slot 2-klassen.

--- collapse ---

---
title: Een voorbeeld
---

De kleuren van de dinosaurus voorbeelden in vakje 2 zien er als volgt uit:

--- code ---
---
language: css
filename: default.css
line_numbers: false
---

/* Slot 2 kleuren */
  --slot-2-t-rex: #00b2a9;
  --slot-2-triceratops: #ffc659;
  --slot-2-stegosaurus: #131f53;

--- /code ---

--- /collapse ---

--- /task ---

### Maak klasses voor slot 2

--- task ---

Open `style.css`.

Zoek de opmerking `/* Slot 2 klassen */`.

Maak **drie** klassen aan voor slot 2, één voor elke optie.

--- collapse ---

---
title: Een voorbeeld
---

Hier zijn de slot 2-klassen voor het dinosaurusvoorbeeld.

--- code ---
---
language: css
filename: style.css
line_numbers: false
---

/* Slot 2 Klassen */
  #slot-2.trex {
    background-color: var(--slot-2-t-rex);
    color: black;
  }

  #slot-2.triceratops {
    background-color: var(--slot-2-triceratops);
    color: black;
  }

  #slot-2.stegosaurus {
    background-color: var(--slot-2-stegosaurus);
    color: white;
  }

--- /code ---

Zorg ervoor dat je **jouw** klassenamen gebruikt, niet de namen in het voorbeeld.

--- /collapse ---

--- /task ---

### Voeg code toe voor slot 2

Nu ga je de drie `option`-functies toevoegen om de klassen toe te passen op slot 2 en vervolgens hun `innerHTML` wijzigen.

--- task ---

Open `scripts.js`.

Zoek je `option1()`-functie.

Voeg een regel toe die je optie 1 klasse toevoegt aan slot 2.

Het dinosaurus voorbeeld zag er als volgt uit:

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 20
---

  // Optie 1
  function option1() {
    clear();

    instruction.style.display = 'none';
    content.style.display = "grid";

    body.classList.add("trex");

    title.innerHTML = "T-Rex <br> &#129430";

    slot1.classList.add("trex");
    slot1.innerHTML =
        "<h1>Anatomie en Kenmerken</h1> \n \
            <p>Een van de grootste vleesetende dinosaurussen</p> \n \
            <p>Krachtige achterpoten</p> \n \
            <p>Enorme schedel met scherpe tanden</p> \n \
            <p>Kleine tweevingerige voorpoten</p>";

    slot2.classList.add("trex");

--- /code ---

--- /task ---

Welke inhoud ga je in slot 2 zetten?

In het voetbalvoorbeeld was het **Recent nieuws** en in het dinosaurusvoorbeeld was het **Trivia**.

--- task ---

Vervolgens voeg je de regels toe die nodig zijn om de `innerHTML` van slot 2 te veranderen.

Je kunt de bovenstaande regel kopiëren die hetzelfde doet voor vak 1, of zelf een nieuwe reeks regels schrijven.

**Tip**: Zorg ervoor dat **elke** regel, behalve de laatste, `\n \` heeft aan het eind.

--- collapse ---

---
title: Een voorbeeld
---

Het dinosaurusvoorbeeld ziet er zo uit:

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 21-24
---

  // Optie 1
  function option1() {
    clear();

    instruction.style.display = 'none';
    content.style.display = "grid";

    body.classList.add("trex");

    title.innerHTML = "T-Rex <br> &#129430";

    slot1.classList.add("trex");
    slot1.innerHTML =
      "<h1>Anatomie en Kenmerken</h1> \n \
          <p>Een van de grootste vleesetende dinosaurussen</p> \n \
          <p>Krachtige achterpoten</p> \n \
          <p>Enorme schedel met scherpe tanden</p> \n \
          <p>Kleine tweevingerige voorpoten</p>";

    slot2.classList.add("trex");
    slot2.innerHTML = "<h1>Trivia</h1> \n \
      <p>T-Rex had een enorme bijtkracht, hij was in staat om botten te verbrijzelen.</p>\n \
      <p>T-Rex was een snelle renner</p>\n \
      <p>De naam Tyrannosaurus Rex betekent tirannieke hagedissenkoning in het Grieks</p>";

--- /code ---

--- /collapse ---

**Klik op Run**

- Test de inhoud en klasse door je eerste optie te selecteren.

--- /task ---

--- task ---

Kopieer deze regels en plak ze in je `option2()` functie.

--- /task ---

--- task ---

Verander de toegevoegde klasse zodat deze overeenkomt met je tweede optie.

--- /task ---

--- task ---

Wijzig de inhoud zodat deze overeenkomt met je tweede optie.

--- collapse ---

---
title: Een voorbeeld

De `option2`-functie voor het dinosaurusvoorbeeld zag er als volgt uit:

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 21-25
----

  // Optie 2
  function option2() {
    clear();

    instruction.style.display = 'none';
    content.style.display = "grid";

    body.classList.add("triceratops");

    title.innerHTML = "Triceratops";

    slot1.classList.add("triceratops");
    slot1.innerHTML =
    "<h1>Anatomie en Kenmerken</h1> \n \
        <p>Een plantenetende dinosaurus</p> \n \
        <p>Bekend om zijn kenmerkende kraag en drie gezichtshoorns</p> \n \
        <p>Hij had een groot lijf, een bekachtige mond en een grote benige plaat die uit de achterkant van zijn schedel stak</p> \n \
        <p>Triceratops leefde waarschijnlijk in kuddes en gebruikte zijn hoorns voor verdediging</p>";

    slot2.classList.add("triceratops");
    slot2.innerHTML =
    "<h1>Trivia</h1> \n \
        <p>Triceratops was een beetje een patser, zijn kraag werd mogelijk alleen gebruikt om mee te pronken</p>\n \
        <p>Triceratops zwierf rond in Noord Amerika tijdens de Laat Krijt periode</p>\n \
        <p>Triceratops betekent driehoornig gezicht in het Grieks</p>";
}

--- /code ---

--- /collapse ---

**Klik op Run**

- Test je kleuren en inhoud door je tweede optie te selecteren.

--- /task ---

--- task ---

Kopieer de regels opnieuw en voeg ze toe aan je `option3()`-functie.

Pas de klasse en inhoud aan zodat ze overeenkomen met je derde optie.

--- /task ---

### Het derde slot

Je bent bijna klaar met de inhoud van je webpagina! Goed gedaan!

Nu ga je de kleuren, klassen en code toevoegen om het derde slot op te maken en te vullen!

Je hebt dit nu twee keer gedaan, dus de instructies zullen je slechts herinneren aan de stappen.

--- task ---

Open `default.css` en voeg drie kleuren toe voor vak 3 (één voor al je opties).

--- collapse ---

---
title: Een voorbeeld
---

Dit zijn de kleurvariabelen voor slot 3 in het dinosaurusvoorbeeld:

--- code ---
---
language: css
filename: default.css
line_numbers: false
line_highlights: 
---

  --slot-3-t-rex: #00b2a9;
  --slot-3-triceratops: #ec3325;
  --slot-3-stegosaurus: #131f53;

--- /code ---

--- /collapse ---

--- /task ---

--- task ---

Open `style.css` en zoek de opmerking `/* Slot 3 klassen */`.

Maak hieronder 3 klassen voor slot 3 (één voor elk van je opties).

--- collapse ---

---
title: Een voorbeeld
---

Hier zijn de klassen voor het **dinosaurus**-voorbeeld:

--- code ---
---
language: css
filename: style.css
line_numbers: false
line_highlights:
---

/* Slot 3 Klassen */
  #slot-3.trex {
    background-color: var(--slot-3-t-rex);
  }

  #slot-3.triceratops {
    background-color: var(--slot-3-triceratops);
    color: white;
  }

  #slot-3.stegosaurus {
    background-color: var(--slot-3-stegosaurus);
    color: white;
  }

--- /code ---

--- /collapse ---

--- /task ---

--- task ---

Open `scripts.js`.

Voeg regels toe aan elk van je optiefuncties om je nieuwe klassen toe te passen en voeg de inhoud toe aan vak 3.

--- collapse ---

---
title: Een voorbeeld
---

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
---

  // Optie 1
  function option1() {
    clear();

    instruction.style.display = 'none';
    content.style.display = "grid";

    body.classList.add("trex");

    title.innerHTML = "T-Rex <br> &#129430";

    slot1.classList.add("trex");
    slot1.innerHTML =
        "<h1>Anatomie en Kenmerken</h1> \n \
            <p>Een van de grootste vleesetende dinosaurussen</p> \n \
            <p>Krachtige achterpoten</p> \n \
            <p>Enorme schedel met scherpe tanden</p> \n \
            <p>Kleine, tweevingerige voorpoten</p>";

    slot2.classList.add("trex");
    slot2.innerHTML =
        "<h1>Trivia</h1> \n \
            <p>T-Rex  had een enorme bijtkracht, hij was in staat om botten te verbrijzelen.</p>\n \
            <p>T-Rex was een snelle renner</p>\n \
            <p>De naam Tyrannosaurus Rex betekent tirannieke hagedissenkoning in het Grieks</p>";

    slot3.classList.add("trex");
    slot3.innerHTML =
        "<h1>Activiteit</h1> \n \
            <ol>\n \
            <li>Vorm teams en ga naast elkaar staat bij een startlijn</li>\n \
            <li>Leg een speeltje neer voor elk teamlid aan de andere kant van de kamer</li>\n \
            <li>Een lid van elk team racet om in een speeltje 'bijten' en terug te brengen naar het team</li>\n \
            <li>Het eerste team dat al hun speeltjes terugbrengt is de winnaar!</li> </ol>";

  }

  // Optie 2
  function option2() {
    clear();

    instruction.style.display = 'none';
    content.style.display = "grid";

    body.classList.add("triceratops");

    title.innerHTML = "Triceratops";

    slot1.classList.add("triceratops");
    slot1.innerHTML =
        "<h1>Anatomie en Kenmerken</h1> \n \
            <p>Een plantenetende dinosaurus</p> \n \
            <p>Bekend om zijn duidelijke kraag en drie gezichtshoorns</p> \n \
            <p>Hij had een groot lichaam, een bekvormige mond en een grote benige plaat die uit de achterkant van zijn schedel stak</p> \n \
            <p>Triceratops leefde waarschijnlijk in kuddes en gebruikte zijn hoorns als verdediging</p>";

    slot2.classList.add("triceratops");
    slot2.innerHTML =
        "<h1>Trivia</h1> \n \
            <p>Triceratops was een beetje een patser, zijn kraag werd mogelijk alleen gebruikt om mee te pronken.</p>\n \
            <p>Triceratops zwierf rond in Noord-Amerika tijdens de Laat-Krijt periode</p>\n \
            <p>Triceratops betekent driehoornig gezicht in het Grieks</p>";

    slot3.classList.add("triceratops");
    slot3.innerHTML =
        "<h1>Activiteit</h1> \n \
        <ol>\n \
            <li>Maak enkele Triceratops hoorns uit papier of karton</li>\n \
            <li>Maak ze vast aan hoofdbanden of hou ze vast</li>\n \
            <li>Zet de hoorns op verschillende afstanden op de grond</li>\n \
            <li>Gebruik hoelahoeps of maak ringen van karton</li>\n \
            <li>Gooi om de beurt de ringen om de Triceratops hoorns, en verdien 10 punten</li>\n \
            <li>Degene die de meeste punten heeft na alle beurten is de winnaar!</li> </ol>";

  }

  // Optie 3
  function option3() {
    clear();

    instruction.style.display = 'none';
    content.style.display = "grid";

    body.classList.add("stegosaurus");

    title.innerHTML = "Stegosaurus";

    slot1.classList.add("stegosaurus");
    slot1.innerHTML =
        "<h1>Anatomie en kenmerken</h1> \n \
            <p>Stegosaurus was een planteneter (een herbivoor)</p> \n \
            <p>Hij had een dubbele rij grote benige platen over zijn rug</p> \n \
            <p>Hij had stekels op zijn staart</p> \n \
            <p>Het heeft een klein hoofd, met een klein brein vergeleken met zijn lichaamsgrootte</p>";

    slot2.classList.add("stegosaurus");
    slot2.innerHTML =
        "<h1>Trivia</h1> \n \
            <p>Stegosaurus had een tweede brein in zijn heupen, dat hielp bij het coördineren van beweging en evenwicht</p>\n \
            <p>Stegosaurus leefde tijdens het Laat-Jura</p> \n \
            <p>Stegosaurus betekent gepantserde dakhagedis in het Grieks</p> \n \
            <p>De stop-motionpop die in de film King Kong uit 1933 werd gebruikt, was gebaseerd op een illustratie van Stegosaurus uit 1897</p>";

    slot3.classList.add("stegosaurus");
    slot3.innerHTML =
        "<h1>Activiteit</h1> \n \
            <ol><li>Versier wat papieren borden om de botten van Stegosaurus te maken</li>\n \
            <li>Zodra de borden droog zijn, organiseer je een 'Stegosaurus Parade' om je borden te laten zien</li>\n \
            <li>Deel de ontwerpen en vier de creativiteit!</li></ol>";

  }

--- /code ---

--- /collapse ---

--- /task ---

--- task ---

**Klik op Run**

- Probeer alle drie de opties uit en controleer of de inhoud en de kleuren eruitzien zoals je wilt.

Je kunt de tekstkleur aanpassen om ervoor te zorgen dat deze met de achtergrond overeenkomt.

--- /task ---

Vervolgens ga je je webpagina wat sprankelender maken met behulp van **kruispuntobservatoren** en animaties!
