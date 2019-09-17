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
//
// var player = {
// name: "Wandering Soul"
// level: 1
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

function storyMode() {
    alert("Currently a placeholder.")
}

function shop() {
    alert("Currently a placeholder.")
}

function battleMode() {
    alert("Currently a placeholder.")
}

//start

firstStory = 0

function gameStart() {
    if (firstStory == 0) {
        firstStory++
        console.log("Storylog " + firstStory)
        advanceTo(scenario.prologue)
    } else {
        location.reload(true)
    }
}

// the actual story progression

var scenario = {

    //prologue 

    prologue: {
        image: "",
        text: "Chapter 0 - Prologue",
        buttons: [
            ["Begin - Chapter 0", "advanceTo(scenario.one)"]
        ]
    },
    prologue1: {
        image: "",
        text: "Chapter 0.1 - ",
        buttons: [
            ["Begin - Chapter 0", "advanceTo(scenario.one)"]
        ]
    },
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
        text: "You're in pain, yet you don't seem to be waking up. Could this be a different world? Are you going to get some Isekai superpowers now that you're possibly in another world? Your mind starts to race, but you notice a flying object barely missing you.",
        buttons: [
            ["Look for the flying object", "advanceTo(scenario.five)"],
            ["Explore the direction the flying object came from.", "advanceTo(scenario.six)"]
        ]
    },
    five: {
        image: "",
        text: "You attempt to follow the flying object, but it is too fast for you. Following it seems to be a waste of time. You try recalling the shape of it, but everything you come up with doesn't make sense to you.",
        buttons: [
            ["Explore the direction the flying object came from.", "advanceTo(scenario.six)"]
        ]
    },
    six: {
        image: "",
        text: "You arrive at a cave. You are pretty sure, that that is where the roar came from. You know you should rather explain the plain, but that cave intruiges you.",
        buttons: [
            ["Enter the cave", "advanceTo(scenario.seven)"],
            ["Keep exploring the plain", "advanceTo(scenario.eight)"]
        ]
    },
    seven: {
        image: "",
        text: "Shortly after you enter the cave, you find a torch. The torch seems like it only has been lit a while ago.",
        buttons: [
            ["Take the torch.", "advanceTo(scenario.errorcave)"],
            ["Don't take the torch.", "advanceTo(scenario.errorcave)"]
        ]
    },
    eight: {
        image: "",
        text: "You walk around the plain, as suddenly a traveler calls out to you. 'Are you lost?', he asks. He offers to accompany you to the nearest town.",
        buttons: [
            ["Accept the offer", "advanceTo(scenario.nine)"],
            ["Decline the offer", "advanceTo(scenario.ten)"]
        ]
    },
    nine: {
        image: "",
        text: "You travel together for quite some time, yet it turns nighttime before you arrive at the town. The traveler recommends setting up a camp as soon as possible, as traveling by night can be very dangerous.",
        buttons: [
            ["Convince him to keep traveling", "advanceTo(scenario.eleven)"],
            ["Set up a camp", "advanceTo(scenario.twelve)"]
        ]
    },
    ten: {
        image: "",
        text: "You thank the traveler for his consideration, but tell him, that you're sure that you can figure it out yourself. He nods and walks away. You continue exploring, yet it turns nighttime before you have a town in sight.",
        buttons: [
            ["Keep exploring", "advanceTo(scenario.end0)"],
            ["Look around to find a spot to hide", "advanceTo(scenario.thirt)"]
        ]
    },
    eleven: {
        image: "",
        text: "'Are you trying to get me killed?' responds the traveler, obviously irrated. 'Don't you know these fields?', he asks. You consider telling him about your situation.",
        buttons: [
            ["Tell him about yourself and your situation", "advanceTo(scenario.fourt)"],
            ["Claim just to be unfamiliar with these lands", "advanceTo(scenario.fivet)"]
        ]
    },
    twelve: {
        image: "",
        text: "You agree to set up a camp. Suddenly a tent appears in front of you. 'Sadly, I can't offer you anything to eat, but go to sleep, tomorrow we'll hopefully arrive in town.', he says calmly. 'How did those tents appear?', you ask. 'It's the inventory, don't you know that?', he replies as it were the most normal thing.",
        buttons: [
            ["Tell him about yourself and your situation", "advanceTo(scenario.fourt)"],
            ["Blame your confusion on exhaustion", "advanceTo(scenario.fivet)"]
        ]
    },
    thirt: {
        image: "",
        text: "It starts raining. You rush down a hill and find a slight opening and decide to spend the night there. You hear the rain dripping slighty beside your head. You slowly fall asleep.",
        buttons: [
            ["zZzZzZz", "advanceTo(scenario.sixt)"]
        ]
    },
    fourt: {
        image: "",
        text: "You explain about your world, about how you woke up here and know nothing about this world. The traveler is visibly shaken and tries to cheer you up. 'Maybe someone in Generos can help you.', he says. 'Now get some sleep, I'll bring you safe to Generos.'",
        buttons: [
            ["Go to sleep.", "advanceTo(scenario.sevent)"]
        ]
    },
    fivet: {
        image: "",
        text: "'It's fine', he sighs. 'Don't worry, we'll arrive safe and sound tomorrow in Generos, now get some sleep.', he adds.",
        buttons: [
            ["Go to sleep.", "advanceTo(scenario.eightt)"]
        ]
    },
    sixt: {
        image: "",
        text: "You awake slowly to the sun blinding you, your clothes are wet and a mess, but you are safe. Time to find the town.",
        buttons: [
            ["Keep searching for the town", "advanceTo(scenario.ninet)"]
        ]
    },
    sevent: {
        image: "",
        text: "You awake annoyed to the sound of a rooster signaling the time right beside your tent. You step outside slighty struck, only to be greeted by the traveler in a motivated fashion. 'Good morning, pal. Ready to leave?', he asks. ",
        buttons: [
            ["'...Good morning, let's go.'", "advanceTo(scenario.twenty)"]
        ]
    },
    eightt: {
        image: "",
        text: "You awake annoyed to the sound of a rooster signaling the time right beside your tent. You step outside slighty struck, only to be greeted by the traveler, who is preparing to leave. 'Mornin', pal. Ready to leave?', he asks.",
        buttons: [
            ["'*yawn*, Good morning, let's go.'", "advanceTo(scenario.twenty1)"]
        ]
    },
    ninet: {
        image: "",
        text: "You walk quite some time until you found something that looks like a road. There is a sign near the road saying 'Generos 500m ->'. You rush the way the sign shows to slowly see the gates of a town apparently called Generos.",
        buttons: [
            ["Enter the town.", "advanceTo(scenario.prologueend)"]
        ]
    },
    twenty: {
        image: "",
        text: "You and the traveler walk quite some time, exchanging information and having random conversation until you found something that looks like a road. There is a sign near the road saying 'Generos 500m ->'. You point to the sign and the two of you rush the way the sign shows to slowly see the gates of the town called Generos.",
        buttons: [
            ["Enter the town.", "advanceTo(scenario.prologueend)"]
        ]
    },
    twenty1: {
        image: "",
        text: "You and the traveler walk quite some time until you found something that looks like a road. There is a sign near the road saying 'Generos 500m ->'. You point to the sign and the two of you rush the way the sign shows to slowly see the gates of a town apparently called Generos.",
        buttons: [
            ["Enter the town.", "advanceTo(scenario.prologueend)"]
        ]
    },
    prologueend: {
        image: "",
        text: "This is the end of the prologue for 3 of the 4 currently existing routes. As you may have noticed, the cave is not yet explorable. This is on my 'to-do' list for the next few days. Until then, I hope my story so far isn't that boring. Once I have established a combat system, the prologue will also feature some combat, look forward to that.",
        buttons: [
            ["Back to main menu", "location.reload(true)"]
        ]
    },
    //chapter 1 variations

    // ch1-a: { //travel w traveler, explain situation
    //  image: "",
    //  text: "Chapter 1 - Generos",
    //  buttons: [
    //  ["Begin Chapter 1- Generos"]
    //  ]
    // },
    // ch1-b: { // travel w traveler, lie
    //  image: "",
    //  text: "Chapter 1 - Generos",
    //  buttons: [
    //  ["Begin Chapter 1- Generos"]
    //  ]
    // },
    // ch1-c: { // don't travel w traveler, hide out
    //  image: "",
    //  text: "Chapter 1 - Generos",
    //  buttons: [
    //  ["Begin Chapter 1- Generos"]
    //  ]
    // }
    // ch1-d: { // cave
    //  image: "",
    //  text: "Chapter 1 - Generos",
    //  buttons: [
    //  ["Begin Chapter 1- Generos"]
    //  ]
    // }

    //from here on, all written scenarios will only occur on a game over or on an incomplete path
    errorcave: {
        image: "",
        text: "This scenario has not been written yet. Please select a different choice.",
        buttons: [
            ["Return to the previous option.", "advanceTo(scenario.six)"]
        ]
    },
    end0: { //dont travel w traveler, explore during the night
        image: "",
        text: "You convince yourself that you have nothing to fear. You keep pressing onwards on the plain, but fail to notice that you're slowly getting surrounded by wolves. By the time you notice, it is already too late and they attack. Unable to defend yourself against a pack of wolves, you perish in the plain.",
        buttons: [
            ["GAME OVER - Return to main menu", "location.reload(true)"]
        ]
    }
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