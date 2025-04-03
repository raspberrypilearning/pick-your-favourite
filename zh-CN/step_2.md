## 创建框架

在这个步骤中，你将为你的粉丝网站创建框架。 你还将选择一个起始背景颜色和下拉菜单，允许用户更改网页。

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

有很多主题以及这些主题中的选项可供选择 选择某个你想要向朋友或者家人展示的东西！

\--- /collapse ---

选择你的主题和该主题内的三个选项。

\--- /task ---

\--- task ---

打开[选择你最喜欢的入门项目](https://editor.raspberrypi.org/en/projects/pick-your-favourite-starter){:target="_blank"}

如果你已经登录，请将项目保存到你的帐户并更改名称。

\--- /task ---

\--- task ---

在 `<head>` 部分更改你的网页标题

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
    <button>T-Rex</button>
    <button>Triceratops</button>
    <button>Stegosaurus</button>
  </div>
</div>

\--- /code ---

**Tip:** Make sure you add your options (unless you are also doing dinosaurs)!

\--- /task ---

At the moment, the drop-down menu doesn't open. There is a function to open and close it in the `scripts.js` file.

\--- task ---

Add the function to open the drop-down menu, using the `onclick` attribute.

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 13
line_highlights: 14
--------------------------------------------------------

<div class="dropdown">
  <button onclick="openDropdown()">Choose a dinosaur &#9207;</button>
  <div id="dropdown-options">
    <button>T-Rex</button>
    <button>Triceratops</button>
    <button>Stegosaurus</button>
  </div>
</div>

\--- /code ---

\--- /task ---

### Add some instructions

Your user won't know what to do unless you tell them!

\--- task ---

Add the instructions in a `<section>` using a `<h1>` element:

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

### Make the page your own

Now it is time to style your web page with different fonts and colours.

\--- task ---

Add an appropriate font for your webpage from Google Fonts.

[[[google-fonts]]]

\--- /task ---

\--- task ---

打开 `default.css`.

Change the `--body-background` and `--body-text` colour variables to new colours of your choice.

## --- code ---

language: css
filename: default.css
line_numbers: true
line_number_start: 5
line_highlights: 6-8
---------------------------------------------------------

/\* Base Colours \*/
\--body-background: #FFFFFF;
\--body-text-colour: #000000;

\--- /code ---

[[[contrast-checker]]]

\--- /task ---

\--- task ---

Run your code to see your changes.

Adjust the colours if you want to.

\--- /task ---

### Add the content holder

Finally, you are going to add a grid to hold the content for each of your options. This won't contain anything yet.

\--- task ---

Open `index.html`.

Inside the `<main>` tags, add a new section with the id attribute `content-holder`.

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
    <h1>Select a team!</h1>
  </section>
  <section id="content-holder">
  
  </section>
</main>
```

\--- /code ---

\--- /task ---

\--- task ---

Inside the new section, add a title and three slots for content.

Use `id` attributes for the slots, you will use these later!

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 27
line_highlights: 28-31
-----------------------------------------------------------

```
  <section id="content-holder">
    <h1 id="title">Title</h1>
    <div id="slot-1" class="content"></div>
    <div id="slot-2" class="content"></div>
    <div id="slot-3" class="content"></div>
  </section>
</main> 
```

\--- /code ---

\--- /task ---

Next, you will add even more colours that will change depending on which option the user chooses!
