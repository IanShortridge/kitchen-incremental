<template>
    <div >
        <progress-bar :val="progress" :max="maxProgress"/>
        <div class="breadImg" :class="{ pulse: showPulse }"  @click="breadClick($event)" v-on:animationend="removePulse" @mouseenter="mouseStart" @mouseleave="mouseEnd">
            <b-card no-body :img-src="require('../../assets/images/bread.jpg')" img-alt="bread-clicker" />
            <transition-group
                    name="floatingNum"
                    tag="div"
                    @enter="enter"
                    v-on:after-enter="test">
                <div
                        v-for="floatingNum in floatingNums"
                        :key="floatingNum.id"
                        class="floatingNum">
                    hi
                </div>
            </transition-group>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Ingredient',
        props: {
            helperAmount : {
                type : [Object],
                required : true,
            },
        },
        data: function() {
            return {
                loaded: false,
                showPulse: false,
                progress: 0,
                maxProgress: 1000,
                mouseInPlay: false,
                timerStarted: false,
                mouseLoopInterval: null,
                floatingNums: [],
                mostRecentClickCoordinates: null,
            }
        },
        created: function() {
            this.loaded = true;
        },
        methods: {
            test: function(element) {
                element.style.display = `none`;
                // this.floatingNums.shift();
                console.log(element);
            },
            breadClick: function(event) {
                this.showPulse = true;
                 this.mostRecentClickCoordinates = {
                    x: event.clientX,
                    y: event.clientY
                };
                this.floatingNums.push({
                    id: Date.now(),
                });

                this.$emit('breadClick');
            },
            removePulse: function() {
                this.showPulse = false;
            },
            mouseStart: function() {
                this.mouseInPlay = true;
                if(!this.timerStarted) {
                    this.timerStarted = true;
                    this.mouseLoopInterval = setInterval(this.checkLoop, 100);
                }
            },
            checkLoop: function() {
                if(this.mouseInPlay) {
                    this.progress = this.progress + parseFloat(this.helperAmount.toString()) + 5;
                    // console.log(this.progress);
                    if(this.progress > this.maxProgress) {
                        this.progress = 0;
                        this.$emit('progress');
                    }
                }
            },
            mouseEnd: function() {
                clearInterval(this.mouseLoopInterval);
                this.mouseInPlay = false;
                this.timerStarted = false;
            },
            enter(element) {

                let clickX = this.mostRecentClickCoordinates.x;
                let clickY = this.mostRecentClickCoordinates.y;
                let rect = element.getBoundingClientRect();
                let deltaX = ( clickX - rect.left - ( rect.width / 2 ) );
                let deltaY = ( clickY - rect.top - ( rect.height / 2 ) );

                element.style.transform = `translateX( ${ deltaX }px ) translateY( ${ deltaY }px )`;

            },
        },
        computed: {

        },
    }
</script>

<style scoped>
    .breadImg {
        cursor: pointer;
        margin-top: 1em;
    }
    .float-enter-active {
        animation: float .5s;
    }

    @keyframes float {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
    .floatingNum {
        position: absolute;
    }

    .floatingNum-enter-active {
         animation: floatingNum 1.5s;
     }
    @keyframes floatingNum {
        0% {
            top: -1px
        }
        25% {
            top: -2px;
        }
        50% {
            top: -3px;
        }
        75% {
            top: -4px;
        }
        99% {
            top:-25px;
        }
        100% {
            display: none;
        }
    }
</style>





