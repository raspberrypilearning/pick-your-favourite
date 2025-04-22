// 下拉功能函数
const dropdown = document.getElementById("dropdown-options");

function openDropdown() {
  console.log("clicked");
  if (dropdown.classList.contains("open")) {
    dropdown.classList.remove("open");
  } else {
    dropdown.classList.add("open");
  }
}

// 常量
const body = document.querySelector("body");
const instruction = document.querySelector("#instruction");
const content = document.querySelector("#content-holder");
const title = document.querySelector("#title");
const slot1 = document.querySelector("#slot-1");
const slot2 = document.querySelector("#slot-2");
const slot3 = document.querySelector("#slot-3");

// 清除函数
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

// 选项 1
function option1() {
  clear();

  instruction.style.display = 'none';
  content.style.display = "grid";

  body.classList.add("trex");

  title.innerHTML = "霸王龙 <br> &#129430";

  slot1.classList.add("trex");
  slot1.innerHTML =
    "<h1>解剖结构和特征</h1> \n \
      <p>最大的食肉恐龙之一</p> \n \
      <p>强壮的后肢</p> \n \
      <p>巨大的头骨和锋利的牙齿</p> \n \
      <p>小巧的两指前肢</p>";

  slot2.classList.add("trex");
  slot2.innerHTML =
    "<h1>冷知识</h1> \n \
      <p>霸王龙的咬合力非常大，可以咬碎骨头</p> \n \
      <p>霸王龙跑得很快</p> \n \
      <p>霸王龙这个名字在希腊语中的意思是暴君蜥蜴王</p>";

  slot3.classList.add("trex");
  slot3.innerHTML =
    "<h1>活动</h1> \n \
      <ol>\n \
        <li>分成几组，在起跑线上排好队</li> \n \
        <li>在房间的另一端为每个队员放一个玩具</li> \n \
        <li>每队派出一名队员竞相“咬”一个玩具，并把它带回给团队</li> \n \
        <li>第一个带回所有玩具的队伍获胜！</li> </ol>";

  localStorage.setItem("choice", "trex");
}

// 选项 2
function option2() {
  clear();

  instruction.style.display = 'none';
  content.style.display = "grid";

  body.classList.add("triceratops");

  title.innerHTML = "三角龙";

  slot1.classList.add("triceratops");
  slot1.innerHTML =
    "<h1>解剖结构和特征</h1> \n \
      <p>食草恐龙</p> \n \
      <p>以其独特的褶边和三个面部角而闻名</p> \n \
      <p>它身体庞大，嘴巴像喙一样，头骨后部突出着一块巨大的骨板</p> \n \
      <p>三角龙可能群居，用角进行防御</p>";

  slot2.classList.add("triceratops");
  slot2.innerHTML =
    "<h1>冷知识</h1> \n \
      <p>三角龙有点爱炫耀，它的褶边可能是用来展示的</p>\n \
      <p>三角龙在白垩纪晚期漫游在北美洲</p>\n \
      <p>三角龙在希腊语中的意思是三角脸</p>";

  slot3.classList.add("triceratops");
  slot3.innerHTML =
    "<h1>活动</h1> \n \
      <ol>\n \
        <li>使用纸张或纸板制作一些三角龙角</li>\n \
        <li>将它们固定在头带上或手持使用</li>\n \
        <li>将角以不同距离放置在地面上</li>\n \
        <li>使用呼啦圈或用纸板制作环</li>\n \
        <li>轮流将环扔到三角龙角上，每次成功都能赢得 10分！</li>\n \
        <li>所有回合结束后分数最高的人获胜！</li> </ol>";

  localStorage.setItem("choice", "triceratops");
}

// 选项 3
function option3() {
  clear();

  instruction.style.display = 'none';
  content.style.display = "grid";

  body.classList.add("stegosaurus");

  title.innerHTML = "剑龙";

  slot1.classList.add("stegosaurus");
  slot1.innerHTML =
    "<h1>解剖结构和特征</h1> \n \
      <p>剑龙是食草动物 (草食性动物)</p> \n \
      <p>背部有两排大骨板</p> \n \
      <p>尾巴上有尖刺</p> \n \
      <p>它的头很小，与身体相比，脑部较小</p>";

  slot2.classList.add("stegosaurus");
  slot2.innerHTML =
    "<h1>冷知识</h1> \n \
      <p>剑龙的臀部有第二个大脑，帮助协调运动和平衡</p>\n \
      <p>剑龙生活在侏罗纪晚期</p> \n \
      <p>剑龙在希腊语中的意思是“装甲屋顶蜥蜴”</p> \n \
      <p>1933 年电影《金刚》中使用的定格木偶是根据 1897 年的剑龙插图制作的</p>";

  slot3.classList.add("stegosaurus");
  slot3.innerHTML =
    "<h1>活动</h1> \n \
      <ol><li>装饰一些纸盘，制作剑龙的骨板</li>\n \
      <li>盘子干了之后，举行“剑龙游行”来展示你的盘子</li>\n \
      <li>分享设计并庆祝你的创意！</li></ol>";
      
  localStorage.setItem("choice", "stegosaurus");
}

// 观察器
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

// 加载事件
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

// 重置
function reset(){
  clear();
  content.style.display = "";
  instruction.style.display = 'flex';
  localStorage.setItem("choice", "");
}