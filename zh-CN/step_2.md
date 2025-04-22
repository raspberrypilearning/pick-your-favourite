## 创建框架

在此步骤中，你将为你的粉丝网站创建框架。 你还将选择一个起始背景颜色和下拉菜单，允许用户更改网页。

### 这个网页是关于什么的？

\--- task ---

你会为你的网站选择什么兴趣爱好？

- ⚽️ **体育**：球队、球员还是联盟？
- 👗 **时尚**：品牌、趋势、影响者还是年代？
- 🔬 **科学**：野生动物、气候还是理论？
- 🎥 **电视和电影**：动漫、连续剧、电影、角色或场景？
- 🖥️ **编码**：语言、设备还是软件？
- 🕹️ **电子游戏**：系列、角色、类型还是游戏机？
- 🎨 **艺术**：艺术作品、媒介、艺术家还是博物馆？
- 👥 **文化**：节日、假期还是历史事件？

对于这个项目，你需要选择一个主题，并在这个主题内提供三个选项给用户选择

\--- collapse ---

---

## title: 一些示例...

示例项目使用**足球**作为主题，并让用户在三支球队之间做出选择：

1. Liverpool
2. 曼城
3. 托特纳姆热刺

**恐龙**示例让用户可以在不同种类的恐龙之间进行选择：

1. 霸王龙
2. 三角龙
3. 剑龙

有很多主题以及这些主题中的选项可供选择。 选择某个你想要向朋友或者家人展示的东西！

\--- /collapse ---

选择你的主题和该主题内的三个选项。

\--- /task ---

\--- task ---

打开[选择你最喜欢的入门项目](https://editor.raspberrypi.org/en/projects/pick-your-favourite-starter){:target="_blank"}

如果你已经登录，请将项目保存到你的帐户并更改名称。

\--- /task ---

\--- task ---

在 `<head>` 部分更改你的网页标题。

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 8
------------------------------------------------------------------------------

<title>给你的页面起一个标题</title>

\--- /code ---

\--- /task ---

### 创建你的选项

\--- task ---

更改按钮和下拉选项中的文本以匹配你的想法！

**确保**在末尾保留箭头的 unicode — `&#9207;`。

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 13
line_highlights: 14, 16-18
---------------------------------------------------------------

<div class="dropdown">
  <button>选择一个恐龙 &#9207;</button>
  <div id="dropdown-options">
    <button>霸王龙</button>
    <button>三角龙</button>
    <button>剑龙</button>
  </div>
</div>

\--- /code ---

\*\*提示：\*\*确保你添加了你的选项（除非你还在处理恐龙）！

\--- /task ---

目前，下拉菜单尚未打开。 在 `scripts.js` 文件中有一个打开和关闭它的函数。

\--- task ---

使用 `onclick` 属性来添加打开下拉菜单的函数。

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 13
line_highlights: 14
--------------------------------------------------------

<div class="dropdown">
  <button onclick="openDropdown()">选择一个恐龙 &#9207;</button>
  <div id="dropdown-options">
    <button>霸王龙</button>
    <button>三角龙</button>
    <button>剑龙</button>
  </div>
</div>

\--- /code ---

\--- /task ---

### 添加一些说明

你的用户不知道该做什么，除非你告诉他们！

\--- task ---

使用一个 `<h1>` 元素在 `<section>` 中添加说明。

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 23
line_highlights: 24-26
-----------------------------------------------------------

<main>
  <section id="instruction">
    <h1>选择一个球队！</h1>
  </section>
</main>

\--- /code ---

\--- /task ---

### 打造你自己的页面

现在是时候用各种字体和颜色来设计您的网页了。

\--- task ---

从 Google Fonts 中为你的网页添加合适的字体。

[[[google-fonts]]]

\--- /task ---

\--- task ---

打开 `default.css`。

将 `--body-background` 和 `--body-text` 颜色变量更改为你选择的新颜色。

## --- code ---

language: css
filename: default.css
line_numbers: true
line_number_start: 5
line_highlights: 6-8
---------------------------------------------------------

/\* 基本颜色 \*/
\--body-background: #FFFFFF;
\--body-text-colour: #000000;

\--- /code ---

[[[contrast-checker]]]

\--- /task ---

\--- task ---

运行你的代码来查看你的更改。

如果你需要的话，请调整颜色。

\--- /task ---

### 添加内容容器

最后，你将添加一个网格来保存每个选项的内容。 这暂时不包含任何内容。

\--- task ---

打开 `index.html`。

在 `<main>` 标签中，添加一个带有 id 属性 `content-holder` 的新部分。

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 23
line_highlights: 27-29
-----------------------------------------------------------

```
<main>
  <section id="instruction">
    <h1>选择一个团队！</h1>
  </section>
  <section id="content-holder">
  
  </section>
</main>
```

\--- /code ---

\--- /task ---

\--- task ---

在新的部分内，添加标题和三个内容槽。

给插槽添加 `id` 属性，你稍后会用到它们！

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 27
line_highlights: 28-31
-----------------------------------------------------------

```
  <section id="content-holder">
    <h1 id="title">标题</h1>
    <div id="slot-1" class="content"></div>
    <div id="slot-2" class="content"></div>
    <div id="slot-3" class="content"></div>
  </section>
</main> 
```

\--- /code ---

\--- /task ---

接下来，你将添加更多颜色，它们会根据用户的选择而发生变化！
