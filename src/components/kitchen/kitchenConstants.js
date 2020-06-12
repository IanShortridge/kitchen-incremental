import Big from 'big.js';

let kneadmasterTxt = '';
let flourTxt = '';
let milkTxt = '';
let vegetablesTxt = '';
let eggsTxt = '';
let sugarTxt = '';
let chocolateTxt = '';
let meatTxt = '';

export let ingredientsList = [
    { id: 'kneadmasters',   name: 'Kneadmasters',   value: new Big(0), baseCost: new Big(10),       nextCost: new Big(10),      baseMps: new Big(0),        description: kneadmasterTxt,    active: true },
    { id: 'flour',          name: 'Flour',          value: new Big(0), baseCost: new Big(40),       nextCost: new Big(40),      baseMps: new Big(0.1),      description: flourTxt,          active: false },
    { id: 'milk',           name: 'Milk',           value: new Big(0), baseCost: new Big(80),       nextCost: new Big(80),      baseMps: new Big(1),        description: milkTxt,           active: false },
    { id: 'vegetables',     name: 'Vegetables',     value: new Big(0), baseCost: new Big(150),      nextCost: new Big(150),     baseMps: new Big(10),       description: vegetablesTxt,     active: false },
    { id: 'eggs',           name: 'Eggs',           value: new Big(0), baseCost: new Big(400),      nextCost: new Big(400),     baseMps: new Big(100),      description: eggsTxt,           active: false },
    { id: 'sugar',          name: 'Sugar',          value: new Big(0), baseCost: new Big(1000),     nextCost: new Big(1000),    baseMps: new Big(100000),   description: sugarTxt,          active: false },
    { id: 'chocolate',      name: 'Chocolate',      value: new Big(0), baseCost: new Big(4000),     nextCost: new Big(4000),    baseMps: new Big(1000000),  description: chocolateTxt,      active: false },
    { id: 'meat',           name: 'Meat',           value: new Big(0), baseCost: new Big(10000),    nextCost: new Big(10000),   baseMps: new Big(10000),    description: meatTxt,           active: false },
];

let betterClicks1Txt = 'An iron plate attached to your egg beaters shouldn\'t be helping this much...';
let betterKneads1Txt = 'Full suits of armor to allow your kneadmasters to stay clear of grease splashes.';
let productionBonus1Txt = 'Don\'t forget about the cookies dear...';
let unlockEventsTxt = 'Time in the kitchen always goes so much faster when there are other things to do.';
let unlockMiniGamesTxt = ''

export let upgrades = [
    { id: 'betterClicks1',      name: 'Better Clicks',                  description: betterClicks1Txt,      cost: 2, bought: false },
    { id: 'betterKneads',       name: 'More Efficient Kneadmasters',    description: betterKneads1Txt,      cost: 2, bought: false },
    { id: 'productionBonus1',   name: 'Grandmas\'s Special Advice',     description: productionBonus1Txt,   cost: 2, bought: false },
    { id: 'unlockEvents',       name: 'Better Clicks',  cost: 2, bought: false },
    { id: 'unlockMiniGame1',  name: 'Better Clicks',  cost: 2, bought: false },
    { id: 'betterClicks2',  name: 'Better Clicks',  cost: 2, bought: false },
];

let clicks1Txt = 'Pretty nice.';
let clicks2Txt = 'Getting up there.';
let clicks3Txt = 'Are you autoclicking?!';
let clicks4Txt = 'You are definitely autoclicking.';
let clicks5Txt = 'ALRIGHT NO MORE CLICKING';
let focus1Txt = 'You\'re pretty good at focusing!';
let focus2Txt = 'You should thank your Kneadmasters for this.';
let focus3Txt = 'AFK King.'
let focus4Txt = 'You feel waves of focus emanating from your body';
let focus5Txt = 'You\'re focusing so hard you\'re starting to glow.'




export let achievements = [
    { id: 'clicks1', name: '', description: clicks1Txt },
    { id: 'clicks2', name: '', description: clicks2Txt },
    { id: 'clicks3', name: '', description: clicks3Txt },
    { id: 'clicks4', name: '', description: clicks4Txt },
    { id: 'clicks5', name: '', description: clicks5Txt },
    { id: 'focus1', name: '', description: clicks1Txt },
    { id: 'focus2', name: '', description: clicks1Txt },
    { id: 'focus3', name: '', description: clicks1Txt },
    { id: 'focus4', name: '', description: clicks1Txt },
    { id: 'focus5', name: '', description: clicks1Txt },
    { id: 'clicks1', name: '', description: clicks1Txt },
    { id: 'clicks1', name: '', description: clicks1Txt },
    { id: 'clicks1', name: '', description: clicks1Txt },
    { id: 'clicks1', name: '', description: clicks1Txt },
    { id: 'clicks1', name: '', description: clicks1Txt },
    { id: 'clicks1', name: '', description: clicks1Txt },
    { id: 'clicks1', name: '', description: clicks1Txt },
    { id: 'clicks1', name: '', description: clicks1Txt },
    { id: 'clicks1', name: '', description: clicks1Txt },
    { id: 'clicks1', name: '', description: clicks1Txt },

]