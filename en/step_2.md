## Create the frame

In this step you will create the frame for your fan website. You will also choose a starting background colour and the drop-down that allows users to change the webpage!

### What will the webpage be about?

--- task ---

What hobby or interest will you choose for your website?

+ ⚽️ **Sports**: Teams, players or leagues?
+ 👗 **Fashion**: Brands, trends, influencers or decades?
+ 🔬 **Science**: Wildlife, climate or theories?
+ 🎥 **TV & Film**: Anime, series, movies, characters or settings?
+ 🖥️ **Coding**: Languages, Devices or Software?
+ 🕹️ **Video Games**: Franchises, characters, genres or consoles?
+ 🎨 **Art**: Art works, mediums, artists or museums?
+ 👥 **Culture**: Festivals, holidays or historical events?

For the project you need to pick a theme, and three choices for the user to make within that theme.

--- collapse ---

---
title: Some examples...
---

The example project uses **Football** as its theme, and gives the user a choice between three teams:
1. Liverpool
2. Manchester City
3. Tottenham Hotspur

The **Dinosaur** example lets the user choose between different species of Dinosaur:
1. Tyrannosaurus Rex
2. Triceratops
3. Stegosaurus

There are many choices of themes, and options within those themes. Pick something you would love to show to your friends or family!

--- /collapse ---

Choose your theme and three options within that theme.

--- /task ---

### Create your options

--- task ---

Change the text in the button and drop-down options to match your idea!

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 12
line_highlights: 13, 15-17
---

<div class="dropdown">
  <button>Choose a Dinosaur &#9207;</button>
  <div id="dropdown-options">
    <button>T-Rex</button>
    <button>Triceratops</button>
    <button>Stegosaurus</button>
  </div>
</div>

--- /code ---

**Tip** - Make sure you add your options (unless you are also doing dinosaurs)!

--- /task ---

At the moment the drop-down doesn't open, there is a function to open and close it in the `script.js` file. 

--- task ---

Add the function to open the drop-down, using the `onclick` attribute.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 12
line_highlights: 13
---

<div class="dropdown">
  <button onclick="openDropdown()">Choose a Dinosaur &#9207;</button>
  <div id="dropdown-options">
    <button>T-Rex</button>
    <button>Triceratops</button>
    <button>Stegosaurus</button>
  </div>
</div>

--- /code ---

--- /task ---

### Add some instructions

Your user won't know what to do unless you tell them! 

--- task ---

Add the instructions in a `<section>` using a `<h1>` element:

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 22
line_highlights: 23-25
---

<main>
  <section id="instruction">
    <h1>Select a team!</h1>
  </section>
</main>

--- /code ---

--- /task ---

### Make the page your own

The page is looking pretty boring now, time for you to make it look awesome!

**TODO** - Add a Google font << Make into import statements

--- task ---

Add an appropriate font for your webpage from Google Fonts.

[[[included-fonts]]]

[[[web-fonts]]]

[[[google-fonts]]]

--- /task ---

--- task ---

Open `default.css`. 

Change the `--body-background`, `--body-text` and `--nav-bar` colour variables to new colours of your choice.

--- code ---
---
language: css
filename: default.css
line_numbers: true
line_number_start: 7
line_highlights: 8-10
---

/* Base Colours */
  --body-background: #FFFFFF;
  --body-text-colour: #000000;
  --nav-bar: #FFFFFF;

--- /code ---

[[[contrast-checker]]]

Run your code to see your changes, adjust the colours if you want to. 

--- /task ---

### Add the content holder

Finally you are going to add a grid to hold the content for each of your options, this won't contain anything yet. 

--- task ---

Open `index.html`. 

Inside the `<main>` tags, add a new section with the id attribute `content-holder`. 

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 27
line_highlights: 27-29
---

  <section id="content-holder">

  </section>
</main> 

--- /code ---

--- /task ---

--- task ---

Inside the new section, add a title and three slots for content. 

Use `id` attributes for the slots, you will use these later!

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 27
line_highlights: 28-31
---

  <section id="content-holder">
    <h1 id="title">Title</h1>
    <div id="slot-1" class="content"></div>
    <div id="slot-2" class="content"></div>
    <div id="slot-3" class="content"></div>
  </section>
</main> 

--- /code ---

--- /task ---

Next you will add even more colours that will change depending on which option the user chooses!