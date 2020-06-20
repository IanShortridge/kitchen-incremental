<template>
    <div>
        <progress-bar :val="progress" :max="maxProgress"/>
        <div class="breadImg" :class="{ pulse: showPulse }" @click="addPulse" v-on:animationend="removePulse" @mouseenter="mouseStart" @mouseleave="mouseEnd">
            <b-card no-body :img-src="require('../../assets/images/bread.jpg')" img-alt="bread-clicker" />
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
            }
        },
        created: function() {
            this.loaded = true;
        },
        methods: {
            addPulse: function() {
                this.showPulse = true;
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
                    console.log(this.progress);
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
</style>





