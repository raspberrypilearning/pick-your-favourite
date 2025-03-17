## 为各个部分添加动画

In this step, you will make **three** intersection observers that will detect when your slots enter the viewport and apply animations to them.

### Create the first observer

\--- task ---

Open `scripts.js` and find the `// Observers` comment.

\--- /task ---

\--- task ---

Create a new `IntersectionOberver` constant, called `slot1observer`.

Add the entries array and the `if` statement that checks whether the entry is intersecting.

For these observers, you want the **whole** target to be in the viewport, so set the `threshold` to `1`.

## --- code ---

language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 2-9
---------------------------------------------------------

// Observers
const slot1observer = new IntersectionObserver(
(entries) => {
if (entries[0].isIntersecting) {

```
}
```

},
{ threshold: 1 }
);

\--- /code ---

\--- /task ---

\--- task ---

Inside the `if` statement, write the code that adds a class to `slot1`. Leave the `""` empty for now.

## --- code ---

language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 5
-------------------------------------------------------

// Observers
const slot1observer = new IntersectionObserver(
(entries) => {
if (entries[0].isIntersecting) {
slot1.classList.add("");
}
},
{ threshold: 1 }
);

\--- /code ---

\--- /task ---

\--- task ---

**Choose** which animation you would like to use for your first slot.

There are 5 animations which have been pre-defined for you inside **style.css**:

1. `fade-in`
2. `grow-in`
3. `rise-in`
4. `slide-left`
5. `slide-right`

Put the name of your animation in between the `""` inside your observer.

You can always change it later if you want to use a different one.

## --- code ---

language: javascript
filename: scripts.js
line_numbers: false
line_number_start: 5
------------------------------------------------------------------------------

// Observers
const slot1observer = new IntersectionObserver(
(entries) => {
if (entries[0].isIntersecting) {
slot1.classList.add("rise-in");
}
},
{ threshold: 1 }
);

\--- /code ---

\--- /task ---

\--- task ---

Now, you need to set your `IntersectionObserver` to observe the page.

Add the call.

## --- code ---

language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 10
--------------------------------------------------------

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

\--- /code ---

\--- /task ---

\--- task ---

**Click Run**

- Select an option and scroll down, you should see the first slot appear and then animate.

\--- collapse ---

---

## title: My content is long and my animation isn't working

If you have a lot of content in your slot, it may never be entirely in the viewport and because your `threshold` is set to `1` (100% of the element), your animation will not trigger.

To fix this, you might want to remove the threshold completely like this:

## --- code ---

language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 10
--------------------------------------------------------

// Observers
const slot1observer = new IntersectionObserver(
(entries) => {
if (entries[0].isIntersecting) {
slot1.classList.add("");
}
}
);
slot1observer.observe(slot1);

\--- /code ---

Or you can reduce the amount of the element needed to trigger the animation. For example, this would require half of the element to trigger...

## --- code ---

language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 10
--------------------------------------------------------

// Observers
const slot1observer = new IntersectionObserver(
(entries) => {
if (entries[0].isIntersecting) {
slot1.classList.add("");
}
},
{ threshold: 0.5 }
);
slot1observer.observe(slot1);

\--- /code ---

\--- /collapse ---

\--- /task ---

It doesn't look very good that your slot appears before animating, so you are going to make your content slots invisible until they animate.

\--- task ---

Open `style.css` and find the `.content` selector.

Add an `opacity` property and set it to `0`.

## --- code ---

language: css
filename: style.css
line_numbers: false
line_number_start: 103
line_highlights: 110
---------------------------------------------------------

.content {
width: 100%;
border-radius: 5px;
box-shadow: 5px 5px black;
padding: 5px;
font-size: 32px;
opacity: 0;
}

\--- /code ---

**Click Run**

- Scroll to see your animation again. The slot should not appear until it animates.

\--- /task ---

### Adding observers for the other two slots

\--- task ---

Open `scripts.js`.

Copy your first observer.

\--- /task ---

\--- task ---

Paste it underneath.

Change all the `slot1` references to `slot2`.

You can use the same animation or pick another one.

\--- collapse ---

---

## title: The animations

There are 5 animations you can choose from:

1. `fade-in`
2. `grow-in`
3. `rise-in`
4. `slide-left`
5. `slide-right`

\--- /collapse ---

## --- code ---

language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 2, 5, 10
--------------------------------------------------------------

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

\--- /code ---

**Click Run**

- Test your second animation.

\--- /task ---

\--- task ---

Copy the observer again and paste it underneath.

\--- /task ---

\--- task ---

Change all the references so they say `slot3`, and maybe choose a different animation.

## --- code ---

language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 2, 5, 10
--------------------------------------------------------------

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

\--- /code ---

**Click Run**

- Test your third animation.

\--- /task ---

Next, you are going to use `localStorage` to make the user's choice permanent!
