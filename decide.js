"use strict";

let title = document.querySelector("title"),
	mainText = document.querySelector("#mainText"),
	image = document.querySelector("#mainImage"),
	playerImage = document.querySelector("#playerImage"),
	option1 = document.querySelector("#option1"),
	option2 = document.querySelector("#option2"),
	input = document.querySelector("#input"),
	inputPara = document.querySelector("#input p"),
	userInput = document.querySelector("#userInput"),
	userNameInput = document.querySelector("#userName");


userNameInput.focus();

userNameInput.addEventListener("keypress", (event) => {
	//Take user name and picture and put in variables.
	if (event.keyCode === 13) {
		//Create the player name as a global variable
		window.player = userNameInput.value;
		//Customize the page with the player's name
		title.textContent = player + "'s game!";
		//Make the form disappear from the screen
		userNameInput.classList.add("none");
		//Make all scene elements appear
		image.classList.remove("none");
		userInput.classList.remove("none");
		data("welcome", "scene1");
		playerImage.src="assets/player.jpeg";
		userInput.focus();
	}
});

var sceneData = {
	welcome: {
		scene1: {
		mainText: "Welcome " + window.player +"!",
		image: "assets/path.jpeg",
		option1: "For the dinosaur storyline type in 'DINO'.",
		option2: "For the safari storyline type in 'SAFARI'.",
		input: "What will you decide?"
		}
	},
	dinosaur: {
		scene1: {
			mainText: "dinosaur, scene 1",
			image: "assets/stegosaurus.jpeg",
			option1: "dinosaur, scene 1",
			option2: "dinosaur, scene 1",
			input: "dinosaur, scene 1",
			playerImage: "width: 33px; height: 33px; margin-left: 397px; margin-top: 90px;"
		},
		scene2: {
			mainText: "dinosaur, scene 2",
			// image: "dinosaur, scene 2",
			option1: "dinosaur, scene 2",
			option2: "dinosaur, scene 2",
			input: "dinosaur, scene 2"
		},
		scene3: {
			mainText: "dinosaur, scene 3",
			// image: "dinosaur, scene 3",
			option1: "dinosaur, scene 3",
			option2: "dinosaur, scene 3",
			input: "dinosaur, scene 3"
		}
	},
	safari: {
		scene1: {
			mainText: "safari, scene 1",
			image: "assets/cow.jpeg",
			option1: "safari, scene 1",
			option2: "safari, scene 1",
			input: "safari, scene 1",
			playerImage: "width: 50px; height: 50px; margin-left: 390px; margin-top: 117px;"
		},
		scene2: {
			mainText: "safari, scene 2",
			// image: "safari, scene 2",
			option1: "safari, scene 2",
			option2: "safari, scene 2",
			input: "safari, scene 2"
		},
		scene3: {
			mainText: "safari, scene 3",
			// image: "safari, scene 3",
			option1: "safari, scene 3",
			option2: "safari, scene 3",
			input: "safari, scene 3"
		}
	}
};

let data = (storyline, scene) => {
	mainText.textContent = sceneData[storyline][scene].mainText;
	image.src = sceneData[storyline][scene].image;
	option1.textContent = sceneData[storyline][scene].option1;
	option2.textContent = sceneData[storyline][scene].option2;
	inputPara.textContent = sceneData[storyline][scene].input;
	playerImage.style = sceneData[storyline][scene].playerImage;
	userInput.value = "";	
};

userInput.addEventListener("keypress", (event) => {
	//Take user name and picture and put in variables.
	if (event.keyCode === 13) {
		if (userInput.value.toLowerCase() === "dinosaur") {
			data("dinosaur", "scene1");
			playerImage.classList.remove("none");		
		} else if (userInput.value.toLowerCase() === "safari") {
			data("safari", "scene1");			
			playerImage.classList.remove("none");
		}
		else {
			console.log("wrong input");
		};
	};
});



//Tasks:
//2. Write and take pictures of scenes and create a scene DB.
//5. Background.
//6. Use user's image on the regular pictures to "put them in the scene".
//7. Create a button to return to the first scene without re-entering name and image file.
//8. Split up to seperate files to make it easier to understand.
//9. Enable name customization for all scenes with the player's name as given by the userNameInput