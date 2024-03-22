## Choose your colours

In this step you are going to make your webpage colours change for all the options! 

--- task ---

**Try it**

Click on the options in the dinosaur example to see the colours change!

<iframe src="https://editor.raspberrypi.org/en/embed/viewer/pick-your-favourite-dinosaur" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

--- /task ---

For each option you will need colours for:
+ The `<body>` of the webpage
+ The three content slots
+ Heading and text for the slots

**Tip:** You are going to add a lot of code in this step, so make sure you use Copy (<kbd>Ctrl</kbd>+<kbd>C</kbd>/<kbd>Cmd</kbd>+<kbd>C</kbd>) and Paste (<kbd>Ctrl</kbd>+<kbd>V</kbd>/<kbd>Cmd</kbd>+<kbd>V</kbd>) to speed the process up. 

### Create your body colour classes

--- task ---

Choose your three body colours and note them down. 

**TO-DO** Add colour ingredients

--- /task ---

--- task ---

If you want to add your own colours, you can open `default.css` and add your own variables inside the `:root` selector. 

--- code ---
---
language: css
filename: default.css
line_numbers: true
line_number_start: 7
line_highlights: 12
---

  /* Base Colours */
  --body-background: #FFFFFF;
  --body-text-colour: #000000;
  --nav-bar: #FFFFFF;

  --new-colour: #A63CEA;

--- /code ---

--- /task ---

--- task ---

Open `style.css`. 

Find the `/* Body Classes */` comment.

Underneath, create a class selector for your first option with the `.` identifier.

Set the `background-color:` property to the body colour for the first option.

You might also want to set a `color:` property to make sure the title text is visible.

You should give this class a name that relates to your option, the **Dinosaur** example looks like this:

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 108
line_highlights: 110-111
---

/* Body Classes */
.trex {
  background-color: var(--trex-body);
  color: white;
}

--- /code ---

--- /task ---

--- task ---

Underneath this create the other **2 class selectors** for your other options. 

--- collapse ---

---
title: What should my code look like?
---

Your CSS should contain three class selectors, with `background-color:` and maybe `color` properties set. 

This is the **Dinosaur** example.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 108
line_highlights: 
---

/* Body Classes */
.trex {
  background-color: #41220f;
  color: white;
}

.triceratops {
  background-color: #6a7029;
  color: white;
}

.stegosaurus {
  background-color: rgb(32, 78, 55);
  color: black;
}

--- /code ---

--- /collapse ---

--- /task ---

### Creating functions

Next you need to create functions that will cause the changes to your page when the options are clicked.

--- task ---

Open `script.js` - and find the `// Option 1` comment. 

Create a function called `option1`.

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start: 35
line_highlights: 36-38
---

// Option 1
function option1(){

}

--- /code ---

--- /task ---

--- task ---

When an option is clicked you need to clear the page, then hide the instruction and set the `content-holder` to display as a `grid`. 

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start: 35
line_highlights: 37, 39-40
---

// Option 1
function option1(){
  clear();

  instruction.style.display = 'none';
  content.style.display = "grid";
}

--- /code ---

--- /task ---

--- task ---

Next add the new class you made in `style.css` to the body, and change the title to match your option. 

The **Dinosaur** example looks like this:

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start: 40
line_highlights: 42, 44
---

  content.style.display = "grid";

  body.classList.add("trex");

  title.innerHTML = "T-Rex";

--- /code ---

Make sure you use a title that matches your option!

--- /task ---

--- task ---

Copy the `option1()` function underneath the `// Option 2` comment.

Change:
+ The function name to `option2`
+ The class name added to `body` to the class you made earlier for option 2
+ The title to match your second option 

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start: 47
line_highlights: 48, 60, 62 
---

// Option 2
function option2(){
  clear();

  instruction.style.display = 'none';
  content.style.display = "grid";

  body.classList.add("triceratops");

  title.innerHTML = "Triceratops";
}

--- /code ---

--- /task ---

--- task ---

Do the same for your third option, underneath the `// Option 3` comment. 

Make sure to update:
+ the function name
+ the class added to body
+ the title

--- collapse ---

---
title: How should my option3 function look?
---

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start:
---

// Option 3
function option3(){
  clear();

  instruction.style.display = 'none';
  content.style.display = "grid";

  body.classList.add("stegosaurus");

  title.innerHTML = "Stegosaurus";
}

--- /code ---

--- /collapse ---

--- /task ---

### Make the options work

In order to test your code you need to link the buttons in the drop-down to the functions you have just written. 

--- task ---

Open `index.html`. 

Add `onclick` properties to each of your drop-down buttons, calling the three functions.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 15
line_highlights: 16-18
---

<div id="dropdown-options">
  <button onclick="option1()">T-Rex</button>
  <button onclick="option2()">Triceratops</button>
  <button onclick="option3()">Stegosaurus</button>
</div>

--- /code ---

--- /task ---

--- task ---

**Click Run**
+ Use the drop-down and select your options, you should see the colours change!

**Debug**: If your colours don't change, make sure the class names you add in JavaScript match the ones in your CSS **exactly**!.

--- /task ---

Next you will allow the user to change the content of your webpage when they choose an option!