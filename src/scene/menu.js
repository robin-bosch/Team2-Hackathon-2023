//The main menu
import addButton from "../button";
import displaySoundSettings from "../ui/sound_settings";

function mainScene() {
	setBackground(0,0,60)

	loadSprite("buildings", "assets/background/buildings-bg.png")
	loadSprite("nearBuildings", "assets/background/near-buildings-bg.png")
	loadSprite("skyline", "assets/background/skyline-a.png")

	loadFont("Unscii", "assets/fonts/unscii-16.ttf")

	const backgroundLayerBottom = add([]);
	const backgroundLayerMiddle = add([]);
	const backgroundLayerTop = add([]);

	for(let i = 0; i*25 < width(); i++) {
		backgroundLayerBottom.add([
			sprite("skyline"),
			pos(i*640, 0),
			scale(5,5)
		])
	}

	for(let i = 0; i*25 < width(); i++) {
		backgroundLayerMiddle.add([
			sprite("buildings"),
			pos(i*720, height()-740),
			scale(5,5)
		])
	}

	for(let i = 0; i*25 < width(); i++) {
		backgroundLayerTop.add([
			sprite("nearBuildings"),
			pos(i*1300, height()-420),
			scale(2.5,2.5)
		])
	}

	add([
		text("Code Nexus", {
			align: "center",
			font: "Unscii",
			size: 72,
		}),
		color(255, 255, 255),
		anchor("center"),
		pos(center().x, center().y - 200),
	])
	
	addButton("Start", center(), () => go("level1"))

	displaySoundSettings();
}

export default mainScene;