## Wijzig de rest van de pagina

In this step, you will make your whole webpage change when the user chooses an option.

### Add content for slot 2

The process for adding content to slot 2 is very similar to what you did in the previous step. To make this process quicker, use copy (<kbd>Ctrl</kbd>+<kbd>C</kbd> or <kbd>Cmd</kbd>+<kbd>C</kbd>) and paste (<kbd>Ctrl</kbd>+<kbd>V</kbd> or <kbd>Cmd</kbd>+<kbd>V</kbd>) on the code you have already written, then update it to match the new content.

In the last step, you did each option one at a time. This time, you will do all three options at each step: adding colours, creating classes, and adding the code.

### Add colours for slot 2

\--- task ---

Open `default.css`.

Add **three** new colour variables. Assign colours to them for your slot 2 classes.

\--- collapse ---

---

## title: An example

The dinosaur examples slot 2 colours look like this:

## --- code ---

language: css
filename: default.css
line_numbers: false
--------------------------------------------------------

/\* Slot 2 colours \*/
\--slot-2-t-rex: #00b2a9;
\--slot-2-triceratops: #ffc659;
\--slot-2-stegosaurus: #131f53;

\--- /code ---

\--- /collapse ---

\--- /task ---

### Create classes for slot 2

\--- task ---

Open `style.css`.

Find the `/* Slot 2 classes */` comment.

Create **three** classes underneath for slot 2, one for each option.

\--- collapse ---

---

## title: An example

Here is the slot 2 classes for the dinosaur example.

## --- code ---

language: css
filename: style.css
line_numbers: false
--------------------------------------------------------

/\* Slot 2 Classes \*/
\#slot-2.trex {
background-color: var(--slot-2-t-rex);
color: black;
}

\#slot-2.triceratops {
background-color: var(--slot-2-triceratops);
color: black;
}

\#slot-2.stegosaurus {
background-color: var(--slot-2-stegosaurus);
color: white;
}

\--- /code ---

Make sure you are using **your** class names, not the ones in the example.

\--- /collapse ---

\--- /task ---

### Add code for slot 2

Now you are going to add to your three `option` functions to apply the classes to slot 2, and then change their `innerHTML`.

\--- task ---

Open `scripts.js`.

Find your `option1()` function.

Add a line that adds your option 1 class to slot 2.

The dinosaur example looked like this:

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 20
--------------------------------------------------------

// Option 1
function option1() {
clear();

```
instruction.style.display = 'none';
content.style.display = "grid";

body.classList.add("trex");

title.innerHTML = "T-Rex <br> &#129430";

slot1.classList.add("trex");
slot1.innerHTML =
  "<h1>Anatomy and Characteristics</h1> \n \
      <p>One of the largest meat-eating dinosaurs</p> \n \
      <p>Powerful hind limbs</p> \n \
      <p>Massive skull with sharp teeth</p> \n \
      <p>Tiny, two-fingered forelimbs</p>";

slot2.classList.add("trex");
```

\--- /code ---

\--- /task ---

What content are you going to put in slot 2?

In the football example it was **Recent news** and in the dinosaur example it was **Trivia**.

\--- task ---

Next, add the lines needed to change the `innerHTML` of slot 2.

You can copy the line above that does the same thing for slot 1, or write a new set of lines yourself.

**Tip**: Make sure **every** line except the last one has `\n \` at the end.

\--- collapse ---

---

## title: An example

The dinosaur example looks like this:

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 21-24
-----------------------------------------------------------

// Option 1
function option1() {
clear();

```
instruction.style.display = 'none';
content.style.display = "grid";

body.classList.add("trex");

title.innerHTML = "T-Rex <br> &#129430";

slot1.classList.add("trex");
slot1.innerHTML =
  "<h1>Anatomy and Characteristics</h1> \n \
      <p>One of the largest meat-eating dinosaurs</p> \n \
      <p>Powerful hind limbs</p> \n \
      <p>Massive skull with sharp teeth</p> \n \
      <p>Tiny, two-fingered forelimbs</p>";

slot2.classList.add("trex");
slot2.innerHTML = "<h1>Trivia</h1> \n \
  <p>T-Rex had an huge bite force, capable of crushing bone.</p>\n \
  <p>T-Rex was a fast runner</p>\n \
  <p>The name Tyrannosaurus Rex means tyrant lizard king in Greek</p>";
```

\--- /code ---

\--- /collapse ---

**Klik op Run**

- Test the content and class by selecting your first option.

\--- /task ---

\--- task ---

Copy those lines and paste them into your `option2()` function.

\--- /task ---

\--- task ---

Change the added class to match your second option.

\--- /task ---

\--- task ---

Change the content to match your second option.

\--- collapse ---

---

## title: An example

The `option2` function for the dinosaur example looked like this:

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 21-25
-----------------------------------------------------------

// Option 2
function option2() {
clear();

```
instruction.style.display = 'none';
content.style.display = "grid";

body.classList.add("triceratops");

title.innerHTML = "Triceratops";

slot1.classList.add("triceratops");
slot1.innerHTML =
"<h1>Anatomy and Characteristics</h1> \n \
    <p>A herbivorous dinosaur</p> \n \
    <p>Known for its distinctive frill and three facial horns</p> \n \
    <p>It had a bulky body, a beak-like mouth, and a large bony plate projecting from the back of its skull</p> \n \
    <p>Triceratops likely lived in herds and used its horns for defense</p>";

slot2.classList.add("triceratops");
slot2.innerHTML =
"<h1>Trivia</h1> \n \
    <p>Triceratops was a bit of a show off, its frill may have been used for display</p>\n \
    <p>Triceratops roamed North America during the Late Cretaceous period</p>\n \
    <p>Triceratops means three-horned face in Greek</p>";
```

}

\--- /code ---

\--- /collapse ---

**Klik op Run**

- Test your colours and content by selecting your second option.

\--- /task ---

\--- task ---

Copy the lines again, and add them to your `option3()` function.

Modify the class and content to match your third option.

\--- /task ---

### The third slot

You are so close to finishing the content of your webpage! Goed gedaan!

Now, you are going to add the colours, classes, and code to style and fill the third slot!

You have done this twice now, so the instructions will just remind you of the steps.

\--- task ---

Open `default.css` and add three colours for slot 3 (one for each of your options).

\--- collapse ---

---

## title: An example

These are the colour variables for slot 3 in the dinosaur example:

## --- code ---

language: css
filename: default.css
line_numbers: false
line_highlights:
-----------------------------------------------------

\--slot-3-t-rex: #00b2a9;
\--slot-3-triceratops: #ec3325;
\--slot-3-stegosaurus: #131f53;

\--- /code ---

\--- /collapse ---

\--- /task ---

\--- task ---

Open `style.css` and find the `/* Slot 3 classes */` comment.

Underneath, create 3 classes for slot 3 (one for each of your options).

\--- collapse ---

---

## title: An example

Here are the classes for the **dinosaur** example:

## --- code ---

language: css
filename: style.css
line_numbers: false
line_highlights:
-----------------------------------------------------

/\* Slot 3 Classes \*/
\#slot-3.trex {
background-color: var(--slot-3-t-rex);
}

\#slot-3.triceratops {
background-color: var(--slot-3-triceratops);
color: white;
}

\#slot-3.stegosaurus {
background-color: var(--slot-3-stegosaurus);
color: white;
}

\--- /code ---

\--- /collapse ---

\--- /task ---

\--- task ---

Open `scripts.js`.

Add lines to each of your option functions to apply your new classes and add the content to slot 3.

\--- collapse ---

---

## title: An example

## --- code ---

language: js
filename: scripts.js
line_numbers: false
--------------------------------------------------------

// Option 1
function option1() {
clear();

```
instruction.style.display = 'none';
content.style.display = "grid";

body.classList.add("trex");

title.innerHTML = "T-Rex <br> &#129430";

slot1.classList.add("trex");
slot1.innerHTML =
    "<h1>Anatomy and Characteristics</h1> \n \
        <p>One of the largest meat-eating dinosaurs</p> \n \
        <p>Powerful hind limbs</p> \n \
        <p>Massive skull with sharp teeth</p> \n \
        <p>Tiny, two-fingered forelimbs</p>";

slot2.classList.add("trex");
slot2.innerHTML =
    "<h1>Trivia</h1> \n \
        <p>T-Rex had an huge bite force, capable of crushing bone.</p>\n \
        <p>T-Rex was a fast runner</p>\n \
        <p>The name Tyrannosaurus Rex means tyrant lizard king in Greek</p>";

slot3.classList.add("trex");
slot3.innerHTML =
    "<h1>Activity</h1> \n \
        <ol>\n \
        <li>Get into teams and line up at a start line</li>\n \
        <li>Put one toy for each team member at the other end of the room</li>\n \
        <li>One person from each team races to 'bite' a toy and bring it back to the team</li>\n \
        <li>The first team to return all their toys wins!</li> </ol>";
```

}

// Option 2
function option2() {
clear();

```
instruction.style.display = 'none';
content.style.display = "grid";

body.classList.add("triceratops");

title.innerHTML = "Triceratops";

slot1.classList.add("triceratops");
slot1.innerHTML =
    "<h1>Anatomy and Characteristics</h1> \n \
        <p>A herbivorous dinosaur</p> \n \
        <p>Known for its distinctive frill and three facial horns</p> \n \
        <p>It had a bulky body, a beak-like mouth, and a large bony plate projecting from the back of its skull</p> \n \
        <p>Triceratops likely lived in herds and used its horns for defense</p>";

slot2.classList.add("triceratops");
slot2.innerHTML =
    "<h1>Trivia</h1> \n \
        <p>Triceratops was a bit of a show off, its frill may have been used for display</p>\n \
        <p>Triceratops roamed North America during the Late Cretaceous period</p>\n \
        <p>Triceratops means three-horned face in Greek</p>";

slot3.classList.add("triceratops");
slot3.innerHTML =
    "<h1>Activity</h1> \n \
    <ol>\n \
        <li>Create some Triceratops horns using paper or cardboard</li>\n \
        <li>Attach them to headbands or make them handheld</li>\n \
        <li>Place the horns at varying distances on the ground</li>\n \
        <li>Use hula hoops or create rings from cardboard</li>\n \
        <li>Take turns tossing the rings onto the Triceratops horns, earning 10 points</li>\n \
        <li>The person with the most points after all turns wins!</li> </ol>";
```

}

// Option 3
function option3() {
clear();

```
instruction.style.display = 'none';
content.style.display = "grid";

body.classList.add("stegosaurus");

title.innerHTML = "Stegosaurus";

slot1.classList.add("stegosaurus");
slot1.innerHTML =
    "<h1>Anatomy and Characteristics</h1> \n \
        <p>Stegosaurus was a plant eater (a herbivor)</p> \n \
        <p>It had a double row of large bony plates along its back</p> \n \
        <p>It had spikes on its tail</p> \n \
        <p>It a small head, with a small brain compared to its body size</p>";

slot2.classList.add("stegosaurus");
slot2.innerHTML =
    "<h1>Trivia</h1> \n \
        <p>Stegosaurus had a second brain in its hips, assisting in coordinating movement and balance</p>\n \
        <p>Stegosaurus lived during the Late Jurassic period</p> \n \
        <p>Stegosaurus means armoured roof lizard in Greek</p> \n \
        <p>The stop-motion puppet used in the 1933 film King Kong was based on a 1897 illustration of Stegosaurus</p>";

slot3.classList.add("stegosaurus");
slot3.innerHTML =
    "<h1>Activity</h1> \n \
        <ol><li>Decorate some paper plates to make Stegosaurus's bony plates</li>\n \
        <li>Once the plates are dry, have a 'Stegosaurus Parade' to showcase your plates</li>\n \
        <li>Share the designs and celebrate the creativity!</li></ol>";
```

}

\--- /code ---

\--- /collapse ---

\--- /task ---

\--- task ---

**Klik op Run**

- Test all three options, check the content and colours look how you want them to.

You can adjust the text colour to make sure it contrasts with the background enough.

\--- /task ---

Next, you will add some sparkle to your webpage using **intersection observers** and animations!
