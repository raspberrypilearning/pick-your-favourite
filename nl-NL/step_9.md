## Verbeter je project

In this step, you can upgrade your project by:

- Adding more styling to your content slots
- Adding more options to your drop-down menu

You don't have to do both. Choose whichever one appeals to you and fits the time you have.

\--- collapse ---

---

## title: Add more styling to your content slots

At the moment, your content slots are styled with a `background-color` and maybe `color`.

You can also add styling to change the colour of your `h1` or any other element.

To style a specific element, you can add an element selector inside your class selectors.

For example, the **football** example adds a colour to the `h1` element for each class like this:

## --- code ---

language: css
filename: style.css
---------------------------------------------------

\#slot-1.man-city {
background-color: var(--slot-1-man-city);

```
h1 {
    color: var(--slot-2-man-city);
}
```

}

\--- /code ---

You can see that it uses the colours from another slot to tie the webpage together.

You can add any styling you might want to your content. The **dinosaur** example used the `text-align` property to change the alignment in the **activity** content slot, for example.

## --- code ---

language: css
filename: style.css
---------------------------------------------------

\#slot-3.triceratops {
background-color: var(--slot-3-triceratops);
text-align: left;
color: white;
h1 {
color: var(--slot-2-triceratops);
text-align: center;
}
}

\--- /code ---

\--- /collapse ---

\--- collapse ---

---

## title: Add another option

If you have more time, you might want to add more options to your drop-down menu for your user to choose from.

\--- task ---

Open `default.css` and, for your new option, add new colours for:

- The body
- Slot 1
- Slot 2
- Slot 3

\--- /task ---

\--- task ---

Open `style.css` and create new classes for `<body>` and each of your content slots. Use your new colours to style the slots.

\--- /task ---

\--- task ---

Open `scripts.js` and create a new function called `option4()`.

You can copy one of your previous functions to make this process easier.

Apply the classes you just made and change the content to match your new option.

Make sure you also set the `choice` variable to match the new option at the end of the function.

\--- /task ---

\--- task ---

Open `index.html` and add a new button to the `drop-down-options` `<div>`.

Add the `onclick` attribute to call your new function that will change the content.

\--- /task ---

You can repeat the steps above for as many options as you would like to add to your webpage!

\--- /collapse ---
