## 选择你的颜色

在此步骤中，你将让你的网页颜色根据所选的选项而改变！

\--- task ---

**尝试一下**

单击恐龙示例中的选项，看看颜色发生的变化！

<iframe src="https://editor.raspberrypi.org/en/embed/viewer/pick-your-favourite-dinosaur" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

\--- /task ---

对于以下每个选项，你需要添加颜色：

- 网页的 `<body>`
- 三个内容插槽
- 插槽的标题和文本

**提示：** 你将要在这个步骤中添加大量代码，因此请确保使用复制 (<0>Ctrl</0>+<0>C</0> or <0>Cmd</0>+<0>C</0>) 和粘贴 (<0>Ctrl</0>+<0>V</0> or <0>Cmd</0>+<0>V</0>) 来更快的完成这个过程。

### 创建你的主体颜色变量

\--- task ---

为三个选项分别选择一种主体颜色并记录下来。

你可以使用[颜色选择器](https://www.w3schools.com/colors/colors_picker.asp){:target="_blank"} 来帮助你选择。
\--- /task ---

\--- task ---

如果你想添加自己的颜色，你可以打开`default.css`并在`:root`选择器内添加自己的变量。

## --- code ---

language: css
filename: default.css
line_numbers: true
line_number_start: 5
line_highlights: 10
--------------------------------------------------------

/\* 基本颜色 \*/
\--body-background: #FFFFFF;
\--body-text-colour: #000000;

\--new-colour: #A63CEA;

\--- /code ---

\--- /task ---

\--- task ---

打开 `style.css`。

找到 `/* 主体类 */` 注释。

在下面，使用`.`标识符为你的第一个选项创建一个类选择器。

将 `background-color:` 属性设置为第一个选项的主体颜色。

你可能还想要设置一个 `color:` 属性，以确保标题文本可见。

你应该给这个类起一个与你的选项相关的名称, **恐龙** 的示例如下所示：

## --- code ---

language: css
filename: style.css
line_numbers: false
line_highlights: 2-5
---------------------------------------------------------

/\* 主体类 \*/
.trex {
background-color: var(--trex-body);
color: white;
}

\--- /code ---

\--- /task ---

\--- task ---

在此代码的下方，为你的其他选项创建另外**两个类选择器**。

\--- collapse ---

---

## title: 我的代码看起来应该是什么样的？

你的 CSS 应该包含三个类选择器，并设置了 `background-color:` 和可能设置了的 `color` 属性。

这是**恐龙**的例子。

## --- code ---

language: css
filename: style.css
line_numbers: false
line_highlights:
-----------------------------------------------------

/\* 主体类 \*/
.trex {
background-color: #41220f;
color: white;
}

.triceratops {
background-color: #6a7029;
color: white;
}

.stegosaurus {
background-color: rgb(32, 78, 55);
color: black;
}

\--- /code ---

\--- /collapse ---

\--- /task ---

### 创建函数

接下来，你需要创建在单击选项时对页面进行更改的函数。

\--- task ---

打开 `scripts.js` 并找到 `//选项 1` 注释。

创建一个名为 `option1` 的函数。

## --- code ---

language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 2-4
---------------------------------------------------------

// 选项 1
function option1(){

}

\--- /code ---

\--- /task ---

\--- task ---

当点击某个选项时，你需要清除页面，然后隐藏说明，并将`content-holder`设置为显示为`grid`。

## --- code ---

language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 3-6
---------------------------------------------------------

// 选项 1
function option1(){
clear();

instruction.style.display = 'none';
content.style.display = "grid";
}

\--- /code ---

\--- /task ---

\--- task ---

接下来，将你在 `style.css` 中创建的新类添加到body，并更改标题以匹配你的选项。

**恐龙** 的示例如下所示：

## --- code ---

language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 8-10
----------------------------------------------------------

// 选项 1
function option1(){
clear();

instruction.style.display = 'none';
content.style.display = "grid";

body.classList.add("trex");

title.innerHTML = "霸王龙";

\--- /code ---

确保你使用的标题与你的选项相匹配！

\--- /task ---

\--- task ---

将 `option1()` 函数复制到 `// 选项 2` 注释下方。

更改：

- 函数名称改为 `option2`
- 添加到 `body` 的类名与你之前为选项 2创建的类名相同
- 标题与你的第二个选项相匹配

## --- code ---

language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 2, 8, 10
--------------------------------------------------------------

// 选项 2
function option2(){
clear();

instruction.style.display = 'none';
content.style.display = "grid";

body.classList.add("triceratops");

title.innerHTML = "三角龙";
}

\--- /code ---

\--- /task ---

\--- task ---

在 `// 选项 3` 注释下面，对你的第三个选项执行相同操作。

确保更新：

- 函数名称
- 添加到 body 的类
- 标题

\--- collapse ---

---

## title: 我的 option3 函数看起来应该是什么样的？

## --- code ---

language: javascript
filename: scripts.js
line_numbers: false
--------------------------------------------------------

// 选项 3
function option3(){
clear();

instruction.style.display = 'none';
content.style.display = "grid";

body.classList.add("stegosaurus");

title.innerHTML = "剑龙";
}

\--- /code ---

\--- /collapse ---

\--- /task ---

### 让选择发挥作用

为了测试你的代码，你需要将下拉菜单中的按钮链接到你刚刚编写的函数。

\--- task ---

打开 `index.html`。

为每个下拉按钮添加 `onclick` 属性，并调用这三个函数中对应的每一个函数。

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 15
line_highlights: 16-18
-----------------------------------------------------------

<div id="dropdown-options">
  <button onclick="option1()">霸王龙</button>
  <button onclick="option2()">三角龙</button>
  <button onclick="option3()">剑龙</button></div>

\--- /code ---

\--- /task ---

\--- task ---

**点击运行**

- 使用下拉菜单并选择你的选项。 你应该看到颜色的变化！

**调试**：如果你的颜色没有改变，请确保你在 JavaScript 中添加的类名与 CSS 中的类名**完全**匹配！

\--- /task ---

接下来，你将允许用户在选择一个选项时更改网页的内容！
