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

// Fonction d"effacement
function clear(){
  body.classList = '';
  
  slot1.classList = 'content';
  
  slot2.classList = 'content';
  
  slot3.classList = 'content';
  
  dropdown.classList.remove("open");
}

// Option 1
function option1(){
  clear();

  instruction.style.display = 'none';
  content.style.display = "grid";

  body.classList.add("seventies");

  title.innerHTML = "Années 70";

  slot1.classList.add("seventies");
  slot1.innerHTML = "<h1>Mode</h1> \n \
          <p> \n \
          <strong>Chic bohème :</strong> les années 70 ont marqué l'émergence du style bohème, qui se distingue par ses tissus fluides, ses imprimés floraux et ses teintes terreuses. Inspirée par le mouvement de la contre-culture, cette mode a adopté une esthétique décontractée, libre et anticonformiste. Parmi les pièces phares de cette tendance, on retrouve les gilets à franges, les chemisiers paysans, les robes longues et les jeans à pattes d'éléphant, qui incarnaient parfaitement l'esprit de cette époque. \n \
          </p> \n \
          <p> \n \
          <strong>Glamour disco :</strong> l'ère disco des années 70 a vu l'épanouissement d'une mode glamour et éclatante, portée par les paillettes, les tissus métalliques et les couleurs vives. Symbole de la vie nocturne effervescente, la mode disco se caractérisait par des silhouettes audacieuses et des vêtements moulants, tels que les robes portefeuille, les combinaisons et les célèbres chaussures à plateforme. Les couleurs vives et les lignes exagérées étaient au cœur de cette tendance flashy et festive. \n \
          </p> \n \
          <p> \n \
          <strong>Sporty Casual :</strong> dans les années 70, les vêtements sportifs décontractés se sont également imposés, influencés par la montée en popularité du jogging et de l'aérobic. Ce style alliait confort et élégance, avec des pièces comme les survêtements, les sweats à capuche, les baskets et les t-shirts à logos audacieux. La tendance athleisure, qui consiste à associer vêtements de sport et tenues quotidiennes, a gagné en popularité, marquant un tournant dans la manière d'appréhender la mode casual. \n \
          </p>";

  slot2.classList.add("seventies");
  slot2.innerHTML = "<h1>Musique</h1> \n \
          <p> \n \
            <strong>La fièvre du disco :</strong> les années 70 ont été dominées par l'irrésistible ascension de la musique disco, un genre caractérisé par ses rythmes entraînants, ses lignes de basse funky et ses mélodies envoûtantes. Les chansons disco se distinguaient par des orchestrations opulentes, des voix puissantes et des paroles célébrant l'amour, la danse et la vie nocturne. Cette époque a vu émerger des artistes légendaires comme Donna Summer, les Bee Gees et Gloria Gaynor, ainsi que des clubs mythiques tels que le Studio 54, où la culture disco a atteint son apogée. \n \
          </p> \n \
          <p> \n \
            <strong>Évolution du rock 'n' roll :</strong> dans les années 70, le rock 'n' roll a connu une profonde transformation, donnant naissance à une variété de sous-genres, tels que le glam rock, le rock progressif et le punk rock. Des groupes comme Led Zeppelin, Pink Floyd et The Rolling Stones ont repoussé les frontières du genre avec des sons expérimentaux et des compositions audacieuses. Cette décennie a également vu l'émergence d'artistes-phare comme Bob Dylan et Joni Mitchell, qui ont insufflé à leur musique des paroles introspectives et des influences folk, redéfinissant ainsi le paysage musical. \n \
          </p> \n \
          <p> \n \
            <strong>Naissance du hip-hop :</strong> les années 70 ont été le berceau de la musique hip-hop, née dans le Bronx, à New York, où les DJ et les MC ont commencé à expérimenter avec les platines et les rimes lors de fêtes de quartier. Des pionniers comme Grandmaster Flash, Afrika Bambaataa et DJ Kool Herc ont posé les bases de ce qui allait devenir un phénomène mondial. Le breakdance, l'art du graffiti et les batailles de MC sont rapidement devenus des éléments essentiels de la culture hip-hop, marquant cette décennie comme le terreau fertile de l'une des formes musicales les plus influentes du XXe siècle. \n \
          </p>";

  slot3.classList.add("seventies");
  slot3.innerHTML = "<h1>Découvertes et avancées</h1> \n \
          <p> \n \
            <strong>Informatique personnelle :</strong> les années 70 ont marqué le début de la révolution de l'informatique personnelle, avec des innovations majeures telles que le microprocesseur et la disquette. Des entreprises emblématiques comme Apple, Microsoft et IBM ont lancé les premiers ordinateurs personnels, rendant l'informatique accessible tant aux particuliers qu'aux entreprises. Des modèles pionniers tels que l'Altair 8800 et l'Apple II ont ouvert la voie à l'ère numérique, posant ainsi les fondations de l'industrie informatique telle que nous la connaissons aujourd'hui. \n \
          </p> \n \
          <p> \n \
            <strong>Génie génétique :</strong> dans les années 70, des avancées révolutionnaires ont eu lieu dans le domaine du génie génétique, notamment avec la découverte de la technologie de l'ADN recombinant. Cette avancée a permis aux scientifiques de manipuler et d'assembler des segments d'ADN provenant de différentes espèces, offrant de nouvelles perspectives pour la biotechnologie et la recherche génétique. La création du premier organisme génétiquement modifié (OGM) en 1973 a constitué une étape clé, soulevant à la fois l'enthousiasme scientifique et des interrogations éthiques sur les implications de la manipulation génétique. \n \
          </p> \n \
          <p> \n \
            <strong>Exploration spatiale :</strong> les années 70 ont été une période charnière pour l'exploration spatiale, marquée par des réalisations majeures comme les missions lunaires Apollo et le lancement des sondes Voyager. Le programme Apollo de la NASA a permis à douze astronautes de marcher sur la Lune entre 1969 et 1972, réalisant ainsi l'ambitieux objectif de John F. Kennedy d'envoyer un homme sur la Lune avant la fin de la décennie. En 1977, les sondes Voyager ont été lancées pour explorer les planètes extérieures, fournissant des données précieuses et inédites sur les confins de notre système solaire. \n \
          </p>";
  localStorage.setItem("choice", "seventies");
}

// Option 2
function option2(){
  clear();

  instruction.style.display = 'none';
  content.style.display = "grid";

  body.classList.add("eighties");

  title.innerHTML = "Années 80";

  slot1.classList.add("eighties");
  slot1.innerHTML = "<h1>Mode</h1> \n \
          <p> \n \
            <strong>Rébellion du punk rock :</strong> les années 80 ont vu la poursuite de la mode punk, une esthétique marquée par la rébellion et le DIY. Les vestes en cuir cloutées et décorées de patchs, les jeans déchirés et les t-shirts de groupes emblématiques faisaient partie des incontournables du look punk. Les mohawks, cheveux hérissés et maquillage des yeux marqué étaient omniprésents, tant chez les hommes que chez les femmes, symbolisant l'attitude subversive et anticonformiste du mouvement. \n \
          </p> \n \
          <p> \n \
              <strong>Style preppy :</strong> le style preppy a connu un essor dans les années 80, inspiré par l’apparence soignée des étudiants des universités de l'Ivy League. Ce style se distingue par des vêtements au design épuré, tels que des chemises boutonnées, des pulls torsadés, des pantalons en toile kaki et des jupes à carreaux. Les couleurs pastel, les rayures audacieuses, ainsi que des accessoires comme les chaussures bateau, les colliers de perles et les bandeaux complétaient ce look raffiné et décontracté. \n \
          </p> \n \
          <p> \n \
              <strong>Power Dressing :</strong> les années 80 ont été marquées par l’essor du power dressing, un phénomène en particulier chez les femmes actives désireuses d’affirmer leur autorité sur le lieu de travail. Les tailleurs à épaules larges, les blazers structurés et les pantalons taille haute sont devenus les symboles de cette tendance. Des couleurs vives, des motifs géométriques et des bijoux affirmés ont été utilisés pour dégager une image de confiance et de professionnalisme. \n \
          </p> \n \
          <p> \n \
              <strong>Mode New Wave :</strong> La scène musicale New Wave a profondément influencé la mode des années 80, créant un style futuriste et éclectique. Ce look se distingue par des coupes asymétriques, des couleurs fluorescentes éclatantes et des silhouettes audacieuses. Les bas résille, les jupes en cuir et les blazers oversize étaient des pièces phares de la garde-robe New Wave. Les coiffures, comme le mulet ou le carré asymétrique, complétaient parfaitement cette esthétique avant-gardiste et décalée. \n \
         </p>";
  slot2.classList.add("eighties");
  slot2.innerHTML = "<h1>Musique</h1> \n \
          <p> \n \
            <strong>Dominance de la pop :</strong> les années 80 ont marqué l'ascension fulgurante de la musique pop, qui est devenue la principale force culturelle du grand public. L'usage généralisé des synthétiseurs, des boîtes à rythmes et des techniques de production électronique a radicalement transformé le son des hits de l'époque. Des artistes emblématiques tels que Michael Jackson, Madonna et Prince ont révolutionné la scène musicale avec des mélodies entraînantes, des clips vidéo novateurs et des personnalités iconiques. Avec l'explosion de la chaîne MTV, la musique pop a gagné en visibilité, les clips devenant des outils incontournables pour la promotion et la construction de l'image des artistes. \n \
          </p> \n \
          <p> \n \
            <strong>Révolution New Wave :</strong> la New Wave, née à la fin des années 70, a atteint son apogée dans les années 80, fusionnant les influences du punk rock, de la musique électronique et de l'avant-garde. Des groupes comme Depeche Mode, Duran Duran et The Cure ont expérimenté avec les synthétiseurs et les boîtes à rythmes pour créer un son à la fois futuriste et éclectique. Les morceaux New Wave se distinguaient par leurs refrains mémorables, leurs rythmes dansants et leurs paroles souvent introspectives, capturant à la fois l'angoisse et l'espoir d'une jeunesse des années 80 en quête de sens. \n \
         </p> \n \
          <p> \n \
            <strong>Essor du heavy metal :</strong> les années 80 ont vu le heavy metal prendre une ampleur considérable, soutenu par des groupes légendaires tels que Metallica, Iron Maiden et Guns N' Roses. Avec ses guitares puissantes, ses voix intenses et ses performances spectaculaires, le heavy metal est devenu un véritable phénomène de société. Les sous-genres comme le thrash metal, le glam metal et le hair metal ont attiré une base de fans dévoués, tandis que les thèmes provocateurs et les images controversées ont alimenté des débats passionnés sur la censure et les valeurs morales. \n \
          </p>";

  slot3.classList.add("eighties");
  slot3.innerHTML = "<h1>Découvertes et avancées</h1> \n \
          <p> \n \
            <strong>Boom de l'informatique personnelle :</strong> les années 80 ont marqué une véritable révolution dans le domaine de l'informatique personnelle, avec une adoption massive des ordinateurs personnels à l’échelle mondiale, stimulée par les progrès technologiques et une demande croissante. L'introduction de l'IBM PC en 1981 a posé une norme de compatibilité, entraînant une prolifération de clones et de concurrents. Parallèlement, le système d'exploitation MS-DOS de Microsoft est devenu omniprésent sur les PC compatibles IBM, pavant la voie à la domination future de Windows. En 1984, le lancement du Macintosh d'Apple a introduit l'interface utilisateur graphique (GUI), transformant l'usage des ordinateurs en les rendant plus intuitifs et accessibles à un large public. \n \
          </p> \n \
          <p> \n \
            <strong>Découverte du VIH/SIDA :</strong> les années 80 ont également été marquées par la découverte du virus de l'immunodéficience humaine (VIH), responsable du syndrome d'immunodéficience acquise (SIDA), une pandémie dévastatrice qui a émergé au début de la décennie. En 1983, les scientifiques ont réussi à isoler et à caractériser le VIH, un progrès majeur dans la compréhension de sa transmission et de sa pathogénie. Cette découverte a ouvert la voie à des tests diagnostiques, à des traitements antirétroviraux et à des interventions de santé publique pour lutter contre la propagation du SIDA et soutenir les personnes touchées. \n \
          </p> \n \
          <p> \n \
            <strong>Fin de la guerre froide :</strong> les années 80 ont été décisives pour la fin de la guerre froide, un affrontement idéologique et géopolitique de plusieurs décennies entre les États-Unis et l'Union soviétique. Des efforts diplomatiques, notamment des négociations sur le contrôle des armements et une politique de détente, ont permis d’alléger les tensions entre les superpuissances. L’effondrement du mur de Berlin en 1989 a symbolisé la chute du communisme en Europe de l’Est, tandis que la dissolution de l'Union soviétique en 1991 a marqué la fin de l’ordre mondial bipolaire et le début d’une nouvelle ère de politique mondiale. \n \
          </p>";
  localStorage.setItem("choice", "eighties");
}

// Option 3
function option3(){
  clear();

  instruction.style.display = 'none';
  content.style.display = "grid";

  body.classList.add("nineties");

  title.innerHTML = "Années 90";

  slot1.classList.add("nineties");
  slot1.innerHTML = "<h1>Mode</h1> \n \
          <p> \n \
            <strong>Grungy Chic :</strong> les années 90 ont marqué l'apogée du style grunge, une mode façonnée par la scène musicale de Seattle et caractérisée par une esthétique décontractée, voire négligée. Les t-shirts à carreaux, les jeans déchirés, les bottes de combat et les t-shirts à logo étaient des incontournables du look grunge. L'accumulation de couches était primordiale, avec des pulls oversize portés par-dessus des t-shirts, souvent accompagnés de vestes en denim. Ce style rebelle rejetait l'extravagance des années 80 pour privilégier une allure plus authentique et décontractée, incarnant l'esprit anti-autoritaire de l'époque. \n \
          </p> \n \
          <p> \n \
            <strong>Élégance minimaliste :</strong> le minimalisme a émergé comme une tendance phare des années 90, prônant des lignes épurées, des couleurs neutres et une sophistication discrète. Les silhouettes simples, comme les robes slip, les blazers ajustés et les pantalons à taille haute, ont dominé les garde-robes des adeptes de ce style. Les tissus luxueux tels que la soie, le satin et le cachemire apportaient une touche de raffinement à ce look sobre, tandis que les accessoires se faisaient rares, favorisant une élégance épurée et intemporelle. \n \
          </p> \n \
          <p> \n \
            <strong>Revival rétro :</strong> Les années 90 ont été marquées par un retour aux influences mode des décennies précédentes, notamment des années 60 et 70. Ce renouveau rétro se traduisait par des pièces iconiques telles que les robes à taille empire, les chaussures à plateforme et les imprimés psychédéliques. Les magasins de vêtements vintage sont devenus des lieux prisés pour dénicher des trésors uniques, et l'association de pièces anciennes avec des articles contemporains permettait à chacun de faire preuve de créativité tout en rendant hommage à l'histoire de la mode. \n \
          </p> \n \
          <p> \n \
            <strong>Culture des vêtements de rue :</strong> La culture des vêtements de rue a explosé dans les années 90, portée par la montée des sous-cultures hip-hop et de la jeunesse urbaine. Les jeans baggy, les sweats à capuche oversize et les t-shirts graphiques sont devenus des incontournables du streetwear. Les sneakers, emblématiques de ce mouvement, occupaient une place centrale, avec des marques comme Nike et Adidas en tête du marché. Les logos audacieux, les graphismes inspirés du graffiti et les influences sportives ont marqué ce style, qui reflétait la force croissante de la culture urbaine dans la mode contemporaine. \n \
          </p>";
  slot2.classList.add("nineties");
  slot2.innerHTML = "<h1>Musique</h1> \n \
          <p> \n \
            <strong>Révolution Grunge :</strong> les années 90 ont marqué l'essor du grunge, un mouvement musical né en réaction à la commercialisation du rock dans les années 80. Des groupes emblématiques de Seattle, tels que Nirvana, Pearl Jam et Soundgarden, ont été les figures de proue de ce genre, avec un son brut, angoissé et une éthique DIY (Do It Yourself). Les chansons grunge se caractérisaient par des guitares saturées, des voix souvent marmonnées et des paroles introspectives, exprimant la désillusion et l'aliénation de la génération X. \n \
          </p> \n \
          <p> \n \
            <strong>Âge d'or du hip-hop :</strong> les années 90 sont souvent considérées comme l'âge d'or du hip-hop, une période où le genre a explosé en popularité et en diversité. Les artistes de la côte Est, comme le Wu-Tang Clan, Notorious B.I.G. et Nas, ont mis en lumière des récits percutants et des prouesses lyriques exceptionnelles. Parallèlement, la côte Ouest a vu des rappeurs comme Tupac Shakur et Dr. Dre révolutionner le gangsta rap, en abordant la vie dans les quartiers difficiles et en offrant des commentaires sociaux incisifs. C'est également durant cette décennie que le hip-hop alternatif a pris son envol, avec des groupes tels que A Tribe Called Quest et De La Soul, qui mêlaient jazz, funk et paroles conscientes. \n \
          </p> \n \
          <p> \n \
            <strong>Émergence de la musique électronique de danse (EDM) :</strong> les années 90 ont vu la musique électronique de danse (EDM) s'imposer comme un phénomène mondial, avec la house, la techno et la trance en tête de proue. Des DJ et producteurs visionnaires comme Daft Punk, The Chemical Brothers et Fatboy Slim ont repoussé les limites du genre en incorporant des sons futuristes et des rythmes envoûtants dans leurs compositions. Les raves et les clubs sont devenus des lieux incontournables de la culture EDM, offrant aux fêtards une expérience euphorique et transcendante. \n \
          </p>";

  slot3.classList.add("nineties");
  slot3.innerHTML = "<h1>Découvertes et avancées</h1> \n \
          <p> \n \
            <strong>World Wide Web :</strong> les années 90 ont marqué l'essor fulgurant du World Wide Web, révolutionnant les modes de communication, d'accès à l'information et de commerce. En 1990, Tim Berners-Lee a conçu le protocole HTTP et le premier navigateur Web, posant ainsi les fondations d'Internet tel que nous le connaissons aujourd'hui. Le lancement en 1994 de Netscape Navigator, le premier navigateur Web commercial, a largement contribué à populariser Internet auprès du grand public, propulsant les entreprises dot-com et favorisant l'essor du commerce électronique. \n \
          </p> \n \
          <p> \n \
           <strong>Projet génome humain :</strong> l'achèvement du Projet génome humain, lancé dans les années 90, a constitué un tournant majeur dans la biotechnologie. Ce projet international avait pour objectif de cartographier et séquencer l'ensemble du génome humain. Il a permis de déchiffrer le code génétique humain, apportant des éclairages sur la structure, la fonction et l'évolution de notre ADN. En 2003, sa conclusion a marqué une avancée scientifique majeure, ouvrant la voie à des innovations telles que la médecine personnalisée, les tests génétiques et la thérapie génique. \n \
          </p> \n \
          <p> \n \
            <strong>Clonage de la brebis Dolly :</strong> en 1996, un groupe de chercheurs de l'Institut Roslin en Écosse a créé un bouleversement scientifique en réussissant à cloner la brebis Dolly, le premier mammifère cloné au monde. Grâce à la méthode du transfert nucléaire de cellules somatiques, qui consiste à insérer le noyau d'une cellule adulte de mouton dans un ovule, Dolly a vu le jour après implantation dans une mère porteuse. Cet exploit a non seulement captivé l'imaginaire collectif, mais a aussi déclenché un intense débat éthique concernant les implications du clonage, ainsi que des interrogations profondes sur l'identité génétique et la reproduction. \n \
          </p>";
  localStorage.setItem("choice", "nineties");
}

// Observateurs
const slot1observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      slot1.classList.add("fade-in");
    }
  }
);
slot1observer.observe(slot1);

const slot2observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      slot2.classList.add("rise-in");
    }
  }
);
slot2observer.observe(slot2);

const slot3observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      slot3.classList.add("grow-in");
    }
  }
);
slot3observer.observe(slot3);

// Chargement de l"événement
document.addEventListener("DOMContentLoaded", function () {
  const choice = localStorage.getItem("choice");

  if (choice == "seventies"){
    option1();
  } else if (choice == "eighties"){
    option2();
  } else if (choice == "nineties"){
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
