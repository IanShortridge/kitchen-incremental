import Big from 'big.js';

Big.DP = 40;
Big.PE = 3;

let kneadmasterDescTxt = 'Known by many different names throughout the centuries, these creatures help take over certain kitchen jobs to let you focus on the more important things.';
let flourDescTxt = 'I don\'t think flour is supposed to be this dark in color or smell this metallic, but it sure improves your cooking!';
let milkDescTxt = 'Taking milk from the Kneadmasters seems unhygenic at best.';
let vegetablesDescTxt = 'You keep finding starchy ...leavings.... from the Kneadmasters. They kind of seem like potatoes.';
let eggsDescTxt = 'Regular Eggs that definitely come from something regular and not the Kneadmasters.';
let sugarDescTxt = 'Grandma\'s only ingredient!';
let meatDescTxt = 'Something has gone horribly wrong.';

let kneadmasterEffectTxt = 'Kneadmasters are currently augmenting your focus bar at';
let flourEffectTxt = 'Flour is augmenting your bread and automatically being sold at';
let milkEffectTxt = 'Milk is augmenting your bread and automatically being sold at';
let vegetablesEffectTxt = 'Vegetables are augmenting your bread and automatically being sold at';
let eggsEffectTxt = 'Eggs are augmenting your bread and automatically being sold at';
let sugarEffectTxt = 'Sugar is augmenting your bread and automatically being sold at';
let meatEffectTxt = 'Meat is piling up in the corner of the kitchen and starting to give you a bad feeling.';

export let ingredientsList = [
    { id: 'kneadmasters',   name: 'Kneadmasters',   value: new Big(0), baseCost: new Big(15),       nextCost: new Big(15),          baseMps: new Big(0),        mps: new Big(0),    description: kneadmasterDescTxt,    effect: kneadmasterEffectTxt,   active: true },
    { id: 'flour',          name: 'Flour',          value: new Big(0), baseCost: new Big(15),       nextCost: new Big(15),          baseMps: new Big(0.1),      mps: new Big(0),    description: flourDescTxt,          effect: flourEffectTxt,         active: false },
    { id: 'milk',           name: 'Milk',           value: new Big(0), baseCost: new Big(100),      nextCost: new Big(100),         baseMps: new Big(1),        mps: new Big(0),    description: milkDescTxt,           effect: milkEffectTxt,          active: false },
    { id: 'vegetables',     name: 'Vegetables',     value: new Big(0), baseCost: new Big(1100),     nextCost: new Big(1100),        baseMps: new Big(8),        mps: new Big(0),    description: vegetablesDescTxt,     effect: vegetablesEffectTxt,    active: false },
    { id: 'eggs',           name: 'Eggs',           value: new Big(0), baseCost: new Big(12000),    nextCost: new Big(12000),       baseMps: new Big(47),       mps: new Big(0),    description: eggsDescTxt,           effect: eggsEffectTxt,          active: false },
    { id: 'sugar',          name: 'Sugar',          value: new Big(0), baseCost: new Big(130000),   nextCost: new Big(130000),      baseMps: new Big(260),      mps: new Big(0),    description: sugarDescTxt,          effect: sugarEffectTxt,         active: false },
    { id: 'meat',           name: 'Meat',           value: new Big(0), baseCost: new Big(1400000),  nextCost: new Big(1400000),     baseMps: new Big(1400),     mps: new Big(0),    description: meatDescTxt,           effect: meatEffectTxt,          active: false },
];

let betterClicks1DescTxt = 'An iron plate attached to your spatula shouldn\'t be helping this much...';
let betterKneads1DescTxt = 'Full suits of armor to allow your Kneadmasters to stay clear of grease splashes.';
let productionBonus1DescTxt = 'Don\'t forget about the cookies dear...';
let unlockEventsDescTxt = 'Good things come to those who pay attention.';
let kathulu1DescTxt = 'One blow from this horn and a swarm of small black Kats will join your Kneadmasters, freeing them to do more important things.';
let betterClicks2DescTxt = 'Double spatulas hot-glued to your egg beaters should increase your efficiency.';
let productionBonus2DescTxt = 'Turning the ovens up all the way makes everything cook way faster.';
let unlockMiniGamesDescTxt = 'Time in the kitchen always goes so much faster when there are other things to do.';

let betterClicks1EffectTxt = 'Clicks are worth twice as much.';
let betterKneads1EffectTxt = 'Kneadmasters are 25% more effective in aiding you in focus.';
let productionBonus1EffectTxt = '10% bonus to Mps.';
let unlockEventsEffectTxt = 'Unlock random events.';
let kathulu1EffectTxt = 'Kneadmasters each count as two of themselves.';
let betterClicks2EffectTxt = 'Clicks are worth twice as much again.';
let productionBonus2EffectTxt = '15% bonus to Mps';
let unlockMiniGamesEffectTxt = 'Unlock Trivials.';


export let upgradesList = [
    { id: 'betterClicks1',      name: 'Better Clicks',                  effect: betterClicks1EffectTxt,     description: betterClicks1DescTxt,      cost: new Big(5),        bought: false, active: true },
    { id: 'betterKneads',       name: 'More Efficient Kneadmasters',    effect: betterKneads1EffectTxt,     description: betterKneads1DescTxt,      cost: new Big(20),       bought: false, active: false },
    { id: 'productionBonus1',   name: 'Grandmas\'s Special Advice',     effect: productionBonus1EffectTxt,  description: productionBonus1DescTxt,   cost: new Big(100),      bought: false, active: false },
    { id: 'unlockEvents',       name: 'Unlock Events',                  effect: unlockEventsEffectTxt,      description: unlockEventsDescTxt,       cost: new Big(1000),     bought: false, active: false },
    { id: 'kathulu1',           name: 'Call of Kathulu',                effect: kathulu1EffectTxt,          description: kathulu1DescTxt,           cost: new Big(2000),     bought: false, active: false },
    { id: 'betterClicks2',      name: 'Even Better Clicks',             effect: betterClicks2EffectTxt,     description: betterClicks2DescTxt,      cost: new Big(4000),     bought: false, active: false },
    { id: 'productionBonus2',   name: 'Grandmas\'s Special Advice',     effect: productionBonus2EffectTxt,  description: productionBonus2DescTxt,   cost: new Big(8000),     bought: false, active: false },
    { id: 'unlockMiniGame1',    name: 'Release the Hounds',             effect: unlockMiniGamesEffectTxt,   description: unlockMiniGamesDescTxt,    cost: new Big(10000),    bought: false, active: false },
];

let clicks1DescTxt = 'Pretty nice.';
let clicks2DescTxt = 'Getting up there.';
let clicks3DescTxt = 'Are you autoclicking?!';
let clicks4DescTxt = 'You are definitely autoclicking.';
let clicks5DescTxt = 'ALRIGHT NO MORE CLICKING';
let focus1DescTxt = 'You\'re pretty good at focusing!';
let focus2DescTxt = 'You should thank your Kneadmasters for this.';
let focus3DescTxt = 'AFK King.';
let focus4DescTxt = 'You feel waves of focus emanating from your body';
let focus5DescTxt = 'You\'re focusing so hard you\'re starting to glow.';
let playedDescTxt1 = 'Filthy Casual.';
let playedDescTxt2 = 'Starting to rank up.';
let playedDescTxt3 = 'Pretty regular around here.';
let playedDescTxt4 = 'You should probably restart your computer at this point.';
let playedDescTxt5 = 'Did you only get this because of Covid-19?';
let switcherDescTxt = 'ON OFF ON OFF ON OFF';
let pausedDescTxt = 'But why?';
let wrongHoverDescTxt = 'You could have been gaining focus.';
let creditsClickedDescTxt = 'So Supportive!';
let askedDescTxt = 'If you insist!';
let specificGoalsDescTxt = 'Lol';

let clicks1BonusTxt = '+1 to every click.';
let clicks2BonusTxt = '+5 to every click.';
let clicks3BonusTxt = '+10 to every click.';
let clicks4BonusTxt = '+25 to every click.';
let clicks5BonusTxt = 'Clicks are worth 4 times as much.';
let focus1BonusTxt = '+1 to focus every time the bar fills.';
let focus2BonusTxt = '+2 to focus every time the bar fills.';
let focus3BonusTxt = '+4 to focus every time the bar fills.';
let focus4BonusTxt = '+8 to focus every time the bar fills.';
let focus5BonusTxt = 'Focus gained from a bar fill is doubled.';
let playedBonusTxt1 = 'Tick speed increased by 1%';
let playedBonusTxt2 = 'Tick speed increased by 2%';
let playedBonusTxt3 = 'Tick speed increased by 3%';
let playedBonusTxt4 = 'Tick speed increased by 4%';
let playedBonusTxt5 = 'Tick speed increased by 10%';
let switcherBonusTxt = 'While the game is paused your clicks are worth 10% more.';
let pausedBonusTxt = '2% bonus to MPS.';
let wrongHoverBonusTxt = '+1 to focus every time the bar fills.';
let creditsClickedBonusTxt = 'You can now edit the name of this game... woo!';
let askedBonusTxt = '2% bonus to MPS.';
let specificGoalsBonusTxt = '6.9% bonus to MPS.';

let clicks1EffectTxt = 'Click 100 times.';
let clicks2EffectTxt = 'Click 1,000 times.';
let clicks3EffectTxt = 'Click 10,000 times.';
let clicks4EffectTxt = 'Click 150,000 times.';
let clicks5EffectTxt = 'Click 300,000 times.';
let focus1EffectTxt = 'Focus 10 times.';
let focus2EffectTxt = 'Focus 100 times.';
let focus3EffectTxt = 'Focus 3,000 times.';
let focus4EffectTxt = 'Focus 10,000 times.';
let focus5EffectTxt = 'Focus 50,000 times.';
let playedEffectTxt1 = 'Play for an hour.';
let playedEffectTxt2 = 'Play for 10 hours.';
let playedEffectTxt3 = 'Play for 2 days.';
let playedEffectTxt4 = 'Play for a week.';
let playedEffectTxt5 = 'Play for a month.';
let switcherEffectTxt = 'Pause and Unpause 10 times in 10 seconds.';
let pausedEffectTxt = 'Keep the game paused for 5 minutes in a row.';
let wrongHoverEffectTxt = 'Hover over the focus counter for 2 minutes.';
let creditsClickedEffectTxt = 'Opened the credits.';
let askedEffectTxt = 'Import \'Achievement\'';
let specificGoalsEffectTxt = 'Import \'69\'';

let clicks1HintTxt = 'Click click click.';
let clicks2HintTxt = 'Keep clicking.';
let clicks3HintTxt = 'Just keep clicking, just keep clicking.';
let clicks4HintTxt = 'Do you heve have to ask at this point?';
let clicks5HintTxt = 'You know the drill, The end is in sight.';
let focus1HintTxt = 'Focus up!';
let focus2HintTxt = 'Concentrate harder.';
let focus3HintTxt = 'Just keep focusing.';
let focus4HintTxt = 'What\'s the plural of focus? focii?';
let focus5HintTxt = 'Focus Pocus.';
let playedHintTxt1 = 'Keep playing.';
let playedHintTxt2 = 'Keeeep playing.';
let playedHintTxt3 = 'Keeeeeeeeeep playing.';
let playedHintTxt4 = 'Keeeeeeeeeeeeeeeeeeeep playing.';
let playedHintTxt5 = 'do it';
let switcherHintTxt = 'Take a pause to think about it, then repeat.';
let pausedHintTxt = 'Probably best to take a long break for this one.';
let wrongHoverHintTxt = 'This doesn\'t even give you focus.';
let creditsClickedHintTxt = 'You really care about the developer!';
let askedHintTxt = 'Sometimes the best thing to do is just ask for it.';
let specificGoalsHintTxt = 'Lol, there\'s only one number.';

export let achievementsList = [
    { id: 'clicks1',        name: 'Lots of clicks',                         description: clicks1DescTxt,            hint: clicks1HintTxt,           bonus: clicks1BonusTxt,         effect: clicks1EffectTxt,           unlocked: false },
    { id: 'clicks2',        name: 'Many clicks',                            description: clicks2DescTxt,            hint: clicks2HintTxt,           bonus: clicks2BonusTxt,         effect: clicks2EffectTxt,           unlocked: false },
    { id: 'clicks3',        name: 'Tons of clicks',                         description: clicks3DescTxt,            hint: clicks3HintTxt,           bonus: clicks3BonusTxt,         effect: clicks3EffectTxt,           unlocked: false },
    { id: 'clicks4',        name: 'Too many clicks',                        description: clicks4DescTxt,            hint: clicks4HintTxt,           bonus: clicks4BonusTxt,         effect: clicks4EffectTxt,           unlocked: false },
    { id: 'clicks5',        name: 'Why are you still doing this?',          description: clicks5DescTxt,            hint: clicks5HintTxt,           bonus: clicks5BonusTxt,         effect: clicks5EffectTxt,           unlocked: false },
    { id: 'focus1',         name: 'HURRRRRR',                               description: focus1DescTxt,             hint: focus1HintTxt,            bonus: focus1BonusTxt,          effect: focus1EffectTxt,            unlocked: false },
    { id: 'focus2',         name: 'WHAT DOES IT MEAN',                      description: focus2DescTxt,             hint: focus2HintTxt,            bonus: focus2BonusTxt,          effect: focus2EffectTxt,            unlocked: false },
    { id: 'focus3',         name: 'DOES EVERYONE ELSE THINK IN ALL CAPS',   description: focus3DescTxt,             hint: focus3HintTxt,            bonus: focus3BonusTxt,          effect: focus3EffectTxt,            unlocked: false },
    { id: 'focus4',         name: 'I THOUGHT TOO MUCH',                     description: focus4DescTxt,             hint: focus4HintTxt,            bonus: focus4BonusTxt,          effect: focus4EffectTxt,            unlocked: false },
    { id: 'focus5',         name: 'Nirvana aka AFK',                        description: focus5DescTxt,             hint: focus5HintTxt,            bonus: focus5BonusTxt,          effect: focus5EffectTxt,            unlocked: false },
    { id: 'played1',        name: 'Starting Out',                           description: playedDescTxt1,            hint: playedHintTxt1,           bonus: playedBonusTxt1,         effect: playedEffectTxt1,           unlocked: false },
    { id: 'played2',        name: 'Ranking Up',                             description: playedDescTxt2,            hint: playedHintTxt2,           bonus: playedBonusTxt2,         effect: playedEffectTxt2,           unlocked: false },
    { id: 'played3',        name: 'Regular',                                description: playedDescTxt3,            hint: playedHintTxt3,           bonus: playedBonusTxt3,         effect: playedEffectTxt3,           unlocked: false },
    { id: 'played4',        name: 'Obsessed',                               description: playedDescTxt4,            hint: playedHintTxt4,           bonus: playedBonusTxt4,         effect: playedEffectTxt4,           unlocked: false },
    { id: 'played5',        name: 'Shut-in',                                description: playedDescTxt5,            hint: playedHintTxt5,           bonus: playedBonusTxt5,         effect: playedEffectTxt5,           unlocked: false },
    { id: 'switcher',       name: 'Too Much Coffee',                        description: switcherDescTxt,           hint: switcherHintTxt,          bonus: switcherBonusTxt,        effect: switcherEffectTxt,          unlocked: false },
    { id: 'paused',         name: 'Why did he put this in the game?',       description: pausedDescTxt,             hint: pausedHintTxt,            bonus: pausedBonusTxt,          effect: pausedEffectTxt,            unlocked: false },
    { id: 'wrongHover',     name: 'You\'re doing it wrong',                 description: wrongHoverDescTxt,         hint: wrongHoverHintTxt,        bonus: wrongHoverBonusTxt,      effect: wrongHoverEffectTxt,        unlocked: false },
    { id: 'creditsClicked', name: 'You\'re Helping!',                       description: creditsClickedDescTxt,     hint: creditsClickedHintTxt,    bonus: creditsClickedBonusTxt,  effect: creditsClickedEffectTxt,    unlocked: false },
    { id: 'asked',          name: 'You asked for it.',                      description: askedDescTxt,              hint: askedHintTxt,             bonus: askedBonusTxt,           effect: askedEffectTxt,             unlocked: false },
    { id: 'specificGoals',  name: 'What did you expect?',                   description: specificGoalsDescTxt,      hint: specificGoalsHintTxt,     bonus: specificGoalsBonusTxt,   effect: specificGoalsEffectTxt,     unlocked: false },
];

let tutorialTxt1 = 'Welcome to the kitchen! I know you\'re new to making food for a living but I think that you have what it takes to make it in this business. ' +
    'There are a few weird-looking creatures around here you might be able to convince to help you but other than that you are on your own.';
let tutorialTxt2 = 'Since you\'re new here let me explain a few things. You\'re able to make the cheapest crappiest bread in this kitchen just by clicking it, which is then automatically sold by the kitchen and turned into money.';
let tutorialTxt3 = 'The more experience you get as a chef the more you\'ll start experimenting with new ingredients, which your helpers can automatically mix into your bread and sell for you.';
let tutorialTxt4 = 'Cooking and selling for money isn\'t enough though, you\'ll need to focus on your food as well. Hovering your mouse over the bread image long enough will let you think about bread so hard that you gain focus, ' +
    'Gain enough focus and you will have insight into ways you can increase your cooking production... and more.';
let tutorialTxt5 = 'Finally, achievements are milestones that give you additional bonuses. Some bonuses are more powerful than others.';

export let tutorialText = [
    {id: 1,  description: tutorialTxt1},
    {id: 2,  description: tutorialTxt2},
    {id: 3,  description: tutorialTxt3},
    {id: 4,  description: tutorialTxt4},
    {id: 5,  description: tutorialTxt5},
]