import moment from "moment";
import {Big} from "big.js";

export default {
    data: function() {
        return {
            achievementLoopRunning: false,
            achievementLoopInterval: null,
            switcherAchievementUnlocked: false,
            pausedAchievementUnlocked: false,
            wrongHoverAchievementUnlocked: false,
            creditsClickedAchievementUnlocked: false,
            askedAchievementUnlocked: false,
            specificGoalsAchievementUnlocked: false,
            pauseCounter: 0,
            pauseAchievementLoop: null,
            gamePausedAchievementLoop: null,
            focusHoverLoop: null,
            clickAchievementAmount: new Big(1),
            focusAchievementAmount: new Big(1)
        }
    },
    methods: {
        startAchievementLoop() {
            if(!this.achievementLoopRunning) {
                this.achievementLoopRunning = true;
                this.achievementLoopInterval = setInterval(this.checkAchievements, 5000);
            }
        },
        checkAchievements() {
            this.achievements.forEach(achieve => {
                if(!achieve.unlocked) {
                    this.checkSingleAchievement(achieve);
                }
            })
        },
        checkSingleAchievement(achieve) {
            let delta = null;
            switch (achieve.id) {
                case 'clicks1':
                    if(this.allTimeClicks.gt(new Big(100))) {
                        this.unlockAchievement(achieve);
                        this.clickAchievementAmount = this.clickAchievementAmount.plus(new Big(1));
                    }
                    break;
                case 'clicks2':
                    if(this.allTimeClicks.gt(new Big(1000))) {
                        this.unlockAchievement(achieve);
                        this.clickAchievementAmount = this.clickAchievementAmount.plus(new Big(5));
                    }
                    break;
                case 'clicks3':
                    if(this.allTimeClicks.gt(new Big(10000))) {
                        this.unlockAchievement(achieve);
                        this.clickAchievementAmount = this.clickAchievementAmount.plus(new Big(10));
                    }
                    break;
                case 'clicks4':
                    if(this.allTimeClicks.gt(new Big(150000))) {
                        this.unlockAchievement(achieve);
                        this.clickAchievementAmount = this.clickAchievementAmount.plus(new Big(25));
                    }
                    break;
                case 'clicks5':
                    if(this.allTimeClicks.gt(new Big(300000))) {
                        this.unlockAchievement(achieve);
                        this.clickMultiplier = this.clickMultiplier.times(new Big(4));
                    }
                    break;
                case 'focus1':
                    if(this.allTimeFocus.gt(new Big(10))) {
                        this.unlockAchievement(achieve);
                        this.focusAchievementAmount = this.focusAchievementAmount.plus(1);
                    }
                    break;
                case 'focus2':
                    if(this.allTimeClicks.gt(new Big(100))) {
                        this.unlockAchievement(achieve);
                        this.focusAchievementAmount = this.focusAchievementAmount.plus(2);
                    }
                    break;
                case 'focus3':
                    if(this.allTimeClicks.gt(new Big(3000))) {
                        this.unlockAchievement(achieve);
                        this.focusAchievementAmount = this.focusAchievementAmount.plus(3);
                    }
                    break;
                case 'focus4':
                    if(this.allTimeClicks.gt(new Big(10000))) {
                        this.unlockAchievement(achieve);
                        this.focusAchievementAmount = this.focusAchievementAmount.plus(4);
                    }
                    break;
                case 'focus5':
                    if(this.allTimeClicks.gt(new Big(50000))) {
                        this.unlockAchievement(achieve);
                        this.focusMultiplier = this.focusMultiplier.times(new Big(2));
                    }
                    break;
                case 'played1':
                    delta = new moment().diff(this.firstStarted, 'hours');
                    if(delta > 1) {
                        this.unlockAchievement(achieve);
                        let percentToRemove = new Big(100);
                        this.tickSpeed = this.tickSpeed.minus(percentToRemove);
                    }
                    break;
                case 'played2':
                    delta = new moment().diff(this.firstStarted, 'hours');
                    if(delta > 10) {
                        this.unlockAchievement(achieve);
                        let percentToRemove = new Big(100).times(new Big(2));
                        this.tickSpeed = this.tickSpeed.minus(percentToRemove);
                    }
                    break;
                case 'played3':
                    delta = new moment().diff(this.firstStarted, 'days');
                    if(delta > 2) {
                        this.unlockAchievement(achieve);
                        let percentToRemove = new Big(100).times(new Big(3));
                        this.tickSpeed = this.tickSpeed.minus(percentToRemove);
                    }
                    break;
                case 'played4':
                    delta = new moment().diff(this.firstStarted, 'days');
                    if(delta > 7) {
                        this.unlockAchievement(achieve);
                        let percentToRemove = new Big(100).times(new Big(4));
                        this.tickSpeed = this.tickSpeed.minus(percentToRemove);
                    }
                    break;
                case 'played5':
                    delta = new moment().diff(this.firstStarted, 'days');
                    if(delta > 30) {
                        this.unlockAchievement(achieve);
                        let percentToRemove = new Big(100).times(new Big(10));
                        this.tickSpeed = this.tickSpeed.minus(percentToRemove);
                    }
                    break;
                case 'switcher':
                    if(this.switcherAchievementUnlocked) {
                        this.unlockAchievement(achieve);
                    }
                    break;
                case 'paused':
                    if(this.pausedAchievementUnlocked) {
                        this.unlockAchievement(achieve);
                        this.mpsBonus = this.mpsBonus.plus(new Big(0.02));
                        this.recalcAllMps();
                    }
                    break;
                case 'wrongHover':
                    if(this.wrongHoverAchievementUnlocked) {
                        this.unlockAchievement(achieve);
                        this.mpsBonus = this.mpsBonus.plus(1)
                        this.recalcAllMps();
                    }
                    break;
                case 'creditsClicked':
                    if(this.creditsClickedAchievementUnlocked) {
                        this.unlockAchievement(achieve);
                    }
                    break;
                case 'asked':
                    if(this.askedAchievementUnlocked) {
                        this.unlockAchievement(achieve);
                        this.mpsBonus = this.mpsBonus.plus(new Big(0.02));
                        this.recalcAllMps();
                    }
                    break;
                case 'specificGoals':
                    if(this.specificGoalsAchievementUnlocked) {
                        this.unlockAchievement(achieve);
                        this.mpsBonus = this.mpsBonus.plus(new Big(0.069));
                        this.recalcAllMps();
                    }
                    break;
                default:
                    console.log('Achievement not found');

            }
        },
        unlockAchievement(toUnlock) {
            if(!toUnlock.unlocked) {
                toUnlock.unlocked = true;
                this.makeToast(toUnlock.name, toUnlock.description);
            }
        },
        makeToast(title, txt) {
            this.$bvToast.toast(txt, {
                title: title,
                autoHideDelay: 5000,
                toaster: 'b-toaster-bottom-center',
                bodyClass: 'text-center',
            })
        },
        checkPauseAchievement() {
            if(this.pauseCounter >= 10) {
                this.switcherAchievementUnlocked = true;
            } else {
                this.pauseCounter = 0;
            }
        },
        triggerPauseAchievementCheck() {
            if(!this.switcherAchievementUnlocked) {
                if(this.pauseCounter === 0) {
                    this.pauseAchievementLoop = setInterval(this.checkPauseAchievement, 10000);
                }
                this.pauseCounter++;
            }
        },
        triggerLongPauseLoop() {
            this.pausedAchievementUnlocked = true;
        },
        startFocusHoverLoop() {
            if(!this.wrongHoverAchievementUnlocked) {
                this.focusHoverLoop = setInterval(this.triggerFocusHoverAchievement, 120000);
            }
        },
        endFocusHoverLoop() {
            if(!this.wrongHoverAchievementUnlocked) {
                clearInterval(this.focusHoverLoop);
            }
        },
        triggerFocusHoverAchievement() {
            this.wrongHoverAchievementUnlocked = true
        },
    }
}