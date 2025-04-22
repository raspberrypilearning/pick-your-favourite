// Fonction du menu déroulant
const dropdown = document.getElementById("dropdown-options");

function openDropdown() {
  console.log("clicked");
  if (dropdown.classList.contains("open")) {
    dropdown.classList.remove("open");
  } else {
    dropdown.classList.add("open");
  }
}

// Constantes
const body = document.querySelector("body");
const instruction = document.querySelector("#instruction");
const content = document.querySelector("#content-holder");
const title = document.querySelector("#title");
const slot1 = document.querySelector("#slot-1");
const slot2 = document.querySelector("#slot-2");
const slot3 = document.querySelector("#slot-3");

// Fonction d"effacement
function clear(){
  body.classList = '';
  
  title.innerHTML = "";
  
  slot1.classList = 'content';
  slot1.innerHTML = "";
  
  slot2.classList = 'content';
  slot2.innerHTML = "";
  
  slot3.classList = 'content';
  slot3.innerHTML = "";
  
  dropdown.classList.remove("open");
}

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
      <p>Petits membres antérieurs à deux doigts</p>";

  slot2.classList.add("trex");
  slot2.innerHTML =
    "<h1>Anecdotes</h1> \n \
      <p>Le T-Rex avait une force de morsure énorme, capable d'écraser les os.</p> \n \
      <p>Il courait vite.</p> \n \
      <p>Le nom Tyrannosaurus Rex signifie en grec « roi des lézards tyrans ».</p>";

  slot3.classList.add("trex");
  slot3.innerHTML =
    "<h1>Activité</h1> \n \
      <ol>\n \
      <li>Forme des équipes et aligne-les sur une ligne de départ.</li> \n \
      <li>Place un jouet pour chaque membre de l'équipe à l'autre bout de la pièce.</li> \n \
      <li>Une personne de chaque équipe court pour « mordre » un jouet et le rapporter à l'équipe.</li> \n \
      <li>La première équipe à rendre tous ses jouets gagne !</li> </ol>";

  localStorage.setItem("choice", "trex");
}

// Option 2
function option2() {
  clear();

  instruction.style.display = 'none';
  content.style.display = "grid";

  body.classList.add("triceratops");

  title.innerHTML = "Tricératops";

  slot1.classList.add("triceratops");
  slot1.innerHTML =
    "<h1>Anatomie et caractéristiques</h1> \n \
      <p>Un dinosaure herbivore</p> \n \
      <p>Connu pour sa collerette distinctive et ses trois cornes faciales</p> \n \
      <p>Il avait un corps volumineux, une bouche en forme de bec et une grande plaque osseuse dépassant de l'arrière de son crâne</p> \n \
      <p>Le tricératops vivait probablement en troupeau et utilisait ses cornes pour se défendre</p>";

  slot2.classList.add("triceratops");
  slot2.innerHTML =
    "<h1>Anecdotes</h1> \n \
      <p>Le Triceratops était un petit frimeur, sa collerette était peut-être utilisée pour faire le beau.</p>\n \
      <p>Le Triceratops parcourait l'Amérique du Nord pendant la période du Crétacé supérieur.</p>\n \
      <p>Triceratops signifie visage à trois cornes en grec.</p>";

  slot3.classList.add("triceratops");
  slot3.innerHTML =
    "<h1>Activité</h1> \n \
      <ol>\n \
        <li>Crée des cornes de Triceratops en utilisant du papier ou du carton</li>\n \
        <li>Attache-les à des bandeaux ou transforme-les en objets à tenir à la main</li>\n \
        <li>Place les cornes à différentes distances sur le sol</li>\n \
        <li>Utilise des cerceaux ou crée des anneaux en carton</li>\n \
        <li>Lancez à tour de rôle les anneaux sur les cornes du Triceratops pour gagner 10 points !</li>\n \
        <li>La personne avec le plus de points après tous les tours gagne !</li> </ol>";

  localStorage.setItem("choice", "triceratops");
}

// Option 3
function option3() {
  clear();

  instruction.style.display = 'none';
  content.style.display = "grid";

  body.classList.add("stegosaurus");

  title.innerHTML = "Stégosaure";

  slot1.classList.add("stegosaurus");
  slot1.innerHTML =
    "<h1>Anatomie et caractéristiques</h1> \n \
      <p>Le stégosaure était un herbivore.</p> \n \
      <p>Il avait une double rangée de grandes plaques osseuses le long de son dos.</p> \n \
      <p>Il avait des pointes sur sa queue.</p> \n \
      <p>Il avait une petite tête, avec un petit cerveau par rapport à la taille de son corps.</p>";

  slot2.classList.add("stegosaurus");
  slot2.innerHTML =
    "<h1>Anecdotes</h1> \n \
      <p>Le stégosaure avait un deuxième cerveau dans ses hanches, l'aidant à coordonner ses mouvements et son équilibre.</p>\n \
      <p>Le stégosaure a vécu à la fin du Jurassique.</p> \n \
      <p>Le stégosaure signifie en grec « lézard à toit ».</p> \n \
      <p>La marionnette en stop-motion utilisée dans le film King Kong de 1933 était basée sur une illustration de stégosaure de 1897.</p>";

  slot3.classList.add("stegosaurus");
  slot3.innerHTML =
    "<h1>Activité</h1> \n \
      <ol><li>Décore des assiettes en carton pour fabriquer les plaques osseuses du stégosaure.</li>\n \
      <li>Une fois les assiettes sèches, organise un « défilé de stégosaures » pour mettre en valeur tes assiettes.</li>\n \
      <li>Partage les créations et célèbre la créativité !</li></ol>";

  localStorage.setItem("choice", "stegosaurus");
}

// Observateurs
const slot1observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      slot1.classList.add("fade-in");
    }
  },
  { threshold: 1 }
);
slot1observer.observe(slot1);

const slot2observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      slot2.classList.add("grow-in");
    }
  },
  { threshold: 1 }
);
slot2observer.observe(slot2);

const slot3observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      slot3.classList.add("rise-in");
    }
  },
  { threshold: 1 }
);
slot3observer.observe(slot3);

// Fonction chargée
document.addEventListener("DOMContentLoaded", function () {
  const choice = localStorage.getItem("choice");

  if (choice == "trex"){
    option1();
  } else if (choice == "triceratops"){
    option2();
  } else if (choice == "stegosaurus"){
    option3();
  }
});

// Réinitialiser
function reset(){
  clear();
  content.style.display = "";
  instruction.style.display = 'flex';
  localStorage.setItem("choice", "");
}
