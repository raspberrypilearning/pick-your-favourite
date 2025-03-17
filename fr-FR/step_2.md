## Créer le cadre

Dans cette étape, tu vas créer le cadre de ton site web de fan. Tu choisiras également une couleur d'arrière-plan de départ et le menu déroulant qui permet aux utilisateurs de modifier la page web.

### De quoi parlera la page web ?

--- task ---

Quel hobby ou intérêt choisiras-tu pour ton site web ?

- ⚽ **Sports** : équipes, joueurs, ou ligues ?
- 👗 **Mode** : marques, tendances, influenceurs ou décennies ?
- 🔬 **Sciences** : faune, climat ou théories ?
- 🎥 **TV et cinéma** : anime, séries, films, personnages ou décors ?
- 🖥️ **Codage** : langages, appareils ou logiciels ?
- 🕹️ **Jeux vidéo** : franchises, personnages, genres ou consoles ?
- 🎨 **Art** : œuvres d’art, médiums, artistes ou musées ?
- 👥 **Culture** : festivals, fêtes, jours fériés ou événements historiques ?

Pour ce projet, tu dois choisir un thème et trois choix que l'utilisateur peut faire dans ce thème.

--- collapse ---

---
title: Quelques exemples...
---

L'exemple de projet utilise **le football** comme thème et donne à l'utilisateur le choix entre trois équipes :

1. Liverpool
2. Manchester City
3. Tottenham Hotspur

L'exemple **dinosaure** permet à l'utilisateur de choisir entre différentes espèces de dinosaures :

1. Tyrannosaurus rex
2. Tricératops
3. Stégosaure

Il y a de nombreux choix de thèmes, et des options dans ces thèmes. Choisis quelque chose que tu aimerais montrer à tes amis ou à ta famille !

--- /collapse ---

Choisis ton thème et trois options au sein de ce thème.

--- /task ---

--- task ---

Ouvre le [projet de démarrage Choisir ton favori](https://editor.raspberrypi.org/fr-FR/projects/pick-your-favourite-starter){:target="_blank"}

Si tu es connecté, enregistre le projet sur ton compte et modifie le nom.

--- /task ---

--- task ---

Modifie le titre de ta page web dans la section `<head>`.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 8
---

<title>Donner un titre à ta page</title>

--- /code ---

--- /task ---

### Créer tes options

--- task ---

Modifie le texte du bouton et des options déroulantes pour qu'il corresponde à ton idée !

**Assure-toi** de laisser l'unicode pour la flèche — `&#9207;` — à la fin.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 13
line_highlights: 14, 16-18
---

<div class="dropdown">
  <button>Choisir un dinosaure &#9207;</button>
  <div id="dropdown-options">
    <button>T-Rex</button>
    <button>Tricératops</button>
    <button>Stégosaure</button>
  </div>
</div>

--- /code ---

**Astuce :** assure-toi d’ajouter tes options (à moins que tu ne fasses également des dinosaures) !

--- /task ---

Pour le moment, le menu déroulant ne s'ouvre pas. Il existe une fonction pour l'ouvrir et le fermer dans le fichier `scripts.js`.

--- task ---

Ajoute la fonction pour ouvrir le menu déroulant, en utilisant l'attribut `onclick`.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 13
line_highlights: 14
---

<div class="dropdown">
  <button onclick="openDropdown()">Choisir un dinosaure &#9207;</button>
  <div id="dropdown-options">
    <button>T-Rex</button>
    <button>Tricératops</button>
    <button>Stégosaure</button>
  </div>
</div>

--- /code ---

--- /task ---

### Ajouter des instructions

Ton utilisateur ne saura pas quoi faire à moins que tu ne le lui dises !

--- task ---

Ajoute les instructions dans un élément `<section>` en utilisant un élément `<h1>` :

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 23
line_highlights: 24-26
---

<main>
  <section id="instruction">
    <h1>Sélectionne une équipe !</h1>
  </section>
</main>

--- /code ---

--- /task ---

### Personnaliser ta page

Il est maintenant temps de styliser ta page web avec différentes polices et couleurs.

--- task ---

Ajoute une police appropriée pour ta page web à partir de Google Fonts.

[[[google-fonts]]]

--- /task ---

--- task ---

Ouvre `default.css`.

Modifie les variables de couleur `--body-background` et `--body-text` par les nouvelles couleurs de ton choix.

--- code ---
---
language: css
filename: default.css
line_numbers: true
line_number_start: 5
line_highlights: 6-8
---

/* Couleurs de base */
  --body-background: #FFFFFF;
  --body-text-colour: #000000;

--- /code ---

[[[contrast-checker]]]

--- /task ---

--- task ---

Exécute ton code pour voir tes modifications.

Ajuste les couleurs si tu le souhaites.

--- /task ---

### Ajouter le content holder (conteneur de contenu)

Enfin, tu vas ajouter une grille pour contenir le contenu de chacune de tes options. Cela ne contiendra rien pour le moment.

--- task ---

Ouvre `index.html`.

À l'intérieur des balises `<main>`, ajoute une nouvelle section avec l'attribut id `content-holder`.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 23
line_highlights: 27-29
---

    <main>
      <section id="instruction">
        <h1>Sélectionne une équipe !</h1>
      </section>
      <section id="content-holder">
      
      </section>
    </main>

--- /code ---

--- /task ---

--- task ---

À l’intérieur de la nouvelle section, ajoute un titre et trois slots pour le contenu.

Utilise les attributs `id` pour les slots, tu les utiliseras plus tard !

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 27
line_highlights: 28-31
---


  <section id="content-holder">
    <h1 id="title">Titre</h1>
    <div id="slot-1" class="content"></div>
    <div id="slot-2" class="content"></div>
    <div id="slot-3" class="content"></div>
  </section>
</main> 


--- /code ---

--- /task ---

Ensuite, tu ajouteras encore plus de couleurs qui changeront en fonction de l’option choisie par l’utilisateur !
