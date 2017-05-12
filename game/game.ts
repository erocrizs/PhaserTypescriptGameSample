class EmptyGame {

  private phaserImage: Phaser.Sprite;
  private game: Phaser.Game;

    constructor(width: number, height: number) {
      this.game = new Phaser.Game(width, height, Phaser.AUTO, 'game', { preload: this.preload, create: this.create });
    }

    preload(): void {
      this.game.load.image('phaserImage', 'assets/sprites/phaser.png');
    }

    create(): void {
      this.phaserImage = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'phaserImage');
      this.phaserImage.anchor.setTo(0.5, 0.5);
    }

}

window.onload = () => {
  let game = new EmptyGame(800, 600);
}