import { drawMap } from "./map/map.js";
import { getChanceCard, getCommunityChestCard } from './cards/cards.js';

console.log('main.js loaded...');

// draw map
let mapDiv = document.querySelector('#map');
drawMap(mapDiv);

console.log(getChanceCard());
console.log(getChanceCard());
console.log(getChanceCard());

console.log(getCommunityChestCard());
console.log(getCommunityChestCard());
console.log(getCommunityChestCard());