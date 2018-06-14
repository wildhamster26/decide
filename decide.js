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
		//DINOSAUR STORYLINE
		if (userInput.value.toLowerCase() === "dinosaur") {
			data("dinosaur", "scene1");
			playerImage.classList.remove("none");		
		} else if (userInput.value.toLowerCase() === "play") {
			data("dinosaur", "scene2");			
		} else if (userInput.value.toLowerCase() === "help") {
			data("dinosaur", "scene3");			
		} else if (userInput.value.toLowerCase() === "water") {
			data("dinosaur", "scene4");			
		} else if (userInput.value.toLowerCase() === "wait") {
			data("dinosaur", "scene5");			
		} else if (userInput.value.toLowerCase() === "dad") {
			data("dinosaur", "scene6");			
		} else if (userInput.value.toLowerCase() === "run") {
			data("dinosaur", "scene7");			
		} else if (userInput.value.toLowerCase() === "doctor") {
			data("dinosaur", "scene8");			
		} else if (userInput.value.toLowerCase() === "learn") {
			data("dinosaur", "scene9");			
		} else if (userInput.value.toLowerCase() === "slide") {
			data("dinosaur", "scene10");			
		} else if (userInput.value.toLowerCase() === "seek") {
			data("dinosaur", "scene11");			
		} else if (userInput.value.toLowerCase() === "hide") {
			data("dinosaur", "scene12");			
		} else if (userInput.value.toLowerCase() === "home") {
			data("dinosaur", "scene13");			
		} else if (userInput.value.toLowerCase() === "fly") {
			data("dinosaur", "scene14");			
		} else if (userInput.value.toLowerCase() === "restart") {
			data("welcome", "scene1");			
		} else if (userInput.value.toLowerCase() === "safari") {
			data("safari", "scene1");			
			playerImage.classList.remove("none");
		} else if (userInput.value.toLowerCase() === "") {
			data("safari", "scene2");			
		} else if (userInput.value.toLowerCase() === "") {
			data("safari", "scene3");			
		} else if (userInput.value.toLowerCase() === "") {
			data("safari", "scene4");			
		} else if (userInput.value.toLowerCase() === "") {
			data("safari", "scene5");			
		} else if (userInput.value.toLowerCase() === "") {
			data("safari", "scene6");			
		} else if (userInput.value.toLowerCase() === "") {
			data("safari", "scene7");			
		} else if (userInput.value.toLowerCase() === "") {
			data("safari", "scene8");			
		} else if (userInput.value.toLowerCase() === "") {
			data("safari", "scene9");			
		} else if (userInput.value.toLowerCase() === "") {
			data("safari", "scene10");			
		} else if (userInput.value.toLowerCase() === "") {
			data("safari", "scene11");			
		} else if (userInput.value.toLowerCase() === "") {
			data("safari", "scene12");			
		} else if (userInput.value.toLowerCase() === "") {
			data("safari", "scene13");			
		} else if (userInput.value.toLowerCase() === "") {
			data("safari", "scene14");			
		} else if (userInput.value.toLowerCase() === "") {
			data("safari", "scene15");			
		}
		else {
			console.log("wrong input");
		};
	};
});



//Tasks:
//2. Write and take pictures of scenes and create a scene DB.
//5. Background.
//7. Create a button to return to the first scene without re-entering name and image file.
//9. Enable name customization for all scenes with the player's name as given by the userNameInput
//10. Center and enlarge the text for the options and main.