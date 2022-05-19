const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	backgroundColor: "b9eaff",
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
			enableBody: true,
		}
	},
	scene: [startScene, sceneOne]
};

const game = new Phaser.Game(config);

