## Change the text



### Code to add

// Option 1
function option1(){
    clear();

    instruction.style.display = 'none';
    content.style.display = "grid";
    
    body.classList.add("liverpool");

    title.innerHTML = "Liverpool FC";
    
    slot1.classList.add("liverpool");
    slot1.innerHTML = "<h1>Recent results</h1> \n \
        <p>Liverpool 4 - 1 Chelsea</p> \n \
        <p>Liverpool 5 - 2 Norwich City</p> \n \
        <p>Fulham 1 - 1 Liverpool</p> \n \
        <p>Bournemouth 0 - 4 Liverpool</p> \n \
        <p>Liverpool 2 - 1 Fulham</p>";
    
    slot2.classList.add("liverpool");
    slot2.innerHTML = "<h1>Recent News</h1> \n \
        <p>Jurgen Klopp is leaving Liverpool.</p>\n \
        <p>Alexis MacAllister will probably play against Arsenal.</p>\n \
        <p>Liverpool still title favourites, but only just.</p>";
    
    slot3.classList.add("liverpool");
    slot3.innerHTML = "<h1>Top Players</h1> \n \
        <p>Mohamed Salah</p>\n \
        <p>Virgil Van Dyke</p>\n \
        <p>Trent Alexander Arnold</p>";

}

// Option 2
function option2(){
    clear();

    instruction.style.display = 'none';
    content.style.display = "grid";
    
    body.classList.add("man-city");

    title.innerHTML = "Manchester City";

    slot1.classList.add("man-city");
    slot1.innerHTML = "<h1>Recent results</h1> \n \
        <p>Man City 3 - 1 Burnley</p> \n \
        <p>Tottenham 0 - 1 Man City</p> \n \
        <p>Newcastle 2 - 3 Man City</p> \n \
        <p>Man City 5 - 0 Huddersfield</p> \n \
        <p>Man City 2 - 0 Sheffield United</p>";
    
    slot2.classList.add("man-city");
    slot2.innerHTML = "<h1>Recent News</h1> \n \
        <p>Kevin De Bruyne is back!</p>\n \
        <p>Erling Haaland wants to leave Manchester for Real Madrid.</p>\n \
        <p>Pep Guardiola making exit plans, wants to leave.</p>";
    
    slot3.classList.add("man-city");
    slot3.innerHTML = "<h1>Top Players</h1> \n \
        <p>Erling Haaland</p>\n \
        <p>Phil Foden</p>\n \
        <p>Bernardo Silva</p>";

}

// Option 3
function option3(){
    clear();

    instruction.style.display = 'none';
    content.style.display = "grid";
    
    body.classList.add("tottenham");

    title.innerHTML = "Tottenham Hotspur";

    slot1.classList.add("tottenham");
    slot1.innerHTML = "<h1>Recent results</h1> \n \
        <p>Tottenham 3 - 2 Brentford</p> \n \
        <p>Tottenham 0 - 1 Man City</p> \n \
        <p>Man United 2 - 2 Tottenham</p> \n \
        <p>Tottenham 1 - 0 Burnley</p> \n \
        <p>Tottenham 3 - 1 Bournemouth</p>";
    
    slot2.classList.add("tottenham");
    slot2.innerHTML = "<h1>Recent News</h1> \n \
        <p>Lucas Bergvall chooses Tottenham over Barcelona.</p>\n \
        <p>Alfie Dorrington adds to growing list of hamstring injuries at Spurs.</p>\n \
        <p>Spurs still struggling to replace Harry Kane</p>";
    
    slot3.classList.add("tottenham");
    slot3.innerHTML = "<h1>Top Players</h1> \n \
        <p>Heung-Min Son</p>\n \
        <p>Richarlison</p>\n \
        <p>Pedro Porro</p>";
    
}

CSS - Update the classes to style the content

#slot-1.liverpool {
    background-color: rgba(0, 178, 169, 0.8);
    
    h1 {
        color: #F6EB61;
    }
}

#slot-1.man-city {
    background-color: rgba(28, 44, 91, 0.8);

    h1 {
        color: rgb(255, 198, 89);
    }
}

#slot-1.tottenham {
    background-color: rgba(19, 34, 87, 0.8);
    color: white;
    h1 {
        color: white;
    }
}

#slot-2.liverpool {
    background-color: rgba(246, 235, 97, 0.8);
    color: black;
    h1 {
        color: rgb(0, 178, 169);
    }
}

#slot-2.man-city {
    background-color: rgba(255, 198, 89, 0.8);
    color: black;
    h1 {
        color: rgb(28, 44, 91);
    }
}

#slot-2.tottenham {
    background-color: rgba(19, 31, 83, 0.8);
    color: white;
    h1 {
        color: white;
    }
}

#slot-3.liverpool {
    background-color: rgba(0, 178, 169, 0.8);

    h1 {
        color: #F6EB61;
    }
}

#slot-3.man-city {
    background-color: rgba(236, 51, 37, 0.8);
    color: white;
    h1 {
        color: rgb(255, 198, 89);
    }
}


#slot-3.tottenham {
    background-color: rgba(19, 31, 83, 0.8);
    color: white;
    h1 {
        color: white;
    }
}