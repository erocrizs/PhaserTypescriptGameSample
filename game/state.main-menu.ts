import {
    GameplayState
} from './state.gameplay';

export class MainMenuState extends Phaser.State {

    public static id: string = "state.main-menu";

    // title sprite
    private titleImage: Phaser.Sprite;
    private titleImageId: string;
    private titleImageURI: string;

    // play button sprite
    private playButtonImageId: string;
    private playButtonImageURI: string;
    private playButton: Phaser.Button;

    constructor() {
        super();

        this.titleImageId = "titleImage";
        this.titleImageURI = "assets/sprites/phaser.png";

        this.playButtonImageId = "play-button";
        this.playButtonImageURI = "assets/sprites/play-button.png";
    }

    preload() {
        this.load.image( this.titleImageId, this.titleImageURI );
        this.load.spritesheet( this.playButtonImageId, this.playButtonImageURI, 34, 22, 3 );
    }

    create() {
        this.titleImage = this.add.sprite( (this.game.width/2), (this.game.height/3), this.titleImageId );
        this.titleImage.anchor.set( 0.5, 0.5 ); // place the anchor of the sprite to the center
        this.titleImage.scale.set( 0.75 );

        this.playButton = this.game.add.button( (this.game.width/2), (this.game.height * 2/3), this.playButtonImageId, this.playButtonTrigger, this, 1, 2, 0 );
        this.playButton.anchor.set( 0.5, 0.5 );
        this.playButton.scale.set( 1 );
    }

    playButtonTrigger() {
        this.game.state.start( GameplayState.id );
    }

}