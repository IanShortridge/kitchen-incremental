<template>
  <div class="card bg-light">
    <div v-if="!loaded" class="text-center">
        <b-spinner />
    </div>
    <div v-if="loaded">
        <div class="card-header">
            <header-card :money="filteredMoney" :focus="filteredFocus"/>
        </div>
        <div class="card-body">
            <b-container fluid="lg">
                <b-row>
                    <b-col cols="4">
                        <div class="left-menu-buttons">
                            <b-button-group>
                                <b-button :variant="menuSelected('ingredients') ? 'primary' : 'secondary'" @click="activeLeftMenuItem = 'ingredients'">Ingredients</b-button>
                                <b-button :variant="menuSelected('upgrades') ? 'primary' : 'secondary'" @click="activeLeftMenuItem = 'upgrades'">Upgrades</b-button>
                            </b-button-group>
                            <div v-show="menuSelected('ingredients')">
                                <div v-for="ingredient in ingredients" v-bind:key="ingredient.id">
                                    <ingredient :id=ingredient.id
                                                :name="ingredient.name"
                                                :cost="ingredient.nextCost"
                                                :description="ingredient.description"
                                                :number="ingredient.value"
                                                :show="ingredient.active"
                                                @ingredientClick="buyIngredient"/>
                                </div>
                            </div>
                            <div v-show="menuSelected('upgrades')">
                                upgrades
                            </div>
                        </div>
                    </b-col>
                    <b-col>
                        <bread-image @breadClick="breadClick" @progress="breadProgress" :helperAmount="helperAmount"/>
                    </b-col>
                </b-row>
            </b-container>
<!--            <font-awesome-icon :icon="['fas', 'bread-slice']" />-->
        </div>
        <div class="card-footer">
            <b-container fluid="lg">
                <b-row>
                    <b-col>
                        <b-button @click="pauseButton" size="sm" pill variant="outline-secondary">{{ pauseButtonTxt }}</b-button>
                    </b-col>
                    <b-col cols="9" class="text-right">
                        <h6>This is a free game by a guy who wastes too much time in the kitchen.</h6>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
  </div>
</template>

<script>
import HeaderCard from "../../layout/HeaderCard";
import Ingredient from "./Ingredient";
import BreadImage from "./BreadImage";
import gameFunctions from "../util/gameFunctions";
import Big from 'big.js';
import {ingredientsList} from './kitchenConstants'

export default {
    name: 'Kitchen',
    components: { HeaderCard, Ingredient, BreadImage },
    mixins: [gameFunctions],
    props: {

    },
    data: function() {
        return {
            money: new Big(0),
            focus: new Big(0),
            allTimeMoney: new Big(0),
            allTimeFocus: new Big(0),
            tickSpeed: new Big(1000),
            ingredients: ingredientsList,
            prestige: {
                sardines: { name: 'Sardines', value: new Big(0), multiplier: new Big(2) },
                caviar: { name: 'Caviar', value: new Big(0), multiplier: new Big(2) },
            },
            randomEvent: false,
            activeLeftMenuItem: 'ingredients',
        }
    },
    created: function() {
        this.setupGame();
    },
    methods: {
        setupGame: function() {
            //load game here if in storage
            this.triggerCostRecalc();
            this.loaded = true;
            this.startLoop();
        },
        addMoney: function(amount) {
            this.money = this.money.plus(amount);
            this.allTimeMoney = this.allTimeMoney.plus(amount);
        },
        addFocus: function(amount) {
            this.focus = this.focus.plus(amount);
            this.allTimeFocus = this.allTimeFocus.plus(amount);
        },
        breadClick: function() {
            this.addMoney(new Big(1));
        },
        breadProgress: function() {
            this.addFocus(new Big(1));
        },
        buyIngredient: function(ingredient) {
            let ing = this.ingredients.find( ({ id }) => id === ingredient );
            let nextCost = this.nextCost(ing);
            if(nextCost.lte(this.money)) {
                this.money = this.money.minus(nextCost);
                ing.value = ing.value.plus(new Big(1));
                this.triggerCostRecalc();
            }
        },
        buyUpgrade: function(upgrade) {
            console.log(upgrade);
        },
        triggerCostRecalc: function() {
            let self = this;
            self.ingredients.forEach((ing)=> {
                ing.nextCost = self.nextCost(ing);
                ing.active = self.checkActiveIngredients(ing);
            });
        },
        menuSelected: function(menu) {
            return this.activeLeftMenuItem === menu;
        },
        nextCost: function(ing) {
            let result = 0;
            // if(ing.value.lt(new Big(1))) {
            //     result = new Big(1);
            // } else {
                let powered = new Big('1.15').pow(Number(ing.value.toString()));
                result = ing.baseCost.times(powered);
            // }
            return result;
        },
        runGame: function(delta) {
            let self = this;
            let numberOfTicks = delta.div(this.tickSpeed);
            self.ingredients.forEach((ing)=> {
                let moneyToGenerate = new Big(0);
                if(ing.value.gt(new Big(0)) && ing.active) {
                    //base mps * number of buildings * ticks
                    moneyToGenerate = (ing.baseMps.times(ing.value)).times(numberOfTicks);
                }
                self.addMoney(moneyToGenerate);
            })
        },
        checkActiveIngredients: function(ing) {
            let self = this;
            let result = false;
            switch (ing.id) {
                case 'kneadmasters':
                    result = true;
                    break;
                case 'flour':
                    result = self.allTimeMoney.gt(new Big(20));
                    break;
                case 'milk':
                    result = self.allTimeMoney.gt(new Big(500));
                    break;
                case 'vegetables':
                    result = self.allTimeMoney.gt(new Big(1000));
                    break;
                case 'eggs':
                    result = self.allTimeMoney.gt(new Big(100000));
                    break;
                case 'mushrooms':
                    result = self.allTimeMoney.gt(new Big(10000000));
                    break;
                case 'meat':
                    result = self.allTimeMoney.gt(new Big(10000000));
                    break;
                case 'sugar':
                    result = self.allTimeMoney.gt(new Big(100000000));
                    break;
                case 'chocolate':
                    result = self.allTimeMoney.gt(new Big(100000000));
                    break;
                case 'coffeeBeans':
                    result = self.allTimeMoney.gt(new Big(100000000));
                    break;
                default:
                    console.log('item not found');
                    result = false;
            }
            return result;
        },
        checkActiveUpgrades: function(upgrade) {
            let self = this;
            let result = false;
            switch (upgrade.id) {
                case ''
            }
        }
    },
    computed: {
        pauseButtonTxt: function() {
            return this.running ? 'Pause' : 'Unpause';
        },
        filteredMoney: function() {
            return this.money.toFixed(0);
        },
        filteredFocus: function() {
            return this.focus.toFixed(0);
        },
        filteredAllTimeMoney: function() {
            return this.all.toFixed(0);
        },
        helperAmount: function() {
            return parseFloat(this.ingredients[0].value.toString());
        },
    },
}
</script>

<style scoped>
    .left-menu-buttons {
        margin-top: -2.5em;
    }
    .card-body {
        min-height: 20em;
    }
</style>
