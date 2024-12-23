// Dropdown function
const dropdown = document.getElementById('dropdown-options');
function openDropdown() {
  if (dropdown.classList.contains('open')) {
    dropdown.classList.remove('open');
  } else {
    dropdown.classList.add('open');
  }
}
// Constants
const body = document.querySelector('body');
const instruction = document.querySelector('#instruction');
const content = document.querySelector('#content-holder');
const title = document.querySelector('#title');
const slot1 = document.querySelector('#slot-1');
const slot2 = document.querySelector('#slot-2');
const slot3 = document.querySelector('#slot-3');

// Clear function
function clear() {
  body.classList = '';
  slot1.classList = 'content';
  slot2.classList = 'content';
  slot3.classList = 'content';
  dropdown.classList.remove('open');
}

// Option 1
function option1() {
  clear();
  instruction.style.display = 'none';
  content.style.display = 'grid';
  body.classList.add('seventies');
  title.innerHTML = 'Années 1970';
  slot1.classList.add('seventies');
  slot1.innerHTML =
    "<h1>Mode</h1> \n           <p> \n           <strong>Chic bohème :</strong> Les années 1970 ont vu l'essor de la mode d'inspiration bohème, caractérisée par des tissus fluides, des imprimés floraux et des couleurs terreuses. Ce style a été influencé par le mouvement de la contre-culture et a adopté une esthétique décontractée et libre. Les gilets à franges, les chemisiers paysans, les robes longues et les jeans à pattes d'éléphant étaient des éléments emblématiques de cette tendance. \n           </p> \n           <p> \n           <strong>Glamour disco :</strong> L'ère disco des années 1970 a donné naissance à une mode glamour et flashy. Les tissus métalliques, les paillettes et les paillettes étaient populaires, reflétant la vie nocturne animée. Les vêtements moulants tels que les robes portefeuille, les combinaisons et les chaussures à plateforme sont devenus synonymes de mode disco. Les couleurs vives et les silhouettes exagérées étaient les caractéristiques clés de cette tendance. \n           </p> \n           <p> \n           <strong>Sporty Casual :</strong> Les années 1970 ont également vu l'émergence de vêtements de sport décontractés, influencés par la popularité croissante des activités récréatives comme le jogging et l'aérobic. Ce style comprenait des vêtements confortables mais élégants tels que des survêtements, des sweats à capuche, des baskets et des t-shirts avec des logos audacieux. La tendance athleisure consistant à mélanger les vêtements de sport avec les vêtements de tous les jours est devenue de plus en plus populaire au cours de cette décennie. \n           </p>";
  slot2.classList.add('seventies');
  slot2.innerHTML =
    "<h1>Musique</h1> \n           <p> \n             <strong>La fièvre du disco :</strong> Les années 1970 ont été marquées par l'engouement pour la musique disco, caractérisée par des rythmes pulsés, des lignes de basse funky et des mélodies accrocheuses. Les chansons disco présentaient souvent des orchestrations luxuriantes, des voix pleines d'âme et des paroles sur l'amour, la danse et la vie nocturne. L'ère du disco a vu l'essor d'artistes emblématiques comme Donna Summer, les Bee Gees et Gloria Gaynor, ainsi que de clubs légendaires comme le Studio 54, où la culture disco a prospéré. \n           </p> \n           <p> \n             <strong>Évolution du rock 'n' roll :</strong> La musique rock a connu une évolution significative dans les années 1970, se diversifiant en différents sous-genres tels que le glam rock, le rock progressif et le punk rock. Des groupes comme Led Zeppelin, Pink Floyd et The Rolling Stones ont repoussé les limites de la musique rock avec des sons expérimentaux et des compositions complexes. Les années 1970 ont également vu l'émergence d'auteurs-compositeurs-interprètes influents comme Bob Dylan et Joni Mitchell, qui ont infusé leur musique de paroles introspectives et d'influences folk. \n           </p> \n           <p> \n             <strong>Naissance du hip-hop :</strong> Les années 1970 ont marqué la naissance de la musique hip-hop dans le Bronx, à New York, lorsque les DJ et les MC ont commencé à expérimenter avec des platines et des rimes lors de fêtes de quartier et d'événements communautaires. Les premiers pionniers du hip-hop, tels que Grandmaster Flash, Afrika Bambaataa et DJ Kool Herc, ont jeté les bases du succès futur du genre. Le breakdance, l'art du graffiti et les batailles de MC ont fait partie intégrante de la culture hip-hop au cours de cette décennie formatrice. \n           </p>";
  slot3.classList.add('seventies');
  slot3.innerHTML =
    "<h1>Découvertes et avancées</h1> \n           <p> \n             <strong>Informatique personnelle :</strong> Les années 1970 ont vu naître la révolution de l'ordinateur personnel, avec le développement de technologies révolutionnaires comme le microprocesseur et la disquette. Des entreprises comme Apple, Microsoft et IBM ont lancé les premiers PC sur le marché, rendant l'informatique accessible aux particuliers comme aux entreprises. Des innovations telles que l'Altair 8800 et l'Apple II ont ouvert la voie à l'ère numérique, posant les bases de l'industrie informatique moderne. \n           </p> \n           <p> \n             <strong>Génie génétique :</strong> Dans les années 1970, les scientifiques ont fait des progrès considérables dans le domaine du génie génétique, avec la découverte de la technologie de l'ADN recombinant. Cette avancée a permis aux chercheurs de manipuler et d'épisser des molécules d'ADN provenant de différents organismes, ouvrant de nouvelles possibilités pour la biotechnologie et la recherche génétique. La création du premier organisme génétiquement modifié (OGM) en 1973 a marqué une étape importante dans le génie génétique, suscitant à la fois l'enthousiasme et les débats éthiques sur les implications de la manipulation des éléments constitutifs de la vie. \n           </p> \n           <p> \n             <strong>Exploration spatiale :</strong> Les années 1970 furent un âge d'or de l'exploration spatiale, avec des réalisations marquantes telles que les alunissages d'Apollo et le lancement des sondes Voyager. Le programme Apollo de la NASA a envoyé avec succès douze astronautes sur la surface lunaire entre 1969 et 1972, réalisant ainsi l'objectif du président Kennedy d'envoyer un homme sur la Lune avant la fin de la décennie. Le vaisseau spatial Voyager, lancé en 1977, a mené des études pionnières sur les planètes extérieures et a fourni des données inestimables sur les confins du système solaire. \n           </p>";
  localStorage.setItem('choice', 'seventies');
}

// Option 2
function option2() {
  clear();
  instruction.style.display = 'none';
  content.style.display = 'grid';
  body.classList.add('eighties');
  title.innerHTML = 'Années 1980';
  slot1.classList.add('eighties');
  slot1.innerHTML =
    "<h1>Mode</h1> \n           <p> \n             <strong>Rébellion du punk rock :</strong> Les années 1980 ont vu la poursuite de la mode punk, caractérisée par la rébellion et l'esthétique DIY. Les vestes en cuir ornées de clous et de patchs, les jeans déchirés et les t-shirts de groupe étaient des incontournables du look punk. Les mohawks, les cheveux hérissés et le maquillage des yeux épais étaient populaires chez les hommes comme chez les femmes, reflétant l'attitude subversive du mouvement punk. \n           </p> \n           <p> \n               <strong>Style preppy :</strong> La mode preppy est devenue courante dans les années 1980, inspirée par le look universitaire des universités de l'Ivy League. Ce style se caractérisait par des vêtements aux coupes épurées tels que des chemises boutonnées, des pulls torsadés, des pantalons kaki et des jupes à carreaux. Les couleurs pastel et les rayures audacieuses étaient couramment utilisées dans les tenues preppy, ainsi que des accessoires comme des chaussures bateau, des colliers de perles et des bandeaux. \n           </p> \n           <p> \n               <strong>Power Dressing :</strong> Les années 1980 ont vu l'essor du power dressing, en particulier chez les femmes actives, qui cherchaient à affirmer leur autorité sur le lieu de travail. Les tailleurs aux épaules rembourrées, les blazers ajustés et les pantalons taille haute sont devenus emblématiques de cette tendance. Des couleurs vives, des motifs géométriques et des bijoux tendance ont été utilisés pour dégager confiance et professionnalisme. \n           </p> \n           <p> \n               <strong>Mode New Wave :</strong> La musique New Wave a fortement influencé la mode des années 1980, donnant naissance à un style futuriste et éclectique. Cette esthétique se caractérisait par des coupes asymétriques, des couleurs fluo vives et des silhouettes non conventionnelles. Les bas résille, les jupes en cuir et les blazers oversize étaient des articles populaires dans la garde-robe New Wave. Des coiffures comme le mulet et le carré asymétrique complétaient ce look audacieux et avant-gardiste. \n           </p>";
  slot2.classList.add('eighties');
  slot2.innerHTML =
    "<h1>Musique</h1> \n           <p> \n             <strong>Dominance de la pop :</strong> Les années 1980 ont été caractérisées par l'essor de la musique pop en tant que force dominante du grand public. Les synthétiseurs, les boîtes à rythmes et les techniques de production électronique sont devenus monnaie courante, façonnant le son des tubes pop des années 80. Des artistes emblématiques comme Michael Jackson, Madonna et Prince ont connu un succès sans précédent avec leurs mélodies accrocheuses, leurs clips vidéo accrocheurs et leurs personnages plus grands que nature. La génération MTV a propulsé la musique pop sous les projecteurs, les clips vidéo devenant un outil marketing crucial pour les artistes. \n           </p> \n           <p> \n             <strong>Révolution New Wave :</strong> La musique New Wave est apparue à la fin des années 1970 et a atteint son apogée dans les années 1980, mélangeant des éléments de punk rock, de musique électronique et d'art d'avant-garde. Des groupes comme Depeche Mode, Duran Duran et The Cure ont adopté les synthétiseurs et les boîtes à rythmes pour créer un son futuriste et éclectique. Les chansons New Wave présentaient souvent des refrains accrocheurs, des rythmes dansants et des paroles introspectives, reflétant l'angoisse et l'optimisme de la culture des jeunes des années 80. \n           </p> \n           <p> \n             <strong>Explosion du heavy metal :</strong> Les années 1980 ont vu la popularité croissante du heavy metal, alimentée par des groupes comme Metallica, Iron Maiden et Guns N' Roses. Connu pour ses guitares fortes, ses voix agressives et ses performances théâtrales, le heavy metal est devenu un phénomène culturel dans les années 80. Des sous-genres comme le thrash metal, le glam metal et le hair metal ont attiré des légions de fans dévoués, tandis que des thèmes et des images controversés ont suscité des débats sur la censure et la moralité. \n           </p>";
  slot3.classList.add('eighties');
  slot3.innerHTML =
    "<h1>Découvertes et avancées</h1> \n           <p> \n             <strong>Boom de l'informatique personnelle :</strong> Les années 1980 ont été témoins d'une forte augmentation de l'informatique personnelle, alors que les progrès technologiques et la demande du marché ont favorisé l'adoption des PC dans le monde entier. L'introduction de l'IBM PC en 1981 a établi une norme de compatibilité et a déclenché une vague de clones et de concurrents. Le système d'exploitation MS-DOS de Microsoft est devenu omniprésent sur les ordinateurs compatibles IBM, jetant les bases de la domination future de Windows. L'interface utilisateur graphique (GUI) a révolutionné l'informatique avec la sortie du Macintosh d'Apple en 1984, rendant les ordinateurs plus intuitifs et conviviaux. \n           </p> \n           <p> \n             <strong>Découverte du VIH/SIDA :</strong> Les années 1980 ont vu l'identification du virus de l'immunodéficience humaine (VIH) comme la cause du syndrome d'immunodéficience acquise (SIDA), une pandémie dévastatrice apparue au début des années 1980. Les scientifiques ont isolé et caractérisé le VIH en 1983, ce qui a permis de mieux comprendre la transmission et la pathogénèse du virus. La découverte du VIH a ouvert la voie aux tests de diagnostic, aux thérapies antirétrovirales et aux interventions de santé publique pour lutter contre la propagation du SIDA et soutenir les personnes touchées. \n           </p> \n           <p> \n             <strong>Fin de la guerre froide :</strong> Les années 1980 ont marqué la fin de la guerre froide, un conflit géopolitique qui a duré des décennies entre les États-Unis et l'Union soviétique. Les efforts diplomatiques tels que la détente et les négociations sur le contrôle des armements ont contribué à apaiser les tensions entre les superpuissances, aboutissant aux événements historiques de 1989-1991. La chute du mur de Berlin en 1989 a symbolisé l'effondrement du communisme en Europe de l'Est, tandis que la dissolution de l'Union soviétique en 1991 a annoncé la fin de l'ordre mondial bipolaire et le début d'une nouvelle ère de politique mondiale. \n           </p>";
  localStorage.setItem('choice', 'eighties');
}

// Option 3
function option3() {
  clear();
  instruction.style.display = 'none';
  content.style.display = 'grid';
  body.classList.add('nineties');
  title.innerHTML = 'Années 1990';
  slot1.classList.add('nineties');
  slot1.innerHTML =
    '<h1>Fashion</h1> \n \
          <p> \n \
            <strong>Grungy Chic:</strong> The 1990s saw the rise of grunge fashion, influenced by the music scene in Seattle and characterised by its casual, unkempt aesthetic. Flannel shirts, ripped jeans, combat boots, and band t-shirts were emblematic of the grunge look. Layering was key, with oversized sweaters worn over t-shirts and topped with a denim jacket. This anti-establishment style rejected the flashy excess of the 1980s in favor of a more laid-back and authentic vibe. \n \
          </p> \n \
          <p> \n \
            <strong>Minimalist Elegance:</strong> Minimalism emerged as a dominant trend in 1990s fashion, characterised by clean lines, neutral colors, and understated sophistication. Simple silhouettes such as slip dresses, tailored blazers, and high-waisted trousers were favored by minimalist fashionistas. Fabrics like silk, satin, and cashmere added a touch of luxury to the minimalist wardrobe, while accessories were kept minimal to maintain a sleek and refined look. \n \
          </p> \n \
          <p> \n \
            <strong>Retro Revival:</strong> The 1990s witnessed a resurgence of interest in fashion from past decades, particularly the 1960s and 1970s. This retro revival manifested in trends like babydoll dresses, platform shoes, and psychedelic prints. Vintage clothing stores became popular destinations for fashion enthusiasts seeking unique and nostalgic pieces. Mixing and matching vintage items with contemporary staples allowed individuals to express their individuality while paying homage to fashion history. \n \
          </p> \n \
          <p> \n \
            <strong>Streetwear Culture:</strong> Streetwear culture flourished in the 1990s, fueled by the rise of hip-hop and urban youth subcultures. Baggy jeans, oversized hoodies, and graphic t-shirts became iconic elements of streetwear fashion. Sneakers played a crucial role in street style, with brands like Nike and Adidas dominating the market. Bold logos, graffiti-inspired graphics, and sporty accents were hallmarks of streetwear brands, reflecting the influence of urban culture on mainstream fashion. \n \
          </p>';
  slot2.classList.add('nineties');
  slot2.innerHTML =
    "<h1>Musique</h1> \n           <p> \n             <strong>Révolution Grunge :</strong> Les années 1990 ont vu l'essor de la musique grunge en réaction à la commercialisation de la musique rock dans les années 1980. Des groupes de Seattle, tels que Nirvana, Pearl Jam et Soundgarden, ont été les fers de lance du mouvement grunge avec leur son brut et angoissé et leur éthique DIY. Français Les chansons grunge présentaient souvent des guitares déformées, des voix marmonnées et des paroles introspectives, reflétant la désillusion et l'aliénation de la génération X. \n           </p> \n           <p> \n             <strong>Âge d'or du hip-hop :</strong> Les années 1990 sont souvent considérées comme l'âge d'or du hip-hop, car le genre a explosé en popularité et en diversité. Des artistes de la côte Est comme le Wu-Tang Clan, Notorious BIG et Nas ont mis au premier plan des récits crus et des prouesses lyriques, tandis que des rappeurs de la côte Ouest comme Tupac Shakur et Dr. Dre ont été les pionniers du gangsta rap avec ses récits de la vie de rue et ses commentaires sociaux. Français Les années 1990 ont également vu l'essor du hip-hop alternatif, avec des groupes comme A Tribe Called Quest et De La Soul mélangeant jazz, funk et paroles conscientes. \n           </p> \n           <p> \n             <strong>Émergence de la musique électronique de danse (EDM) :</strong> Les années 1990 ont vu l'émergence de la musique électronique de danse (EDM) en tant que phénomène mondial, avec des genres comme la house, la techno et la trance gagnant en popularité. Des DJ et producteurs comme Daft Punk, The Chemical Brothers et Fatboy Slim ont repoussé les limites de la musique électronique, incorporant des sons futuristes et des rythmes contagieux dans leurs compositions. Les raves et les clubs de danse sont devenus des centres de la culture EDM, où les fêtards pouvaient s'immerger dans une expérience euphorique et transcendantale. \n           </p>";
  slot3.classList.add('nineties');
  slot3.innerHTML =
    "<h1>Découvertes et avancées</h1> \n           <p> \n             <strong>World Wide Web :</strong> Les années 1990 ont vu la création et l'expansion rapide du World Wide Web, transformant la façon dont les gens communiquent, accèdent à l'information et font des affaires. En 1990, Tim Berners-Lee a inventé le protocole de transfert hypertexte (HTTP) et le premier navigateur Web, jetant les bases de l'Internet tel que nous le connaissons aujourd'hui. Le lancement du premier navigateur Web commercial, Netscape Navigator, en 1994 a popularisé Internet auprès du grand public, menant à l'essor des dot-com et à l'essor du commerce électronique. \n           </p> \n           <p> \n             <strong>Projet génome humain :</strong> Les années 1990 ont marqué le lancement du Projet génome humain, un effort international visant à cartographier et séquencer l'intégralité du génome humain. Le projet visait à démêler le schéma génétique de l'humanité, en fournissant des informations sur la structure, la fonction et l'évolution de notre ADN. L'achèvement du Projet génome humain en 2003 a représenté une avancée monumentale en génétique et a ouvert la voie à la médecine personnalisée, aux tests génétiques et à la thérapie génique. \n           </p> \n           <p> \n             <strong>Clonage de la brebis Dolly :</strong> En 1996, des scientifiques de l'Institut Roslin en Écosse ont fait la une des journaux avec le clonage réussi de la brebis Dolly, le premier mammifère cloné au monde. Dolly a été créée à l'aide d'une technique appelée transfert nucléaire de cellules somatiques, qui consistait à transférer le noyau d'une cellule de mouton adulte dans un ovule, puis à l'implanter dans une mère porteuse. La naissance de Dolly a déclenché des débats éthiques sur les implications du clonage et a soulevé des questions sur la nature de l'identité génétique et de la reproduction. \n           </p>";
  localStorage.setItem('choice', 'nineties');
}

// Observers
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

// Loading event
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

// Reset
function reset() {
  clear();
  content.style.display = '';
  instruction.style.display = 'flex';
  localStorage.setItem('choice', '');
}
