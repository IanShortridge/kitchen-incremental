<template>
    <div class="card text-center mb-2 mr-2 ml-2 mt-2" :id="id">
        <div v-if="!unlocked">
            <b-card class="text-center" title="?">
                Locked
                <b-popover v-if="!unlocked" :target="id" triggers="hover" placement="top" :delay="{ show: 500, hide: 100 }">
                    {{ hint }}
                </b-popover>
            </b-card>
        </div>
        <div v-if="unlocked">
            <b-card class="text-center" :header="title">
                {{ effect }}
                <b-popover v-if="unlocked" :target="id" triggers="hover" placement="top" :delay="{ show: 500, hide: 100 }">
                    {{ bonus }}
                    <hr/>
                    <i>{{ description }}</i>
                </b-popover>
            </b-card>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Achievement',
        props: {
            id : {
                type : [String],
                required : true,
            },
            title : {
                type : [String],
                required: true,
            },
            effect : {
                type : [String],
                required: true,
            },
            bonus : {
                type : [String],
                required: true,
            },
            hint : {
                type : [String],
                required: true,
            },
            description : {
                type : [String],
                required: true,
            },
            unlocked : {
                type : [Boolean],
                required: true,
            },
        },
        data: function() {
            return {
                loaded: false,
            }
        },
        created: function() {
            this.loaded = true;
        },
        methods: {

        },
        computed: {

        },
    }
</script>

<style scoped>
    .card {
        cursor: default;
    }
</style>
