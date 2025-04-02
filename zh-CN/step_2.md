## 创建框架

In this step, you will create the frame for your fan website. You will also choose a starting background colour and the drop-down menu that allows users to change the webpage.

### What will the webpage be about?

\--- task ---

What hobby or interest will you choose for your website?

- ⚽️ **Sports**: Teams, players, or leagues?
- 👗 **Fashion**: Brands, trends, influencers, or decades?
- 🔬 **Science**: Wildlife, climate, or theories?
- 🎥 **TV & film**: Anime, series, movies, characters, or settings?
- 🖥️ **Coding**: Languages, devices, or software?
- 🕹️ **Video games**: Franchises, characters, genres, or consoles?
- 🎨 **Art**: Art works, mediums, artists, or museums?
- 👥 **Culture**: Festivals, holidays, or historical events?

For this project, you need to pick a theme and three choices for the user to make within that theme.

\--- collapse ---

---

## title: Some examples...

The example project uses **football** as its theme, and gives the user a choice between three teams:

1. Liverpool
2. 曼城
3. 托特纳姆热刺

The **dinosaur** example lets the user choose between different species of dinosaur:

1. Tyrannosaurus Rex
2. 三角龙
3. 剑龙

There are many choices of themes, and options within those themes. Pick something you would love to show to your friends or family!

\--- /collapse ---

Choose your theme and three options within that theme.

\--- /task ---

\--- task ---

Open the [Pick your favourite starter project](https://editor.raspberrypi.org/en/projects/pick-your-favourite-starter){:target="_blank"}

If you are logged in, save the project to your account and change the name.

\--- /task ---

\--- task ---

Change the title of your webpage in the `<head>` section.

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 8
------------------------------------------------------------------------------

<title>给你的页面起一个标题</title>

\--- /code ---

\--- /task ---

### Create your options

\--- task ---

Change the text in the button and drop-down options to match your idea!

**Make sure** to leave the unicode for the arrow  — `&#9207;` — at the end.

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 13
line_highlights: 14, 16-18
---------------------------------------------------------------

<div class="dropdown">
  <button>Choose a dinosaur &#9207;</button>
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

Open `default.css`.

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
