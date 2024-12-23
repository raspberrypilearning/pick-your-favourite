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
  title.innerHTML = '1970-ті роки';
  slot1.classList.add('seventies');
  slot1.innerHTML =
    '<h1>Мода</h1> \n           <p> \n           <strong>Богемний шик:</strong> 1970-ті роки побачили зростання моди, натхненної богемою, характеризується струмуючими тканинами, квітковими принтами та природними кольорами. На цей стиль вплинув рух контркультури, і він охоплював розслаблену, вільну естетику. Знаковими елементами цього тренду стали жилетки з бахромою, блузки-селянки, максі-сукні та джинси-дзвіночки. \n           </p> \n           <p> \n           <strong>Дискотечний гламур:</strong> Дискотечна ера 1970-х принесла гламурну та кричущу моду . Металеві тканини, паєтки та блиск були популярними, відображаючи яскраве нічне життя. Облягаючий одяг, такий як сукні з запахом, комбінезони та туфлі на платформі, став синонімом диско-моди. Сміливі кольори та перебільшені силуети були ключовими рисами цього тренду. \n           </p> \n           <p> \n           <strong>Спортивний повсякденний одяг:</strong> У 1970-х роках також з’явився спортивний повсякденний одяг, який вплинув завдяки зростанню популярності таких видів відпочинку, як біг підтюпцем і аеробіка. У цьому стилі був зручний, але стильний одяг, наприклад спортивні костюми, толстовки, кросівки та футболки з яскравими логотипами. Тенденція поєднання спортивного одягу з повсякденним одягом для відпочинку стала все більш популярною протягом цього десятиліття. \n           </p>';
  slot2.classList.add('seventies');
  slot2.innerHTML =
    '<h1>Музика</h1> \n           <p> \n             <strong>Дискотечна лихоманка:</strong> 1970-ті визначилися повним захопленням диско-музикою, пульсуючими ритмами, веселими басовими лініями та запам’ятовуючими мелодіями. Дискотечні пісні часто відрізнялися пишною оркестровкою, душевним вокалом і текстами про кохання, танці та нічне життя. В епоху дискотеки з’явились культові виконавці, як-от Донна Саммер, Бі Джиз та Глорія Гейнор, а також легендарні клуби, як-от Studio 54, де процвітала диско-культура. \n           </p> \n           <p> \n             <strong>Еволюція рок-н-ролу:</strong> Рок-музика зазнала значної еволюції в 1970-х роках , що розгалужується на різні піджанри, такі як глем-рок, прогресив-рок і панк рок. Такі гурти, як Led Zeppelin, Pink Floyd і The Rolling Stones, розширили межі рок-музики завдяки експериментальним звукам і складним композиціям. У 1970-х роках також з’явилися впливові співаки та автори пісень, як-от Боб Ділан і Джоні Мітчелл, які наповнили свою музику інтроспективними текстами та впливом фолку. \n           </p> \n           <p> \n             <strong>Народження хіп-хопу:</strong> 1970-ті ознаменували народження хіп-хопу музики в Бронксі, Нью-Йорк, коли ді-джеї та МС почали експериментувати вертушки та віршики на вечірках і громадських заходах. Перші піонери хіп-хопу, такі як Grandmaster Flash, Afrika Bambaataa та DJ Kool Herc, заклали основу для майбутнього успіху цього жанру. Брейк-данс, мистецтво графіті та батли MC були невід’ємними елементами хіп-хоп культури протягом цього десятиліття становлення. \n           </p>';
  slot3.classList.add('seventies');
  slot3.innerHTML =
    '<h1>Відкриття та досягнення</h1> \n           <p> \n             <strong>Персональні комп’ютери:</strong> У 1970-х роках народився персональний комп’ютер революція з розвитком новаторських технологій, таких як мікропроцесор і дискета. Такі компанії, як Apple, Microsoft і IBM, випустили на ринок перші ПК, зробивши обчислення доступними як для окремих осіб, так і для компаній. Такі інновації, як Altair 8800 і Apple II, проклали шлях до епохи цифрових технологій, заклавши основу сучасної комп’ютерної індустрії. \n           </p> \n           <p> \n             <strong>Генна інженерія:</strong> У 1970-х роках вчені досягли значних успіхів у галузі генна інженерія з відкриттям технології рекомбінантних ДНК. Цей прорив дозволив дослідникам маніпулювати та зрощувати молекули ДНК різних організмів, відкриваючи нові можливості для біотехнології та генетичних досліджень. Створення першого генетично модифікованого організму (ГМО) у 1973 році ознаменувало віху в генній інженерії, викликавши хвилювання та етичні дебати про наслідки маніпулювання будівельними блоками життя. \n           </p> \n           <p> \n             <strong>Освоєння космосу:</strong> 1970-ті роки були золотим віком дослідження космосу з визначною віхою такі досягнення, як висадка Аполлона на Місяць і запуск Вояджера зонди. Програма НАСА «Аполлон» успішно відправила дванадцять астронавтів на поверхню Місяця між 1969 і 1972 роками, виконавши мету президента Кеннеді висадити людину на Місяць до кінця десятиліття. Космічний корабель «Вояджер», запущений у 1977 році, провів піонерські дослідження зовнішніх планет і надав безцінні дані про далекі простори Сонячної системи. \n           </p>';
  localStorage.setItem('choice', 'seventies');
}

// Option 2
function option2() {
  clear();
  instruction.style.display = 'none';
  content.style.display = 'grid';
  body.classList.add('eighties');
  title.innerHTML = '1980-ті роки';
  slot1.classList.add('eighties');
  slot1.innerHTML =
    '<h1>Мода</h1> \n           <p> \n             <strong>Punk Rock Rebellion:</strong> У 1980-х роках панк-мода продовжилася, характеризуючись через бунтарство та естетику DIY. Шкіряні куртки, прикрашені шпильками та латками, рвані джинси та футболки з групами були основними елементами панк-образу. Ірокези, волосся з колями та густий макіяж очей були популярними як серед чоловіків, так і серед жінок, що відображало підривну позицію панк-руху. \n           </p> \n           <p> \n               <strong>Стиль преппі:</strong> Мода преппі стала мейнстрімом у 1980-х роках, натхненна колегіальним вигляд університетів Ліги Плюща. Цей стиль представляв чистий одяг, такий як сорочки на ґудзиках, в’язані светри, штани кольору хакі та картаті спідниці. Пастельні кольори та сміливі смужки зазвичай можна побачити в ошатному одязі разом із аксесуарами, такими як туфлі-човники, перлинні намиста та пов’язки. \n           </p> \n           <p> \n               <strong>Елегантний одяг:</strong> 1980-ті роки стали свідками зростання модного одягу, особливо серед працівників жінок, які прагнули утвердити свій авторитет на робочому місці. Емблемою цього тренду стали сильні костюми з підкладкою на плечах, приталені блейзери та штани з високою талією. Яскраві кольори, геометричні візерунки та яскраві прикраси були використані, щоб випромінювати впевненість і професіоналізм. \n           </p> \n           <p> \n               <strong>Мода нової хвилі:</strong> Музика нової хвилі сильно вплинула на моду 1980-х років, піднятися до футуристичного та еклектичного стилю. Ця естетика включала асиметричні вирізи, яскраві неонові кольори та нетрадиційні силуети. Панчохи в сіточку, шкіряні спідниці та оверсайз блейзери були популярними предметами гардеробу Нової хвилі. Такі зачіски, як кефаль і асиметричний боб, доповнювали цей різкий і авангардний образ. \n           </p>';
  slot2.classList.add('eighties');
  slot2.innerHTML =
    "<h1>Музика</h1> \n           <p> \n             <strong>Домінування поп-музики:</strong> 1980-ті характеризуються зростанням поп-музики як домінуюча сила в мейнстрімі. Синтезатори, драм-машини та електронні технології виробництва стали поширеними, сформувавши звучання поп-хітів 80-х. Знакові виконавці, такі як Майкл Джексон, Мадонна та Прінс, досягли нечуваного успіху завдяки своїм запам’ятовуючим мелодіям, яскравим музичним відео та неперевершеним образам. Покоління MTV ще більше підштовхнуло поп-музику до центру уваги, оскільки музичні відео стали ключовим маркетинговим інструментом для артистів. \n           </p> \n           <p> \n             <strong>Революція нової хвилі:</strong> Музика нової хвилі виникла наприкінці 1970-х і досягла свого Пік популярності в 1980-х роках, змішуючи елементи панк-року, електроніки музика, авангардне мистецтво. Такі групи, як Depeche Mode, Duran Duran і The Cure, використовували синтезатори та драм-машини, щоб створити футуристичний і еклектичний звук. Пісні Нової хвилі часто містили запам’ятовування, танцювальні ритми та інтроспективні тексти, що відображало тривогу й оптимізм молодіжної культури 80-х років. \n           </p> \n           <p> \n             <strong>Вибух важкого металу:</strong> 1980-ті роки стали свідками сплеску популярності музики важкого металу , що живиться такими гуртами, як Metallica, Iron Maiden і Guns N' Roses. Відомий своїми гучними гітарами, агресивним вокалом і театральними виступами, хеві-метал став культурним феноменом у 80-х. Такі піджанри, як треш-метал, глем-метал і хейр-метал, приваблювали легіони відданих шанувальників, а суперечливі теми та образи викликали дебати про цензуру та мораль. \n           </p>";
  slot3.classList.add('eighties');
  slot3.innerHTML =
    '<h1>Відкриття та досягнення</h1> \n           <p> \n             <strong>Бум персональних комп’ютерів:</strong> 1980-ті роки стали свідками сплеску персональних комп’ютерів , оскільки технологічний прогрес і ринковий попит спонукали до впровадження ПК у всьому світі. Поява IBM PC у 1981 році встановила стандарт сумісності та викликала хвилю клонів і конкурентів. Операційна система Microsoft MS-DOS стала повсюдною для IBM-сумісних комп’ютерів, заклавши основу для домінування Windows у майбутньому. Графічний інтерфейс користувача (GUI) зробив революцію в обчислювальній техніці з випуском Macintosh від Apple у 1984 році, зробивши комп’ютери більш інтуїтивно зрозумілими та зручнішими. \n           </p> \n           <p> \n             <strong>Відкриття ВІЛ/СНІД:</strong> У 1980-х роках було виявлено вірус імунодефіциту людини (ВІЛ) як причина синдрому набутого імунодефіциту (СНІД), руйнівної пандемії, яка виникла на початку 1980-х років. У 1983 році вчені виділили та охарактеризували ВІЛ, що привело до кращого розуміння передачі та патогенезу вірусу. Відкриття ВІЛ проклало шлях для діагностичних тестів, антиретровірусної терапії та заходів у сфері охорони здоров’я для боротьби з поширенням СНІДу та підтримки хворих. \n           </p> \n           <p> \n             <strong>Кінець холодної війни:</strong> 1980-ті ознаменували кінець холодної війни , десятиліттями геополітичний конфлікт між Сполученими Штатами та Радянським Союзом. Дипломатичні зусилля, такі як розрядка напруги та переговори щодо контролю над озброєннями, допомогли послабити напруженість між наддержавами, кульмінацією якої стали історичні події 1989-1991 років. Падіння Берлінської стіни в 1989 році символізувало крах комунізму в Східній Європі, тоді як розпад Радянського Союзу в 1991 році провістив кінець біполярного світового порядку та початок нової ери глобальної політики. \n           </p>';
  localStorage.setItem('choice', 'eighties');
}

// Option 3
function option3() {
  clear();
  instruction.style.display = 'none';
  content.style.display = 'grid';
  body.classList.add('nineties');
  title.innerHTML = '1990-ті роки';
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
    "<h1>Music</h1> \n \
          <p> \n \
            <strong>Grunge Revolution:</strong> The 1990s saw the rise of grunge music as a reaction against the commercialization of rock music in the '80s. Bands from Seattle, such as Nirvana, Pearl Jam, and Soundgarden, spearheaded the grunge movement with their raw, angst-ridden sound and DIY ethos. Grunge songs often featured distorted guitars, mumbled vocals, and introspective lyrics, reflecting the disillusionment and alienation of Generation X. \n \
          </p> \n \
          <p> \n \
            <strong>Hip-Hop Golden Age:</strong> The 1990s are often regarded as the golden age of hip-hop, as the genre exploded in popularity and diversity. East Coast artists like Wu-Tang Clan, Notorious B.I.G., and Nas brought gritty storytelling and lyrical prowess to the forefront, while West Coast rappers like Tupac Shakur and Dr. Dre pioneered gangsta rap with its tales of street life and social commentary. The 1990s also saw the rise of alternative hip-hop, with groups like A Tribe Called Quest and De La Soul blending jazz, funk, and conscious lyrics. \n \
          </p> \n \
          <p> \n \
            <strong>Electronic Dance Music (EDM) Emergence:</strong> The 1990s witnessed the emergence of electronic dance music (EDM) as a global phenomenon, with genres like house, techno, and trance gaining widespread popularity. DJs and producers like Daft Punk, The Chemical Brothers, and Fatboy Slim pushed the boundaries of electronic music, incorporating futuristic sounds and infectious beats into their compositions. Raves and dance clubs became hubs of EDM culture, where revelers could immerse themselves in a euphoric and transcendental experience. \n \
          </p>";
  slot3.classList.add('nineties');
  slot3.innerHTML =
    '<h1>Відкриття та досягнення</h1> \n           <p> \n             <strong>Всесвітня мережа:</strong> У 1990-х роках спостерігалося створення та швидке розширення всесвітньої павутини, що змінює спосіб спілкування людей, доступу до інформації та ведення бізнесу. У 1990 році Тім Бернерс-Лі винайшов протокол передачі гіпертексту (HTTP) і перший веб-браузер, заклавши основу для Інтернету, яким ми його знаємо сьогодні. Запуск першого комерційного веб-браузера, Netscape Navigator, у 1994 році популяризував Інтернет серед широкої громадськості, що призвело до буму доткомов і зростання електронної комерції. \n           </p> \n           <p> \n             <strong>Проект геному людини:</strong> 1990-ті роки ознаменували запуск проекту геному людини, міжнародна спроба картографувати та секвенувати весь геном людини. Проект мав на меті розгадати генетичний план людства, надаючи розуміння структури, функціонування та еволюції нашої ДНК. Завершення проекту «Геном людини» у 2003 році стало монументальним досягненням у генетиці та проклало шлях до персоналізованої медицини, генетичного тестування та генної терапії. \n           </p> \n           <p> \n             <strong>Клонування вівці Доллі:</strong> У 1996 році вчені Рослінського інституту в Шотландія потрапила в заголовки новин завдяки успішному клонуванню вівці Доллі перший у світі клонований ссавець. Доллі була створена за допомогою технології, яка називається перенесенням ядра соматичної клітини, яка передбачала перенесення ядра клітини дорослої вівці в яйцеклітину, а потім імплантацію його сурогатній матері. Народження Доллі викликало етичні дебати про наслідки клонування та підняло питання про природу генетичної ідентичності та відтворення. \n           </p>';
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
