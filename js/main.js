import { drawMap } from "./map/map.js";
import { getChanceCard, getCommunityChestCard } from './cards/cards.js';

console.log('main.js loaded...');

// draw map
let mapDiv = document.querySelector('#map');
drawMap(mapDiv);

// 
let chanceCard = getChanceCard();
console.log(chanceCard);

// 
let communityChestCard = getCommunityChestCard();
console.log(communityChestCard);