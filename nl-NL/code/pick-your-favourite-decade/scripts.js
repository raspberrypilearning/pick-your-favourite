// Functie voor de vervolgkeuzelijst
const dropdown = document.getElementById('dropdown-options');
function openDropdown() {
  if (dropdown.classList.contains('open')) {
    dropdown.classList.remove('open');
  } else {
    dropdown.classList.add('open');
  }
}
// Constanten
const body = document.querySelector('body');
const instruction = document.querySelector('#instruction');
const content = document.querySelector('#content-holder');
const title = document.querySelector('#title');
const slot1 = document.querySelector('#slot-1');
const slot2 = document.querySelector('#slot-2');
const slot3 = document.querySelector('#slot-3');

// Wisfunctie
function clear() {
  body.classList = '';
  slot1.classList = 'content';
  slot2.classList = 'content';
  slot3.classList = 'content';
  dropdown.classList.remove('open');
}

// Optie 1
function option1() {
  clear();
  instruction.style.display = 'none';
  content.style.display = 'grid';
  body.classList.add('seventies');
  title.innerHTML = 'Jaren 70';
  slot1.classList.add('seventies');
  slot1.innerHTML =
    "<h1>Mode</h1> \n           <p> \n           <strong>Bohemian Chic:</strong> In de jaren 70 ontstond er een opkomst van bohemian-geïnspireerde mode, gekenmerkt door vloeiende stoffen, bloemenprints en aardse kleuren. Deze stijl werd beïnvloed door de tegencultuurbeweging en omarmde een ontspannen, vrijgevochten esthetiek. Gefranjerde vesten, boerenblouses, maxi-jurken en bell-bottom jeans waren iconische elementen van deze trend. \n           </p> \n           <p> \n           <strong>Disco Glamour:</strong> Het discotijdperk van de jaren 70 bracht glamoureuze en flitsende mode met zich mee. Metallic stoffen, pailletten en glitter waren populair en weerspiegelden het levendige nachtleven. Strakke kleding zoals wikkeljurken, jumpsuits en platformschoenen werden synoniem met discomode. Felle kleuren en overdreven silhouetten waren de belangrijkste kenmerken van deze trend. \n           </p> \n           <p> \n           <strong>Sportief Casual:</strong> In de jaren 70 ontstond ook sportieve casual kleding, beïnvloed door de toenemende populariteit van recreatieve activiteiten zoals joggen en aerobics. Deze stijl bestond uit comfortabele maar stijlvolle kleding zoals trainingspakken, hoodies, sneakers en t-shirts met opvallende logo's. De athleisure-trend om sportkleding te combineren met alledaagse kleding werd in dit decennium steeds populairder. \n           </p>";
  slot2.classList.add('seventies');
  slot2.innerHTML =
    "<h1>Muziek</h1> \n           <p> \n             <strong>Disco Fever:</strong> De jaren 70 werden gedefinieerd door de discomuziekrage, gekenmerkt door pulserende ritmes, funky baslijnen en pakkende melodieën. Disconummers bevatten vaak weelderige orkestraties, soulvolle vocalen en teksten over liefde, dansen en het nachtleven. Het discotijdperk zag de opkomst van iconische artiesten als Donna Summer, Bee Gees en Gloria Gaynor, evenals legendarische clubs als Studio 54, waar de discocultuur floreerde. \n           </p> \n           <p> \n             <strong>Rock 'n' Roll Evolutie:</strong> Rockmuziek onderging een significante evolutie in de jaren 70, waarbij het zich vertakte in verschillende subgenres zoals glamrock, progressieve rock en punkrock. Bands als Led Zeppelin, Pink Floyd en The Rolling Stones verlegden de grenzen van rockmuziek met experimentele geluiden en complexe composities. In de jaren 70 zagen we ook de opkomst van invloedrijke singer-songwriters als Bob Dylan en Joni Mitchell, die hun muziek doordrenkten met introspectieve teksten en folkinvloeden. \n           </p> \n           <p> \n             <strong>Geboorte van hiphop:</strong> De jaren 70 markeerden de geboorte van hiphopmuziek in de Bronx, New York City, toen dj's en mc's begonnen te experimenteren met draaitafels en rhymes op buurtfeesten en gemeenschapsevenementen. De vroege pioniers van hiphop, zoals Grandmaster Flash, Afrika Bambaataa en DJ Kool Herc, legden de basis voor het toekomstige succes van het genre. Breakdance, graffitikunst en mc-battles waren integrale elementen van de hiphopcultuur in dit vormende decennium. \n           </p>";
  slot3.classList.add('seventies');
  slot3.innerHTML =
    "<h1>Ontdekkingen en ontwikkelingen</h1> \n           <p> \n             <strong>Personal Computing:</strong> In de jaren 70 vond de geboorte plaats van de revolutie van de personal computer, met de ontwikkeling van baanbrekende technologieën zoals de microprocessor en de floppy disk. Bedrijven als Apple, Microsoft en IBM introduceerden vroege pc's op de markt, waardoor computers toegankelijk werden voor zowel particulieren als bedrijven. Innovaties zoals de Altair 8800 en de Apple II baanden de weg voor het digitale tijdperk en legden de basis voor de moderne computerindustrie. \n           </p> \n           <p> \n             <strong>Genetische manipulatie:</strong> In de jaren 70 boekten wetenschappers grote vooruitgang op het gebied van genetische manipulatie, met de ontdekking van recombinant-DNA-technologie. Deze doorbraak stelde onderzoekers in staat om DNA-moleculen van verschillende organismen te manipuleren en te splitsen, wat nieuwe mogelijkheden opende voor biotechnologie en genetisch onderzoek. De creatie van het eerste genetisch gemodificeerde organisme (GMO) in 1973 markeerde een mijlpaal in genetische manipulatie en zorgde voor opwinding en ethische debatten over de implicaties van het manipuleren van de bouwstenen van het leven. \n           </p> \n           <p> \n             <strong>Ruimteverkenning:</strong> De jaren 70 waren een gouden eeuw voor ruimteverkenning, met mijlpalen als de Apollo-maanlandingen en de lancering van de Voyager-sondes. Het Apollo-programma van NASA bracht tussen 1969 en 1972 met succes twaalf astronauten op het maanoppervlak, waarmee het doel van president Kennedy werd vervuld om vóór het einde van het decennium een man op de maan te laten landen. Het Voyager-ruimtevaartuig, gelanceerd in 1977, voerde baanbrekende studies uit naar de buitenste planeten en leverde onschatbare gegevens over de verre uithoeken van het zonnestelsel. \n           </p>";
  localStorage.setItem('choice', 'seventies');
}

// Optie 2
function option2() {
  clear();
  instruction.style.display = 'none';
  content.style.display = 'grid';
  body.classList.add('eighties');
  title.innerHTML = 'Jaren 80';
  slot1.classList.add('eighties');
  slot1.innerHTML =
    '<h1>Mode</h1> \n           <p> \n             <strong>Punk Rock Rebellion:</strong> In de jaren 80 werd de punkmode voortgezet, gekenmerkt door rebellie en doe-het-zelf-esthetiek. Leren jassen versierd met studs en patches, gescheurde jeans en band-t-shirts waren hoofdbestanddelen van de punklook. Mohawks, puntig haar en zware oogmake-up waren populair bij zowel mannen als vrouwen, wat de subversieve houding van de punkbeweging weerspiegelde. \n           </p> \n           <p> \n               <strong>Preppy stijl:</strong> Preppy mode werd mainstream in de jaren 80, geïnspireerd door de collegiale look van Ivy League universiteiten. Deze stijl bestond uit strakke kleding zoals overhemden met knopen, kabeltruien, kaki broeken en geruite rokken. Pastelkleuren en opvallende strepen werden vaak gezien in preppy kleding, samen met accessoires zoals bootschoenen, parelkettingen en hoofdbanden. \n           </p> \n           <p> \n               <strong>Power Dressing:</strong> In de jaren 80 ontstond power dressing, vooral onder werkende vrouwen, die hun autoriteit op de werkvloer wilden laten gelden. Power suits met schoudervullingen, op maat gemaakte blazers en broeken met hoge taille werden emblematisch voor deze trend. Felle kleuren, geometrische patronen en opvallende sieraden werden gebruikt om zelfvertrouwen en professionaliteit uit te stralen. \n           </p> \n           <p> \n               <strong>New Wave Mode:</strong> New Wave muziek had een grote invloed op de mode in de jaren 80, wat leidde tot een futuristische en eclectische stijl. Deze esthetiek kenmerkte zich door asymmetrische snitten, felle neonkleuren en onconventionele silhouetten. Netkousen, leren rokken en oversized blazers waren populaire items in de New Wave garderobe. Kapsels zoals het matje en de asymmetrische bob complimenteerden deze gedurfde en avant-garde look. \n           </p>';
  slot2.classList.add('eighties');
  slot2.innerHTML =
    "<h1>Muziek</h1> \n           <p> \n             <strong>Popdominantie:</strong> De jaren 80 werden gekenmerkt door de opkomst van popmuziek als een dominante kracht in de mainstream. Synthesizers, drumcomputers en elektronische productietechnieken werden alomtegenwoordig en vormden het geluid van pophits uit de jaren 80. Iconische artiesten als Michael Jackson, Madonna en Prince behaalden ongekend succes met hun pakkende melodieën, flitsende muziekvideo's en levensgrote persona's. De MTV-generatie zette popmuziek verder in de schijnwerpers, omdat muziekvideo's een cruciaal marketinginstrument voor artiesten werden. \n           </p> \n           <p> \n             <strong>New Wave Revolutie:</strong> New Wave muziek ontstond eind jaren 70 en bereikte zijn hoogtepunt in populariteit in de jaren 80, waarbij elementen van punkrock, elektronische muziek en avant-garde kunst werden gemengd. Bands als Depeche Mode, Duran Duran en The Cure omarmden synthesizers en drumcomputers om een futuristisch en eclectisch geluid te creëren. New Wave nummers bevatten vaak pakkende hooks, dansbare ritmes en introspectieve teksten, die de angst en het optimisme van de jeugdcultuur in de jaren 80 weerspiegelden. \n           </p> \n           <p> \n             <strong>Explosie van heavy metal:</strong> In de jaren 80 was er een toename in populariteit van heavy metalmuziek, aangewakkerd door bands als Metallica, Iron Maiden en Guns N' Roses. Heavy metal, bekend om zijn luide gitaren, agressieve vocalen en theatrale optredens, werd in de jaren 80 een cultureel fenomeen. Subgenres als thrash metal, glam metal en hair metal trokken legioenen toegewijde fans aan, terwijl controversiële thema's en beelden debatten over censuur en moraliteit aanwakkerden. \n           </p>";
  slot3.classList.add('eighties');
  slot3.innerHTML =
    "<h1>Ontdekkingen en ontwikkelingen</h1> \n           <p> \n             <strong>Personal Computing Boom:</strong> In de jaren 80 was er een toename in personal computing, omdat technologische ontwikkelingen en marktvraag de adoptie van pc's wereldwijd aanwakkerden. De introductie van de IBM PC in 1981 zette een standaard voor compatibiliteit en veroorzaakte een golf van klonen en concurrenten. Het MS-DOS-besturingssysteem van Microsoft werd alomtegenwoordig op IBM-compatibele computers en legde de basis voor de dominantie van Windows in de toekomst. De grafische gebruikersinterface (GUI) bracht een revolutie teweeg in computing met de release van Apple's Macintosh in 1984, waardoor computers intuïtiever en gebruiksvriendelijker werden. \n           </p> \n           <p> \n             <strong>Ontdekking van HIV/AIDS:</strong> In de jaren 80 werd het humaan immunodeficiëntievirus (HIV) geïdentificeerd als de oorzaak van het verworven immunodeficiëntiesyndroom (AIDS), een verwoestende pandemie die begin jaren 80 ontstond. Wetenschappers isoleerden en karakteriseerden HIV in 1983, wat leidde tot een beter begrip van de overdracht en pathogenese van het virus. De ontdekking van HIV maakte de weg vrij voor diagnostische tests, antiretrovirale therapieën en interventies op het gebied van de volksgezondheid om de verspreiding van AIDS te bestrijden en getroffen personen te ondersteunen. \n           </p> \n           <p> \n             <strong>Einde van de Koude Oorlog:</strong> De jaren 80 markeerden het einde van de Koude Oorlog, een decennialang geopolitiek conflict tussen de Verenigde Staten en de Sovjet-Unie. Diplomatieke inspanningen zoals détente en onderhandelingen over wapenbeheersing hielpen de spanningen tussen de supermachten te verminderen, wat culmineerde in de historische gebeurtenissen van 1989-1991. De val van de Berlijnse Muur in 1989 symboliseerde de ineenstorting van het communisme in Oost-Europa, terwijl de ontbinding van de Sovjet-Unie in 1991 het einde van de bipolaire wereldorde en het begin van een nieuw tijdperk van mondiale politiek inluidde. \n           </p>";
  localStorage.setItem('choice', 'eighties');
}

// Optie 3
function option3() {
  clear();
  instruction.style.display = 'none';
  content.style.display = 'grid';
  body.classList.add('nineties');
  title.innerHTML = 'Jaren 90';
  slot1.classList.add('nineties');
  slot1.innerHTML =
    "<h1>Mode</h1> \n           <p> \n             <strong>Grungy Chic:</strong> In de jaren negentig zagen we de opkomst van grunge mode, beïnvloed door de muziekscène in Seattle en gekenmerkt door een casual onverzorgde look, flanelen hemden, gescheurde spijkerbroeken, combat boots en band t-shirts waren emblematisch van deze look. Het kernwoord is laagjes, met te grote sweaters gedragen over t-shirts en afgestyled met een spijkerjas. Deze anti-establishment stijl verwierp de blitse extravagantie uit de jaren tachtig ten gunste van een meer lakse en authentieke vibe. \n           </p> \n           <p> \n             <strong>Minimalistische Elegantie:</strong> Minimalisme kwam in de jaren negentig als een dominante trend naar voren, gekarakteriseerd door strakke lijnen, neutrale kleuren en ingetogen verfijning. Eenvoudige silhouetten zoals onderjurken, op maat gesneden blazers en hooggetailleerde broeken werden de favorieten van de minimalistische modeliefhebbers. Materialen zoals zijde, satijn en kasjmier hebben een beetje luxe toegevoegd aan de minimalistische garderobe terwijl accessoires minimaal werden gehouden om een geslepen en verfijnde uitstraling te behouden. \n           </p> \n           <p> \n             <strong>Retro Revival:</strong> De jaren negentig zorgden ook voor een heropleving van de belangstelling voor de mode van de afgelopen decennia, met name de jaren zestig en zeventig. Deze retro revival manifesteerde zich in trends zoals babydoll jurken, platformschoenen en psychedelische prints. Tweedehands kledingbedrijven werden populaire bestemmingen voor modeliefhebbers die op zoek zijn naar unieke en nostalgische stukken. Het mengen van vintageitems met hedendaagse basis items, gaf mensen de mogelijkheid om hun individualiteit uit te drukken en daarbij ook eerbetoon te brengen aan de modegeschiedenis. \n           </p> \n           <p> \n             <strong>Streetwear cultuur:</strong> Streetwear cultuur bloeide op in de jaren negentig, gevoed door de opkomst van hip-hop en stedelijke subculturen van jongeren. Baggy jeans, te grote hoodies en grafische t-shirts werden iconische elementen van straatwear mode. Sneakers speelden een cruciale rol in street style, waarbij merken als Nike en Adidas de markt domineren. Grote logo's, op graffiti-geïnspireerde afbeeldingen en sportieve accenten waren kenmerken van streetwear merken, wat de invloed van de stedelijke cultuur op mainstream mode weerspiegelt. \n           </p>";
  slot2.classList.add('nineties');
  slot2.innerHTML =
    "<h1>Muziek</h1> \n           <p> \n             <strong>Grunge Revolutie:</strong> In de jaren 90 ontstond grungemuziek als reactie op de commercialisering van rockmuziek in de jaren 80. Bands uit Seattle, zoals Nirvana, Pearl Jam en Soundgarden, waren de drijvende kracht achter de grungebeweging met hun rauwe, angstige geluid en DIY-ethos. Grungenummers bevatten vaak vervormde gitaren, gemompelde vocalen en introspectieve teksten, wat de desillusie en vervreemding van Generatie X weerspiegelde. \n           </p> \n           <p> \n             <strong>Hiphop Gouden Eeuw:</strong> De jaren 90 worden vaak beschouwd als de gouden eeuw van hiphop, toen het genre explodeerde in populariteit en diversiteit. Artiesten van de oostkust zoals Wu-Tang Clan, Notorious BIG en Nas brachten rauwe verhalen en lyrische bekwaamheid naar de voorgrond, terwijl West Coast-rappers zoals Tupac Shakur en Dr. Dre pionierden met gangsta-rap met zijn verhalen over het straatleven en sociaal commentaar. In de jaren negentig ontstond ook alternatieve hiphop, met groepen als A Tribe Called Quest en De La Soul die jazz, funk en bewuste teksten mengden. \n           </p> \n           <p> \n             <strong>Opkomst van elektronische dansmuziek (EDM):</strong> In de jaren negentig ontstond elektronische dansmuziek (EDM) als een wereldwijd fenomeen, waarbij genres als house, techno en trance wijdverbreid populair werden. Dj's en producers als Daft Punk, The Chemical Brothers en Fatboy Slim verlegden de grenzen van elektronische muziek door futuristische geluiden en aanstekelijke beats in hun composities op te nemen. Raves en dansclubs werden centra van EDM-cultuur, waar feestvierders zich konden onderdompelen in een euforische en transcendentale ervaring. \n           </p>";
  slot3.classList.add('nineties');
  slot3.innerHTML =
    "<h1>Ontdekkingen en ontwikkelingen</h1> \n           <p> \n             <strong>World Wide Web:</strong> In de jaren 90 werd het World Wide Web gecreëerd en snel uitgebreid, waardoor de manier waarop mensen communiceren, informatie opvragen en zakendoen, veranderde. In 1990 vond Tim Berners-Lee het hypertext transfer protocol (HTTP) en de eerste webbrowser uit, waarmee hij de basis legde voor het internet zoals we dat vandaag de dag kennen. De lancering van de eerste commerciële webbrowser, Netscape Navigator, in 1994 populariseerde het internet onder het grote publiek, wat leidde tot de dotcom-hausse en de opkomst van e-commerce. \n           </p> \n           <p> \n             <strong>Human Genome Project:</strong> In de jaren negentig werd het Human Genome Project gelanceerd, een internationale poging om het gehele menselijke genoom in kaart te brengen en te sequencen. Het project had als doel om de genetische blauwdruk van de mensheid te ontrafelen en inzicht te bieden in de structuur, functie en evolutie van ons DNA. De voltooiing van het Human Genome Project in 2003 vertegenwoordigde een monumentale prestatie in de genetica en baande de weg voor gepersonaliseerde geneeskunde, genetische tests en gentherapie. \n           </p> \n           <p> \n             <strong>Klonen van Dolly het schaap:</strong> In 1996 haalden wetenschappers van het Roslin Institute in Schotland de krantenkoppen met het succesvol klonen van Dolly het schaap, 's werelds eerste gekloonde zoogdier. Dolly werd gecreëerd met behulp van een techniek genaamd somatische celkernoverdracht, waarbij de kern van een volwassen schapencel werd overgebracht naar een eicel en vervolgens werd geïmplanteerd in een draagmoeder. Dolly's geboorte leidde tot ethische debatten over de implicaties van klonen en riep vragen op over de aard van genetische identiteit en voortplanting. \n           </p>";
  localStorage.setItem('choice', 'nineties');
}

// Waarnemers
const slot1observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    slot1.classList.add('fade-in');
  }
});
slot1observer.observe(slot1);
const slot2observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    slot2.classList.add('rise-in');
  }
});
slot2observer.observe(slot2);
const slot3observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    slot3.classList.add('grow-in');
  }
});
slot3observer.observe(slot3);

// Laden gebeurtenis
document.addEventListener('DOMContentLoaded', function () {
  const choice = localStorage.getItem('choice');
  if (choice == 'seventies') {
    option1();
  } else if (choice == 'eighties') {
    option2();
  } else if (choice == 'nineties') {
    option3();
  }
});

// Resetten
function reset() {
  clear();
  content.style.display = '';
  instruction.style.display = 'flex';
  localStorage.setItem('choice', '');
}
