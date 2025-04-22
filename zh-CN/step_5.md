## 更改页面的其余部分

在此步骤中，当用户选择一个选项时，你将更改整个网页。

### 为插槽 2 添加内容

向插槽 2 添加内容的过程和你在上一步的操作非常相似。 为了让这个过程更快完成，在你已经编写的代码上使用复制(<kbd>Ctrl</kbd>+<kbd>C</kbd> 或 <kbd>Cmd</kbd>+<kbd>C</kbd>) 并粘贴 (<kbd>Ctrl</kbd>+<kbd>V</kbd> 或 <kbd>Cmd</kbd>+<kbd>V</kbd>)，然后更新它以匹配新的内容。

在最后一步，你一次完成了每个选项。 这一次，你将在每个步骤中执行所有三个选项：添加颜色、创建类和添加代码。

### 为插槽 2 添加颜色

--- task ---

打开 `default.css`。

添加**三个**新的颜色变量。 将颜色分配给你的插槽2的类。

--- collapse ---

---
title: 一个示例
---

恐龙示例的插槽2颜色看起来像这样：

--- code ---
---
language: css
filename: default.css
line_numbers: false
---

  /* 插槽 2 颜色 */
  --slot-2-t-rex: #00b2a9;
  --slot-2-triceratops: #ffc659;
  --slot-2-stegosaurus: #131f53;

--- /code ---

--- /collapse ---

--- /task ---

### 为插槽 2 创建类

--- task ---

打开 `style.css`。

找到 `/* 插槽 2 类 */` 注释。

在插槽2下面创建**三个**类，每个选项一个。

--- collapse ---

---
title: 一个示例
---

这是恐龙示例的插槽 2 类。

--- code ---
---
language: css
filename: style.css
line_numbers: false
---

  /* 插槽 2 类 */
  #slot-2.trex {
    background-color: var(--slot-2-t-rex);
    color: black;
  }

  #slot-2.triceratops {
    background-color: var(--slot-2-triceratops);
    color: black;
  }

  #slot-2.stegosaurus {
    background-color: var(--slot-2-stegosaurus);
    color: white;
  }

--- /code ---

确保你使用的是**你的**类名，而不是示例中的类名。

--- /collapse ---

--- /task ---

### 为插槽2添加代码

现在你要添加到你的三个 `option` 函数中以将类应用于插槽 2，然后更改它们的 `innerHTML`。

--- task ---

打开 `scripts.js`。

找到你的 `option1()` 函数。

添加一行，将选项 1 类添加到插槽 2。

恐龙的示例看起来像这样：

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 20
---

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

--- /code ---

--- /task ---

你打算在插槽 2 中放入什么内容？

在足球的例子中，它是**最新消息**，而在恐龙的例子中，它是**冷知识**。

--- task ---

接下来，添加代码行以更改插槽2的`innerHTML` 。

你可以复制上面对插槽1做同样事情的代码行，或者自己写一组新的代码行。

**提示**：确保除最后一行之外的**每一行**末尾都有 `\n \`。

--- collapse ---

---
title: 一个示例
---

恐龙的示例如下所示：

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 21-24
---

  // 选项 1
  function option1() {
    clear();

    instruction.style.display = 'none';
    content.style.display = "grid";

    body.classList.add("trex");

    title.innerHTML = "霸王龙 <br> &#129430";

    slot1.classList.add("trex");
    slot1.innerHTML =
      "<h1>解剖结构与特征</h1> \n \
          <p>最大的食肉恐龙之一</p> \n \
          <p>强壮的后肢</p> \n \
          <p>巨大的骨头和锋利的牙齿</p> \n \
          <p>小巧的两指前肢</p>";

    slot2.classList.add("trex");
    slot2.innerHTML = "<h1>冷知识</h1> \n \
      <p>霸王龙的咬合力非常大，可以咬碎骨头</p>\n \
      <p>霸王龙跑得很快</p>\n \
      <p>霸王龙这个名字在希腊语中的意思是暴君蜥蜴王</p>";

--- /code ---

--- /collapse ---

**点击运行**

- 选择你的第一个选项来测试内容和类。

--- /task ---

--- task ---

复制这些代码行并将它们粘贴到你的`option2()`函数中。

--- /task ---

--- task ---

更改添加的类以匹配你的第二个选项。

--- /task ---

--- task ---

更改内容以匹配你的第二个选项。

--- collapse ---

---
title: 一个示例
---

恐龙示例的 `option2` 函数看起来像这样：

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 21-25
---

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

  }

--- /code ---

--- /collapse ---

**点击运行**

- 选择第二个选项来测试你的颜色和内容。

--- /task ---

--- task ---

再次复制这些代码行，并将他们添加到你的`option3()`函数里。

修改类和内容以匹配你的第三个选项。

--- /task ---

### 第三个插槽

你就要完成你的网页的内容了！ 太棒了！

现在，你将要添加颜色、类和代码来设置样式并填充第三个插槽！

你现在已经做过两次了，因此说明只会提醒你注意步骤。

--- task ---

打开`default.css`并为插槽 3 添加三种颜色（每个选项一种）。

--- collapse ---

---
title: 一个示例
---

这些是恐龙示例中插槽 3 的颜色变量：

--- code ---
---
language: css
filename: default.css
line_numbers: false
line_highlights: 
---

  --slot-3-t-rex: #00b2a9;
  --slot-3-triceratops: #ec3325;
  --slot-3-stegosaurus: #131f53;

--- /code ---

--- /collapse ---

--- /task ---

--- task ---

打开 `style.css` 并找到 `/* 插槽 3 类*/` 注释。

在下面，为插槽 3 创建 3 个类（每个选项一个）。

--- collapse ---

---
title: 一个示例
---

以下是**恐龙**示例的类：

--- code ---
---
language: css
filename: style.css
line_numbers: false
line_highlights: 
---

/* 插槽 3 类 */
  #slot-3.trex {
    background-color: var(--slot-3-t-rex);
  }

  #slot-3.triceratops {
    background-color: var(--slot-3-triceratops);
    color: white;
  }

  #slot-3.stegosaurus {
    background-color: var(--slot-3-stegosaurus);
    color: white;
  }

--- /code ---

--- /collapse ---

--- /task ---

--- task ---

打开 `scripts.js`。

将行添加到你的每个选项函数中，以应用你的新类，并将内容添加到插槽3。

--- collapse ---

---
title: 一个示例
---

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
---

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
            <p>巨大的骨头和锋利的牙齿</p> \n \
            <p>小巧的两指前肢</p>";

    slot2.classList.add("trex");
    slot2.innerHTML =
        "<h1>冷知识</h1> \n \
            <p>霸王龙的咬合力非常大，可以咬碎骨头。</p>\n \
            <p>霸王龙跑得很快</p>\n \
            <p>霸王龙这个名字在希腊语中的意思是暴君蜥蜴王</p>";

    slot3.classList.add("trex");
    slot3.innerHTML =
        "<h1>活动</h1> \n \
            <ol>\n \
            <li>分成几组，在起跑线上排好队</li>\n \
            <li>在房间的另一端为每个队员放一个玩具</li>\n \
            <li>每队派出一名队员竞相“咬”一个玩具，并把它带回给团队</li>\n \
            <li>第一个带回所有玩具的队伍获胜！</li> </ol>";

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

  }

--- /code ---

--- /collapse ---

--- /task ---

--- task ---

**点击运行**

- 测试所有三个选项，检查内容和颜色是否符合你的要求。

你可以调整文本颜色以确保其与背景有足够的对比度。

--- /task ---

接下来，你将使用**交叉点观察器**和动画为你的网页添加一些亮点！
