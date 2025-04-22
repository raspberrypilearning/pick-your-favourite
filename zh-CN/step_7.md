## 让选择永久生效

在此步骤中，你将使用用户的 Web 浏览器中的本地存储来保存他们的选择，因此无论何时加载页面，它都会保留他们选择的颜色和内容！

### 保存用户的选择

你将向每个选项函数添加代码行，让用户在选择一个选项时在 localStorage 中设置一个变量。

\--- task ---

打开 `scripts.js` 并找到你的 `option1()` 函数。

\--- /task ---

\--- task ---

在函数底部，添加`localStorage.setItem()`，它会创建一个存储变量。

括号内：

- 提供变量的名称：`"choice"`
- 在引号`""`中添加你第一个选项的名称，用逗号分隔。

足球示例如下所示：

## --- code ---

language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 7
-------------------------------------------------------

slot3.classList.add("liverpool");
slot3.innerHTML = "<h1>最佳球员</h1> \n \<p>穆罕默德·萨拉赫</p>\n \
<p>维吉尔·范戴克</p>\n \
<p>特伦特·亚历山大-阿诺德</p>";

localStorage.setItem("choice", "liverpool");
}

\--- /code ---

\--- /task ---

\--- task ---

复制代码行并将其放在你的 `option2()` 和 `option3()` 函数的底部，更改变量的值以匹配这些选项。

\--- /task ---

### 检查页面加载时的选项

接下来，你将创建一个函数来检查该变量是否在页面加载时被设置。

\--- task ---

在 `scripts.js`中找到 `// 加载事件` 注释。

下面，使用 `document.addEventListener()` 创建一个在页面加载时运行的函数。

## --- code ---

language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 2-3
---------------------------------------------------------

// 加载事件
document.addEventListener("DOMContentLoaded", function () {

});

\--- /code ---

\--- /task ---

\--- task ---

在事件监听器中，创建一个新的 `常量` 来保持 `localStorage` 中的变量 `choice` 包含的值。

## --- code ---

language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 3
-------------------------------------------------------

// 加载事件
document.addEventListener("DOMContentLoaded", function () {
const choice = localStorage.getItem("choice");
});

\--- /code ---

\--- /task ---

\--- task ---

创建一个 `if` 语句来检查 `choice` 值是否是第一个选项。

如果是，则调用你的 `option1()` 函数。

## --- code ---

language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 4-6
---------------------------------------------------------

// 加载事件
document.addEventListener("DOMContentLoaded", function () {
const choice = localStorage.getItem("choice");

if (choice == "liverpool"){
option1();
}
});

\--- /code ---

\--- /task ---

\--- task ---

最后，添加两个 `else if` 语句来检查另外两个选项，并调用它们的函数。

## --- code ---

language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 7-10
----------------------------------------------------------

// 加载事件
document.addEventListener("DOMContentLoaded", function () {
const choice = localStorage.getItem("choice");

if (choice == "liverpool"){
option1();
} else if (choice == "man-city"){
option2();
} else if (choice == "tottenham"){
option3();
}
});

\--- /code ---

\--- /task ---

\--- task ---

**点击运行**

- 选择一个选项。

**点击运行** (再次)

- 页面应该保持不变。

尝试更改选项，然后再次单击**运行**，页面应保留你选择的最后一个选项。

\--- /task ---

### 重置选择

你还需要创建一个选项，让用户重置他们的选择并再次查看说明。

\--- task ---

在 `scripts.js` 中找到 `// 重置` 注释。

创建一个名为`reset`的新函数。

该函数将清除选择，隐藏内容，显示说明，并清除 `localStorage` 变量。

## --- code ---

language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 2-7
---------------------------------------------------------

// 重置
function reset(){
clear();
content.style.display = "";
instruction.style.display = 'flex';
localStorage.setItem("choice", "");
}

\--- /code ---

\--- /task ---

\--- task ---

打开 `index.html`

在下拉菜单中添加一个新按钮，以便用户可以重置页面。

## --- code ---

language: html
filename: index.html
line_numbers: false
line_highlights: 5
-------------------------------------------------------

```
    <div id="dropdown-options">
      <button onclick="option1()">利物浦</button>
      <button onclick="option2()">曼城</button>
      <button onclick="option3()">托特纳姆</button>
      <button onclick="reset()">重置</button>
    </div>
```

\--- /code ---

\--- /task ---

\--- task ---

**点击运行**

- 通过选择一个选项来测试你的重置按钮，点击**运行**，然后重置。

\--- /task ---

做得好，你制作了一个很棒的粉丝网页，并使用了你新掌握的 CSS 和 JavaScript 技能让它变得更加精彩！
