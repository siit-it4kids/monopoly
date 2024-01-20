import { drawMap } from "./map/map.js";
import { cardsPopupInit } from "./popups/card-popup.js";
import players from "./players/players.js"

console.log('main.js loaded...');

// draw map
let mapDiv = document.querySelector('#map');
drawMap(mapDiv);

// load chance cards and community chest card behaviour
cardsPopupInit();

console.log(players);