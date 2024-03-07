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

### Code to add

// Option 1
function option1(){
    clear();

    instruction.style.display = 'none';
    content.style.display = "grid";
    
    body.classList.add("liverpool");

    title.innerHTML = "Liverpool FC";
    
    slot1.classList.add("liverpool");
    slot1.innerHTML = "<h1>Recent results</h1> \n \
        <p>Liverpool 4 - 1 Chelsea</p> \n \
        <p>Liverpool 5 - 2 Norwich City</p> \n \
        <p>Fulham 1 - 1 Liverpool</p> \n \
        <p>Bournemouth 0 - 4 Liverpool</p> \n \
        <p>Liverpool 2 - 1 Fulham</p>";
    
    slot2.classList.add("liverpool");
    slot2.innerHTML = "<h1>Recent News</h1> \n \
        <p>Jurgen Klopp is leaving Liverpool.</p>\n \
        <p>Alexis MacAllister will probably play against Arsenal.</p>\n \
        <p>Liverpool still title favourites, but only just.</p>";
    
    slot3.classList.add("liverpool");
    slot3.innerHTML = "<h1>Top Players</h1> \n \
        <p>Mohamed Salah</p>\n \
        <p>Virgil Van Dyke</p>\n \
        <p>Trent Alexander Arnold</p>";

}

// Option 2
function option2(){
    clear();

    instruction.style.display = 'none';
    content.style.display = "grid";
    
    body.classList.add("man-city");

    title.innerHTML = "Manchester City";

    slot1.classList.add("man-city");
    slot1.innerHTML = "<h1>Recent results</h1> \n \
        <p>Man City 3 - 1 Burnley</p> \n \
        <p>Tottenham 0 - 1 Man City</p> \n \
        <p>Newcastle 2 - 3 Man City</p> \n \
        <p>Man City 5 - 0 Huddersfield</p> \n \
        <p>Man City 2 - 0 Sheffield United</p>";
    
    slot2.classList.add("man-city");
    slot2.innerHTML = "<h1>Recent News</h1> \n \
        <p>Kevin De Bruyne is back!</p>\n \
        <p>Erling Haaland wants to leave Manchester for Real Madrid.</p>\n \
        <p>Pep Guardiola making exit plans, wants to leave.</p>";
    
    slot3.classList.add("man-city");
    slot3.innerHTML = "<h1>Top Players</h1> \n \
        <p>Erling Haaland</p>\n \
        <p>Phil Foden</p>\n \
        <p>Bernardo Silva</p>";

}

// Option 3
function option3(){
    clear();

    instruction.style.display = 'none';
    content.style.display = "grid";
    
    body.classList.add("tottenham");

    title.innerHTML = "Tottenham Hotspur";

    slot1.classList.add("tottenham");
    slot1.innerHTML = "<h1>Recent results</h1> \n \
        <p>Tottenham 3 - 2 Brentford</p> \n \
        <p>Tottenham 0 - 1 Man City</p> \n \
        <p>Man United 2 - 2 Tottenham</p> \n \
        <p>Tottenham 1 - 0 Burnley</p> \n \
        <p>Tottenham 3 - 1 Bournemouth</p>";
    
    slot2.classList.add("tottenham");
    slot2.innerHTML = "<h1>Recent News</h1> \n \
        <p>Lucas Bergvall chooses Tottenham over Barcelona.</p>\n \
        <p>Alfie Dorrington adds to growing list of hamstring injuries at Spurs.</p>\n \
        <p>Spurs still struggling to replace Harry Kane</p>";
    
    slot3.classList.add("tottenham");
    slot3.innerHTML = "<h1>Top Players</h1> \n \
        <p>Heung-Min Son</p>\n \
        <p>Richarlison</p>\n \
        <p>Pedro Porro</p>";
    
}

CSS - Update the classes to style the content

#slot-1.liverpool {
    background-color: rgba(0, 178, 169, 0.8);
    
    h1 {
        color: #F6EB61;
    }
}

#slot-1.man-city {
    background-color: rgba(28, 44, 91, 0.8);

    h1 {
        color: rgb(255, 198, 89);
    }
}

#slot-1.tottenham {
    background-color: rgba(19, 34, 87, 0.8);
    color: white;
    h1 {
        color: white;
    }
}

#slot-2.liverpool {
    background-color: rgba(246, 235, 97, 0.8);
    color: black;
    h1 {
        color: rgb(0, 178, 169);
    }
}

#slot-2.man-city {
    background-color: rgba(255, 198, 89, 0.8);
    color: black;
    h1 {
        color: rgb(28, 44, 91);
    }
}

#slot-2.tottenham {
    background-color: rgba(19, 31, 83, 0.8);
    color: white;
    h1 {
        color: white;
    }
}

#slot-3.liverpool {
    background-color: rgba(0, 178, 169, 0.8);

    h1 {
        color: #F6EB61;
    }
}

#slot-3.man-city {
    background-color: rgba(236, 51, 37, 0.8);
    color: white;
    h1 {
        color: rgb(255, 198, 89);
    }
}


#slot-3.tottenham {
    background-color: rgba(19, 31, 83, 0.8);
    color: white;
    h1 {
        color: white;
    }
}