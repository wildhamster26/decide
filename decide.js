"use strict";

let mainText = document.querySelector("#mainText"),
	image = document.querySelector("#mainImage"),
	option1 = document.querySelector("#option1"),
	option2 = document.querySelector("#option2"),
	input = document.querySelector("#input"),
	userInput = document.querySelector("#userInput"),
	userNameInput = document.querySelector("#userName");


userNameInput.focus();

let player;

userNameInput.addEventListener("keypress", (event) => {
	//Take user name and picture and put in variables.
	if (event.keyCode === 13) {
		player = userNameInput.value;
		//Make the form disappear from the screen
		userNameInput.classList.add("none");
		//Make all scene elements appear
		userInput.classList.remove("none");
		image.classList.remove("none");
	}
});


userInput.addEventListener("keypress", (event) => {
	//Take user name and picture and put in variables.
	if (event.keyCode === 13) {
		
	}
});



//Tasks:
//1. Event handlers to recieve user name and image.
//2. Write and take pictures of scenes and create a scene DB.
//3. Change page data according to the scene (main text, image, options 1+2).
//4. Event handler for the user input text box. Desensitize capitulation.
//5. Background.
//6. Use user's image on the regular pictures to "put them in the scene".
//7. Create a button to return to the first scene without re-entering name and image file.
//8. Split up to seperate files to make it easier to understand.