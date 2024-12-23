## Réflexion

Bravo, tu as beaucoup appris ! Maintenant, il est temps de réfléchir - la réflexion est une partie importante de l'apprentissage, car elle aide à établir de nouvelles connexions dans ton cerveau.

Réponds aux trois questions ci-dessous pour réfléchir sur ce que tu as appris.

Après chaque question, appuie sur Soumettre. Tu seras guidé vers la bonne réponse. Tu peux faire cette activité autant de fois que tu le souhaites.

Amuse-toi bien !

\--- question ---

---

## legend: Question 1 sur 3

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

  Correct !

  \--- /feedback ---

- ( ) `background-color: root(--body-background);`

  \--- feedback ---

  The `:root` selector is used to create variables for your whole webpage, but when you use them you need to use another keyword.

  \--- /feedback ---

\--- /choices ---

\--- /question ---
