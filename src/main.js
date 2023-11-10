import Phaser from 'phaser'

import HelloWorldScene from './scenes/HelloWorldScene'
import AvarageGame from "./scenes/AvarageGame";

const config = {
	type: Phaser.AUTO,
	width: 400,
	height: 620,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 }
		}
	},
	scene: [AvarageGame],
	scale : {
		mode: Phaser.Scale.FIT,
		autoCenter : Phaser.Scale.CENTER_BOTH
	},
}


export default new Phaser.Game(config)
