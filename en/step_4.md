## Change the text

In this step you will add the text content to your webpage for each of the options, and add colours for each of the content slots. 

### What content will you add?

--- task ---

Decide what the titles of each of your content slots will be.

**Think about**
+ What three things should someone know about your options?
+ What categories could you write about for each option?
+ What three things should all fans of your theme know about?

--- collapse ---

---
title: Some examples...
---

The Football example had slots for:
+ Match results
+ News
+ Top players

The content for these changed depending which **team** the user chooses.

The Dinosaur example had slots for:
+ Anatomy and Characteristics
+ Trivia
+ An activity

And the content in them changes depending what **species of Dinosaur** the user selects.

--- /collapse ---

--- /task ---

### Creating the first slot

You are going to create the content for the first slot, for all three options and also set a colour for it.

--- task ---

Open `index.html` and add a line break in between the `<div>` with the id `slot-1`.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 27
line_highlights: 30
---

<section id="content-holder">
  <h1 id="title">Title</h1>
  <div id="slot-1" class="content">
    
  </div>
  <div id="slot-2" class="content"></div>
  <div id="slot-3" class="content"></div>
</section>

--- /code ---

--- /task ---

--- task ---

Add a heading for the content slot using `<h1>` tags. 

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 27
line_highlights: 30
---

<section id="content-holder">
  <h1 id="title">Title</h1>
  <div id="slot-1" class="content">
    <h1>Slot Heading</h1>
  </div>
  <div id="slot-2" class="content"></div>
  <div id="slot-3" class="content"></div>
</section>

--- /code ---

--- /task ---

--- task ---

Add content for this slot for the **first option** a user can choose.

You can use `<p>`, `<ul>`, `<ol>` or any other elements you have experience with. 

--- collapse ---

---
title: Some examples...
---

### Dinosaurs

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 27
line_highlights: 30
---

<section id="content-holder">
  <h1 id="title">Title</h1>
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

--- /code ---

### Football

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 27
line_highlights: 30
---

<section id="content-holder">
  <h1 id="title">Title</h1>
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

--- /code ---

--- /collapse ---

Run your code, and select the first option from your dropdown. 

Make sure your content displays as you would like.

--- /task ---

The background colour is the same as the webpage, which looks a bit rubbish. 

Next you are going to add the colours for the first option. 

--- task ---

Open `default.css` and add a new colour for your first option, call the variable `--slot1-classname` - replacing the end with your class for the first option.

--- /task ---

--- task ---

Open `style.css` and find the `/* Slot 1 classes */` comment on line 128. 

Add a new selector for the `slot-1` id and add a class for your first option...

The football example looked like this:

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 128
line_highlights: 129-131
---

/* Slot 1 classes */
#slot-1.liverpool {
    
}

--- /code ---

This selector will style the element with id `slot-1` and the class `liverpool`.

--- /task ---

--- task ---

Add your background colour to this selector

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 128
line_highlights: 129-131
---

/* Slot 1 classes */
#slot-1.liverpool {
    background-color: var(--slot1-liverpool);
}

--- /code ---

--- /task ---

Now you are going to add the JavaScript that will add the class to slot 1 and fill it with your content!

--- task ---

Open `scripts.js` and find your `option1` function. 

Use the constant `slot1` to add your class to the content slot.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 36
line_highlights: 46
---

function option1(){
  clear();

  instruction.style.display = 'none';
  content.style.display = "grid";

  body.classList.add("liverpool");

  title.innerHTML = "Liverpool";

  slot1.classList.add("liverpool");
}

--- /code ---

Run your code, and select the first option.

You should see the colour you chose now!

--- /task ---

--- task ---

Add a line to change the `innerHTML` of `slot1`. 

--- code ---
---
language: css
filename: style.css
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

Open `index.html`. 

Highlight and copy (<kbd>Ctrl</kbd>+<kbd>C</keyboard>/<kbd>Cmd</kbd>+<kbd>C</keyboard>) the content inside the `slot-1` div. 

--- /task ---

--- task ---

Back in `scripts.js` paste (<kbd>Ctrl</kbd>+<kbd>V</keyboard>/<kbd>Cmd</kbd>+<kbd>V</keyboard>) the content in between the speech marks `""`.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 46
line_highlights: 47
---

  slot1.classList.add("liverpool")
  slot1.innerHTML = "<h1>Recent results</h1>
          <p>Liverpool 4 - 1 Chelsea</p>
          <p>Liverpool 5 - 2 Norwich City</p>
          <p>Fulham 1 - 1 Liverpool</p>
          <p>Bournemouth 0 - 4 Liverpool</p>
          <p>Liverpool 2 - 1 Fulham</p>";
}

--- /code ---

--- /task ---

--- task ---

Add `\n \` to add a line break to the end of every line, **except** the last one.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 46
line_highlights: 47
---

  slot1.classList.add("liverpool")
  slot1.innerHTML = "<h1>Recent results</h1> \n \
          <p>Liverpool 4 - 1 Chelsea</p> \n \
          <p>Liverpool 5 - 2 Norwich City</p> \n \
          <p>Fulham 1 - 1 Liverpool</p> \n \
          <p>Bournemouth 0 - 4 Liverpool</p>\n \
          <p>Liverpool 2 - 1 Fulham</p>";
}

--- /code ---

--- /task ---

--- task ---

Now open `index.html` and delete the content inside the `slot-1` div. 

--- code ---
---
language: html
filename: index
line_numbers: true
line_number_start: 27
line_highlights: 29
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

