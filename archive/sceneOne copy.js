const gameState = {}

function preload() {
  this.load.image('codey', 'https://content.codecademy.com/courses/learn-phaser/codey.png');
}

function create() {
  gameState.codey = this.add.sprite(150, 200, 'codey')
  // Set cursor keys here!
  gameState.cursors
  = this.input.keyboard.createCursorKeys();
  // world camera info
  game.world.setBounds(0, 0, 2000, 2000);

}

function update() {
  // Update based on keypress here!
 if (gameState.cursors.right.isDown) {
 gameState.codey.x += 5;
 }
 if (gameState.cursors.left.isDown) {
   gameState.codey.x -= 5;
 }
  if (gameState.cursors.up.isDown) {
 gameState.codey.y -= 5;
 }
 if (gameState.cursors.down.isDown) {
   gameState.codey.y += 5;
 }


const config = {
	type: Phaser.AUTO,
	width: 1440,
	height: 820,
	backgroundColor: "#5f2a55",
	scene: {
    preload, 
    create: create, 
    update: update, 
    render: render 
	}
}

const game = new Phaser.Game(config)
//
class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    create () 
    {
        this.cameras.main.setBounds(0, 0, 1024, 2048);
    
        this.add.image(0, 0, 'map').setOrigin(0).setScrollFactor(1);
    
        this.cursors = this.input.keyboard.createCursorKeys();
    
        this.codey = this.physics.add.image(400.5, 301.3, 'codey');
        // codey = this.add.image(400.5, 301.3, 'codey');
    
        this.cameras.main.startFollow(this.codey, true, 0.09, 0.09);
        // this.cameras.main.roundPixels = true;
    
        this.cameras.main.setZoom(4);
    }

    updateDirect ()
    {
        if (this.cursors.left.isDown)
        {
            this.codey.setAngle(-90);
            this.codey.x -= 2.5;
        }
        else if (this.cursors.right.isDown)
        {
            this.codey.setAngle(90);
            this.codey.x += 2.5;
        }

        if (this.cursors.up.isDown)
        {
            this.codey.setAngle(0);
            this.codey.y -= 2.5;
        }
        else if (this.cursors.down.isDown)
        {
            this.codey.setAngle(-180);
            this.codey.y += 2.5;
        }
    }

    update () 
    {
        this.codey.setVelocity(0);

        if (this.cursors.left.isDown)
        {
            this.codey.setAngle(-90).setVelocityX(-200);
        }
        else if (this.cursors.right.isDown)
        {
            this.codey.setAngle(90).setVelocityX(200);
        }
    
        if (this.cursors.up.isDown)
        {
            this.codey.setAngle(0).setVelocityY(-200);
        }
        else if (this.cursors.down.isDown)
        {
            this.codey.setAngle(-180).setVelocityY(200);
        }
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    pixelArt: true,
    physics: {
        default: 'arcade',
    },
    scene: [ Example ]
};
const game = new Phaser.Game(config);

