// Functie voor de vervolgkeuzelijst
const dropdown = document.getElementById("dropdown-options");

function openDropdown() {
  console.log("clicked");
  if (dropdown.classList.contains("open")) {
    dropdown.classList.remove("open");
  } else {
    dropdown.classList.add("open");
  }
}

// Constanten
const body = document.querySelector("body");
const instruction = document.querySelector("#instruction");
const content = document.querySelector("#content-holder");
const title = document.querySelector("#title");
const slot1 = document.querySelector("#slot-1");
const slot2 = document.querySelector("#slot-2");
const slot3 = document.querySelector("#slot-3");

// Wisfunctie
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

// Optie 1
function option1() {
  clear();

  instruction.style.display = 'none';
  content.style.display = "grid";

  body.classList.add("trex");

  title.innerHTML = "T-Rex <br> &#129430";

  slot1.classList.add("trex");
  slot1.innerHTML =
    "<h1>Anatomie en kenmerken</h1> \n \
      <p>Een van de grootste vleesetende dinosaurussen</p> \n \
      <p>Krachtige achterpoten</p> \n \
      <p>Enorme schedel met scherpe tanden</p> \n \
      <p>Kleine, tweevingerige voorpoten</p>";

  slot2.classList.add("trex");
  slot2.innerHTML =
    "<h1>Trivia</h1> \n \
      <p>T-Rex had een enorme bijtkracht, die in staat was om botten te verbrijzelen</p> \n \
      <p>T-Rex was een snelle renner</p> \n \
      <p>De naam Tyrannosaurus Rex betekent tirannieke hagedissenkoning in het Grieks</p>";

  slot3.classList.add("trex");
  slot3.innerHTML =
    "<h1>Activiteit</h1> \n \
      <ol>\n \
      <li>Vorm teams en stel je op bij een startlijn</li> \n \
      <li>Leg voor elk teamlid één speeltje aan de andere kant van de kamer</li> \n \
      <li>Eén persoon uit elk team racet om in een speeltje te 'bijten' en terug te brengen naar het team</li> \n \
      <li>Het eerste team dat al hun speelgoed terugbrengt, wint!</li> </ol>";

      localStorage.setItem("choice", "trex");
}

// Optie 2
function option2() {
  clear();

  instruction.style.display = 'none';
  content.style.display = "grid";

  body.classList.add("triceratops");

  title.innerHTML = "Triceratops";

  slot1.classList.add("triceratops");
  slot1.innerHTML =
    "<h1>Anatomie en kenmerken</h1> \n \
      <p>Een plantenetende dinosaurus</p> \n \
      <p>Bekend om zijn kenmerkende kraag en drie gezichtshoorns</p> \n \
      <p>Hij had een omvangrijk lichaam, een snavelachtige mond en een grote benige plaat die uit de achterkant van zijn schedel stak</p> \n \
      <p>Triceratops leefde waarschijnlijk in kuddes en gebruikte zijn hoorns ter verdediging</p>";

  slot2.classList.add("triceratops");
  slot2.innerHTML =
    "<h1>Trivia</h1> \n \
      <p>Triceratops was een beetje een patser, zijn kraag werd mogelijk gebruikt om te pronken</p>\n \
      <p>Triceratops zwierf rond in Noord-Amerika tijdens de Laat-Krijt periode</p>\n \
      <p>Triceratops betekent driehoornig gezicht in het Grieks</p>";

  slot3.classList.add("triceratops");
  slot3.innerHTML =
    "<h1>Activiteit</h1> \n \
      <ol>\n \
        <li>Maak wat Triceratops-hoorns van papier of karton</li>\n \
        <li>Bevestig ze aan hoofdbanden of houd ze vast</li>\n \
        <li>Plaats de hoorns op verschillende afstanden op de grond</li>\n \
        <li>Gebruik hoelahoeps of maak ringen van karton</li>\n \
        <li>Gooi om de beurt de ringen op de Triceratopshoorns, als de ring om de hoorn blijft liggen krijg je 10 punten!</li>\n \
        <li>Degene met de meeste punten na alle beurten wint!</li> </ol>";

  localStorage.setItem("choice", "triceratops");
}

// Optie 3
function option3() {
  clear();

  instruction.style.display = 'none';
  content.style.display = "grid";

  body.classList.add("stegosaurus");

  title.innerHTML = "Stegosaurus";

  slot1.classList.add("stegosaurus");
  slot1.innerHTML =
    "<h1>Anatomie en kenmerken</h1> \n \
      <p>Stegosaurus was een planteneter (een herbivoor)</p> \n \
      <p>Hij had een dubbele rij grote benige platen langs zijn rug</p> \n \
      <p>Hij had stekels op zijn staart</p> \n \
      <p>Hij had een klein hoofd, met een klein brein in vergelijking met zijn lichaamsgrootte</p>";

  slot2.classList.add("stegosaurus");
  slot2.innerHTML =
    "<h1>Trivia</h1> \n \
      <p>Stegosaurus had een tweede brein in zijn heupen, dat hielp bij het coördineren van beweging en evenwicht</p>\n \
      <p>Stegosaurus leefde tijdens het Laat-Jura</p> \n \
      <p>Stegosaurus betekent gepantserde dakhagedis in het Grieks</p> \n \
      <p>De stop-motionpop die werd gebruikt in de film King Kong uit 1933 was gebaseerd op een illustratie van een Stegosaurus uit 1897</p>";

  slot3.classList.add("stegosaurus");
  slot3.innerHTML =
    "<h1>Activiteit</h1> \n \
      <ol><li>Versier wat papieren borden om de platen van de Stegosaurus na te maken</li>\n \
      <li>Zodra de borden droog zijn, organiseer je een 'Stegosaurus Parade' om je borden te laten zien</li>\n \
      <li>Deel de ontwerpen en vier de creativiteit!</li></ol>";

  localStorage.setItem("choice", "stegosaurus");
}

// Waarnemers
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

// Gelandede functie
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

// Resetten
function reset(){
  clear();
  content.style.display = "";
  instruction.style.display = 'flex';
  localStorage.setItem("choice", "");
}
