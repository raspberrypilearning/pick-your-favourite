## Create the frame

In this step you will create the frame for your fan website. Choosing a starting background colour and create the dropdown that allows users to change the webpage!

### What will the webpage be about?

--- task ---

What hobby or interest will you choose for your website?

+ ⚽️ **Sports**: Teams, players or leagues?
+ 👗 **Fashion**: Brands, trends, influencers or decades?
+ 🔬 **Science**: Wildlife, climate or theories?
+ 🎥 **TV & Film**: Anime, Series, Movies, Characters or Settings?
+ 🖥️ **Coding**: Languages, Devices or Software?
+ 🕹️ **Video Games**: Franchises, Characters, Genres or Consoles?
+ 🎨 **Art**: Art works, Mediums, Artists or Museums?
+ 👥 **Culture**: Festivals, holidays or historical events?

For the project you need to pick a theme, and three choices for the user to make within that theme

--- collapse ---

---
title: Some examples...
---

The example project uses **Football** as it's theme, and gives the user a choice between three teams:
1. Liverpool
2. Manchester City
3. Tottenham Hotspur

The "Dinosaur" example let's the user choose between different species of Dinosaur:
1. Tyrannosaurus Rex
2. Triceratops
3. Stegasaurus

There are many choices of themes, and options within those themes. Pick something you would love to show to your friends or family!

--- /collapse ---

Choose your theme and three options within that theme.

--- /task ---

### Add your options

--- task ---

Change the text in the drop down buttons to match your options:

--- code ---
---
language: html
filename: index
line_numbers: true
line_number_start: 
line_highlights: 
---

--- /code ---

--- /task ---

### Code to add

HTML
<section id="instruction">
    <h1>Select a team!</h1>
</section>

CSS: 

Inside body
background-color: #008000;
color: white;

Inside nav
background-color: #93bf85;

Update option button text and Choose text

HTML
<section id="content-holder">
    <h1 id="title">Title</h1>
    <div id="slot-1" class="content"></div>
    <div id="slot-2" class="content"></div>
    <div id="slot-3" class="content"></div>
</section>

Update CSS
inside content-holder
display: none;