## Choose your colours



### Code to add

CSS

.liverpool {
  background-color: #C8102E;
  color: white;
}

.man-city {
  background-color: #6CABDD;
  color: white;
}

.tottenham {
  background-color: white;
  color: black;
}

#slot-1.liverpool {
    background-color: rgba(0, 178, 169, 0.8);
}

#slot-1.man-city {
    background-color: rgba(28, 44, 91, 0.8);
}

#slot-1.tottenham {
    background-color: rgba(19, 34, 87, 0.8);
}

#slot-2.liverpool {
    background-color: rgba(246, 235, 97, 0.8);
}

#slot-2.man-city {
    background-color: rgba(255, 198, 89, 0.8);
}

#slot-2.tottenham {
    background-color: rgba(19, 31, 83, 0.8);
}

#slot-3.liverpool {
    background-color: rgba(0, 178, 169, 0.8);
}

#slot-3.man-city {
    background-color: rgba(236, 51, 37, 0.8);
}

#slot-3.tottenham {
    background-color: rgba(19, 31, 83, 0.8);
}

Javascript

// Constants
const body = document.querySelector("body");
const instruction = document.querySelector("#instruction");
const content = document.querySelector("#content-holder");
const title = document.querySelector("#title");
const slot1 = document.querySelector("#slot-1");
const slot2 = document.querySelector("#slot-2");
const slot3 = document.querySelector("#slot-3");

// Option 1
function option1(){
    clear();

    instruction.style.display = 'none';
    content.style.display = "grid";
    
    body.classList.add("liverpool");

    title.innerHTML = "Liverpool FC";
    
    slot1.classList.add("liverpool");
    
    slot2.classList.add("liverpool");
    
    slot3.classList.add("liverpool");

}

// Option 2
function option2(){
    clear();

    instruction.style.display = 'none';
    content.style.display = "grid";
    
    body.classList.add("man-city");

    title.innerHTML = "Manchester City";

    slot1.classList.add("man-city");
    
    slot2.classList.add("man-city");

    slot3.classList.add("man-city");

}

// Option 3
function option3(){
    clear();

    instruction.style.display = 'none';
    content.style.display = "grid";
    
    body.classList.add("tottenham");

    title.innerHTML = "Tottenham Hotspur";

    slot1.classList.add("tottenham");
    
    slot2.classList.add("tottenham");
    
    slot3.classList.add("tottenham");

}

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

HTML 

<button onclick="option1()">Liverpool</button>
<button onclick="option2()">Manchester City</button>
<button onclick="option3()">Tottenham</button>