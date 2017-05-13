import {
    MainMenuState
} from './state.main-menu';

import {
    Globals
} from './globals';

class TapGame {
    
    private game: Phaser.Game;

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, "game");
        Globals.game = this.game;
        
        this.game.state.add( MainMenuState.id, MainMenuState, false );

        this.game.state.start( MainMenuState.id );
        
    }
}

window.onload = () => {
    let game: TapGame = new TapGame();
}