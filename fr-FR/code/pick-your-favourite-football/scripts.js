// Fonction du menu déroulant
const dropdown = document.getElementById("dropdown-options");

function openDropdown(){
  if (dropdown.classList.contains("open")){
    dropdown.classList.remove("open");    
  } else {
    dropdown.classList.add("open");
  }
    
};
// Constantes
const body = document.querySelector("body");
const instruction = document.querySelector("#instruction");
const content = document.querySelector("#content-holder");
const title = document.querySelector("#title");
const slot1 = document.querySelector("#slot-1");
const slot2 = document.querySelector("#slot-2");
const slot3 = document.querySelector("#slot-3");

// Fonction d'effacement
function clear() {
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
function option1(){
  clear();

  instruction.style.display = 'none';
  content.style.display = "grid";
  
  body.classList.add("liverpool");

  title.innerHTML = "Liverpool FC";
  
  slot1.classList.add("liverpool");
  slot1.innerHTML = "<h1>Résultats récents</h1> \n \
          <p>Liverpool 4 - 1 Chelsea</p> \n \
          <p>Liverpool 5 - 2 Norwich City</p> \n \
          <p>Fulham 1 - 1 Liverpool</p> \n \
          <p>Bournemouth 0 - 4 Liverpool</p> \n \
          <p>Liverpool 2 - 1 Fulham</p>";

  slot2.classList.add("liverpool");
  slot2.innerHTML = "<h1>Actualités récentes</h1> \n \
          <p>Jurgen Klopp quitte Liverpool.</p>\n \
          <p>Alexis MacAllister jouera probablement contre Arsenal.</p>\n \
          <p>Liverpool est toujours le titre favori mais il est juste.</p>";

  slot3.classList.add("liverpool");
  slot3.innerHTML = "<h1>Meilleurs joueurs</h1> \n \
          <p>Mohamed Salah</p>\n \
          <p>Virgil van Dijk</p>\n \
          <p>Trent Alexander-Arnold</p>";

    localStorage.setItem("choice", "liverpool");
}

// Option 2
function option2(){
  clear();

  instruction.style.display = 'none';
    content.style.display = "grid";
    
    body.classList.add("man-city");

    title.innerHTML = "Manchester City";

    slot1.classList.add("man-city");
  slot1.innerHTML = "<h1>Résultats récents</h1> \n \
          <p>Manchester City 3 - 1 Burnley</p> \n \
          <p>Tottenham 0 - 1 Manchester City</p> \n \
          <p>Newcastle 2 - 3 Manchester City</p> \n \
          <p>Manchester City 5 - 0 Huddersfield</p> \n \
          <p>Manchester City 2 - 0 Sheffield United</p>";

  slot2.classList.add("man-city");
  slot2.innerHTML = "<h1>Actualités récentes</h1> \n \
          <p>Kevin De Bruyne est de retour !</p>\n \
          <p>Erling Haaland veut quitter Manchester pour le Real Madrid.</p>\n \
          <p>Pep Guardiola prépare des plans de départ, il veut partir.</p>";

  slot3.classList.add("man-city");
  slot3.innerHTML = "<h1>Meilleurs joueurs</h1> \n \
          <p>Erling Haaland</p>\n \
          <p>Phil Foden</p>\n \
          <p>Bernardo Silva</p>";

    localStorage.setItem("choice", "man-city");
}

// Option 3
function option3(){
  clear();

  instruction.style.display = 'none';
    content.style.display = "grid";
    
    body.classList.add("tottenham");

    title.innerHTML = "Tottenham Hotspur";

    slot1.classList.add("tottenham");
  slot1.innerHTML = "<h1>Résultats récents</h1> \n \
          <p>Tottenham 3 - 2 Brentford</p> \n \
          <p>Tottenham 0 - 1 Manchester City</p> \n \
          <p>Manchester United 2 - 2 Tottenham</p> \n \
          <p>Tottenham 1 - 0 Burnley</p> \n \
          <p>Tottenham 3 - 1 Bournemouth</p>";

  slot2.classList.add("tottenham");
  slot2.innerHTML = "<h1>Actualités récentes</h1> \n \
          <p>Lucas Bergvall choisit Tottenham plutôt que Barcelone.</p>\n \
          <p>Alfie Dorrington s'ajoute à la liste croissante des blessures aux ischio-jambiers chez les Spurs.</p>\n \
          <p>Les Spurs ont toujours du mal à remplacer Harry Kane</p>";

  slot3.classList.add("tottenham");
  slot3.innerHTML = "<h1>Meilleurs joueurs</h1> \n \
          <p>Heung-Min Son</p>\n \
          <p>Richarlison</p>\n \
          <p>Pedro Porro</p>";

    localStorage.setItem("choice", "tottenham");
}

// Observateurs
const slot1observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    slot1.classList.add("fade-in");
  }
}, {threshold: 1});
slot1observer.observe(slot1);

const slot2observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    slot2.classList.add("grow-in");
  }
}, {threshold: 1});
slot2observer.observe(slot2);

const slot3observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    slot3.classList.add("rise-in");
  }
}, {threshold: 1});
slot3observer.observe(slot3);

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

// Réinitialiser
function reset(){
  clear();
  content.style.display = "";
  instruction.style.display = 'flex';
  localStorage.setItem("choice", "");
}
