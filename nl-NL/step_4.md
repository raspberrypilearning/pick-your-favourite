## Verander wat inhoud

In deze stap voeg je de tekst inhoud en kleuren toe aan de eerste alinea op jouw webpagina voor elk van de opties.

### Welke inhoud wil je toevoegen?

\--- task ---

Bepaal wat de titels van elk van jouw inhoudelijke paragrafen zullen zijn.

**Denk aan**

- Welke drie dingen moeten alle fans van jouw thema weten?
- Over welke categorieën zou je kunnen schrijven voor elke optie?
- Welke drie dingen hebben alle drie de opties gemeen?

\--- collapse ---

---

## title: Enkele voorbeelden

**Het voetbalvoorbeeld heeft alinea-slots voor:**

- Wedstrijdresultaten
- Nieuws
- Topspelers

De inhoud verandert afhankelijk van het voetbal **team** dat de gebruiker kiest.

**Het dinosaurusvoorbeeld heeft alinea-slots voor:**

- Anatomie en kenmerken
- Trivia
- Een activiteit

De inhoud verandert afhankelijk van welke dinosaurus **soort** de gebruiker kiest.

\--- /collapse ---

\--- /task ---

### De tekst voor de eerste alinea maken

Je gaat de inhoud van de eerste alinea – voor alle drie de opties – maken en er ook een kleur voor instellen.

\--- task ---

Open `index.html` en voeg een regelafbreking toe tussen de openings- en sluitingstags `<div>` (met de id `slot-1`).

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 27
line_highlights: 29-31
-----------------------------------------------------------

<section id="content-holder">
  <h1 id="title">Title</h1>
  <div id="slot-1" class="content">

  </div>
  <div id="slot-2" class="content"></div>
  <div id="slot-3" class="content"></div>
</section>

\--- /code ---

**Tip:** Zorg ervoor dat u de cursor tussen de openings `<div>` en de sluitings `</div>` plaatst voordat je de regelafbreking plaatst.

\--- /task ---

\--- task ---

Voeg een koptekst toe voor het inhoudsslot met behulp van `<h1>`-tags.

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 27
line_highlights: 30
--------------------------------------------------------

<section id="content-holder">
  <h1 id="title">Title</h1>
  <div id="slot-1" class="content">
    <h1>Slot kop</h1>
  </div>
  <div id="slot-2" class="content"></div>
  <div id="slot-3" class="content"></div>
</section>

\--- /code ---

\--- /task ---

\--- task ---

Voeg inhoud voor dit slot toe voor de **eerste optie** die een gebruiker kan kiezen.

Je kunt `<p>`, `<ul>`, `<ol>`, gebruiken of eventuele andere elementen waarmee je ervaring hebt.

\--- collapse ---

---

## title: Enkele voorbeelden

### Dinosaurussen

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 27
line_highlights: 30
--------------------------------------------------------

<section id="content-holder">
  <h1 id="title">Title</h1>
  <div id="slot-1" class="content">
    <h1>Anatomie en Kenmerken</h1>
    <p>Een van de grootste vleesetende dinosauriërs</p> 
    <p>Krachtige achterpoten</p> 
    <p>Enorme schedel met scherpe tanden</p>
    <p>Kleine, tweevingerige voorpoten</p>
  </div>
  <div id="slot-2" class="content"></div>
  <div id="slot-3" class="content"></div>
</section>

\--- /code ---

### Voetbal

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 27
line_highlights: 30
--------------------------------------------------------

<section id="content-holder">
  <h1 id="title">Title</h1>
  <div id="slot-1" class="content">
    <h1>Recente uitslagen</h1>
    <p>Liverpool 4 - 1 Chelsea</p>
    <p>Liverpool 5 - 2 Norwich City</p>
    <p>Fulham 1 - 1 Liverpool</p>
    <p>Bournemouth 0 - 4 Liverpool</p>
    <p>Liverpool 2 - 1 Fulham</p>
  </div>
  <div id="slot-2" class="content"></div>
  <div id="slot-3" class="content"></div>
</section>

\--- /code ---

\--- /collapse ---

Voer je code uit en selecteer de eerste optie uit jouw drop-down menu.

Zorg ervoor dat je de inhoud die je hebt geschreven kunt zien.

\--- /task ---

### Kleur aan eerste slot toevoegen

De achtergrondkleur is hetzelfde als de webpagina. Vervolgens kun je nieuwe kleuren toevoegen voor de eerste optie.

\--- task ---

Open `default.css` en voeg een nieuwe kleur toe voor je eerste optie, roep de variabele `--slot1-classname` aan — vervang het einde met jouw klasse voor de eerste optie.

\--- /task ---

\--- task ---

Open `style.css` en zoek de opmerking `/* Slot 1 klassen */` op regel 128.

Voeg een nieuwe selector toe voor het `slot-1` ID en voeg een klasse toe voor je eerste optie.

Het **voetbal** voorbeeld zag er als volgt uit:

## --- code ---

language: css
filename: style.css
line_numbers: false
line_highlights: 2-4
---------------------------------------------------------

/\* Slot 1 klassen \*/
\#slot-1.liverpool {

}

\--- /code ---

Deze selector zal het element met id 'slot-1' en de klasse 'liverpool' opmaken.

\--- /task ---

\--- task ---

Voeg je achtergrondkleur toe aan deze selector.

## --- code ---

language: css
filename: style.css
line_numbers: false
line_highlights: 3
-------------------------------------------------------

/\* Slot 1 klassen \*/
\#slot-1.liverpool {
background-color: var(--slot1-liverpool);
}

\--- /code ---

\--- /task ---

### Gebruik JavaScript om de inhoud en kleuren toe te voegen

Nu ga je de JavaScript schrijven die de klasse toevoegt aan slot 1 en deze vullen met je inhoud.

\--- task ---

Open `scripts.js` en zoek je `option1` functie.

Gebruik de constante `slot1` om je klasse toe te voegen aan het inhoudsvak.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 36
line_highlights: 46
--------------------------------------------------------

function option1(){
clear();

instruction.style.display = 'none';
content.style.display = "grid";

body.classList.add("liverpool");

title.innerHTML = "Liverpool";

slot1.classList.add("liverpool");
}

\--- /code ---

Voer je code uit en selecteer de eerste optie.

Je zou nu de kleur moeten zien die je kiest!

\--- /task ---

\--- collapse ---

---

## title: Mijn tekstkleur is niet erg zichtbaar

Als je kleuren ziet, wil je misschien de tekstkleur van je content wijzigen.

Zorg ervoor dat ze goed contrasteren met de achtergrondkleur die je hebt gekozen.

**Tip:** Om het gemakkelijker te maken, kies `zwarte` of `witte` tekst.

Voeg de `color` eigenschap toe aan je selector.

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 128
line_highlights: 131
---------------------------------------------------------

/\* Slot 1 klassen \*/
\#slot-1.liverpool {
background-color: var(--slot1-liverpool);
color: white;
}

\--- /code ---

\--- /collapse ---

\--- task ---

Voeg een regel toe om de `innerHTML` van `slot1` te wijzigen.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 46
line_highlights: 47
--------------------------------------------------------

slot1.classList.add("liverpool")
slot1.innerHTML = "";
}

\--- /code ---

\--- /task ---

\--- task ---

Open `index.html`.

Markeer en kopieer (<kbd>Ctrl</kbd>+<kbd>C</kbd> of <kbd>Cmd</kbd>+<kbd>C</kbd>) de inhoud in de `slot-1` div.

\--- /task ---

\--- task ---

Open `scripts.js`.

Plak (<kbd>Ctrl</kbd>+<kbd>V</kbd> of <kbd>Cmd</kbd>+<kbd>V</kbd>) de inhoud tussen de aanhalingstekens `""`.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 46
line_highlights: 47-52
-----------------------------------------------------------

slot1.classList.add("liverpool")
slot1.innerHTML = "<h1>Recente uitslagen</h1><p>Liverpool 4 - 1 Chelsea</p>
<p>Liverpool 5 - 2 Norwich City</p>
<p>Fulham 1 - 1 Liverpool</p>
<p>Bournemouth 0 - 4 Liverpool</p>
<p>Liverpool 2 - 1 Fulham</p>";
}

\--- /code ---

\--- /task ---

\--- task ---

Voeg `\n \` toe om een regelafbreking toe te voegen aan het einde van elke regel, **behalve** de laatste.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 46
line_highlights: 47-51
-----------------------------------------------------------

slot1.classList.add("liverpool")
slot1.innerHTML = "<h1>Recente uitslagen</h1> \n \<p>Liverpool 4 - 1 Chelsea</p> \n \
<p>Liverpool 5 - 2 Norwich City</p> \n \
<p>Fulham 1 - 1 Liverpool</p> \n \
<p>Bournemouth 0 - 4 Liverpool</p>\n \
<p>Liverpool 2 - 1 Fulham</p>";
}

\--- /code ---

\--- /task ---

\--- task ---

Open nu `index.html` en verwijder de inhoud in de `slot-1` div.

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 27
line_highlights: 29
--------------------------------------------------------

  <section id="content-holder">
    <h1 id="title">Title</h1>
    <div id="slot-1" class="content"></div>
    <div id="slot-2" class="content"></div>
    <div id="slot-3" class="content"></div>
  </section>
</main> 

\--- /code ---

\--- /task ---

### Wijzig de inhoud voor opties 2 en 3

Nu optie 1 werkt voor je eerste vakje, ga je de inhoud en kleuren toevoegen voor je tweede optie.

\--- task ---

Voeg een slot 1 kleur toe aan `default.css` voor je tweede optie.

\--- /task ---

\--- task ---

Open `style.css` en onder je eerste slot1 selector, voeg een nieuwe toe voor je tweede optie.

De selector moet beginnen met `#slot-1.` en eindigen met je tweede optie klasse.

De voetbalversie ziet er zo uit:

## --- code ---

language: css
filename: style.css
line_numbers: false
line_highlights: 6-8
---------------------------------------------------------

/\* Slot 1 klassen \*/
\#slot-1.liverpool {
background-color: var(--slot1-liverpool);
}

\#slot-1.man-city {

}

\--- /code ---

\--- /task ---

\--- task ---

Stel de eigenschap `background-color` in je nieuwe selector in op de kleurvariabele die je ervoor hebt gemaakt.

## --- code ---

language: css
filename: style.css
line_numbers: false
line_highlights: 2
-------------------------------------------------------

\#slot-1.man-city {
background-color: var(--slot-1-man-city);
}

\--- /code ---

\--- /task ---

Nu ga je de `option2()` functie toevoegen, zodat deze de klasse toepast en de inhoud wijzigt.

\--- task ---

Zoek je `option2()` functie in `scripts.js`.

Voeg een regel toe om je nieuwe klasse erop toe te passen.

Het **voetbal** voorbeeld zag er als volgt uit:

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_number_start: 36
line_highlights: 46
--------------------------------------------------------

function option2(){
clear();

instruction.style.display = 'none';
content.style.display = "grid";

body.classList.add("man-city");

title.innerHTML = "man-city";

slot1.classList.add("man-city");
}

\--- /code ---

\--- /task ---

\--- task ---

In je `option1` functie kopieer je de regels die de `innerHTML` voor slot 1 hebben gewijzigd.

Plak ze in de `option2` functie.

Bewerk de regels tekst zodat ze over je tweede optie gaan. Het voetbalvoorbeeld zag er als volgt uit (met de resultaten van Manchester City in plaats van die van Liverpool):

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_number_start: 46
line_highlights: 48-52
-----------------------------------------------------------

slot1.classList.add("man-city");
slot1.innerHTML = "<h1>Recente uitslagen</h1> \n \<p>Man City 3 - 1 Burnley</p> \n \
<p>Tottenham 0 - 1 Man City</p> \n \
<p>Newcastle 2 - 3 Man City</p> \n \
<p>Man City 5 - 0 Huddersfield</p> \n \
<p>Man City 2 - 0 Sheffield United</p>";
}

\--- /code ---

\--- /task ---

\--- task ---

Voer je code uit en selecteer je tweede optie. Je zou je nieuwe kleur en inhoud moeten zien!

Je wilt misschien een `color` eigenschap toevoegen aan de klasse om de kleur van de tekst te wijzigen om deze zichtbaarder te maken.

\--- /task ---

Om deze stap af te maken ga je hetzelfde proces opnieuw herhalen, maar dan voor de **derde optie**.

\--- task ---

Voeg een nieuwe kleur toe aan `default.css`.

Open `style.css` en voeg een nieuwe selector toe voor `#slot-1` met behulp van je derde klasse naam.

\--- /task ---

\--- task ---

Open `scripts.js` en kopieer alle regels van het slot 1 uit je `option2` functie.

Plak ze onderaan je `option3` functie.

\--- /task ---

\--- task ---

Verander de naam van de klasse in de klasse van de derde optie.

Werk de inhoud bij zodat deze overeenkomt met je derde optie.

\--- /task ---

Nu je functies hebt om je inhoud weer te geven, wil je deze verbergen voordat de gebruiker een optie kiest.

\--- task ---

Open `style.css` en zoek de `#content-holder` selector.

Zet de `display` eigenschap op `none`.

## --- code ---

language: css
filename: style.css
line_numbers: false
line_number_start: 91
line_highlights: 93
--------------------------------------------------------

\#content-holder {
grid-template-rows: repeat(3, 100vh auto);
display: none;
}

\--- /code ---

\--- /task ---

\--- task ---

### Test je project

**Klik op Run**

- Selecteer een optie en scroll naar beneden, zorg ervoor dat de kleuren en inhoud er uitzien zoals je dat wilt.

\--- /task ---

Vervolgens voeg je de kleuren, klassen en code toe voor de vakjes met tweede en derde inhoud. Dan heb je een hele webpagina die verandert, niet slechts één slot!
