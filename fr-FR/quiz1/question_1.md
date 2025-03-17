## Réflexion

Bravo, tu as beaucoup appris ! Maintenant, il est temps de réfléchir - la réflexion est une partie importante de l'apprentissage, car elle aide à établir de nouvelles connexions dans ton cerveau.

Réponds aux trois questions ci-dessous pour réfléchir sur ce que tu as appris.

Après chaque question, appuie sur Soumettre. Tu seras guidé vers la bonne réponse. Tu peux faire cette activité autant de fois que tu le souhaites.

Amuse-toi bien !

\--- question ---

---

## legend: Question 1 sur 3

Lors de la création de nouvelles variables pour stocker des couleurs et des polices, ton CSS pourrait ressembler à ceci...

## --- code ---

language: css
filename: default.css
line_numbers: false
--------------------------------------------------------

:root {
/\* Font variable \*/
\--main-font: 'sans-serif';

/\* Couleurs de base \*/
\--body-background: #FFFFFF;
\--body-text-colour: #000000;
\--nav-bar: #FFFFFF;
}

\--- /code ---

Lequel de ces éléments te permettrait **d'utiliser** la variable `--body-background` dans un autre sélecteur CSS ?

\--- choices ---

- ( ) `background-color: --body-background;` ()

  \--- feedback ---

  Tu dois indiquer dans le CSS que tu utilises une variable.

  \--- /feedback ---

- (x) `background-color: var(--body-background);`

  \--- feedback ---

  Correct !

  \--- /feedback ---

- ( ) `background-color: root(--body-background);`

  \--- feedback ---

  Le sélecteur `:root` est utilisé pour créer des variables pour toute ta page web, mais lorsque tu les utilises, tu dois utiliser un autre mot clé.

  \--- /feedback ---

\--- /choices ---

\--- /question ---
