## Rendre le choix permanent

Dans cette étape, tu utiliseras le stockage local dans le navigateur web de l'utilisateur pour enregistrer le choix qu'il fait, de sorte que chaque fois que la page est chargée, elle conserve les couleurs et le contenu de son choix !

### Enregistrer le choix de l'utilisateur

Tu vas ajouter des lignes à chacune de tes fonctions d'option pour définir une variable dans localStorage lorsque l'utilisateur sélectionne une option.

\--- task ---

Ouvre `scripts.js` et trouve ta fonction `option1()`.

\--- /task ---

\--- task ---

En bas de la fonction, ajoute `localStorage.setItem()`, qui crée une variable de stockage.

Entre les parenthèses :

- Indique le nom de la variable : `"choice"`
- Ajoute le nom de ta première option entre guillemets `""`, séparé par une virgule.

L'exemple du football ressemble à ceci :

## --- code ---

language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 7
-------------------------------------------------------

slot3.classList.add("liverpool");
slot3.innerHTML = "<h1>Meilleurs joueurs</h1> \n \<p>Mohamed Salah</p>\n \
<p>Virgil van Dijk</p>\n \
<p>Trent Alexander-Arnold</p>";

localStorage.setItem("choice", "liverpool");
}

\--- /code ---

\--- /task ---

\--- task ---

Copie la ligne et place-la en bas de tes fonctions `option2()` et `option3()`, en modifiant la valeur de la variable pour qu'elle corresponde à ces choix.

\--- /task ---

### Vérifier le choix quand la page est chargée

Ensuite, tu vas créer une fonction pour vérifier si la variable a été définie lors du chargement de la page.

\--- task ---

Dans `scripts.js`, trouve le commentaire `// Chargement de l'événement`.

En dessous, utilise `document.addEventListener()` pour créer une fonction qui s'exécutera lorsque la page sera chargée.

## --- code ---

language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 2-3
---------------------------------------------------------

// Chargement de l'événement
document.addEventListener("DOMContentLoaded", function () {

});

\--- /code ---

\--- /task ---

\--- task ---

À l'intérieur du event listener, crée une nouvelle `constant` pour conserver la valeur contenue dans la variable `choice` dans `localStorage`.

## --- code ---

language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 3
-------------------------------------------------------

// Chargement de l'événement
document.addEventListener("DOMContentLoaded", function () {
const choice = localStorage.getItem("choice");
});

\--- /code ---

\--- /task ---

\--- task ---

Crée une instruction `if` pour vérifier si la valeur `choice` est la première option.

Si c'est le cas, appelle ta fonction `option1()`.

## --- code ---

language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 4-6
---------------------------------------------------------

// Chargement de l'événement
document.addEventListener("DOMContentLoaded", function () {
const choice = localStorage.getItem("choice");

if (choice == "liverpool"){
option1();
}
});

\--- /code ---

\--- /task ---

\--- task ---

Enfin, ajoute deux instructions `else if` pour vérifier si les deux autres options, en appelant leurs fonctions.

## --- code ---

language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 7-10
----------------------------------------------------------

// Chargement de l'événement
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

\--- /code ---

\--- /task ---

\--- task ---

**Clique sur Run**

- Selectionne une option.

**Clique sur Run** (à nouveau)

- La page devrait rester la même.

Essaie de modifier les options, puis clique à nouveau sur **Run**, la page devrait conserver la dernière option que tu as choisie.

\--- /task ---

### Réinitialiser le choix

Tu dois également créer une option permettant à l’utilisateur de réinitialiser son choix et de revoir les instructions.

\--- task ---

Dans `scripts.js`, trouve le commentaire `// Réinitialiser`.

Crée une nouvelle fonction appelée `reset`.

Cette fonction effacera les choix, masquera le contenu, affichera les instructions et effacera la variable `localStorage`.

## --- code ---

language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 2-7
---------------------------------------------------------

// Réinitialiser
function reset(){
clear();
content.style.display = "";
instruction.style.display = 'flex';
localStorage.setItem("choice", "");
}

\--- /code ---

\--- /task ---

\--- task ---

Ouvre `index.html`

Ajoute un nouveau bouton à ton menu déroulant afin que l'utilisateur puisse réinitialiser la page.

## --- code ---

language: html
filename: index.html
line_numbers: false
line_highlights: 5
-------------------------------------------------------

```
    <div id="dropdown-options">
      <button onclick="option1()">Liverpool</button>
      <button onclick="option2()">Manchester City</button>
      <button onclick="option3()">Tottenham</button>
      <button onclick="reset()">Réinitialiser</button>
    </div>
```

\--- /code ---

\--- /task ---

\--- task ---

**Clique sur Run**

- Teste ton bouton de réinitialisation en sélectionnant une option, en cliquant à nouveau sur **Run** puis en réinitialisant.

\--- /task ---

Bravo, tu as créé une page web de fan géniale et utilisé tes nouvelles compétences CSS et JavaScript pour la rendre incroyable !
