## Make the choice permanent

In this step you will use the local storage in the user's we browser to save the choice they make, so whenever the page is loaded, it keeps the colours and content of their choice.

### Saving the user's choice

You are going to add lines to each of your option functions to set a variable in localStorage when the user selects an option.

--- task ---

Open `scripts.js` - and find your `option1()` function.

--- /task ---

--- task ---

At the bottom of the function, add `localStorage.setItem()` which you will use to set a storage variable.

Inside the brackets, provide the name of the variable `"choice"` and the name of your first option in quotes `""` - seperated by a comma.

The football example looks like this:

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
---

  slot3.classList.add("liverpool");
  slot3.innerHTML = "<h1>Top Players</h1> \n \
    <p>Mohamed Salah</p>\n \
    <p>Virgil Van Dyke</p>\n \
    <p>Trent Alexander Arnold</p>";

  localStorage.setItem("choice", "liverpool");
}

--- /code ---

--- /task ---

--- task ---

Copy the line and place it at the bottom of your `option2()` and `option3()` functions, changing the value of the variable to match those choices.

--- /task ---

### Checking the choice when the page is loaded

Next you are going to create a function to check if the variable has been set when the page loads.

--- task ---

In `scripts.js` find the `// Loading event` comment.

Underneath, use `document.addEventListener()` to create a function that will run when the page is loaded.

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_number_start: 164
line_highlights: 165-167
---

// Loading event
document.addEventListener("DOMContentLoaded", function () {
  
});

--- /code ---

--- /task ---

--- task ---

Inside the event listener, create a new `constant` to store the value contained in the `choice` variable in `localStorage`.

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_number_start: 164
line_highlights: 166
---

// Loading event
document.addEventListener("DOMContentLoaded", function () {
  const choice = localStorage.getItem("choice");
});

--- /code ---

--- /task ---

--- task ---

Create an `if` statement to check if the variable is set to your first option. 

If it is, then call your `option1()` function.

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_number_start: 164
line_highlights: 168-170
---

// Loading event
document.addEventListener("DOMContentLoaded", function () {
  const choice = localStorage.getItem("choice");
  
  if (choice == "liverpool"){
    option1();
  }
});

--- /code ---

--- /task ---

--- task ---

Finally, add two `else if` statements to check for the other two options, calling their functions.

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_number_start: 164
line_highlights: 170-174
---

// Loading event
document.addEventListener("DOMContentLoaded", function () {
  const choice = localStorage.getItem("choice");
  
  if (choice == "liverpool"){
    option1();
  } else if (choice == "man-city"){
    option2();
  } else if (choice == "tottenham"){
    option3();
  }
});

--- /code ---

--- /task ---

--- task ---

**Run your webpage** - select an option.

Click Run again, the page should stay the same.

Try changing options and then clicking Run again, the page should keep the last option you chose.

--- /task ---

### Resetting the choice

You also need to create an option for the user to reset their choice and see the instructions again.

--- task ---

In `scripts.js` find the `// Reset` comment.

Create a new function called `reset`.

This function will clear the choices, hide the content, show the instructions and clear the `localStorage` variable.

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_number_start: 177
line_highlights: 178-183
---

// Reset
function reset(){
    clear();
    content.style.display = "";
    instruction.style.display = 'flex';
    localStorage.setItem("choice", "");
}

--- /code ---

--- /task ---

--- task ---

Open `index.html` and add a new button to the dropdown menu that the user can use to reset the page. 

--- code ---
---
language: html
filename: index.html
line_numbers: false
line_number_start: 14
line_highlights: 18
---

        <div id="dropdown-options">
          <button onclick="option1()">Liverpool</button>
          <button onclick="option2()">Manchester City</button>
          <button onclick="option3()">Tottenham</button>
          <button onclick="reset()">Reset</button>
        </div>

--- /code ---

--- /task ---

--- task ---

**Run your page** - test out your reset button by selecting an option, running the page again and then resetting. 

--- /task ---

Well done, you have made an awesome fan web page, and used your new CSS and JavaScript skills to make it amazing!