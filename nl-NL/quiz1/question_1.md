## Reflectie

Goed gedaan, je hebt veel geleerd! Nu is het tijd om na te denken - reflecteren is een belangrijk onderdeel van het leren omdat het helpt om nieuwe verbindingen in je hersenen te maken.

Beantwoord de drie onderstaande vragen om terug te kijken op wat je hebt geleerd.

Druk na elke vraag op Controleer mijn antwoord. Je wordt naar het juiste antwoord geleid. Je kunt deze activiteit zo vaak doen als je wilt.

Veel plezier!

\--- question ---

---

## legend: Vraag 1 van 3

When creating new variables to store colours and fonts, your CSS might look like this...

## --- code ---

language: css
filename: default.css
line_numbers: false
--------------------------------------------------------

:root {
/\* Font variable \*/
\--main-font: 'sans-serif';

/\* Base Colours \*/
\--body-background: #FFFFFF;
\--body-text-colour: #000000;
\--nav-bar: #FFFFFF;
}

\--- /code ---

Which of these would allow you to **use** the `--body-background` variable in another CSS selector?

\--- choices ---

- ( ) `background-color: --body-background;` ()

  \--- feedback ---

  You need to tell CSS that you are using a variable.

  \--- /feedback ---

- (x) `background-color: var(--body-background);`

  \--- feedback ---

  Juist!

  \--- /feedback ---

- ( ) `background-color: root(--body-background);`

  \--- feedback ---

  The `:root` selector is used to create variables for your whole webpage, but when you use them you need to use another keyword.

  \--- /feedback ---

\--- /choices ---

\--- /question ---
