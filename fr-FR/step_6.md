## Animer les sections

Dans cette étape, tu vas créer **trois** Intersection Observers qui détecteront lorsque tes slots entrent dans la fenêtre d’affichage et leur appliqueront des animations.

### Créer le premier observateur

--- task ---

Ouvre `scripts.js` et trouve le commentaire `// Observateurs`.

--- /task ---

--- task ---

Crée une nouvelle constante `IntersectionOberver`, appelée `slot1observer`.

Ajoute le tableau d'entrées et l'instruction `if` qui vérifie si l'entrée se croise.

Pour ces observateurs, tu veux que la cible **entière** soit dans la fenêtre d'affichage, alors définis le `threshold` à `1`.

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 2-9
---

// Observateurs
const slot1observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      
    }
  },
  { threshold: 1 }
);

--- /code ---

--- /task ---

--- task ---

Dans l'instruction `if`, écris le code qui ajoute une classe à `slot1`. Laisse le champ `""` vide pour le moment.

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 5
---

// Observateurs
const slot1observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      slot1.classList.add("");
    }
  },
  { threshold: 1 }
);

--- /code ---

--- /task ---

--- task ---

**Choisis** l'animation que tu souhaites utiliser pour ton premier slot.

Il y a 5 animations qui ont été prédéfinies pour toi dans **style.css** :

1. `fade-in` (fondu enchaîné)
2. `grow-in` (apparition progressive)
3. `rise-in` (montée progressive)
4. `slide-left` (glissement vers la gauche)
5. `slide-right` (glissement vers la droite)

Insère le nom de ton animation entre le `""` à l'intérieur de ton observateur.

Tu peux toujours le modifier ultérieurement si tu souhaites en utiliser un autre.

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_number_start: 5
---
// Observateurs
const slot1observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      slot1.classList.add("rise-in");
    }
  },
  { threshold: 1 }
);

--- /code ---

--- /task ---

--- task ---

Maintenant, tu dois configurer ton `IntersectionObserver` pour observer la page.

Ajoute l'appel.

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 10
---

// Observateurs
const slot1observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      slot1.classList.add("");
    }
  },
  { threshold: 1 }
);
slot1observer.observe(slot1);

--- /code ---

--- /task ---

--- task ---

**Clique sur Run**

- Sélectionne une option et fais défiler vers le bas, tu devrais voir le premier slot apparaître puis s'animer.

--- collapse ---

---
title: Mon contenu est long et mon animation ne fonctionne pas
---

Si tu as beaucoup de contenu dans ton slot, il ne peut jamais être entièrement dans la fenêtre d'affichage, et comme ton `threshold` est défini à `1` (100 % de l'élément), ton animation ne se déclenchera pas.

Pour résoudre ce problème, tu peux supprimer complètement le threshold comme suit :

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 10
---

// Observateurs
const slot1observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      slot1.classList.add("");
    }
  }
);
slot1observer.observe(slot1);

--- /code ---

Tu peux également réduire la quantité (de l'élément) nécessaire pour déclencher l'animation. Par exemple, il ne faudrait que la moitié de l'élément pour se déclencher...

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 10
---

// Observateurs
const slot1observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      slot1.classList.add("");
    }
  },
  { threshold: 0.5 }
);
slot1observer.observe(slot1);

--- /code ---

--- /collapse ---

--- /task ---

Il n'est pas très agréable de voir son slot visible avant que l'animation n'ait lieu, c'est pourquoi tu vas rendre tes slots de contenu invisibles jusqu'à ce qu'ils soient animés.

--- task ---

Ouvre `style.css` et trouve le sélecteur `.content`.

Ajoute une propriété `opacity` et mets-la à `0`.

--- code ---
---
language: css
filename: style.css
line_numbers: false
line_number_start: 103
line_highlights: 110
---

.content {
  width: 100%;
  border-radius: 5px;
  box-shadow: 5px 5px black;
  padding: 5px;
  font-size: 32px;
  opacity: 0;
}

--- /code ---

**Clique sur Run**

- Fais défiler pour voir à nouveau ton animation. Le slot ne devrait pas apparaître tant qu'il n'est pas animé.

--- /task ---

### Ajouter des observateurs pour les deux autres slots

--- task ---

Ouvre `scripts.js`.

Copie ton premier observateur.

--- /task ---

--- task ---

Colle-le en dessous.

Modifie toutes les références `slot1` par `slot2`.

Tu peux utiliser la même animation ou en choisir une autre.

--- collapse ---

---
title: Les animations
---

Tu as le choix entre 5 animations :

1. `fade-in` (fondu enchaîné)
2. `grow-in` (apparition progressive)
3. `rise-in` (montée progressive)
4. `slide-left` (glissement vers la gauche)
5. `slide-right` (glissement vers la droite)

--- /collapse ---

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 2, 5, 10
---

// Observateurs
const slot2observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      slot2.classList.add("slide-left");
    }
  },
  { threshold: 1 }
);
slot2observer.observe(slot2);

--- /code ---

**Clique sur Run**

- Teste ta deuxième animation.

--- /task ---

--- task ---

Copie à nouveau l'observateur et colle-le en dessous.

--- /task ---

--- task ---

Modifie toutes les références de manière à ce qu'il soit indiqué `slot3` et choisis une animation différente si nécessaire.

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 2, 5, 10
---

// Observateurs
const slot3observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      slot3.classList.add("grow-in");
    }
  },
  { threshold: 1 }
);
slot3observer.observe(slot3);

--- /code ---

**Clique sur Run**

- Teste ta troisième animation.

--- /task ---

Ensuite, tu vas utiliser `localStorage` pour rendre le choix de l'utilisateur permanent !
