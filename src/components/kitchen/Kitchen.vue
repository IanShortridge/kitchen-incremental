<template>
  <div class="card bg-light kitchenContainer">
    <div v-if="!loaded" class="text-center">
        <b-spinner />
    </div>
    <div v-if="loaded">
        <div class="card-header">
            <header-card :money="filteredMoney"
                         :focus="filteredFocus"
                         :can-edit-title="creditsClickedAchievementUnlocked"
                         @credits="openCreditsModal"
                         @export="openExportModal"
                         @import="openImportModal"
                         @achievements="openAchievementsModal"
                         @save="saveGameLocally"
                         @load="loadGameLocally"
                         @hoverStart="startFocusHoverLoop"
                         @hoverEnd="endFocusHoverLoop"/>
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
                                                :effect="ingredient.effect"
                                                :number="ingredient.value"
                                                :show="ingredient.active"
                                                :mps="ingredient.mps"
                                                @ingredientClick="buyIngredient"/>
                                </div>
                            </div>
                            <div v-show="menuSelected('upgrades')">
                                <div v-for="upgrade in upgrades" v-bind:key="upgrade.id">
                                    <upgrade :id=upgrade.id
                                             :name="upgrade.name"
                                             :cost="upgrade.cost"
                                             :effect="upgrade.effect"
                                             :description="upgrade.description"
                                             :bought="upgrade.bought"
                                             :show="upgrade.active"
                                             @upgradeBought="buyUpgrade"/>
                                </div>
                            </div>
                        </div>
                    </b-col>
                    <b-col>
                        <bread-image @breadClick="breadClick" @progress="breadProgress" :helperAmount="helperAmount"/>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <div class="card-footer">
            <b-container fluid="lg">
                <b-row>
                    <b-col>
                        <b-button @click="pauseButton" size="sm" pill variant="outline-secondary">{{ pauseButtonTxt }}</b-button>
                    </b-col>
                    <b-col cols="9" class="text-right">
                        <h6>This is a free game by a guy who wastes too much time.</h6>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>

<!--      MODALS-->
      <b-modal id="importModal" title="Import Save">
          <b-form-textarea
                  id="importTextArea"
                  v-model="importTextArea"
                  rows="3"
                  max-rows="6"
                  busy="true">
          </b-form-textarea>
          <template v-slot:modal-footer="{ close }">
              <b-button size="sm" variant="success" @click="tryImportGame">
                  OK
              </b-button>
              <b-button size="sm" variant="danger" @click="close()">
                  Cancel
              </b-button>
          </template>
      </b-modal>
      <b-modal id="exportModal" title="Export Save">
          <b-form-textarea
                  id="exportTextArea"
                  v-model="exportTextArea"
                  rows="3"
                  max-rows="6">
          </b-form-textarea>
      </b-modal>
      <b-modal id="creditsModal" title="Credits" hide-footer>
          <p>i did this</p>
      </b-modal>
      <b-modal id="achievementsModal" title="Achievements (hover over unlocked achievements for reward info)" size="xl">
          <b-container fluid="lg">
              <b-row>
                  <b-col cols="4" v-for="achievement in achievements" v-bind:key="achievement.id">
                      <achievement :id="achievement.id"
                                   :description="achievement.description"
                                   :effect="achievement.effect"
                                   :title="achievement.name"
                                   :bonus="achievement.bonus"
                                   :hint="achievement.hint"
                                   :unlocked="achievement.unlocked"/>
                  </b-col>
              </b-row>
          </b-container>
      </b-modal>
      <b-modal id="tutorialModal" scrollable title="Instructions" cancel-disabled centered no-close-on-backdrop>
          <p>{{ tutorial[0].description }}</p>
          <p>{{ tutorial[1].description }}</p>
          <p>{{ tutorial[2].description }}</p>
          <p>{{ tutorial[3].description }}</p>
          <p>{{ tutorial[4].description }}</p>
      </b-modal>
  </div>
</template>

<script>
import HeaderCard from "../../layout/HeaderCard";
import Ingredient from "./Ingredient";
import BreadImage from "./BreadImage";
import gameFunctions from "../util/gameFunctions";
import Big from 'big.js';
Big.DP = 40;
Big.PE = 3;
import {ingredientsList, upgradesList, achievementsList, tutorialText} from './kitchenConstants'
import Upgrade from "./Upgrade";
import achievementChecker from "../util/achievementChecker";
import Achievement from "./Achievement";
import moment from 'moment';

export default {
    name: 'Kitchen',
    components: {Achievement, Upgrade, HeaderCard, Ingredient, BreadImage },
    mixins: [gameFunctions, achievementChecker],
    props: {

    },
    data: function() {
        return {
            money: new Big(0),
            focus: new Big(0),
            allTimeMoney: new Big(0),
            allTimeFocus: new Big(0),
            allTimeClicks: new Big(0),
            tickSpeed: new Big(1000),
            ingredients: ingredientsList,
            upgrades: upgradesList,
            achievements: achievementsList,
            tutorial: tutorialText,
            prestige: {
                sardines: { name: 'Sardines', value: new Big(0), multiplier: new Big(2) },
                caviar: { name: 'Caviar', value: new Big(0), multiplier: new Big(2) },
            },
            randomEvent: false,
            activeLeftMenuItem: 'ingredients',
            importTextArea: '',
            exportTextArea: '',
            mpsBonus: new Big(1),
            clickMultiplier: new Big(1),
            focusMultiplier: new Big(1),
            kneadmasterMultiplier: new Big(1),
            kathuluUnlocked: false,
            eventsUnlocked: false,
            minigamesUnlocked: false,
        }
    },
    created: function() {
        this.setupGame();
    },
    methods: {
        setupGame: function() {
            this.loadGameLocally();
            this.startAchievementLoop();
            this.triggerCostRecalc();
            this.triggerVisibility();
            this.startLoop();
            this.saveGameLoop = setInterval(this.saveGameLocally, 60000);
            this.loaded = true;
        },
        addMoney: function(amount) {
            this.money = this.money.plus(amount);
            this.allTimeMoney = this.allTimeMoney.plus(amount);
            this.triggerIngredientVisibility();
        },
        addFocus: function(amount) {
            this.focus = this.focus.plus(amount);
            this.allTimeFocus = this.allTimeFocus.plus(amount);
            this.triggerUpgradeVisibility();
        },
        breadClick: function() {
            let pauseAcheivementAmt = this.switcherAchievementUnlocked ? new Big(1.1) : new Big(1);
            this.addMoney(this.clickMultiplier.times(this.clickAchievementAmount).times(pauseAcheivementAmt));
            this.allTimeClicks = this.allTimeClicks.plus(1);
        },
        breadProgress: function() {
            this.addFocus(this.focusMultiplier.times(this.focusAchievementAmount));
        },
        buyIngredient: function(ingredient) {
            let ing = this.ingredients.find( ({ id }) => id === ingredient );
            let nextCost = this.nextCost(ing);
            if(nextCost.lte(this.money)) {
                this.money = this.money.minus(nextCost);
                ing.value = ing.value.plus(new Big(1));
                ing.nextCost = this.nextCost(ing);
                ing.mps = this.calculateMps(ing);
            }
            this.triggerIngredientVisibility();

        },
        buyUpgrade: function(up) {
            let upgrade = this.upgrades.find( ({ id }) => id === up );
            if(upgrade.cost.lte(this.focus)) {
                this.focus = this.focus.minus(upgrade.cost);
                upgrade.bought = true;
                upgrade.active = false;
                this.triggerUpgradeEffect(upgrade.id);
            }
            this.triggerUpgradeVisibility();
        },
        triggerCostRecalc: function() {
            let self = this;
            self.ingredients.forEach(ing => {
                ing.nextCost = self.nextCost(ing);
            });
        },
        triggerVisibility: function() {
            this.triggerIngredientVisibility();
            this.triggerUpgradeVisibility();
        },
        triggerIngredientVisibility() {
            let self = this;
            self.ingredients.forEach(ing => {
                if(!ing.active) {
                    ing.active = self.checkActiveIngredients(ing);
                }
            });
        },
        triggerUpgradeVisibility() {
            let self = this;
            self.upgrades.forEach(upgrade => {
                if(!upgrade.active && !upgrade.bought) {
                    upgrade.active = self.checkActiveUpgrades(upgrade);
                }
            });
        },
        triggerUpgradeEffect(upgrade) {
            switch (upgrade) {
                case 'productionBonus1':
                    this.mpsBonus = this.mpsBonus.plus(0.1);
                    this.recalcAllMps();
                    break;
                case 'productionBonus2':
                    this.mpsBonus = this.mpsBonus.plus(0.15);
                    this.recalcAllMps();
                    break;
                case 'betterClicks1':
                    this.clickMultiplier = this.clickMultiplier.times(2);
                    break;
                case 'betterClicks2':
                    this.clickMultiplier = this.clickMultiplier.times(2);
                    break;
                case 'betterKneads':
                    this.kneadmasterMultiplier = this.kneadmasterMultiplier.plus(0.25);
                    this.recalcMps(this.ingredients[0]);
                    break;
                case 'kathulu1':
                    this.kneadmasterMultiplier = this.kneadmasterMultiplier.times(2);
                    this.recalcMps(this.ingredients[0]);
                    this.kathuluUnlocked = true;
                    break;
                case 'unlockEvents':
                    this.eventsUnlocked = true;
                    break;
                case 'unlockMiniGame1':
                    this.minigamesUnlocked = true;
                    break;
                default:
                    console.log('upgrade not found');
            }
        },
        recalcAllMps: function() {
            this.ingredients.forEach(ing => {
                this.recalcMps(ing);
            });
        },
        recalcMps: function(ing) {
            ing.mps = this.calculateMps(ing);
        },
        menuSelected: function(menu) {
            return this.activeLeftMenuItem === menu;
        },
        nextCost: function(ing) {
            let result = 0;
            let powered = new Big('1.15').pow(Number(ing.value.toString()));
            result = ing.baseCost.times(powered);
            return result;
        },
        runGame: function(delta) {
            let self = this;
            let numberOfTicks = delta.div(this.tickSpeed);
            // console.log(numberOfTicks.toString());
            self.ingredients.forEach((ing)=> {
                let moneyToGenerate = new Big(0);
                if(ing.value.gt(new Big(0)) && ing.active && ing.id !== 'kneadmasters' && ing.id !== 'meat') {
                    //base mps * number of buildings * ticks
                    moneyToGenerate = (ing.mps).times(numberOfTicks);
                }
                self.addMoney(moneyToGenerate);
            })
            if(!self.firstStarted) {
                self.firstStarted = new moment();
                self.$bvModal.show('tutorialModal');
            }
        },
        calculateMps: function(ing) {
            if(ing.id === 'kneadmasters') {
                return this.helperAmount;
            } else if(ing.id === 'meat') {
                return new Big(0);
            } else {
                let baseRate = ing.value.times(ing.baseMps);
                return this.mpsBonus.times(baseRate);
            }
        },
        tryImportGame: function() {
            this.importGame(this.importTextArea)
            this.$bvModal.hide('importModal')
        },
        openExportModal: function() {
            this.exportTextArea = this.exportGame();
            this.$bvModal.show('exportModal');
        },
        openImportModal: function() {
            this.$bvModal.show('importModal');
        },
        openCreditsModal: function() {
            this.$bvModal.show('creditsModal');
            this.creditsClickedAchievementUnlocked = true;
        },
        openAchievementsModal: function() {
            this.$bvModal.show('achievementsModal');
        },
        checkActiveIngredients: function(ing) {
            let self = this;
            let result = false;
            switch (ing.id) {
                case 'kneadmasters':
                case 'flour':
                    result = true;
                    break;
                case 'milk':
                    result = self.allTimeMoney.gt(new Big(100));
                    break;
                case 'vegetables':
                    result = self.allTimeMoney.gt(new Big(1100));
                    break;
                case 'eggs':
                    result = self.allTimeMoney.gt(new Big(12000));
                    break;
                case 'sugar':
                    result = self.allTimeMoney.gt(new Big(130000));
                    break;
                case 'meat':
                    result = self.allTimeMoney.gt(new Big(1400000));
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
                case 'betterClicks1':
                    result = true;
                    break;
                case 'betterKneads':
                    result = self.allTimeFocus.gt(new Big(15));
                    break;
                case 'productionBonus1':
                    result = self.allTimeFocus.gt(new Big(30));
                    break;
                case 'unlockEvents':
                    result = self.allTimeFocus.gt(new Big(60));
                    break;
                case 'kathulu1':
                    result = self.allTimeFocus.gt(new Big(130));
                    break;
                case 'betterClicks2':
                    result = self.allTimeFocus.gt(new Big(240));
                    break;
                case 'unlockMiniGame1':
                    result = self.allTimeFocus.gt(new Big(350));
                    break;
                default:
                    console.log('item not found');
                    result = false;
            }
            return result;
        },
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
            return this.ingredients[0].value.times(this.kneadmasterMultiplier);
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
    .kitchenContainer {
        -webkit-user-select: none;  /* Chrome all / Safari all */
        -moz-user-select: none;     /* Firefox all */
        -ms-user-select: none;      /* IE 10+ */
        user-select: none;          /* Likely future */
    }
</style>
