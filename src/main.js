
import { SCALE, CAMERA_SCALE } from './game';
import { setupPlayer } from './player'
import * as level1 from './levels/level-1'
import setupGreenGuy from './enemy';
import mainScene from './scene/menu'
import displayUi from './ui/ui';
import gameover from './scene/gameover';


loadRoot('/Team2-Hackathon-2023/');

if (window.location.host.includes('github.io')) {
	console.log('on github');
} else {
	console.log('not github');
}

scene('level1', () => {
	setGravity(640 * SCALE);
	
	camScale(CAMERA_SCALE, CAMERA_SCALE);
	const level = level1.loadLevel();
	const player = setupPlayer(level);
	setupGreenGuy(level);

    displayUi(player);
});


scene('main', () => {
	mainScene();
});

scene('gameover', () => {
	gameover();
})

go('main');

// TEST
