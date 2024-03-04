## Animate the sections


### Code to add

// Observers
const slot1observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      slot1.classList.add("fade-in");
    }
}, {threshold: 1});
slot1observer.observe(slot1);

const slot2observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      slot2.classList.add("grow-in");
    }
}, {threshold: 1});
slot2observer.observe(slot2);

const slot3observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      slot3.classList.add("rise-in");
    }
}, {threshold: 1});
slot3observer.observe(slot3);