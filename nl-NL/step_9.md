## Verbeter je project

In deze stap kun je jouw project upgraden door:

- Meer styling toevoegen aan je inhoud slots
- Meer opties toevoegen aan je keuzemenu

Je hoeft het niet allebei te doen. Kies wat je het meest aanspreekt en wat past bij de tijd die je hebt.

--- collapse ---

---
title: Voeg meer styling toe aan inhoudslots
---

Op dit moment zijn jouw content slots gestyled met een `background-color` en eventueel `color`.

Je kunt ook styling toevoegen om de kleur van je `h1` of een ander element te veranderen.

Om een specifiek element op te maken, kun je een element selector toevoegen in je klassenselectors.

Bijvoorbeeld, het **voetbal** voorbeeld voegt een kleur toe aan het `h1` element voor elke klasse zoals hier:

--- code ---
---
language: css
filename: style.css
---

#slot-1.man-city {
    background-color: var(--slot-1-man-city);

    h1 {
        color: var(--slot-2-man-city);
    }
}

--- /code ---

Je ziet dat de kleuren uit een ander slot worden gebruikt om de webpagina samenhangend te maken.

Je kunt elke gewenste stijl aan je inhoud toevoegen. Het **dinosaurus** voorbeeld gebruikte de `text-align` eigenschap om de uitlijning in het **activiteit** content slot bijvoorbeeld te veranderen.

--- code ---
---
language: css
filename: style.css
---

#slot-3.triceratops {
    background-color: var(--slot-3-triceratops);
    text-align: left;
    color: white;
    h1 {
        color: var(--slot-2-triceratops);
        text-align: center;
    }
}

--- /code ---

--- /collapse ---

--- collapse ---

---
title: Voeg nog een optie toe
---

Als je nog meer tijd hebt, wil je misschien meer opties toevoegen aan jouw keuzemenu voor jouw gebruiker om uit te kiezen.

--- task ---

Open `default.css` en voeg voor je nieuwe optie nieuwe kleuren toe:

- Het centrale gedeelte
- Slot 1
- Slot 2
- Slot 3

--- /task ---

--- task ---

Open `style.css` en maak nieuwe klassen voor `<body>` en elk van je content slots. Gebruik je nieuwe kleuren om de slots op te maken.

--- /task ---

--- task ---

Open `scripts.js` en maak een nieuwe functie genaamd `option4()`.

Je kunt een van je vorige functies kopiëren om dit proces eenvoudiger te maken.

Pas de klassen die je zojuist hebt gemaakt toe en verander de inhoud naar de nieuwe optie.

Zorg ervoor dat de variabele `keuze` ook overeenkomt met de nieuwe optie aan het einde van de functie.

--- /task ---

--- task ---

Open `index.html` en voeg een nieuwe knop toe aan de `drop-down-options` `<div>`.

Voeg het `onclick`-attribuut toe om de nieuwe functie aan te roepen die de inhoud zal veranderen.

--- /task ---

Je kunt de bovenstaande stappen voor zoveel opties herhalen als je aan je webpagina wilt toevoegen!

--- /collapse ---
