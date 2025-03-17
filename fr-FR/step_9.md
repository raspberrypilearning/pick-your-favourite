## Améliorer ton projet

Dans cette étape, tu peux améliorer ton projet en :

- Ajoutant plus de style à tes slots de contenu
- Ajoutant plus d'options à ton menu déroulant

Tu n'es pas obligé de faire les deux. Choisis celui qui te plaît et qui correspond au temps dont tu disposes.

--- collapse ---

---
title: Ajouter plus de style à tes slots de contenu
---

Pour le moment, tes slots de contenu sont stylisés avec un `background-color` et peut-être `color`.

Tu peux également ajouter un style pour changer la couleur de ton `h1` ou de tout autre élément.

Pour styliser un élément spécifique, tu peux ajouter un sélecteur d'élément dans tes sélecteurs de classe.

Par exemple, l'exemple **football** ajoute une couleur à l'élément `h1` pour chaque classe comme ceci :

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

Tu peux voir qu'il utilise les couleurs d'un autre slot pour lier la page web ensemble.

Tu peux ajouter le style que tu souhaites à ton contenu. L'exemple **dinosaure** a utilisé la propriété `text-align` pour modifier l'alignement dans le slot de contenu **activité**, par exemple.

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
title: Ajouter une autre option
---

Si tu as plus de temps, tu peux ajouter plus d'options à ton menu déroulant pour que ton utilisateur puisse choisir.

--- task ---

Ouvre `default.css` et, pour ta nouvelle option, ajoute de nouvelles couleurs pour :

- Le body
- Slot 1
- Slot 2
- Slot 3

--- /task ---

--- task ---

Ouvre `style.css` et crée de nouvelles classes pour `<body>` et chacun de tes slots de contenu. Utilise tes nouvelles couleurs pour styliser les slots.

--- /task ---

--- task ---

Ouvre `scripts.js` et crée une nouvelle fonction appelée `option4()`.

Tu peux copier une de tes fonctions précédentes pour faciliter ce processus.

Applique les classes que tu viens de créer et modifie le contenu pour correspondre à ta nouvelle option.

Assure-toi également de définir la variable `choice` pour qu'elle corresponde à la nouvelle option à la fin de la fonction.

--- /task ---

--- task ---

Ouvre `index.html` et ajoute un nouveau bouton à `drop-down-options` `<div>`.

Ajoute l'attribut `onclick` pour appeler ta nouvelle fonction qui va changer le contenu.

--- /task ---

Tu peux répéter les étapes ci-dessus pour autant d'options que tu souhaites ajouter à ta page web !

--- /collapse ---
