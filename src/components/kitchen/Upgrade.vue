<template>
    <div v-if="show" class="card text-center" :class="{ pulse: showPulse }" @click="addPulse" v-on:animationend="removePulse">
        <b-container fluid="lg" :id="id">
            <b-row>
                <b-col class="nameSpacing" cols="5">
                    {{ name }}
                </b-col>
                <b-col>
                    Cost: <br />
                    {{ cost.toFixed(0) }} Focus
                </b-col>
            </b-row>
        </b-container>
        <b-popover :target="id" triggers="hover" placement="top" :delay="{ show: 500, hide: 100 }">
            {{ effect }}
            <hr/>
            <i>{{ description }}</i>
        </b-popover>
    </div>
</template>

<script>
    import Big from 'big.js';
    Big.DP = 40;
    Big.PE = 3;

    export default {
        name: 'Upgrade',
        props: {
            id : {
                type : [String],
                required : true,
            },
            bought : {
                type : [Boolean],
                required: true,
            },
            cost : {
                type : [Object],
                required: true,
            },
            name : {
                type : [String],
                required: true,
            },
            effect : {
                type : [String],
                required: true,
            },
            description : {
                type : [String],
                required: true,
            },
            show : {
                type : [Boolean],
                required: true,
            }
        },
        data: function() {
            return {
                loaded: false,
                showPulse: false,
            }
        },
        created: function() {
            this.loaded = true;
        },
        methods: {
            addPulse: function() {
                this.showPulse = true;
                this.$emit('upgradeBought', this.id);
            },
            removePulse: function() {
                this.showPulse = false;
            }
        },
        computed: {

        },
    }
</script>

<style scoped>
    .card {
        margin-top: 1em;
        margin-bottom: 1em;
    }
    .card:hover {
        background-color: lightgrey;
        cursor: pointer;
    }
    .nameSpacing {
        margin-top: 0.5em;
    }
</style>
