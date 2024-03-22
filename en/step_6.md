## Animate the sections

In this step you will make **three** intersection observers that will detect when your slots enter the viewport and apply animations to them. 

### Create the first observer

--- task ---

Open `scripts.js` and find the `// Observers` comment

--- /task ---

--- task ---

Create a new `IntersectionOberver` constant - called `slot1observer`. 

Add the entries array and the `if` statement that checks whether the entry is intersecting.

For these observers you want the **whole** target to be in the viewport, so set the `threshold` to `1`.

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start: 149
line_highlights: 150-157
---

// Observers
const slot1observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      
    }
  },
  { threshold: 1 }
);

--- /code ---

--- /task ---

--- task ---

Inside the `if` statement, write the code that adds a class to `slot1` - leave the `""` empty for now

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start: 149
line_highlights: 153
---

// Observers
const slot1observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      slot1.classList.add("");
    }
  },
  { threshold: 1 }
);

--- /code ---

--- /task ---

--- task ---

**Choose:** which animation you would like to use for your first slot. 

There are 5 animations you can choose from:
1. `fade-in`
2. `grow-in`
3. `rise-in`
4. `slide-left`
5. `slide-right`

Put the name of your animation in between the `""` inside your observer. 

You can always change it later if you want to use a different one.

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start: 153
---

      slot1.classList.add("rise-in");

--- /code ---

--- /task ---

--- task ---

Now you need to set your `IntersectionObserver` to observe the page. 

Add the call.

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start: 149
line_highlights: 158
---

// Observers
const slot1observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      slot1.classList.add("");
    }
  },
  { threshold: 1 }
);
slot1observer.observe(slot1);

--- /code ---

--- /task ---

--- task ---

**Click Run**
+ Select an option and scroll down, you should see the first slot appear and then animate. 

--- /task ---

It doesn't look very good that your slot appears before animating, so you are going to make your content slots invisible until they animate.

--- task ---

Open `style.css` and find the `.content` selector. 

Add an `opacity` property and set it to `0`.

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 103
line_highlights: 109
---

.content {
  width: 100%;
  border-radius: 5px;
  box-shadow: 5px 5px black;
  padding: 5px;
  font-size: 32px;
  opacity: 0;
}

--- /code ---

**Click Run** 
+ Scroll to see your animation again. The slot should not appear until it animates.

--- /task ---

### Adding observers for the other two slots

--- task ---

Open `scripts.js`.

Copy your first observer.

--- /task ---

--- task ---

Paste it underneath. 

Change all the `slot1` references to `slot2`.

You can use the same animation or pick another one. 

--- collapse ---

---
title: The animations
---

There are 5 animations you can choose from:
1. `fade-in`
2. `grow-in`
3. `rise-in`
4. `slide-left`
5. `slide-right`

--- /collapse ---

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start: 160
line_highlights: 161, 164, 169
---

// Observers
const slot2observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      slot2.classList.add("slide-left");
    }
  },
  { threshold: 1 }
);
slot2observer.observe(slot2);

--- /code ---

**Click Run**
+ Test your second animation.

--- /task ---

--- task ---

Copy the observer again, paste it underneath.

--- /task ---

--- task ---

Change all the references so they say `slot3`, and maybe choose a different animation.

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start: 171
line_highlights: 172, 175, 180
---

// Observers
const slot3observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      slot3.classList.add("grow-in");
    }
  },
  { threshold: 1 }
);
slot3observer.observe(slot3);

--- /code ---

**Click Run**
+ Test your third animation.

--- /task ---

Next you are going to use `localStorage` to make the user's choice permanent!