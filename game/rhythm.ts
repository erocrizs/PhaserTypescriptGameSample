export class Rhythm {
    private countDown: Array<number>;
    private callback: Array<()=>void>;
    private callbackContext: any;
    private stopped: boolean;

    constructor( private length: number ) {
        this.countDown = [];
        this.callback = [];
        this.callbackContext = [];

        let defaultCallback = () => {};
        for( let i = 1; i <= 16; i++ ) {
            this.countDown[i] = this.length / i;

            this.callback[i] = defaultCallback;
            this.callbackContext[i] = this;
        }
    }

    setStopped( stopped: boolean ) {
        this.stopped = stopped;
    }

    setCallback( index: number, newCallback: ()=>void, newCallbackContext: any ) {
        this.callback[ index ] = newCallback;
        this.callbackContext[ index ] = newCallbackContext;
    }

    resetCountDown() {
        for( let i = 1; i <= 16; i++ ) {
            this.countDown[i] = this.length / i;
        }
    }

    update( deltaTime: number ) {
        if( this.stopped ) return;

        for( let i = 0; i <= 16; i++ ) {
            this.countDown[i] -= deltaTime;

            if( this.countDown[i] <= 0 ) {
                this.callback[i].apply( this.callbackContext[i] );
                this.countDown[i] += ( this.length  / i );
            }
        }
    }
}