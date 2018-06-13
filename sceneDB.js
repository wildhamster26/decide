"use strict";
var sceneData = {
	welcome: {
		scene1: {
		mainText: "As you walk around town you come across a stegosaurus and a zebra. They both call you to come with them and explore their world.",
		image: "assets/path.jpeg",
		option1: "For the dinosaur world type in 'DINOSAUR'.",
		option2: "For the safari world type in 'SAFARI'.",
		input: "Which one will you go with?"
		}
	},
	dinosaur: {
		scene1: {
			mainText: "As you ride the huge stegosaurus, you see many different kinds of dinosaurs. They want to play with you, but the stegosaurus is getting thirsty and says he wants to go to the watering hole.",
			image: "assets/stegosaurus.jpeg",
			option1: "To go play with another dinosaur, type in 'PLAY'.",
			option2: "To go with the stegosaurus to the watering hole, type in 'WATER'.",
			playerImage: "width: 33px; height: 33px; margin-left: 397px; margin-top: 90px;"
		},
		scene2: {
			mainText: "After playing with some dinosaurs, you hear a cry of pain. One of the dinosaurs has stepped on a thorn and is in pain.",
			image: "dinosaur, scene 2",
			option1: "To help the dinosaur remove the thorn, type in 'HELP'.",
			option2: "To go look for a dinosaur doctor, type in 'DOCTOR'.",
			playerImage: "width: 50px; height: 50px; margin-left: 390px; margin-top: 117px;"
		},
		scene3: {
			mainText: "You remove the thorn from the giant foot. The dinosaur shouts in pain very loudly and all other dinosaurs quickly disappear. The wounded dinosaur thanks you and limps away. You are all alone.",
			image: "dinosaur, scene 3",
			option1: "To go to the watering hole type in 'WATER'.",
			option2: "To wait and try to understand why all the dinosaurs left, type in 'WAIT'.",
			playerImage: "width: 50px; height: 50px; margin-left: 390px; margin-top: 117px;"
		},
		scene4: {
			mainText: "You get to the watering hole and find many dinosaurs drinking and playing in the water. A Brachiosaurus and a Pterodactyl offer you to play with them.",
			image: "assets/stegosaurus.jpeg",
			option1: "To slide down the brachiosaurus' back into the water, type in 'SLIDE'.",
			option2: "To go fly with the pterodactyl, type in 'FLY'.",
			playerImage: "width: 33px; height: 33px; margin-left: 397px; margin-top: 90px;"
		},
		scene5: {
			mainText: "After waiting a bit, you hear a terrifying roar. A T-Rex appears and starts running towards you. What do you do?",
			image: "dinosaur, scene 2",
			option1: "To run away, type in 'RUN'.",
			option2: "To call daddy for help, type in 'DAD'.",
			playerImage: "width: 50px; height: 50px; margin-left: 390px; margin-top: 117px;"
		},
		scene6: {
			mainText: "You call your dad. He comes over quickly and tells the mean T-Rex to stop his bullying and go to his room!",
			image: "dinosaur, scene 3",
			option1: "",
			option2: "",
			input: "Way to go dad!  :)",
			playerImage: "width: 50px; height: 50px; margin-left: 390px; margin-top: 117px;"
		},
		scene7: {
			mainText: "You run as fast as you can with the scary T-Rex chasing you. You notice a big cliff with a big vine next to it and run there. As you swing from the vine, the great carnivore can't slow down and falls off the cliff. You are now safe and sound.",
			image: "assets/stegosaurus.jpeg",
			option1: "",
			option2: "",
			input: "Awesome! You have defeated the tyrannosaurus!",
			playerImage: "width: 33px; height: 33px; margin-left: 397px; margin-top: 90px;"
		},
		scene8: {
			mainText: "You hurry to the dino-hospital to get a doctor and bring him back to the wounded dinosaur. The doctor gently removes the thorn with your help and asks you if you'd like to be his assistant.",
			image: "dinosaur, scene 2",
			option1: "To continue helping the doctor, type in 'LEARN'.",
			option2: "To thank the doctor and go play at the watering hole, type in 'WATER'.",
			playerImage: "width: 50px; height: 50px; margin-left: 390px; margin-top: 117px;"
		},
		scene9: {
			mainText: "You spend the rest of the day helping the doctor heal wounded dinosaurs and they all thank you for your kindness. As you go back home you feel really good about helping others.",
			image: "dinosaur, scene 3",
			option1: "",
			option2: "",
			input: "You are a very good person! Thank you!",
			playerImage: "width: 50px; height: 50px; margin-left: 390px; margin-top: 117px;"
		},
		scene10: {
			mainText: "The great brachiosaurus lifts you up on his head and lets you slide down his back and tail into the water. You laugh so hard that more dinosaurs offer to play with you.",
			image: "assets/stegosaurus.jpeg",
			option1: "To go play hide-and-seek with many dinosaurs type in 'SEEK'.",
			option2: "To go fly with the pterodactyl, type in 'FLY'.",
			playerImage: "width: 33px; height: 33px; margin-left: 397px; margin-top: 90px;"
		},
		scene11: {
			mainText: "Can you find the 5 hiding dinosaurs in the picture?",
			image: "dinosaur, scene 2",
			option1: "To finish the game of hide-and-seek and go home, type in 'HOME'.",
			option2: "To go hide by yourself, type in 'HIDE'.",
			playerImage: "width: 50px; height: 50px; margin-left: 390px; margin-top: 117px;"
		},
		scene12: {
			mainText: "You go look for the perfect spot and hide, all by yourself. As time goes by, you realize you've hid too well and as the dinosaurs couldn't find you they have went back home.",
			image: "dinosaur, scene 3",
			option1: "To go back home, type in 'HOME'.",
			option2: "To wait and see if any dinosaurs come back, type in 'WAIT'.",
			playerImage: "width: 50px; height: 50px; margin-left: 390px; margin-top: 117px;"
		},
		scene13: {
			mainText: "As you start going back home, a small dinosaur you haven't noticed before (maybe the judge), comes and hands you a medal that says 'Congratulations! You are the winner of hide-and-seek!'. You go back home and proudly show the medal to your parents.",
			image: "assets/stegosaurus.jpeg",
			option1: "",
			option2: "",
			input: "You are the best hide-and-seek player in the dinosaur world!",
			playerImage: "width: 33px; height: 33px; margin-left: 397px; margin-top: 90px;"
		},
		scene14: {
			mainText: "You climb on the pterodactyl's back and together you soar to the sky. The wind and the quiet are amazing and you are very happy. The pterodactyl flies over your city.",
			image: "dinosaur, scene 2",
			option1: "To ask the pterodactyl to go back to the watering hole, type in 'WATER'.",
			option2: "To ask the pterodactyl to bring you back to your city, type in 'RESTART'.",
			playerImage: "width: 50px; height: 50px; margin-left: 390px; margin-top: 117px;"
		}
	},
	safari: {
		scene1: {
			mainText: "safari, scene 1",
			image: "assets/cow.jpeg",
			option1: "safari, scene 1",
			option2: "safari, scene 1",
			playerImage: "width: 50px; height: 50px; margin-left: 390px; margin-top: 117px;"
		},
		scene2: {
			mainText: "safari, scene 2",
			image: "safari, scene 2",
			option1: "safari, scene 2",
			option2: "safari, scene 2",
			playerImage: "width: 50px; height: 50px; margin-left: 390px; margin-top: 117px;"
		},
		scene3: {
			mainText: "safari, scene 3",
			image: "safari, scene 3",
			option1: "safari, scene 3",
			option2: "safari, scene 3",
			playerImage: "width: 50px; height: 50px; margin-left: 390px; margin-top: 117px;"
		}
	}
};