## Modifier du contenu

Dans cette étape, tu ajouteras le contenu textuel et les couleurs au premier paragraphe de ta page web pour chacune des options.

### Quel contenu vas-tu ajouter ?

\--- task ---

Décide quels seront les titres de chacun de tes paragraphes de contenu.

**Pense à**

- Quelles sont les trois choses que tous les fans de ton thème devraient savoir ?
- Quelles catégories peux-tu écrire pour chaque option ?
- Quelles sont les trois choses que les trois options partagent ?

\--- collapse ---

---

## title: Quelques exemples

**L'exemple de football a des slots de paragraphe pour :**

- Résultats du match
- Actualités
- Meilleurs joueurs

Le contenu change en fonction de l'équipe de football choisie par l'utilisateur.

**L'exemple de dinosaure a des slots de paragraphe pour :**

- Anatomie et caractéristiques
- Anecdotes
- Une activité

Le contenu change selon l'**espèce** de dinosaure que l'utilisateur choisit.

\--- /collapse ---

\--- /task ---

### Créer le texte du premier paragraphe

Tu vas créer le contenu du premier paragraphe pour les trois options et également lui définir une couleur.

\--- task ---

Ouvre `index.html` et ajoute un saut de ligne entre les balises d'ouverture et de fermeture `<div>` (avec l'id `slot-1`).

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

**Astuce :** assure-toi de placer ton curseur entre le `<div>` d'ouverture et le `</div>` de fermeture avant de placer le saut de ligne.

\--- /task ---

\--- task ---

Ajoute un titre pour le slot de contenu en utilisant les balises `<h1>`.

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
    <h1>Titre du slot</h1>
  </div>
  <div id="slot-2" class="content"></div>
  <div id="slot-3" class="content"></div>
</section>

\--- /code ---

\--- /task ---

\--- task ---

Ajoute du contenu pour ce slot pour la **première option** qu'un utilisateur peut choisir.

Tu peux utiliser `<p>`, `<ul>`, `<ol>`, ou tout autre élément avec lequel tu as de l'expérience.

\--- collapse ---

---

## title: Quelques exemples

### Dinosaures

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
    <h1>Anatomie et caractéristiques</h1>
    <p>L'un des plus grands dinosaures carnivores</p> 
    <p>Membres postérieurs puissants</p> 
    <p>Crâne massif avec des dents acérées</p>
    <p>Membres antérieurs minuscules à deux doigts</p>
  </div>
  <div id="slot-2" class="content"></div>
  <div id="slot-3" class="content"></div>
</section>

\--- /code ---

### Football

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
    <h1>Résultats récents</h1>
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

Exécute ton code et sélectionne la première option dans ton menu déroulant.

Assure-toi que tu peux voir le contenu que tu as écrit.

\--- /task ---

### Ajouter une couleur au premier slot

La couleur d'arrière-plan est la même que celle de la page web. Ensuite, tu ajouteras de nouvelles couleurs pour la première option.

\--- task ---

Ouvre `default.css` et ajoute une nouvelle couleur pour ta première option, appelle la variable `--slot1-classname` en remplaçant la fin par ta classe pour la première option.

\--- /task ---

\--- task ---

Ouvre `style.css` et trouve le commentaire `/* Classes Slot 1 */` à la ligne 128.

Ajoute un nouveau sélecteur pour l'ID `slot-1` et ajoute une classe pour ta première option.

L'exemple du **football** ressemblait à ceci :

## --- code ---

language: css
filename: style.css
line_numbers: false
line_highlights: 2-4
---------------------------------------------------------

/\* Classes Slot 1 \*/
\#slot-1.liverpool {

}

\--- /code ---

Ce sélecteur stylisera l'élément avec l'id `slot-1` et la classe `liverpool`.

\--- /task ---

\--- task ---

Ajoute ta couleur d'arrière-plan à ce sélecteur.

## --- code ---

language: css
filename: style.css
line_numbers: false
line_highlights: 3
-------------------------------------------------------

/\* Classes Slot 1 \*/
\#slot-1.liverpool {
background-color: var(--slot1-liverpool);
}

\--- /code ---

\--- /task ---

### Utiliser JavaScript pour ajouter le contenu et les couleurs

Maintenant, tu vas écrire le JavaScript qui ajoute la classe au slot 1 et le remplir avec ton contenu.

\--- task ---

Ouvre `scripts.js` et recherche ta fonction `option1`.

Utilise la constante `slot1` pour ajouter ta classe au slot de contenu.

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

Exécute ton code et sélectionne la première option.

Tu devrais maintenant voir la couleur que tu as choisie !

\--- /task ---

\--- collapse ---

---

## title: Ma couleur de texte n'est pas très visible

Lorsque tu vois tes couleurs, tu peux modifier la couleur du texte de ton contenu.

Assure-toi qu'ils contrastent bien avec la couleur d'arrière-plan que tu as choisie.

**Astuce :** pour te simplifier la vie, choisis un texte `black` (noir) ou `white` (blanc).

Ajoute la propriété `color` à ton sélecteur.

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 128
line_highlights: 131
---------------------------------------------------------

/\* Classes Slot 1 \*/
\#slot-1.liverpool {
background-color: var(--slot1-liverpool);
color: white;
}

\--- /code ---

\--- /collapse ---

\--- task ---

Ajoute une ligne pour modifier le `innerHTML` de `slot1`.

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

Ouvre `index.html`.

Sélectionne et copie (<kbd>Ctrl</kbd>+<kbd>C</kbd> ou <kbd>Cmd</kbd>+<kbd>C</kbd>) le contenu à l'intérieur du div `slot-1`.

\--- /task ---

\--- task ---

Ouvre `scripts.js`.

Colle (<kbd>Ctrl</kbd>+<kbd>V</kbd> ou <kbd>Cmd</kbd>+<kbd>V</kbd>) le contenu entre les guillemets `""`.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 46
line_highlights: 47-52
-----------------------------------------------------------

slot1.classList.add("liverpool")
slot1.innerHTML = "<h1>Résultats récents</h1><p>Liverpool 4 - 1 Chelsea</p>
<p>Liverpool 5 - 2 Norwich City</p>
<p>Fulham 1 - 1 Liverpool</p>
<p>Bournemouth 0 - 4 Liverpool</p>
<p>Liverpool 2 - 1 Fulham</p>";
}

\--- /code ---

\--- /task ---

\--- task ---

Ajoute `\n \` pour ajouter un saut de ligne à la fin de chaque ligne, **sauf** la dernière.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 46
line_highlights: 47-51
-----------------------------------------------------------

slot1.classList.add("liverpool")
slot1.innerHTML = "<h1>Résultats récents</h1> \n \<p>Liverpool 4 - 1 Chelsea</p> \n \
<p>Liverpool 5 - 2 Norwich City</p> \n \
<p>Fulham 1 - 1 Liverpool</p> \n \
<p>Bournemouth 0 - 4 Liverpool</p>\n \
<p>Liverpool 2 - 1 Fulham</p>";
}

\--- /code ---

\--- /task ---

\--- task ---

Maintenant, ouvre `index.html` et supprime le contenu à l’intérieur du div `slot-1`.

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

### Modifier le contenu des options 2 et 3

Maintenant que l’option 1 fonctionne pour ton premier slot, il est temps d’ajouter le contenu et les couleurs pour ta deuxième option.

\--- task ---

Ajoute un slot de couleur 1 à `default.css` pour ta deuxième option.

\--- /task ---

\--- task ---

Ouvre `style.css` et sous ton premier sélecteur slot1, ajoutes-en un nouveau pour ta deuxième option.

Le sélecteur doit commencer par `#slot-1.` et se terminer par ta deuxième classe d’option.

Celui du football ressemble à ceci :

## --- code ---

language: css
filename: style.css
line_numbers: false
line_highlights: 6-8
---------------------------------------------------------

/\* Classes Slot 1 \*/
\#slot-1.liverpool {
background-color: var(--slot1-liverpool);
}

\#slot-1.man-city {

}

\--- /code ---

\--- /task ---

\--- task ---

Définis la propriété `background-color` de ton nouveau sélecteur sur la variable de couleur que tu as créée pour celui-ci.

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

Maintenant, tu vas ajouter quelque chose à ta fonction `option2()`, afin qu'elle applique la classe et modifie le contenu.

\--- task ---

Trouve ta fonction `option2()` dans `scripts.js`.

Ajoute une ligne pour lui appliquer ta nouvelle classe.

L'exemple du **football** ressemblait à ceci :

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

Dans ta fonction `option1`, copie les lignes qui ont modifié le `innerHTML` pour slot 1.

Colle-les dans la fonction `option2`.

Modifie les lignes de texte afin qu'elles concernent ta deuxième option. L'exemple du football ressemblait à cela (avec les résultats de la ville de Manchester au lieu de ceux de Liverpools) :

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_number_start: 46
line_highlights: 48-52
-----------------------------------------------------------

slot1.classList.add("man-city");
slot1.innerHTML = "<h1>Résultats récents</h1> \n \<p>Man City 3 - 1 Burnley</p> \n \
<p>Tottenham 0 - 1 Man City</p> \n \
<p>Newcastle 2 - 3 Man City</p> \n \
<p>Man City 5 - 0 Huddersfield</p> \n \
<p>Man City 2 - 0 Sheffield United</p>";
}

\--- /code ---

\--- /task ---

\--- task ---

Exécute ton code et sélectionne ta deuxième option. Tu devrais voir ta nouvelle couleur et ton nouveau contenu apparaître !

Tu peux ajouter une propriété `color` à la classe pour modifier la couleur du texte pour la rendre plus visible.

\--- /task ---

Pour terminer cette étape, tu vas répéter le même processus à nouveau, mais pour la **troisième option**.

\--- task ---

Ajoute une nouvelle couleur à `default.css`.

Ouvre `style.css` et ajoute un nouveau sélecteur pour `#slot-1` en utilisant le nom de ta troisième classe.

\--- /task ---

\--- task ---

Ouvre `scripts.js` et copie toutes les lignes du slot 1 de ta fonction `option2`.

Colle-les en bas de ta fonction `option3`.

\--- /task ---

\--- task ---

Modifie le nom de la classe pour la classe de ta troisième option.

Mets à jour le contenu pour qu’il corresponde à ta troisième option.

\--- /task ---

Maintenant que tu as des fonctions pour afficher ton contenu, tu veux le masquer avant que l'utilisateur choisisse une option.

\--- task ---

Ouvre `style.css` et recherche le sélecteur `#content-holder`.

Définis sa propriété `display` sur `none`.

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

### Teste ton projet

**Clique sur Run**

- Sélectionne une option et fais défiler vers le bas, assure-toi que les couleurs et le contenu ressemblent à ce que tu souhaites.

\--- /task ---

Ensuite, tu ajouteras les couleurs, les classes et le code pour les deuxième et troisième slots de contenu. Tu auras alors une page web toute entière qui changera et pas seulement un slot !
