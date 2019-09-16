var images = document.getElementById("image")
var text = document.getElementById("text")
var choices = document.getElementById("choices")
var instructions = document.getElementById("instructions")

//basic tutorial and explanation

var tut = 0

function howTo() {
    if (tut < 10) {
        alert("Welcome to Age of Kaligrad! This will become a text based RPG based on the Project 'Age of Aincrad', while also featuring stupid memes based on this project and it's anime inspiration 'Sword Art Online'. As this project is still PreAlpha, this button will only be showing you this text.")
        tut++;
    } else if (tut < 19) {
        alert("You're just trying to annoy me, aren't you.")
        tut++;
    } else if (tut == 19) {
        alert("One. More. Time. And. I. Will. Reset. Your. Progress. You. Have. Been. Warned.")
        tut++;
    } else {
        alert("Fine, make your life harder and say goodbye to what little progress you made.")
        gameStart()
        tut = -1
        par = document.getElementById("container");
        child = document.getElementById("instructions");
        par.removeChild(child);
    }
}

//playerinfo

// var player = {
// name: "Wandering Soul"
// health: 100,
// strength: 0,
// money: 0,
// abilities: [],
// hasHealth: function() {
//     if (this.health < 0) {
//         this.health = 0
//     }
// }
// }

playerName = "Wandering Soul"

function playerInfo() {
    alert("Player: " + playerName)
}

//setup

function gameSetup() {
    alert("Hey there, player. Just a few questions to get to know you better.");
    playerName = prompt("First off, what's your name?");
    alert("Thank you, " + playerName + ". This is it for now, until the class system is done.");
    par1 = document.getElementById("game");
    child1 = document.getElementById("start")
    par1.removeChild(child1)
    gameStart();
}

//this changes the text and puts in your characters name
var changeText = function(words) {
    text.innerHTML = words.replace("PlayerName", playerName);
};

//this takes the image link and adds the proper format, sending it to the html
var changeImage = function(img) {
    image.style.backgroundImage = "url(" + img + ")";
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

//start

firstStory = 0

function gameStart() {
    if (firstStory == 0) {
        firstStory++
        console.log("Storylog " + firstStory)
        advanceTo(scenario.one)
    } else {
        location.reload(true)
    }
}

var scenario = {
    one: {
        image: "",
        text: "You eagerly await the release of Age of Aincrad. When searching around the Internet, you encounter something called 'Age of Kaligrad'. Interested, you click on the link.",
        buttons: [
            ["Continue", "advanceTo(scenario.two)"]
        ]
    },
    two: {
        image: "",
        text: "You enter your name, PlayerName. But nothing happens. Frustrated, you turn off your computer and go to bed. 'All these Sword Art Online ripoffs', you murmur while your conciousness slowly drifts to sleep.",
        buttons: [
            ["Continue", "advanceTo(scenario.three)"]
        ]
    },
    three: {
        image: "",
        text: "You awaken to the sound of a deafening roar. In shock, you look around. Your bed, your room, all gone. You don't recognize the area around you. Maybe this is just a bad dream, you start thinking. I should wake up.",
        buttons: [
            ["Twist your ears", "advanceTo(scenario.four)"],
            ["Punch yourself in the stomach", "advanceTo(scenario.four)"]
        ]
    },
    four: {
        image: "",
        text: "You're in pain, yet you don't seem to be waking up. Could this be a different world? Are you going to get some Isekai superpowers now that you're possibly in another world? Your mind starts to race, but you're suddenly struck by a heavy object and die.",
        buttons: [
            ["HEY YOU CAN'T LET IT END LIKE THAT", "advanceTo(scenario.five)"]
        ]
    },
    five: {
        image: "",
        text: "You can't tell me what to do. But you're right. I won't. Keep checking for updates to this story.",
    },
}

//to-do list:
//write a more branched out story
//class system ?
//equipment system?
//battle system?
//shop 
//random encounters?
//buttons, lots of buttons
//???
//add pictures to the story