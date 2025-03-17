## 更改一些内容

In this step, you will add the text content and colours to the first paragraph on your webpage for each of the options.

### What content will you add?

\--- task ---

Decide what the titles of each of your content paragraphs will be.

**Think about**

- What three things should all fans of your theme know about?
- What categories could you write about for each option?
- What three things do all three options share?

\--- collapse ---

---

## title: Some examples

**The football example has paragraph slots for:**

- Match results
- News
- Top players

The content changes depending on which football **team** the user chooses.

**The dinosaur example has paragraph slots for:**

- Anatomy and characteristics
- Trivia
- An activity

The content changes depending on which dinosaur **species** the user chooses.

\--- /collapse ---

\--- /task ---

### Creating the text for the first paragraph

You are going to create the content for the first paragraph — for all three options — and also set a colour for it.

\--- task ---

Open `index.html` and add a line break in between the opening and closing `<div>` tags (with the id `slot-1`).

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 27
line_highlights: 29-31
-----------------------------------------------------------

<section id="content-holder">
  <h1 id="title">标题</h1>
  <div id="slot-1" class="content">

  </div>
  <div id="slot-2" class="content"></div>
  <div id="slot-3" class="content"></div>
</section>

\--- /code ---

**Tip:** Make sure you put your cursor between the opening `<div>` and the closing `</div>` before putting the line break in.

\--- /task ---

\--- task ---

Add a heading for the content slot using `<h1>` tags.

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 27
line_highlights: 30
--------------------------------------------------------

<section id="content-holder">
  <h1 id="title">标题</h1>
  <div id="slot-1" class="content">
    <h1>Slot Heading</h1>
  </div>
  <div id="slot-2" class="content"></div>
  <div id="slot-3" class="content"></div>
</section>

\--- /code ---

\--- /task ---

\--- task ---

Add content for this slot for the **first option** a user can choose.

You can use `<p>`, `<ul>`, `<ol>`, or any other elements you have experience with.

\--- collapse ---

---

## title: Some examples

### Dinosaurs

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 27
line_highlights: 30
--------------------------------------------------------

<section id="content-holder">
  <h1 id="title">标题</h1>
  <div id="slot-1" class="content">
    <h1>Anatomy and Characteristics</h1>
    <p>One of the largest meat-eating dinosaurs</p> 
    <p>Powerful hind limbs</p> 
    <p>Massive skull with sharp teeth</p>
    <p>Tiny, two-fingered forelimbs</p>
  </div>
  <div id="slot-2" class="content"></div>
  <div id="slot-3" class="content"></div>
</section>

\--- /code ---

### Football

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 27
line_highlights: 30
--------------------------------------------------------

<section id="content-holder">
  <h1 id="title">标题</h1>
  <div id="slot-1" class="content">
    <h1>Recent results</h1>
    <p>Liverpool 4 - 1 Chelsea</p>
    <p>Liverpool 5 - 2 Norwich City</p>
    <p>Fulham 1 - 1 Liverpool</p>
    <p>Bournemouth 0 - 4 Liverpool</p>
    <p>Liverpool 2 - 1 Fulham</p>
  </div>
  <div id="slot-2" class="content"></div>
  <div id="slot-3" class="content"></div>
</section>

\--- /code ---

\--- /collapse ---

Run your code, and select the first option from your drop-down menu.

Make sure that you can see the content you have written.

\--- /task ---

### Add colour to the first slot

The background colour is the same as the webpage. Next, you will add new colours for the first option.

\--- task ---

Open `default.css` and add a new colour for your first option, call the variable `--slot1-classname` — replacing the end with your class for the first option.

\--- /task ---

\--- task ---

Open `style.css` and find the `/* Slot 1 classes */` comment on line 128.

Add a new selector for the `slot-1` ID and add a class for your first option.

The **football** example looked like this:

## --- code ---

language: css
filename: style.css
line_numbers: false
line_highlights: 2-4
---------------------------------------------------------

/\* Slot 1 classes \*/
\#slot-1.liverpool {

}

\--- /code ---

This selector will style the element with id `slot-1` and the class `liverpool`.

\--- /task ---

\--- task ---

Add your background colour to this selector.

## --- code ---

language: css
filename: style.css
line_numbers: false
line_highlights: 3
-------------------------------------------------------

/\* Slot 1 classes \*/
\#slot-1.liverpool {
background-color: var(--slot1-liverpool);
}

\--- /code ---

\--- /task ---

### Use JavaScript to add the content and colours

Now, you are going to write the JavaScript that adds the class to slot 1 and fill it with your content.

\--- task ---

Open `scripts.js` and find your `option1` function.

Use the constant `slot1` to add your class to the content slot.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 36
line_highlights: 46
--------------------------------------------------------

function option1(){
clear();

instruction.style.display = 'none';
content.style.display = "grid";

body.classList.add("liverpool");

title.innerHTML = "Liverpool";

slot1.classList.add("liverpool");
}

\--- /code ---

Run your code, and select the first option.

You should see the colour you chose now!

\--- /task ---

\--- collapse ---

---

## title: My text colour isn't very visible

When you see your colours, you might want to change the text colour of your content.

Make sure they contrast well with the background colour you have chosen.

**Tip:** To make life easier, choose `black` or `white` text.

Add the `color` property to your selector.

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 128
line_highlights: 131
---------------------------------------------------------

/\* Slot 1 classes \*/
\#slot-1.liverpool {
background-color: var(--slot1-liverpool);
color: white;
}

\--- /code ---

\--- /collapse ---

\--- task ---

Add a line to change the `innerHTML` of `slot1`.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 46
line_highlights: 47
--------------------------------------------------------

slot1.classList.add("liverpool")
slot1.innerHTML = "";
}

\--- /code ---

\--- /task ---

\--- task ---

Open `index.html`.

Highlight and copy (<kbd>Ctrl</kbd>+<kbd>C</kbd> or <kbd>Cmd</kbd>+<kbd>C</kbd>) the content inside the `slot-1` div.

\--- /task ---

\--- task ---

Open `scripts.js`.

Paste (<kbd>Ctrl</kbd>+<kbd>V</kbd> or <kbd>Cmd</kbd>+<kbd>V</kbd>) the content in between the speech marks `""`.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 46
line_highlights: 47-52
-----------------------------------------------------------

slot1.classList.add("liverpool")
slot1.innerHTML = "<h1>Recent results</h1><p>Liverpool 4 - 1 Chelsea</p>
<p>Liverpool 5 - 2 Norwich City</p>
<p>Fulham 1 - 1 Liverpool</p>
<p>Bournemouth 0 - 4 Liverpool</p>
<p>Liverpool 2 - 1 Fulham</p>";
}

\--- /code ---

\--- /task ---

\--- task ---

Add `\n \` to add a line break to the end of every line, **except** the last one.

## --- code ---

language: js
filename: scripts.js
line_numbers: true
line_number_start: 46
line_highlights: 47-51
-----------------------------------------------------------

slot1.classList.add("liverpool")
slot1.innerHTML = "<h1>Recent results</h1> \n \<p>Liverpool 4 - 1 Chelsea</p> \n \
<p>Liverpool 5 - 2 Norwich City</p> \n \
<p>Fulham 1 - 1 Liverpool</p> \n \
<p>Bournemouth 0 - 4 Liverpool</p>\n \
<p>Liverpool 2 - 1 Fulham</p>";
}

\--- /code ---

\--- /task ---

\--- task ---

Now, open `index.html` and delete the content inside the `slot-1` div.

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 27
line_highlights: 29
--------------------------------------------------------

  <section id="content-holder">
    <h1 id="title">标题</h1>
    <div id="slot-1" class="content"></div>
    <div id="slot-2" class="content"></div>
    <div id="slot-3" class="content"></div>
  </section>
</main> 

\--- /code ---

\--- /task ---

### Change the content for options 2 and 3

Now that option 1 works for your first slot, it is time to add the content and colours for your second option.

\--- task ---

Add a slot 1 colour to `default.css` for your second option.

\--- /task ---

\--- task ---

Open `style.css` and underneath your first slot1 selector, add a new one for your second option.

The selector must start with `#slot-1.` and end with your second option class.

The football one looks like this:

## --- code ---

language: css
filename: style.css
line_numbers: false
line_highlights: 6-8
---------------------------------------------------------

/\* Slot 1 classes \*/
\#slot-1.liverpool {
background-color: var(--slot1-liverpool);
}

\#slot-1.man-city {

}

\--- /code ---

\--- /task ---

\--- task ---

Set the `background-color` property in your new selector to the colour variable you made for it.

## --- code ---

language: css
filename: style.css
line_numbers: false
line_highlights: 2
-------------------------------------------------------

\#slot-1.man-city {
background-color: var(--slot-1-man-city);
}

\--- /code ---

\--- /task ---

Now, you are going to add to your `option2()` function, so it applies the class and changes the content.

\--- task ---

Find your `option2()` function in `scripts.js`.

Add a line to apply your new class to it.

The **football** example looked like this:

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_number_start: 36
line_highlights: 46
--------------------------------------------------------

function option2(){
clear();

instruction.style.display = 'none';
content.style.display = "grid";

body.classList.add("man-city");

title.innerHTML = "man-city";

slot1.classList.add("man-city");
}

\--- /code ---

\--- /task ---

\--- task ---

In your `option1` function, copy the lines that changed the `innerHTML` for slot 1.

Paste them inside the `option2` function.

Edit the lines of text so they are about your second option. The football example looked like this (with Manchester City's results instead of Liverpool's):

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_number_start: 46
line_highlights: 48-52
-----------------------------------------------------------

slot1.classList.add("man-city");
slot1.innerHTML = "<h1>Recent results</h1> \n \<p>Man City 3 - 1 Burnley</p> \n \
<p>Tottenham 0 - 1 Man City</p> \n \
<p>Newcastle 2 - 3 Man City</p> \n \
<p>Man City 5 - 0 Huddersfield</p> \n \
<p>Man City 2 - 0 Sheffield United</p>";
}

\--- /code ---

\--- /task ---

\--- task ---

Run your code and select your second option. You should see your new colour and content appear!

You might want to add a `color` property to the class to change the text colour to make it more visible.

\--- /task ---

To finish this step, you are going to repeat the same process again but for the **third option**.

\--- task ---

Add a new colour to `default.css`.

Open `style.css` and add a new selector for `#slot-1` using your third class name.

\--- /task ---

\--- task ---

Open `scripts.js` and copy all the slot 1 lines from your `option2` function.

Paste them at the bottom of your `option3` function.

\--- /task ---

\--- task ---

Change the name of the class to your third option class.

Update the content to match your third option.

\--- /task ---

Now that you have functions to show your content, you want to hide it before the user chooses an option.

\--- task ---

Open `style.css` and find the `#content-holder` selector.

Set its `display` property to `none`.

## --- code ---

language: css
filename: style.css
line_numbers: false
line_number_start: 91
line_highlights: 93
--------------------------------------------------------

\#content-holder {
grid-template-rows: repeat(3, 100vh auto);
display: none;
}

\--- /code ---

\--- /task ---

\--- task ---

### Test your project

**Click Run**

- Select an option and scroll down, make sure the colours and content look how you want them to.

\--- /task ---

Next, you will add the colours, classes, and code for the second and third content slots. Then you will have a whole webpage that changes, not just one slot!
