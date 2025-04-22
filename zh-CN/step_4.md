## 更改一些内容

在此步骤中，你将为每个选项添加文本内容和颜色到你网页上的第一段。

### 你将添加什么内容？

--- task ---

确定每个内容段落的标题。

**想一想**

- 你主题的所有粉丝都应该了解哪三件事？
- 你可以为每个选项编写哪些类别？
- 这三个选项共有哪三样东西？

--- collapse ---

---
title: 一些示例
---

**足球示例有段落插槽：**

- 比赛结果
- 新闻
- 最佳球员

内容会根据用户选择的**足球队**而变化。

**恐龙示例具有用于以下各项的段落插槽**

- 解剖结构和特征
- 冷知识
- 一项活动

内容会根据用户选择的恐龙**种类**而变化。

--- /collapse ---

--- /task ---

### 为第一段创建文本

你将要为第一段创建内容 — 对于所有三个选项 — — 并为它设置一个颜色。

--- task ---

打开 `index.html` 并在 `<div>` 的开始和结束标签之间添加一个换行符 (使用 id `slot-1`)。

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 27
line_highlights: 29-31
---

<section id="content-holder">
  <h1 id="title">标题</h1>
  <div id="slot-1" class="content">

  </div>
  <div id="slot-2" class="content"></div>
  <div id="slot-3" class="content"></div>
</section>

--- /code ---

**提示**：在输入换行符之前，请确保将光标放在开头的 `<div>` 和结尾的 `</div>` 之间。

--- /task ---

--- task ---

使用 `<h1>` 标签为内容插槽添加一个标题。

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 27
line_highlights: 30
---

<section id="content-holder">
  <h1 id="title">标题</h1>
  <div id="slot-1" class="content">
    <h1>标题插槽</h1>
  </div>
  <div id="slot-2" class="content"></div>
  <div id="slot-3" class="content"></div>
</section>

--- /code ---

--- /task ---

--- task ---

为这个插槽添加内容，作为可供用户选择的**第一个选项**。

你可以使用 `<p>`, `<ul>`, `<ol>`, 或任何其他你熟悉的元素。

--- collapse ---

---
title: 一些示例
---

### 恐龙

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 27
line_highlights: 30
---

<section id="content-holder">
  <h1 id="title">标题</h1>
  <div id="slot-1" class="content">
    <h1>解剖结构和特征</h1>
    <p>最大的食肉恐龙之一</p> 
    <p>强壮的后肢</p> 
    <p>巨大的头骨和锋利的牙齿</p>
    <p>小巧的两指前肢</p>
  </div>
  <div id="slot-2" class="content"></div>
  <div id="slot-3" class="content"></div>
</section>

--- /code ---

### 足球

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 27
line_highlights: 30
---

<section id="content-holder">
  <h1 id="title">标题</h1>
  <div id="slot-1" class="content">
    <h1>最近的结果</h1>
    <p>利物浦 4 - 1 切尔西</p>
    <p>利物浦 5 - 2 诺维奇城</p>
    <p>富勒姆 1 - 1 利物浦</p>
    <p>伯恩茅斯 0 - 4 利物浦</p>
    <p>利物浦 2 - 1 富勒姆</p>
  </div>
  <div id="slot-2" class="content"></div>
  <div id="slot-3" class="content"></div>
</section>

--- /code ---

--- /collapse ---

运行你的代码，然后从下拉菜单中选择第一个选项。

确保你能够看到你所写的内容。

--- /task ---

### 向第一个插槽添加颜色

背景颜色与网页相同。 接下来，你将为第一个选项添加新的颜色。

--- task ---

打开`default.css`并为你的第一个选项添加一种新颜色，调用变量`--slot1-classname`—— 将第一个选项的末尾替换为你的类。

--- /task ---

--- task ---

打开`style.css`并找到第128行的`/* 插槽 1 类 */`注释。

为`slot-1`ID 添加一个新的选择器，并为你的第一个选项添加一个类。

**足球** 的示例看起来像这样：

--- code ---
---
language: css
filename: style.css
line_numbers: false
line_highlights: 2-4
---

/* 插槽 1 类 */
#slot-1.liverpool {

}

--- /code ---

这个选择器将为 id 为`slot-1`并且类为`liverpool`的元素设置样式。

--- /task ---

--- task ---

将你的背景颜色添加到此选择器。

--- code ---
---
language: css
filename: style.css
line_numbers: false
line_highlights: 3
---

/* 插槽 1 类 */
#slot-1.liverpool {
  background-color: var(--slot1-liverpool);
}

--- /code ---

--- /task ---

### 使用 JavaScript 添加内容和颜色

现在，你将编写 JavaScript ，将类添加到插槽 1 并用你的内容填充它。

--- task ---

打开 `scripts.js` 并找到你的 `option1` 函数。

使用常量`slot1`来将你的类添加到内容插槽。

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 36
line_highlights: 46
---

function option1(){
  clear();

  instruction.style.display = 'none';
  content.style.display = "grid";

  body.classList.add("liverpool");

  title.innerHTML = "利物浦";

  slot1.classList.add("liverpool");
}

--- /code ---

运行你的代码，并选择第一个选项。

你现在应该可以看到你选择的颜色！

--- /task ---

--- collapse ---

---
title: 我的文本颜色不是很明显
---

当你看到你的颜色时，你可能想要更改你的内容的文本颜色。

确保它们与你选择的背景颜色形成良好的对比。

**提示：**为了让生活更轻松，请选择`黑色`或`白色`文本。

将 `color` 属性添加到你的选择器。

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 128
line_highlights: 131
---

/* 插槽 1 类 */
#slot-1.liverpool {
  background-color: var(--slot1-liverpool);
  color: white;
}

--- /code ---

--- /collapse ---

--- task ---

添加一行`innerHTML`来更改`slot1`。

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 46
line_highlights: 47
---

  slot1.classList.add("liverpool")
  slot1.innerHTML = "";
}

--- /code ---

--- /task ---

--- task ---

打开 `index.html`。

高亮并复制(<kbd>Ctrl</kbd>+<kbd>C</kbd> 或 <kbd>Cmd</kbd>+<kbd>C</kbd>) `slot-1` div. 中的内容。

--- /task ---

--- task ---

打开 `scripts.js`。

粘贴到（<kbd>Ctrl</kbd>+<kbd>V</kbd> 或 <kbd>Cmd</kbd>+<kbd>V</kbd>）引号`""`之间。

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 46
line_highlights: 47-52
---

  slot1.classList.add("liverpool")
  slot1.innerHTML = "<h1>最近的结果</h1>
        <p>利物浦 4 - 1 切尔西</p>
        <p>利物浦 5 - 2 诺维奇城</p>
        <p>富勒姆 1 - 1 利物浦</p>
        <p>伯恩茅斯 0 - 4 利物浦</p>
        <p>利物浦 2 - 1 富勒姆</p>";
}

--- /code ---

--- /task ---

--- task ---

在每一行的末尾添加换行符`\n \`，**除了**最后一行。

--- code ---
---
language: js
filename: scripts.js
line_numbers: true
line_number_start: 46
line_highlights: 47-51
---

  slot1.classList.add("liverpool")
  slot1.innerHTML = "<h1>Recent results</h1> \n \
        <p>利物浦 4 - 1 切尔西</p> \n \
        <p>利物浦 5 - 2 诺维奇城</p> \n \
        <p>富勒姆1 - 1 利物浦</p> \n \
        <p>伯恩茅斯 0 - 4 利物浦</p>\n \
        <p>利物浦 2 - 1 富勒姆</p>";
}

--- /code ---

--- /task ---

--- task ---

现在，打开 `index.html` 并删除`slot-1`div中的内容。

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 27
line_highlights: 29
---

  <section id="content-holder">
    <h1 id="title">标题</h1>
    <div id="slot-1" class="content"></div>
    <div id="slot-2" class="content"></div>
    <div id="slot-3" class="content"></div>
  </section>
</main> 

--- /code ---

--- /task ---

### 更改选项 2 和 3 的内容

现在选项 1 适用于你的第一个插槽，是时候为你的第二个选项添加内容和颜色了。

--- task ---

将插槽 1 颜色添加到 `default.css` 作为你的第二个选项。

--- /task ---

--- task ---

打开 `style.css` 并在你的第一个插槽 1选择器下面，为你的第二个选项添加一个新的选择器。

选择器必须以 `#slot-1` 开头，然后以第二个选项类结束。

足球那部分看起来是这样的：

--- code ---
---
language: css
filename: style.css
line_numbers: false
line_highlights: 6-8
---

/* 插槽 1 类 */
#slot-1.liverpool {
  background-color: var(--slot1-liverpool);
}

#slot-1.man-city {

}

--- /code ---

--- /task ---

--- task ---

将新选择器中的`background-color`属性的变量设置为你为它创建的颜色变量。

--- code ---
---
language: css
filename: style.css
line_numbers: false
line_highlights: 2
---

#slot-1.man-city {
  background-color: var(--slot-1-man-city);
}

--- /code ---

--- /task ---

现在，你将添加到你的 `option2()` 函数中，以便它应用类并更改内容。

--- task ---

在 `scripts.js`中找到你的 `option2()` 函数。

添加一行来将你的新类应用到它。

**足球** 的示例看起来像这样：

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_number_start: 36
line_highlights: 46
---

function option2(){
  clear();

  instruction.style.display = 'none';
  content.style.display = "grid";

  body.classList.add("man-city");

  title.innerHTML = "man-city";

  slot1.classList.add("man-city");
}

--- /code ---

--- /task ---

--- task ---

在你的 `option1`函数中，复制更改了插槽 1的`innerHTML` 的代码行。

将它们粘贴到`option2`函数中。

编辑文本行，使它们与你的第二个选项相关。 足球示例看起来像这样（使用曼城的结果而不是利物浦的结果）：

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_number_start: 46
line_highlights: 48-52
---

  slot1.classList.add("man-city");
  slot1.innerHTML = "<h1>最近的结果</h1> \n \
        <p>曼城 3 - 1 伯恩利</p> \n \
        <p>托特纳姆 0 - 1 曼城</p> \n \
        <p>纽卡斯尔 2 - 3 曼城</p> \n \
        <p>曼城 5 - 0 哈德斯菲尔德</p> \n \
        <p>曼城 2 - 0 谢菲尔德联</p>";
}

--- /code ---

--- /task ---

--- task ---

运行你的代码并选择第二个选项。 你应该会看到新的颜色和内容出现！

你可能想要向类添加`color`属性来更改文本颜色，使其更加清晰可见。

--- /task ---

要完成这一步，你将再次重复相同的进程，但选择**第三个选项**。

--- task ---

向`default.css`添加新颜色。

打开 `style.css` 并使用你的第三个类名称为 `#slot-1` 添加一个新的选择器。

--- /task ---

--- task ---

打开`scripts.js`并从`option2`函数中复制所有插槽1 的代码行。

将它们粘贴到`option3`函数的底部。

--- /task ---

--- task ---

将类名称更改为你的第三个选项类。

更新内容以匹配你的第三个选项。

--- /task ---

现在你有了显示内容的函数，你想在用户选择选项之前隐藏它。

--- task ---

打开 `style.css` 并找到 `#content-holder` 选择器。

将它的 `display`属性设置为 `none`。

--- code ---
---
language: css
filename: style.css
line_numbers: false
line_number_start: 91
line_highlights: 93
---

#content-holder {
  grid-template-rows: repeat(3, 100vh auto);
  display: none;
}

--- /code ---

--- /task ---

--- task ---

### 测试你的项目

**点击运行**

- 选择一个选项并向下滚动，确保颜色和内容符合你的要求。

--- /task ---

接下来，你将添加第二和第三个内容插槽的颜色、类和代码。 然后，你将拥有一个可以发生变化的完整网页，而不仅仅是一个插槽！
