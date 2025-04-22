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
  title.innerHTML = '';
  slot1.classList = 'content';
  slot1.innerHTML = '';
  slot2.classList = 'content';
  slot2.innerHTML = '';
  slot3.classList = 'content';
  slot3.innerHTML = '';
  dropdown.classList.remove('open');
}

// Option 1
function option1() {
  clear();
  instruction.style.display = 'none';
  content.style.display = 'grid';
  body.classList.add('liverpool');
  title.innerHTML = '利物浦足球俱乐部';
  slot1.classList.add('liverpool');
  slot1.innerHTML =
    '<h1>最近的结果</h1> \n         <p>利物浦 4 - 1 切尔西</p> \n         <p>利物浦 5 - 2 诺维奇城</p> \n         <p>富勒姆 1 - 1 利物浦</p> \n         <p>伯恩茅斯 0 - 4 利物浦</p> \n         <p>利物浦 2 - 1 富勒姆</p>';
  slot2.classList.add('liverpool');
  slot2.innerHTML =
    '<h1>最新消息</h1> \n         <p>尤尔根·克洛普将离开利物浦。</p>\n         <p>阿莱克西斯·麦卡利斯特可能会对阵阿森纳。</p>\n         <p>利物浦仍是夺冠热门，但仅此而已。</p>';
  slot3.classList.add('liverpool');
  slot3.innerHTML =
    '<h1>顶级球员</h1> \n         <p>穆罕默德·萨拉赫</p>\n         <p>维吉尔·范戴克</p>\n         <p>特伦特·亚历山大-阿诺德</p>';
  localStorage.setItem('choice', 'liverpool');
}

// Option 2
function option2() {
  clear();
  instruction.style.display = 'none';
  content.style.display = 'grid';
  body.classList.add('man-city');
  title.innerHTML = '曼城';
  slot1.classList.add('man-city');
  slot1.innerHTML =
    '<h1>最近的结果</h1> \n         <p>曼城 3 - 1 伯恩利</p> \n         <p>托特纳姆 0 - 1 曼城</p> \n         <p>纽卡斯尔 2 - 3 曼城</p> \n         <p>曼城 5 - 0 哈德斯菲尔德</p> \n         <p>曼城 2 - 0 谢菲尔德联队</p>';
  slot2.classList.add('man-city');
  slot2.innerHTML =
    '<h1>最新消息</h1> \n         <p>凯文·德布劳内回来了！</p>\n         <p>艾尔林·哈兰德想离开曼彻斯特加盟皇家马德里。</p>\n         <p>佩普·瓜迪奥拉正在制定离队计划，想要离开。</p>';
  slot3.classList.add('man-city');
  slot3.innerHTML =
    '<h1>顶级球员</h1> \n         <p>埃尔林·哈兰德</p>\n         <p>菲尔·福登</p>\n         <p>贝尔纳多·席尔瓦</p>';
  localStorage.setItem('choice', 'man-city');
}

// Option 3
function option3() {
  clear();
  instruction.style.display = 'none';
  content.style.display = 'grid';
  body.classList.add('tottenham');
  title.innerHTML = '托特纳姆热刺';
  slot1.classList.add('tottenham');
  slot1.innerHTML =
    '<h1>最近结果</h1> \n         <p>托特纳姆 3 - 2 布伦特福德</p> \n         <p>托特纳姆 0 - 1 曼城</p> \n         <p>曼联 2 - 2 热刺</p> \n         <p>托特纳姆 1 - 0 伯恩利</p> \n         <p>托特纳姆 3 - 1 伯恩茅斯</p>';
  slot2.classList.add('tottenham');
  slot2.innerHTML =
    '<h1>最新消息</h1> \n         <p>卢卡斯·伯格瓦尔选择托特纳姆热刺而不是巴塞罗那。</p>\n         <p>阿尔菲·多林顿成为热刺腿筋受伤的球员之一。</p>\n         <p>热刺仍在努力寻找哈里·凯恩的替代者</p>';
  slot3.classList.add('tottenham');
  slot3.innerHTML = '<h1>最佳球员</h1> \n         <p>孙兴慜</p>\n         <p>里查利松</p>\n         <p>佩德罗·波罗</p>';
  localStorage.setItem('choice', 'tottenham');
}

// Observers
const slot1observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      slot1.classList.add('fade-in');
    }
  },
  {
    threshold: 1,
  }
);
slot1observer.observe(slot1);
const slot2observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      slot2.classList.add('grow-in');
    }
  },
  {
    threshold: 1,
  }
);
slot2observer.observe(slot2);
const slot3observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      slot3.classList.add('rise-in');
    }
  },
  {
    threshold: 1,
  }
);
slot3observer.observe(slot3);

// Loading event
document.addEventListener('DOMContentLoaded', function () {
  const choice = localStorage.getItem('choice');
  if (choice == 'liverpool') {
    option1();
  } else if (choice == 'man-city') {
    option2();
  } else if (choice == 'tottenham') {
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
