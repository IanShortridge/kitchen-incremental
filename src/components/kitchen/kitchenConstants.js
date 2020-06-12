import Big from 'big.js';

let kneadmasterTxt = 'Known by many different names throughout the centuries, these creatures help take over certain kitchen jobs to let you focus on the more important things.';
let flourTxt = 'I don\'t think flour is supposed to be this dark in color or smell this metallic, but it sure improves your cooking!';
let milkTxt = 'Taking milk from the Kneadmasters seems unhygenic at best.';
let vegetablesTxt = 'You keep finding starchy ...leavings.... from the Kneadmasters. They kind of seem like potatoes.';
let eggsTxt = 'Regular Eggs that definitely come from something regular and not the Kneadmasters.';
let sugarTxt = 'Grandma\'s only ingredient!';
let meatTxt = 'Something has gone horribly wrong.';

export let ingredientsList = [
    { id: 'kneadmasters',   name: 'Kneadmasters',   value: new Big(0), baseCost: new Big(10),       nextCost: new Big(10),      baseMps: new Big(0),        description: kneadmasterTxt,    active: true },
    { id: 'flour',          name: 'Flour',          value: new Big(0), baseCost: new Big(40),       nextCost: new Big(40),      baseMps: new Big(0.1),      description: flourTxt,          active: false },
    { id: 'milk',           name: 'Milk',           value: new Big(0), baseCost: new Big(80),       nextCost: new Big(80),      baseMps: new Big(1),        description: milkTxt,           active: false },
    { id: 'vegetables',     name: 'Vegetables',     value: new Big(0), baseCost: new Big(150),      nextCost: new Big(150),     baseMps: new Big(10),       description: vegetablesTxt,     active: false },
    { id: 'eggs',           name: 'Eggs',           value: new Big(0), baseCost: new Big(400),      nextCost: new Big(400),     baseMps: new Big(100),      description: eggsTxt,           active: false },
    { id: 'sugar',          name: 'Sugar',          value: new Big(0), baseCost: new Big(1000),     nextCost: new Big(1000),    baseMps: new Big(100000),   description: sugarTxt,          active: false },
    { id: 'meat',           name: 'Meat',           value: new Big(0), baseCost: new Big(10000),    nextCost: new Big(10000),   baseMps: new Big(10000),    description: meatTxt,           active: false },
];

let betterClicks1Txt = 'An iron plate attached to your egg beaters shouldn\'t be helping this much...';
let betterKneads1Txt = 'Full suits of armor to allow your Kneadmasters to stay clear of grease splashes.';
let productionBonus1Txt = 'Don\'t forget about the cookies dear...';
let unlockEventsTxt = 'Good things come to those who pay attention.';
let betterClicks2Txt = 'Double spatulas hot-glued to your egg beaters should increase your efficiency.';
let unlockMiniGamesTxt = 'Time in the kitchen always goes so much faster when there are other things to do.'

export let upgradesList = [
    { id: 'betterClicks1',      name: 'Better Clicks',                  description: betterClicks1Txt,      cost: 2, bought: false, active: true },
    { id: 'betterKneads',       name: 'More Efficient Kneadmasters',    description: betterKneads1Txt,      cost: 2, bought: false, active: false },
    { id: 'productionBonus1',   name: 'Grandmas\'s Special Advice',     description: productionBonus1Txt,   cost: 2, bought: false, active: false },
    { id: 'unlockEvents',       name: 'Unlock Events',                  description: unlockEventsTxt,       cost: 2, bought: false, active: false },
    { id: 'betterClicks2',      name: 'Even Better Clicks',             description: betterClicks2Txt,      cost: 2, bought: false, active: false },
    { id: 'unlockMiniGame1',    name: 'Release Dogs',                   description: unlockMiniGamesTxt,    cost: 2, bought: false, active: false },
];

let clicks1Txt = 'Pretty nice.';
let clicks2Txt = 'Getting up there.';
let clicks3Txt = 'Are you autoclicking?!';
let clicks4Txt = 'You are definitely autoclicking.';
let clicks5Txt = 'ALRIGHT NO MORE CLICKING';
let focus1Txt = 'You\'re pretty good at focusing!';
let focus2Txt = 'You should thank your Kneadmasters for this.';
let focus3Txt = 'AFK King.';
let focus4Txt = 'You feel waves of focus emanating from your body';
let focus5Txt = 'You\'re focusing so hard you\'re starting to glow.';
let playedTxt1 = 'Filthy Casual.';
let playedTxt2 = 'Starting to rank up.';
let playedTxt3 = 'Pretty regular around here.';
let played4Txt = 'You should probably restart your computer at this point.';
let played5Txt = 'Did you only get this because of Covid-19?';
let switcherTxt = 'ON OFF ON OFF ON OFF';
let pausedTxt = 'But why?';
let wrongHoverTxt = 'You could have been gaining focus.';
let creditsClickedTxt = 'So Supportive!';
let askedTxt = 'If you insist!';

export let achievements = [
    { id: 'clicks1',    name: 'Lots of clicks',                         description: clicks1Txt },
    { id: 'clicks2',    name: 'Many clicks',                            description: clicks2Txt },
    { id: 'clicks3',    name: 'Tons of clicks',                         description: clicks3Txt },
    { id: 'clicks4',    name: 'Too many clicks',                        description: clicks4Txt },
    { id: 'clicks5',    name: 'Why are you still doing this?',          description: clicks5Txt },
    { id: 'focus1',     name: 'HURRRRRR',                               description: focus1Txt },
    { id: 'focus2',     name: 'WHAT DOES IT MEAN',                      description: focus2Txt },
    { id: 'focus3',     name: 'DOES EVERYONE ELSE THINK IN ALL CAPS',   description: focus3Txt },
    { id: 'focus4',     name: 'I THOUGHT TOO MUCH',                     description: focus4Txt },
    { id: 'focus5',     name: 'Nirvana aka AFK',                        description: focus5Txt },
    { id: 'played1',    name: 'Starting Out',                           description: playedTxt1 },
    { id: 'played2',    name: 'Ranking Up',                             description: playedTxt2 },
    { id: 'played3',    name: 'Regular',                                description: playedTxt3 },
    { id: 'played4',    name: 'Obsessed',                               description: played4Txt },
    { id: 'played5',    name: 'Shut-in',                                description: played5Txt },
    { id: 'switcher',   name: 'Too Much Coffee',                        description: switcherTxt },
    { id: 'paused',     name: 'Why did he put this in the game?',       description: pausedTxt },
    { id: 'wrongHover', name: 'You\'re doing it wrong',                 description: wrongHoverTxt },
    { id: 'creditsClicked', name: 'You\'re Helping!',                   description: creditsClickedTxt },
    { id: 'asked', name: 'You asked for it.',                           description: askedTxt },

];