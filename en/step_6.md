## Make the choice permanent

### Code to add

Inside the option functions

localStorage.setItem("choice", "liverpool");

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

HTML 

<button onclick="reset()">Reset</button>

// Reset
function reset(){
    clear();
    content.style.display = "";
    instruction.style.display = 'flex';
    localStorage.setItem("choice", "");
}