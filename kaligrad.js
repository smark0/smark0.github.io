//these variables connect our code with the 'id' on the html
//we can then manipulate the variables 
//and it will manipulate the html

var images = document.getElementById("image");
var text = document.getElementById("text");
var choices = document.getElementById("choices");
var input = document.getElementById("input");

// player character var

var pc;

//this is how after we type in the character name and hit enter
//we will add the name to the variable, remove the input box and start our first scenario
input.onkeypress = function(event) {
    console.log(input.value);
    if (event.key == "Enter" || event.keyCode == 13) {
        pc = input.value;
        input.parentNode.removeChild(input)
        advanceTo(scenario.two)
    }
};

//this changes the text and puts in your characters name
var changeText = function(words) {
    text.innerHTML = words.replace("PlayerName", pc);
};

//this takes the image link and adds the proper format, sending it to the html
var changeImage = function(img) {
    images.style.backgroundImage = "url(" + img + ")";
};


//this looks at the number of options we have set and creates enough buttons 
var changeButtons = function(buttonList) {
    choices.innerHTML = "";
    for (var i = 0; i < buttonList.length; i++) {
        choices.innerHTML += "<button onClick=" + buttonList[i][1] + ">" + buttonList[i][0] + "</button>";
    };
};

//this is what moves the game along
var advanceTo = function(s) {
    changeImage(s.image)
    changeText(s.text)
    changeButtons(s.buttons)
};

var scenario = {
  one: {
    image: "",
    text: "You eagerly await the release of Age of Aincrad. When searching around the Internet, you encounter something called 'Age of Kaligrad'. Interested, you click on the link. It asks you to enter your name.\n",
  },
  two: {
    image: "",
    text: "You enter your name, PlayerName. But nothing happens. Frustrated, you turn off your computer and go to bed. 'All these Sword Art Online ripoffs', you murmur while your conciousness slowly drifts to sleep.",
    buttons: [["Continue", "advanceTo(scenario.three)"]]
  },
  three: {
    image: "",
    text: "You awaken to the sound of a deafening roar. In shock, you look around. Your bed, your room, all gone. You don't recognize the area around you. Maybe this is just a bad dream, you start thinking. I should wake up.",
    buttons: [["Twist your ears", "advanceTo(scenario.four)"], ["Punch yourself in the stomach", "advanceTo(scenario.four)"]]
  },
    four: {
    image: "",
    text: "You're in pain, yet you don't seem to be waking up. Could this be a different world? Are you going to get some Isekai superpowers now that you're possibly in another world? Your mind starts to race, but you're suddenly struck by a heavy object and die.",
    buttons: [["HEY YOU CAN'T LET IT END LIKE THAT", "advanceTo(scenario.five)"]]
  },
    five: {
    image: "",
    text: "You can't tell me what to do. But you're right. I won't. Keep checking for updates to this story.",

  },
  
};

//this is the code that starts the game
advanceTo(scenario.one);