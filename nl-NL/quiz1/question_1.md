## Reflectie

Goed gedaan, je hebt veel geleerd! Nu is het tijd om na te denken - reflecteren is een belangrijk onderdeel van het leren omdat het helpt om nieuwe verbindingen in je hersenen te maken.

Beantwoord de drie onderstaande vragen om terug te kijken op wat je hebt geleerd.

Druk na elke vraag op Controleer mijn antwoord. Je wordt naar het juiste antwoord geleid. Je kunt deze activiteit zo vaak doen als je wilt.

Veel plezier!

\--- question ---

---

## legend: Vraag 1 van 3

Bij het maken van nieuwe variabelen om kleuren en lettertypen op te slaan, zou je CSS er zo uit kunnen zien...

## --- code ---

language: css
filename: default.css
line_numbers: false
--------------------------------------------------------

:root {
/\* Lettertypevariabele \*/
\--main-font: 'sans-serif';

/\* Basiskleuren \*/
\--body-background: #FFFFFF;
\--body-text-colour: #000000;
\--nav-bar: #FFFFFF;
}

\--- /code ---

Welke van deze opties geeft je de mogelijkheid om de `--body-background` variabele in een andere CSS-selector te \*\*gebruiken?

\--- choices ---

- ( ) `background-color: --body-background;` ()

  \--- feedback ---

  Je moet CSS vertellen dat je een variabele gebruikt.

  \--- /feedback ---

- (x) `background-color: var(--body-background);`

  \--- feedback ---

  Juist!

  \--- /feedback ---

- ( ) `background-color: root(--body-background);`

  \--- feedback ---

  De `:root` selector wordt gebruikt om variabelen voor je hele webpagina te maken, maar wanneer je ze gebruikt, moet je een ander trefwoord gebruiken.

  \--- /feedback ---

\--- /choices ---

\--- /question ---
