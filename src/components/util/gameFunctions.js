import moment from "moment";
import Big from 'big.js';

export default {
    data: function() {
        return {
            loaded: false,
            running: false,
            gameloopInterval: null,
            timeStamp: new moment(),
        }
    },
    methods: {
        startLoop: function() {
            if(!this.running) {
                this.running = true;
                this.gameloopInterval = setInterval(this.gameLoop, 1000);
            }
        },
        gameLoop: function() {
            let delta = new Big(new moment().diff(this.timeStamp));
            this.runGame(delta);
        },
        pauseLoop: function() {
            if(this.running) {
                this.running = false;
                clearInterval(this.gameloopInterval);
            }
        },
        pauseButton: function() {
            if(this.running) {
                this.pauseLoop();
            } else {
                this.startLoop();
            }
        },
    }
}