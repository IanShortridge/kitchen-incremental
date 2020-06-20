import moment from "moment";

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
                    if(this.allTimeClicks > 100) {
                        this.unlockAchievement(achieve);
                    }
                    break;
                case 'clicks2':
                    if(this.allTimeClicks > 1000) {
                        this.unlockAchievement(achieve);
                    }
                    break;
                case 'clicks3':
                    if(this.allTimeClicks > 10000) {
                        this.unlockAchievement(achieve);
                    }
                    break;
                case 'clicks4':
                    if(this.allTimeClicks > 150000) {
                        this.unlockAchievement(achieve);
                    }
                    break;
                case 'clicks5':
                    if(this.allTimeClicks > 300000) {
                        this.unlockAchievement(achieve);
                    }
                    break;
                case 'focus1':
                    if(this.allTimeFocus > 10) {
                        this.unlockAchievement(achieve);
                    }
                    break;
                case 'focus2':
                    if(this.allTimeClicks > 100) {
                        this.unlockAchievement(achieve);
                    }
                    break;
                case 'focus3':
                    if(this.allTimeClicks > 3000) {
                        this.unlockAchievement(achieve);
                    }
                    break;
                case 'focus4':
                    if(this.allTimeClicks > 10000) {
                        this.unlockAchievement(achieve);
                    }
                    break;
                case 'focus5':
                    if(this.allTimeClicks > 50000) {
                        this.unlockAchievement(achieve);
                    }
                    break;
                case 'played1':
                    delta = new moment().diff(this.firstStarted, 'hours');
                    if(delta > 1) {
                        this.unlockAchievement(achieve);
                    }
                    break;
                case 'played2':
                    delta = new moment().diff(this.firstStarted, 'hours');
                    if(delta > 10) {
                        this.unlockAchievement(achieve);
                    }
                    break;
                case 'played3':
                    delta = new moment().diff(this.firstStarted, 'days');
                    if(delta > 2) {
                        this.unlockAchievement(achieve);
                    }
                    break;
                case 'played4':
                    delta = new moment().diff(this.firstStarted, 'days');
                    if(delta > 7) {
                        this.unlockAchievement(achieve);
                    }
                    break;
                case 'played5':
                    delta = new moment().diff(this.firstStarted, 'days');
                    if(delta > 30) {
                        this.unlockAchievement(achieve);
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
                    }
                    break;
                case 'wrongHover':
                    if(this.wrongHoverAchievementUnlocked) {
                        this.unlockAchievement(achieve);
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
                    }
                    break;
                case 'specificGoals':
                    if(this.specificGoalsAchievementUnlocked) {
                        this.unlockAchievement(achieve);
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