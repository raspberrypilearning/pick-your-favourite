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
  title.innerHTML = '二十世纪七十年代';
  slot1.classList.add('seventies');
  slot1.innerHTML =
    '<h1>时尚</h1>\n           <p>\n           <strong>波西米亚风：</strong>在二十世纪七十年代，兴起了波西米亚风格的时尚潮流，其特点是飘逸的面料、碎花印花和土色。这种风格受到反主流文化运动的影响，崇尚一种轻松、自由的审美。流苏背心、农民衬衫、及地的长裙和喇叭裤是这一时尚趋势的标志性元素。\n           </p>\n           <p>\n           <strong>魅力迪斯科：</strong>在二十世纪七十年代的迪斯科时代带来了迷人而华丽的时尚风格。金属织物、亮片和闪光片很受欢迎，反映出充满活力的夜生活场景。裹身裙、连身裤和厚底鞋等紧身服装成为迪斯科时尚的代名词。大胆的色彩和夸张的轮廓是这一时尚趋势的主要特征。\n           </p>\n           <p>\n           <strong>运动休闲装：</strong>受慢跑、健美操等娱乐活动日益流行的影响，二十世纪七十年代也出现了运动休闲服。这种风格的特点是舒适而时尚的服装，如运动服、卫衣、运动鞋和带有醒目标志的t恤。在这十年中，将运动服与日常服装混合在一起的运动休闲趋势变得越来越流行。\n           </p>';
  slot2.classList.add('seventies');
  slot2.innerHTML =
    '<h1>音乐</h1> \n           <p> \n             <strong>迪斯科热潮：</strong> 二十世纪七十年代的迪斯科音乐热潮以脉动的节奏、时髦的贝斯线和朗朗上口的旋律为特征。迪斯科歌曲通常以华丽的管弦乐、深情的歌声和关于爱情、舞蹈和夜生活的歌词为特色。迪斯科时代见证了唐娜·莎曼、比吉斯和葛洛莉雅·盖诺等标志性艺术家的崛起，以及 Studio 54 等传奇俱乐部的崛起，迪斯科文化在这里蓬勃发展。 \n           </p> \n           <p> \n             <strong>摇滚乐的演变：</strong> 摇滚乐在二十世纪七十年代经历了重大演变，分支出各种子流派，如华丽摇滚、前卫摇滚和朋克摇滚。齐柏林飞船、平克·弗洛伊德和滚石乐队等乐队通过实验性的声音和复杂的作曲突破了摇滚乐的界限。20 世纪 70 年代还出现了鲍勃·迪伦和琼尼·米歇尔等有影响力的创作型歌手，他们的音乐中融入了内省的歌词和民谣的影响。 \n           </p> \n           <p> \n             <strong>嘻哈音乐的诞生：</strong> 二十世纪七十年代，嘻哈音乐在纽约市布朗克斯区诞生，当时 DJ 和 MC 开始在街区派对和社区活动中尝试使用唱机和韵律。嘻哈音乐的早期先驱，如 Grandmaster Flash、Afrika Bambaataa 和 DJ Kool Herc，为该流派未来的成功奠定了基础。在这个形成时期，霹雳舞、涂鸦艺术和 MC 对决是嘻哈文化不可或缺的元素。 \n           </p>';
  slot3.classList.add('seventies');
  slot3.innerHTML =
    '<h1>发现和进步</h1> \n           <p> \n             <strong>个人计算：</strong> 二十世纪 7七十年代，个人计算机革命诞生，微处理器和软盘等突破性技术应运而生。苹果、微软和 IBM 等公司将早期的个人计算机推向市场，让个人和企业都能使用计算服务。Altair 8800 和 Apple II 等创新产品为数字时代铺平了道路，为现代计算机行业奠定了基础。 \n           </p> \n           <p> \n             <strong>基因工程：</strong> 二十世纪 七十年代，随着重组 DNA 技术的发现，科学家在基因工程领域取得了重大进展。这一突破使研究人员能够操纵和拼接来自不同生物体的 DNA 分子，为生物技术和基因研究开辟了新的可能性。1973 年第一个转基因生物 (GMO) 的诞生标志着基因工程的一个里程碑，引发了人们对操纵生命基本要素的影响的兴奋和伦理争论。 \n           </p> \n           <p> \n             <strong>太空探索：</strong> 二十世纪 7七十年代是太空探索的黄金时代，出现了许多里程碑式的成就，例如阿波罗登月和旅行者号探测器的发射。美国宇航局的阿波罗计划在 1969 年至 1972 年间成功将 12 名宇航员送上月球表面，实现了肯尼迪总统在 2020 年前将人类送上月球的目标。旅行者号宇宙飞船于 1977 年发射，对外行星进行了开创性的研究，并提供了有关太阳系遥远区域的宝贵数据。 \n           </p>';
  localStorage.setItem('choice', 'seventies');
}

// Option 2
function option2() {
  clear();
  instruction.style.display = 'none';
  content.style.display = 'grid';
  body.classList.add('eighties');
  title.innerHTML = '二十世纪八十年代';
  slot1.classList.add('eighties');
  slot1.innerHTML =
    '<h1>时尚</h1> \n           <p> \n             <strong>叛逆的朋克摇滚：</strong> 二十世纪八十年代，朋克时尚继续流行，叛逆和 DIY 美学成为其特征。饰有铆钉和补丁的皮夹克、破洞牛仔裤和乐队 T 恤是朋克造型的必备单品。莫霍克发型、尖刺发型和浓重眼妆在男女中都很流行，反映了朋克运动的颠覆性态度。 \n           </p> \n           <p> \n               <strong>学院风：</strong> 学院风在 20 世纪 80 年代成为主流，其灵感来自常春藤盟校的学院风。这种风格的服装以剪裁利落的服装为特色，例如纽扣衬衫、粗针织毛衣、卡其裤和格子裙。学院风服装中经常出现柔和的色彩和大胆的条纹，以及船鞋、珍珠项链和头带等配饰。 \n           </p> \n           <p> \n               <strong>职场强势风：</strong> 二十世纪 八十年代，强势着装风潮兴起，尤其是在职场女性中，她们希望在职场上展现自己的权威。垫肩的权力套装、剪裁合身的西装外套和高腰裤成为这一潮流的象征。大胆的色彩、几何图案和个性珠宝被用来展现自信和专业。 \n           </p> \n           <p> \n               <strong>新浪潮时尚：</strong> 新浪潮音乐对二十世纪八十年代的时尚产生了重大影响，催生了一种未来主义和折衷主义风格。这种美学以不对称剪裁、明亮的霓虹色和非传统轮廓为特色。渔网袜、皮裙和超大西装外套是新浪潮衣橱中的热门单品。马尾和不对称波波头等发型与这种前卫前卫的造型相得益彰。 \n           </p>';
  slot2.classList.add('eighties');
  slot2.innerHTML =
    '<h1>音乐</h1> \n           <p> \n             <strong>流行音乐的主导地位：</strong> 二十世纪八十年代，流行音乐崛起，成为主流音乐的主导力量。合成器、鼓机和电子制作技术变得十分流行，塑造了八十年代流行音乐的风格。迈克尔·杰克逊、麦当娜和 Prince 等标志性艺术家凭借其朗朗上口的旋律、华丽的音乐视频和栩栩如生的形象取得了前所未有的成功。MTV 一代进一步将流行音乐推向了聚光灯下，因为音乐视频成为了艺术家的重要营销工具。 \n           </p> \n           <p> \n             <strong>新浪潮革命：</strong> 新浪潮音乐出现于二十世纪七十年代末，并在二十世纪 八十年代达到顶峰，融合了朋克摇滚、电子音乐和前卫艺术的元素。迪佩什·莫德、杜兰杜兰和 治疗乐队等采用合成器和鼓机来创造未来主义和不拘一格的声音。新浪潮歌曲通常以朗朗上口的旋律、适合跳舞的节奏和内省的歌词为特色，反映了八十年代青年文化的焦虑和乐观。 \n           </p> \n           <p> \n             <strong>重金属爆炸：</strong> 二十世纪 八十年代，重金属音乐人气飙升，金属乐队、铁娘子乐队和枪炮与玫瑰乐队等功不可没。重金属以其响亮的吉他声、激昂的歌声和戏剧表演而闻名，成为八十年代的一种文化现象。激流金属、华丽金属和重金属等子流派吸引了大批忠实粉丝，而有争议的主题和形象引发了有关审查制度和道德的争论。 \n           </p>';
  slot3.classList.add('eighties');
  slot3.innerHTML =
    '<h1>发现和进步</h1> \n           <p> \n             <strong>个人计算热潮：</strong> 二十纪八十年代，个人计算蓬勃发展，技术进步和市场需求推动了全球个人计算机的普及。1981 年推出的 IBM PC 为兼容性树立了标准，并引发了克隆和竞争浪潮。微软的 MS-DOS 操作系统在 IBM 兼容计算机上无处不在，为 Windows 未来的主导地位奠定了基础。1984 年，随着苹果 Macintosh 的发布，图形用户界面 (GUI) 彻底改变了计算方式，使计算机更加直观和用户友好。 \n           </p> \n           <p> \n             <strong>HIV/AIDS 发现：</strong> 二十世纪八十年代，人类免疫缺陷病毒 (HIV) 被确认为获得性免疫缺陷综合征 (AIDS) 的病因，AIDS 是二十世纪八十年代初出现的一种毁灭性流行病。科学家于 1983 年分离并鉴定了 HIV，从而加深了对该病毒传播和发病机制的了解。HIV 的发现为诊断测试、抗逆转录病毒疗法和公共卫生干预铺平了道路，以对抗艾滋病的传播并支持受影响的个人。 \n           </p> \n           <p> \n             <strong>冷战的结束：</strong> 二十世纪八十年代标志着冷战的结束，冷战是美国和苏联之间长达数十年的地缘政治冲突。缓和关系和军备控制谈判等外交努力有助于缓解超级大国之间的紧张局势，最终导致了 1989-1991 年的历史性事件。1989 年柏林墙的倒塌象征着东欧共产主义的崩溃，而 1991 年苏联的解体则预示着两极世界秩序的结束和全球政治新时代的开始。 \n           </p>';
  localStorage.setItem('choice', 'eighties');
}

// Option 3
function option3() {
  clear();
  instruction.style.display = 'none';
  content.style.display = 'grid';
  body.classList.add('nineties');
  title.innerHTML = '二十世纪九十年代';
  slot1.classList.add('nineties');
  slot1.innerHTML =
    '<h1>时尚</h1> \n           <p> \n             <strong>颓废风：</strong> 二十世纪90年代，受西雅图音乐现场的影响，以随意、凌乱的审美为特征的颓废风（Grunge）兴起。法兰绒衬衫、破洞牛仔裤、战斗靴和乐队T恤是垃圾摇滚风格的象征。分层是关键，大号毛衣穿在T恤外面，外面再穿一件牛仔夹克。这种反建制风格排斥了二十世纪八十年代的浮华过度，倾向于一种更悠闲、更真实的氛围。 \n           </p> \n           <p> \n             <strong>极简主义：</strong> 极简主义成为二十世纪九十年代时尚的主导趋势，其特点是简洁的线条，中性的颜色和低调的精致。吊带裙、剪裁合身的运动上衣和高腰裤等简单的款式受到极简主义时尚人士的青睐。丝绸、缎子和羊绒等面料为极简主义的衣橱增添了一丝奢华，而配饰则保持最少，以保持时尚精致的外观。 \n           </p> \n           <p> \n             <strong>复古风兴起：</strong> 二十纪九十年代见证了过去几十年，特别是二十世纪六十年代和七十年代对时尚的兴趣的复苏。这种复古的复兴体现在娃娃裙、厚底鞋和迷幻印花等潮流中。复古服装店成为时尚爱好者寻找独特和怀旧服装的热门目的地。将复古单品与当代主打品混搭，让个人在表达个性的同时向时尚历史致敬。\n           </p> \n           <p> \n             <strong>街头文化：</strong> 在嘻哈和城市青年亚文化兴起的推动下，街头服饰文化在二十世纪九十年代蓬勃发展。宽松的牛仔裤、超大的卫衣和图案T恤成为街头时尚的标志性元素。运动鞋在街头时尚中扮演着至关重要的角色，耐克（Nike）和阿迪达斯（Adidas）等品牌主导了市场。大胆的标志、涂鸦风格的图形和运动风格是街头服饰品牌的标志，反映了城市文化对主流时尚的影响。 \n           </p>';
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
    "<h1>Discoveries and Advancements</h1> \n \
          <p> \n \
            <strong>World Wide Web:</strong> The 1990s saw the creation and rapid expansion of the World Wide Web, transforming the way people communicate, access information, and conduct business. In 1990, Tim Berners-Lee invented the hypertext transfer protocol (HTTP) and the first web browser, laying the foundation for the internet as we know it today. The launch of the first commercial web browser, Netscape Navigator, in 1994 popularized the internet among the general public, leading to the dot-com boom and the rise of e-commerce. \n \
          </p> \n \
          <p> \n \
            <strong>Human Genome Project:</strong> The 1990s marked the launch of the Human Genome Project, an international effort to map and sequence the entire human genome. The project aimed to unravel the genetic blueprint of humanity, providing insights into the structure, function, and evolution of our DNA. The completion of the Human Genome Project in 2003 represented a monumental achievement in genetics and paved the way for personalized medicine, genetic testing, and gene therapy. \n \
          </p> \n \
          <p> \n \
            <strong>Cloning of Dolly the Sheep:</strong> In 1996, scientists at the Roslin Institute in Scotland made headlines with the successful cloning of Dolly the Sheep, the world's first cloned mammal. Dolly was created using a technique called somatic cell nuclear transfer, which involved transferring the nucleus of an adult sheep cell into an egg cell and then implanting it into a surrogate mother. Dolly's birth sparked ethical debates about the implications of cloning and raised questions about the nature of genetic identity and reproduction. \n \
          </p>";
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
