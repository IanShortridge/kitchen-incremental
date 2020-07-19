import moment from "moment";
import Big from 'big.js';
Big.DP = 40;
Big.PE = 3;
import lzstring from 'lz-string';

export default {
    data: function() {
        return {
            loaded: false,
            running: false,
            gameloopInterval: null,
            timeStamp: new moment(),
            firstStarted: null,
            saveGameLoop: null,
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
            this.timeStamp = new moment();
            this.runGame(delta);
        },
        pauseLoop: function() {
            if(this.running) {
                this.running = false;
                clearInterval(this.gameloopInterval);
            }
        },
        pauseButton: function() {
            this.triggerPauseAchievementCheck();
            if(this.running) {
                this.pauseLoop();
                if(!this.pausedAchievementUnlocked) {
                    this.gamePausedAchievementLoop = setInterval(this.triggerLongPauseLoop, 300000);
                }
            } else {
                this.startLoop();
                if(!this.pausedAchievementUnlocked) {
                    clearInterval(this.gamePausedAchievementLoop);
                }
            }
        },
        saveGameLocally: function() {
            console.log('saving game');
            let compressed = this.exportGame();
            localStorage.setItem("kitchenIncremental", compressed);
        },
        loadGameLocally: function() {
            console.log('loading game');
            let compressed = localStorage.getItem("kitchenIncremental");
            if(compressed) {
                this.importGame(compressed);
            }
            this.startLoop();
        },
        exportGame: function() {
            let gameObject = {
                money: this.money,
                focus: this.focus,
                allTimeMoney: this.allTimeMoney,
                allTimeFocus: this.allTimeFocus,
                tickSpeed: this.tickSpeed,
                ingredients: this.ingredients,
                upgrades: this.upgrades,
                achievements: this.achievements,
                timeStamp: this.timeStamp,
                allTimeClicks: this.allTimeClicks,
                firstStarted: this.firstStarted,
                switcherAchievementUnlocked: this.switcherAchievementUnlocked,
                pausedAchievementUnlocked: this.pausedAchievementUnlocked,
                wrongHoverAchievementUnlocked: this.wrongHoverAchievementUnlocked,
                creditsClickedAchievementUnlocked: this.creditsClickedAchievementUnlocked,
                askedAchievementUnlocked: this.askedAchievementUnlocked,
                specificGoalsAchievementUnlocked: this.specificGoalsAchievementUnlocked,
            }
            return lzstring.compressToUTF16(JSON.stringify(gameObject));
        },
        importGame: function(compressed) {
            if(compressed.toLowerCase() === 'achievement') {
                this.askedAchievementUnlocked = true;
            } else if(compressed === '69') {
                this.specificGoalsAchievementUnlocked = true;
            } else {
                let uncompressed = lzstring.decompressFromUTF16(compressed);
                let gameObject = JSON.parse(uncompressed);
                this.money = new Big(gameObject.money);
                this.focus = new Big(gameObject.focus);
                this.allTimeMoney = new Big(gameObject.allTimeMoney);
                this.allTimeFocus = new Big(gameObject.allTimeFocus);
                this.tickSpeed = new Big(gameObject.tickSpeed);
                this.allTimeClicks = new Big(gameObject.allTimeClicks);
                this.switcherAchievementUnlocked = gameObject.switcherAchievementUnlocked;
                this.pausedAchievementUnlocked = gameObject.pausedAchievementUnlocked;
                this.wrongHoverAchievementUnlocked = gameObject.wrongHoverAchievementUnlocked;
                this.creditsClickedAchievementUnlocked = gameObject.creditsClickedAchievementUnlocked;
                this.askedAchievementUnlocked = gameObject.askedAchievementUnlocked;
                this.specificGoalsAchievementUnlocked = gameObject.specificGoalsAchievementUnlocked;
                let formattedIngredients = gameObject.ingredients;
                formattedIngredients.forEach(ing => {
                    ing.value = new Big(ing.value);
                    ing.baseCost = new Big(ing.baseCost);
                    ing.nextCost = new Big(ing.nextCost);
                    ing.baseMps = new Big(ing.baseMps);
                    ing.mps = new Big(ing.mps);
                });
                this.ingredients = formattedIngredients;
                let formattedUpgrades = gameObject.upgrades;
                formattedUpgrades.forEach(upgrade => {
                    upgrade.cost = new Big(upgrade.cost);
                });
                this.upgrades = gameObject.upgrades;
                this.achievements = gameObject.achievements;
                this.timeStamp = gameObject.timeStamp;
                this.firstStarted = gameObject.firstStarted;
            }
        },
    }
}