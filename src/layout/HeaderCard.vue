<template>
    <div>
        <b-container fluid="lg">
            <b-row>
                <b-col cols="4">
                    <div v-if="!canEditTitle" class="title-text"><h3><span>{{ title }}</span></h3></div>
                    <div v-if="canEditTitle" class="title-text" @click="editMode=true">
                        <div v-if="editMode">
                            <input v-model="title"/>
                            <b-button v-on:click.stop="editMode=false" variant="outline-secondary" size="sm" pill>{{ saveText }}</b-button>
                        </div>
                        <div v-if="!editMode">
                            <h3>{{ title }}</h3>
                        </div>
                    </div>
                </b-col>
                <b-col>
                    <div class="text-center">Money: {{ money }}</div>
                </b-col>
                <b-col @mouseenter="$emit('hoverStart')" @onmouseleave="$emit('hoverEnd')">
                    <div class="text-center">Focus: {{ focus }}</div>
                </b-col>
                <b-col>
                    <b-button-group class="float-right">
                        <b-button @click="save" variant="primary">{{ saveText }}</b-button>
                        <b-button @click="$emit('credits')">Credits</b-button>
                        <b-dropdown right text="Options" variant="info">
                            <b-dropdown-item @click="$emit('export')">Export Game</b-dropdown-item>
                            <b-dropdown-item @click="$emit('import')">Import Game</b-dropdown-item>
<!--                            <b-dropdown-item @click="$emit('load')">Load Game</b-dropdown-item>-->
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item @click="$emit('achievements')">Achievements</b-dropdown-item>
                        </b-dropdown>
                    </b-button-group>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        props: {
            money : {
                type : [String],
                required: true,
            },
            focus : {
                type : [String],
                required: true,
            },
            canEditTitle : {
                type : [Boolean],
                required: true,
            }
        },
        data: function() {
            return {
                loaded: false,
                saveText: 'Save',
                title: 'Kitchen Incremental',
                editMode: false,
            }
        },
        created: function() {
            this.loaded = true;
        },
        methods: {
            save: function() {
                let self = this;
                self.$emit('save');
                self.saveText = 'Saving...';
                setTimeout(() => {
                    self.saveText = 'Saved!';
                    setTimeout(() => {
                        self.saveText = 'Save';
                    }, 1000);
                }, 1000);

            },
        },
        computed: {
        },
    }
</script>

<style scoped>
    .title-text {
        margin-top: -0.5em;
    }
</style>
