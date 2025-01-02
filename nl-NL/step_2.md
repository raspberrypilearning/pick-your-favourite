## Maak het frame

In deze stap maak je het kader voor je fan website. Je kiest ook een startkleur voor de achtergrond en het keuzemenu waarmee gebruikers de webpagina kunnen wijzigen.

### Waar gaat de webpagina over?

\--- task ---

Welke hobby of interesse kies je voor je website?

- ⚽️ **Sport**: Teams, spelers of competities?
- 👗 **Mode**: Merken, trends, influencers of decennia?
- 🔬 **Wetenschap**: Wilde dieren, klimaat of theorieën?
- 🎥 **TV & film**: Anime, series, films, personages of settings?
- 🖥️ **Coderen**: Talen, apparaten of software?
- 🕹️ **Video spellen**: Franchises, karakters, genres, of consoles?
- 🎨 **Kunst**: Kunstwerken, mediums, kunstenaars of musea?
- 👥 **Cultuur**: Festivals, feestdagen of historische gebeurtenissen?

Voor dit project moet je een thema kiezen en drie keuzes maken voor de gebruiker binnen dat thema.

\--- collapse ---

---

## title: Enkele voorbeelden...

Het voorbeeldproject gebruikt **voetbal** als thema en geeft de gebruiker een keuze tussen drie teams:

1. Liverpool
2. Manchester City
3. Tottenham Hotspur

In het **dinosaurus**-voorbeeld kan de gebruiker kiezen uit verschillende soorten dinosaurussen:

1. Tyrannosaurus Rex
2. Triceratops
3. Stegosaurus

Er zijn veel verschillende thema's en opties binnen die thema's. Kies iets dat je graag aan je vrienden of familie zou willen laten zien!

\--- /collapse ---

Kies je thema en drie opties binnen dat thema.

\--- /task ---

\--- task ---

Open [Kies je favoriet startproject](https://editor.raspberrypi.org/en/projects/pick-your-favourite-starter){:target="_blank"}

Als je bent ingelogd, sla het project op jouw account op en wijzig de naam.

\--- /task ---

\--- task ---

Wijzig de titel van jouw webpagina in het `<head>` gedeelte.

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 8
------------------------------------------------------------------------------

<title>Geef je pagina een titel</title>

\--- /code ---

\--- /task ---

### Maak je opties aan

\--- task ---

Wijzig de tekst in de knop en vervolgkeuze opties zodat ze passen bij jouw idee!

**Zorg ervoor** dat je de unicode voor de pijl — `&#9207;` — aan het einde laat staan.

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 13
line_highlights: 14, 16-18
---------------------------------------------------------------

<div class="dropdown">
  <button>Kies een dinosaurus ⏷</button>
  <div id="dropdown-options">
    <button>T-Rex</button>
    <button>Triceratops</button>
    <button>Stegosaurus</button>
  </div>
</div>

\--- /code ---

**Tip:** Zorg ervoor dat je jouw eigen opties toevoegt (tenzij je ook dinosaurs wilt maken)!

\--- /task ---

Op dit moment kan het dropdownmenu nog niet geopend worden. Er staat een functie om het te openen en te sluiten in het bestand `scripts.js`.

\--- task ---

Voeg de functie toe om het vervolgkeuzemenu te openen met behulp van het kenmerk `onclick`.

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 13
line_highlights: 14
--------------------------------------------------------

<div class="dropdown">
  <button onclick="openDropdown()">Kies een dinosaurus ⏷</button>
  <div id="dropdown-options">
    <button>T-Rex</button>
    <button>Triceratops</button>
    <button>Stegosaurus</button>
  </div>
</div>

\--- /code ---

\--- /task ---

### Voeg wat instructies toe

Je gebruiker weet niet wat hij moet doen, tenzij je hem vertelt!

\--- task ---

Voeg de instructies toe in een `<section>` met behulp van een `<h1>` element:

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 23
line_highlights: 24-26
-----------------------------------------------------------

<main>
  <section id="instruction">
    <h1>Kies een team!</h1>
  </section>
</main>

\--- /code ---

\--- /task ---

### Maak je eigen pagina

Het is nu tijd om je webpagina met verschillende lettertypen en kleuren op te maken.

\--- task ---

Voeg een passend lettertype toe voor jouw webpagina vanuit Google Fonts.

[[[google-fonts]]]

\--- /task ---

\--- task ---

Open `default.css`.

Wijzig de kleurvariabelen `--body-background` en `--body-text` naar de nieuwe kleuren van jouw keuze.

## --- code ---

language: css
filename: default.css
line_numbers: true
line_number_start: 5
line_highlights: 6-8
---------------------------------------------------------

/\* Basiskleuren \*/
\--body-background: #FFFFFF;
\--body-text-colour: #000000;

\--- /code ---

[[[contrast-checker]]]

\--- /task ---

\--- task ---

Voer je code uit om je wijzigingen te zien.

Pas de kleuren aan als je dat wilt.

\--- /task ---

### Voeg de content holder (plek voor de inhoud) toe

Tot slot ga je een raster toevoegen om de inhoud van al je opties in op te slaan. Dit zal nog niets bevatten.

\--- task ---

Open `index.html`.

Voeg binnen de `<main>`-tags een nieuwe sectie toe met het id-kenmerk `content-holder`.

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 23
line_highlights: 27-29
-----------------------------------------------------------

```
<main>
  <section id="instruction">
    <h1>Kies een team!</h1>
  </section>
  <section id="content-holder">
  
  </section>
</main>
```

\--- /code ---

\--- /task ---

\--- task ---

In het nieuwe deel voeg je een titel en drie slots toe voor inhoud.

Gebruik `id` attributen voor de slots, je zal deze later gebruiken!

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 27
line_highlights: 28-31
-----------------------------------------------------------

```
  <section id="content-holder">
    <h1 id="title">Titel</h1>
    <div id="slot-1" class="content"></div>
    <div id="slot-2" class="content"></div>
    <div id="slot-3" class="content"></div>
  </section>
</main> 
```

\--- /code ---

\--- /task ---

Vervolgens voeg je nog meer kleuren toe die zullen veranderen afhankelijk van welke optie de gebruiker kiest!
