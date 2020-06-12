<template>
    <div v-if="show" class="card text-center" :class="{ pulse: showPulse }" @click="addPulse" v-on:animationend="removePulse">
        <b-container fluid="lg">
            <b-row>
                <b-col class="nameSpacing" cols="5">
                    {{ name }}
                </b-col>
                <b-col>
                    Cost: <br />
                    {{ cost.toFixed(0) }}
                </b-col>
                <b-col>
                    Owned: <br />
                    {{ number}}
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>

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
