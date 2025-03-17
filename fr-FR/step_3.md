## Choisir tes couleurs

Dans cette étape, tu vas modifier les couleurs de ta page web pour toutes les options !

--- task ---

**Essaie-le**

Clique sur les options de l'exemple de dinosaure pour voir les couleurs changer !

<iframe src="https://editor.raspberrypi.org/fr-FR/embed/viewer/pick-your-favourite-dinosaur" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

--- /task ---

Pour chaque option, tu auras besoin de couleurs pour :

- Le `<body>` de la page web
- Les trois slots de contenu
- Le titre et le texte des slots

**Astuce :** tu vas ajouter beaucoup de code dans cette étape, alors assure-toi d'utiliser la fonction copier (<kbd>Ctrl</kbd>+<kbd>C</kbd> ou <kbd>Cmd</kbd>+<kbd>C</kbd>) et coller (<kbd>Ctrl</kbd>+<kbd>V</kbd> ou <kbd>Cmd</kbd>+<kbd>V</kbd>) pour accélérer le processus.

### Créer tes classes de couleurs de body

--- task ---

Choisis une couleur de body pour chacune des trois options et note-les.

Tu peux utiliser un [sélecteur de couleurs](https://www.w3schools.com/colors/colors_picker.asp){:target="_blank"} pour t'aider à choisir.
--- /task ---

--- task ---

Si tu souhaites ajouter tes propres couleurs, tu peux ouvrir `default.css` et ajouter tes propres variables à l'intérieur du sélecteur `:root`.

--- code ---
---
language: css
filename: default.css
line_numbers: true
line_number_start: 5
line_highlights: 10
---

/* Couleurs de base */
  --body-background: #FFFFFF;
  --body-text-colour: #000000;

  --new-colour: #A63CEA;

--- /code ---

--- /task ---

--- task ---

Ouvre `style.css`.

Trouve le commentaire `/* Classes Body */`.

En dessous, crée un sélecteur de classe pour ta première option avec l'identifiant `.`.

Définis la propriété `background-color:` sur la couleur de body pour la première option.

Tu peux également définir une propriété `color:` pour t'assurer que le texte du titre est visible.

Tu dois donner à cette classe un nom qui correspond à ton option, l'exemple **dinosaure** ressemble à ceci :

--- code ---
---
language: css
filename: style.css
line_numbers: false
line_highlights: 2-5
---

/* Classes Body */
.trex {
  background-color: var(--trex-body);
  color: white;
}

--- /code ---

--- /task ---

--- task ---

En dessous, crée les **2 autres sélecteurs de classe** pour tes autres options.

--- collapse ---

---
title: À quoi devrait ressembler mon code ?
---

Ton CSS doit contenir trois sélecteurs de classe, avec les propriétés `background-color:` et peut-être `color` définies.

Ceci est l'exemple du **dinosaure**.

--- code ---
---
language: css
filename: style.css
line_numbers: false
line_highlights:
---

/* Classes Body */
.trex {
  background-color: #41220f;
  color: white;
}

.triceratops {
  background-color: #6a7029;
  color: white;
}

.stegosaurus {
  background-color: rgb(32, 78, 55);
  color: black;
}

--- /code ---

--- /collapse ---

--- /task ---

### Créer des fonctions

Ensuite, tu dois créer des fonctions qui apporteront les modifications à ta page lorsque les options seront cliquées.

--- task ---

Ouvre `scripts.js` et trouve le commentaire `// Option 1`.

Crée une fonction appelée `option1`.

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 2-4
---

// Option 1
function option1(){

}

--- /code ---

--- /task ---

--- task ---

Lorsqu'une option est cliquée, tu dois effacer la page, puis masquer l'instruction et définir le `content-holder` pour qu'il s'affiche sous forme de `grid`.

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 3-6
---

// Option 1
function option1(){
  clear();

  instruction.style.display = 'none';
  content.style.display = "grid";
}

--- /code ---

--- /task ---

--- task ---

Ensuite, ajoute la nouvelle classe que tu as créée dans `style.css` au body et modifie le titre pour qu'il corresponde à ton option.

L'exemple du **dinosaure** ressemble à ceci :

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 8-10
---
// Option 1
function option1(){
  clear();

  instruction.style.display = 'none';
  content.style.display = "grid";

  body.classList.add("trex");

  title.innerHTML = "T-Rex";

--- /code ---

Veille à utiliser un titre qui corresponde à ton option !

--- /task ---

--- task ---

Copie la fonction `option1()` sous le commentaire `// Option 2`.

Modifie :

- Le nom de la fonction à `option2`
- Le nom de la classe ajouté à la classe que tu as créée précédemment pour l'option 2
- Le titre pour correspondre à ta deuxième option

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 2, 8, 10
---

// Option 2
function option2(){
  clear();

  instruction.style.display = 'none';
  content.style.display = "grid";

  body.classList.add("triceratops");

  title.innerHTML = "Tricératops";
}

--- /code ---

--- /task ---

--- task ---

Fais la même chose pour ta troisième option, sous le commentaire `// Option 3`.

Assure-toi de mettre à jour :

- Le nom de la fonction
- La classe ajoutée au body
- Le titre

--- collapse ---

---
title: À quoi devrait ressembler ma fonction option3 ?
---

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
---

// Option 3
function option3(){
  clear();

  instruction.style.display = 'none';
  content.style.display = "grid";

  body.classList.add("stegosaurus");

  title.innerHTML = "Stégosaure";
}

--- /code ---

--- /collapse ---

--- /task ---

### Faire fonctionner les options

Pour tester ton code, tu dois lier les boutons du menu déroulant aux fonctions que tu viens d'écrire.

--- task ---

Ouvre `index.html`.

Ajoute les propriétés `onclick` à chacun de tes boutons déroulants, en appelant chacune des trois fonctions.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 15
line_highlights: 16-18
---

<div id="dropdown-options">
  <button onclick="option1()">T-Rex</button>
  <button onclick="option2()">Tricératops</button>
  <button onclick="option3()">Stégosaure</button>
</div>

--- /code ---

--- /task ---

--- task ---

**Clique sur Run**

- Utilise le menu déroulant et sélectionne tes options. Tu devrais voir les couleurs changer !

**Débogage** : si tes couleurs ne changent pas, assure-toi que les noms de classe que tu as ajoutés dans JavaScript correspondent **exactement** à ceux de ton CSS !

--- /task ---

Ensuite, tu permettras à l’utilisateur de modifier le contenu de ta page web lorsqu’il choisit une option !
