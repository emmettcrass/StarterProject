class startScene extends Phaser.Scene {
	constructor() {
		super({ key: 'startScene' })
	}

	create() {
		this.add.text( 150, 250, 'Click to start!', {fill: '#000000', fontSize: '65px'})
		this.input.on('pointerdown', () => {
			this.scene.stop('startScene')
			this.scene.start('sceneOne')
		})
	}
}