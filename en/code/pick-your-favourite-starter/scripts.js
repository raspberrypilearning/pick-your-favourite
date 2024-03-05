// Dropdown function
const dropdown = document.getElementById("dropdown-options");

function openDropdown(){
    if (dropdown.classList.contains("open")){
        dropdown.classList.remove("open");    
    } else {
        dropdown.classList.add("open");
    }
    
};

// Constants
const body = document.querySelector("body");
const instruction = document.querySelector("#instruction");
const content = document.querySelector("#content-holder");
const title = document.querySelector("#title");
const slot1 = document.querySelector("#slot-1");
const slot2 = document.querySelector("#slot-2");
const slot3 = document.querySelector("#slot-3");

// Clear function
function clear(){
    body.classList = '';
    
    title.innerHTML = "";
    
    slot1.classList = 'content';
    slot1.innerHTML = "";
    
    slot2.classList = 'content';
    slot2.innerHTML = "";
    
    slot3.classList = 'content';
    slot3.innerHTML = "";
    
    dropdown.classList.remove("open");
}

// Option 1


// Option 2


// Option 3


// Observers


// Loading event


// Reset
