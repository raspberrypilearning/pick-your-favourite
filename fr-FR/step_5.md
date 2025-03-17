## Modifier le reste de la page

Dans cette étape, tu vas modifier l’ensemble de ta page web lorsque l’utilisateur choisit une option.

### Ajouter du contenu pour le slot 2

Le processus pour ajouter du contenu au slot 2 est très similaire à ce que tu as fait à l'étape précédente. Pour rendre ce processus plus rapide, copie (<kbd>Ctrl</kbd>+<kbd>C</kbd> ou <kbd>Cmd</kbd>+<kbd>C</kbd>) et colle (<kbd>Ctrl</kbd>+<kbd>V</kbd> ou <kbd>Cmd</kbd>+<kbd>V</kbd>) sur le code que tu as déjà écrit, puis mets-le à jour pour correspondre au nouveau contenu.

Dans la dernière étape, tu as fait chaque option une par une. Cette fois-ci, tu feras les trois options à chaque étape : ajouter des couleurs, créer des classes et ajouter le code.

### Ajouter des couleurs pour le slot 2

--- task ---

Ouvre `default.css`.

Ajoute **trois** nouvelles variables de couleur. Attribue-leur des couleurs pour les classes de ton slot 2.

--- collapse ---

---
title: Un exemple
---

Les couleurs du slot 2 des exemples du dinosaure ressemblent à ceci :

--- code ---
---
language: css
filename: default.css
line_numbers: false
---

  /* Couleurs Slot 2 */
  --slot-2-t-rex: #00b2a9;
  --slot-2-triceratops: #ffc659;
  --slot-2-stegosaurus: #131f53;

--- /code ---

--- /collapse ---

--- /task ---

### Créer des classes pour le slot 2

--- task ---

Ouvre `style.css`.

Trouve le commentaire `/* Classes Slot 2 */`.

Crée **trois** classes ci-dessous pour le slot 2, une pour chaque option.

--- collapse ---

---
title: Un exemple
---

Voici les classes du slot 2 pour l'exemple de dinosaure.

--- code ---
---
language: css
filename: style.css
line_numbers: false
---

  /* Classes Slot 2 */
  #slot-2.trex {
    background-color: var(--slot-2-t-rex);
    color: black;
  }

  #slot-2.triceratops {
    background-color: var(--slot-2-triceratops);
    color: black;
  }

  #slot-2.stegosaurus {
    background-color: var(--slot-2-stegosaurus);
    color: white;
  }

--- /code ---

Assure-toi d'utiliser **tes** noms de classe, pas ceux de l'exemple.

--- /collapse ---

--- /task ---

### Ajouter du code pour le slot 2

Maintenant tu vas ajouter à tes trois fonctions `option` pour appliquer les classes au slot 2, puis changer leur `innerHTML`.

--- task ---

Ouvre `scripts.js`.

Trouve ta fonction `option1()`.

Ajoute une ligne qui ajoute ta classe d'option 1 au slot 2.

L'exemple du dinosaure ressemblait à ceci :

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 20
---

  // Option 1
  function option1() {
    clear();

    instruction.style.display = 'none';
    content.style.display = "grid";

    body.classList.add("trex");

    title.innerHTML = "T-Rex <br> &#129430";

    slot1.classList.add("trex");
    slot1.innerHTML =
      "<h1>Anatomie et caractéristiques</h1> \n \
          <p>L'un des plus grands dinosaures carnivores</p> \n \
          <p>Membres postérieurs puissants</p> \n \
          <p>Crâne massif avec des dents acérées</p> \n \
          <p>Membres antérieurs minuscules à deux doigts</p>";

    slot2.classList.add("trex");

--- /code ---

--- /task ---

Quel contenu vas-tu mettre au slot 2 ?

Dans l'exemple du football, c'était **Actualités récentes** et dans l'exemple des dinosaures, c'était **Anecdotes**.

--- task ---

Ensuite, ajoute les lignes nécessaires pour modifier le `innerHTML` du slot 2.

Tu peux copier la ligne ci-dessus qui fait la même chose pour le slot 1, ou écrire une nouvelle série de lignes toi-même.

**Astuce** : assure-toi que **chaque** ligne sauf la dernière comporte `\n \` à la fin.

--- collapse ---

---
title: Un exemple

L'exemple du dinosaure ressemble à ceci :

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 21-24
---

  // Option 1
  function option1() {
    clear();

    instruction.style.display = 'none';
    content.style.display = "grid";

    body.classList.add("trex");

    title.innerHTML = "T-Rex <br> &#129430";

    slot1.classList.add("trex");
    slot1.innerHTML =
      "<h1>Anatomie et caractéristiques</h1> \n \
          <p>L'un des plus grands dinosaures carnivores</p> \n \
          <p>Membres postérieurs puissants</p> \n \
          <p>Crâne massif avec des dents acérées</p> \n \
          <p>Membres antérieurs minuscules à deux doigts</p>";

    slot2.classList.add("trex");
    slot2.innerHTML = "<h1>Trivia</h1> \n \
      <p>Le T-Rex avait une force de morsure énorme, capable de broyer des os.</p>\n \
      <p>Il courait vite</p>\n \
      <p>Le nom Tyrannosaurus Rex signifie en grec « roi des lézards tyrans ».</p>";

--- /code ---

--- /collapse ---

**Clique sur Run**

- Teste le contenu et la classe en sélectionnant ta première option.

--- /task ---

--- task ---

Copie ces lignes et colle-les dans ta fonction `option2()`.

--- /task ---

--- task ---

Modifie la classe ajoutée pour qu'elle corresponde à ta deuxième option.

--- /task ---

--- task ---

Modifie le contenu pour qu'il corresponde à ta deuxième option.

--- collapse ---

---
title: Un exemple
---

La fonction `option2` pour l'exemple du dinosaure ressemblait à ceci :

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 21-25
---

  // Option 2
  function option2() {
    clear();

    instruction.style.display = 'none';
    content.style.display = "grid";

    body.classList.add("triceratops");

    title.innerHTML = "Triceratops";

    slot1.classList.add("triceratops");
    slot1.innerHTML =
    "<h1>Anatomie et caractéristiques</h1> \n \
        <p>Dinosaure herbivore</p> \n \
        <p>Connu pour sa collerette distinctive et ses trois cornes faciales</p> \n \
        <p>Il avait un corps volumineux, une bouche en forme de bec et une grande plaque osseuse dépassant de l'arrière de son crâne</p> \n \
        <p>Le tricératops vivait probablement en troupeaux et utilisait ses cornes pour se défendre.</p>";

    slot2.classList.add("triceratops");
    slot2.innerHTML =
    "<h1>Trivia</h1> \n \
        <p>Le Triceratops était un petit frimeur, sa collerette était peut-être utilisée pour faire le beau.</p>\n \
        <p>Le Triceratops parcourait l'Amérique du Nord pendant la période du Crétacé supérieur.</p>\n \
        <p>Tricératops signifie visage à trois cornes en grec.</p>";
    }

--- /code ---

--- /collapse ---

**Clique sur Run**

- Teste tes couleurs et ton contenu en sélectionnant ta deuxième option.

--- /task ---

--- task ---

Copie à nouveau les lignes et ajoute-les à ta fonction `option3()`.

Modifie la classe et le contenu pour correspondre à ta troisième option.

--- /task ---

### Le troisième slot

Tu es sur le point de terminer le contenu de ta page web ! Bien joué !

Maintenant, tu vas ajouter les couleurs, les classes et le code pour styliser et remplir le troisième slot !

Tu l'as déjà fait deux fois, donc les instructions te rappelleront simplement les étapes.

--- task ---

Ouvre `default.css` et ajoute trois couleurs pour le slot 3 (une pour chacune de tes options).

--- collapse ---

---
title: Un exemple
---

Voici les variables de couleur du slot 3 dans l'exemple du dinosaure :

--- code ---
---
language: css
filename: default.css
line_numbers: false
line_highlights:
---

  --slot-3-t-rex: #00b2a9;
  --slot-3-triceratops: #ec3325;
  --slot-3-stegosaurus: #131f53;

--- /code ---

--- /collapse ---

--- /task ---

--- task ---

Ouvre `style.css` et recherche le commentaire `/* Classes Slot 3 */`.

En dessous, crée 3 classes pour le slot 3 (une pour chacune de tes options).

--- collapse ---

---
title: Un exemple
---

Voici les classes pour l'exemple du **dinosaure** :

--- code ---
---
language: css
filename: style.css
line_numbers: false
line_highlights:
---

  /* Classes Slot 3 */
  #slot-3.trex {
    background-color: var(--slot-3-t-rex);
  }

  #slot-3.triceratops {
    background-color: var(--slot-3-triceratops);
    color: white;
  }

  #slot-3.stegosaurus {
    background-color: var(--slot-3-stegosaurus);
    color: white;
  }

--- /code ---

--- /collapse ---

--- /task ---

--- task ---

Ouvre `scripts.js`.

Ajoute des lignes à chacune de tes fonctions d’option pour appliquer tes nouvelles classes et ajouter le contenu au slot 3.

--- collapse ---

---
title: Un exemple
---

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
---

  // Option 1
  function option1() {
    clear();

    instruction.style.display = 'none';
    content.style.display = "grid";

    body.classList.add("trex");

    title.innerHTML = "T-Rex <br> &#129430";

    slot1.classList.add("trex");
    slot1.innerHTML =
        "<h1>Anatomie et caractéristiques</h1> \n \
            <p>L'un des plus grands dinosaures carnivores</p> \n \
            <p>Membres postérieurs puissants</p> \n \
            <p>Crâne massif avec des dents acérées</p> \n \
            <p>Membres antérieurs minuscules à deux doigts</p>";

    slot2.classList.add("trex");
    slot2.innerHTML =
        "<h1>Trivia</h1> \n \
            <p>Le T-Rex avait une force de morsure énorme, capable d'écraser les os.</p>\n \
            <p>Il courait vite</p>\n \
            <p>Le nom Tyrannosaurus Rex signifie en grec « roi des lézards tyrans ».</p>";

    slot3.classList.add("trex");
    slot3.innerHTML =
        "<h1>Activité</h1> \n \
            <ol>\n \
            <li>Forme des équipes et aligne-les sur une ligne de départ</li>\n \
            <li>Place un jouet pour chaque membre de l'équipe à l'autre bout de la pièce.</li>\n \
            <li>Une personne de chaque équipe court pour « mordre » un jouet et le rapporter à l'équipe.</li>\n \
            <li>La première équipe à rendre tous ses jouets gagne !</li> </ol>";

}

  // Option 2
  function option2() {
    clear();

    instruction.style.display = 'none';
    content.style.display = "grid";

    body.classList.add("triceratops");

    title.innerHTML = "Triceratops";

    slot1.classList.add("triceratops");
    slot1.innerHTML =
        "<h1>Anatomie et caractéristiques</h1> \n \
            <p>Dinosaure herbivore</p> \n \
            <p>Connu pour sa collerette distinctive et ses trois cornes faciales</p> \n \
            <p>Il avait un corps volumineux, une bouche en forme de bec et une grande plaque osseuse dépassant de l'arrière de son crâne</p> \n \
            <p>Le tricératops vivait probablement en troupeaux et utilisait ses cornes pour se défendre.</p>";

    slot2.classList.add("triceratops");
    slot2.innerHTML =
        "<h1>Trivia</h1> \n \
            <p>Le Triceratops était un petit frimeur, sa collerette était peut-être utilisée pour faire le beau.</p>\n \
            <p>Le Triceratops parcourait l'Amérique du Nord pendant la période du Crétacé supérieur.</p>\n \
            <p>Tricératops signifie visage à trois cornes en grec.</p>";

    slot3.classList.add("triceratops");
    slot3.innerHTML =
        "<h1>Activité</h1> \n \
        <ol>\n \
            <li>Crée des cornes de tricératops avec du papier ou du carton.</li>\n \
            <li>Attache-les à des bandeaux ou transforme-les en objets à tenir à la main.</li>\n \
            <li>Place les cornes à différentes distances sur le sol.</li>\n \
            <li>Utilise des cerceaux ou créer des anneaux en carton.</li>\n \
            <li>Lancez à tour de rôle les anneaux sur les cornes du Triceratops pour gagner 10 points !</li>\n \
            <li>La personne qui a le plus de points à l'issue de tous les tours gagne !</li> </ol>";

  }

  // Option 3
  function option3() {
    clear();

    instruction.style.display = 'none';
    content.style.display = "grid";

    body.classList.add("stegosaurus");

    title.innerHTML = "Stegosaurus";

    slot1.classList.add("stegosaurus");
    slot1.innerHTML =
        "<h1>Anatomie et caractéristiques</h1> \n \
            <p>Le stégosaure mangeait des plantes (herbivore)</p> \n \
            <p>Il possédait une double rangée de grandes plaques osseuses le long de son dos</p> \n \
            <p>Il avait des pointes sur sa queue</p> \n \
            <p>Il avait une petite tête, avec un petit cerveau par rapport à la taille de son corps</p>";

    slot2.classList.add("stegosaurus");
    slot2.innerHTML =
        "<h1>Trivia</h1> \n \
            <p>Le stégosaure avait un deuxième cerveau dans ses hanches, qui l'aidait à coordonner ses mouvements et son équilibre</p>\n \
            <p>Le stégosaure vivait à la fin du Jurassique</p> \n \
            <p>Stegosaurus signifie en grec « lézard toit ».</p> \n \
            <p>La marionnette en stop-motion utilisée dans le film King Kong de 1933 était basée sur une illustration de 1897 du Stégosaure.</p>";

    slot3.classList.add("stegosaurus");
    slot3.innerHTML =
        "<h1>Activité</h1> \n \
            <ol><li>Décore des assiettes en papier pour faire les plaques osseuses du stégosaure.</li>\n \
            <li>Une fois que les assiettes sont sèches, organise un « défilé de stégosaures" pour présenter tes assiettes.</li>\n \
            <li>Partage les dessins et célèbre la créativité !</li></ol>";

  }

--- /code ---

--- /collapse ---

--- /task ---

--- task ---

**Clique sur Run**

- Teste les trois options, vérifie que le contenu et les couleurs ressemblent à ce que tu souhaites.

Tu peux ajuster la couleur du texte pour t'assurer qu'il contraste suffisamment avec l'arrière-plan.

--- /task ---

Ensuite, tu ajouteras un peu d’éclat à ta page web en utilisant des **Intersection Observers** et des animations !
