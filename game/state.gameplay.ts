import {
    Rhythm
} from './rhythm';


export class GameplayState extends Phaser.State {
    
    public static id: string = "state.gameplay";

    private circleGraphics: Phaser.Graphics;
    private circleSample: Phaser.Sprite;
    private diameter: number;
    private rhythm: Rhythm;

    constructor() {
        super();

        this.diameter = 100;
        this.rhythm = new Rhythm( 2000 );
    }

    create() {
        this.circleGraphics = new Phaser.Graphics( this.game, 0, 0 );
        this.circleGraphics.beginFill( 0x0FFFFF, 1 );
        this.circleGraphics.drawCircle( 0, 0, this.diameter );

        this.circleSample = this.game.add.sprite( (this.game.width/2), (this.game.height/2) );
        this.circleSample.addChild( this.circleGraphics );
        this.circleSample.anchor.set( 0.5 );
        this.circleSample.hitArea = new Phaser.Circle(this.circleSample.x, this.circleSample.y, this.diameter);
    }

    init() {
        this.rhythm.setStopped( true );
        this.rhythm.setCallback( 4, () => { console.log("quarter") }, this );
        this.rhythm.resetCountDown();
        this.rhythm.setStopped( false );
    }

    update() {
        this.circleGraphics.clear();
        if( this.circleSample.hitArea.contains( this.game.input.x, this.game.input.y)  ) {
            this.circleGraphics.beginFill( 0xF00000, 1 );
            this.circleGraphics.drawCircle( 0, 0, this.diameter );
        } else {
            this.circleGraphics.beginFill( 0x0FFFFF, 1 );
            this.circleGraphics.drawCircle( 0, 0, this.diameter );
        }

        this.rhythm.update( this.game.time.elapsed );
    }

}