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
for (let i = 0; i < 10; i++) {
    console.log(``);
    console.log(`*** ROUND ${i + 1}`);
    for (let j = 0; j < players.length; j++) {
        console.log('=====');
        console.log(`Player ${players[j].name} (${players[j].avatar}, position ${players[j].position}) - new turn: `);

        let dice1Roll = Math.floor(Math.random() * 6) + 1;
        let dice2Roll = Math.floor(Math.random() * 6) + 1;
        console.log(`Dice roll: `, dice1Roll, dice2Roll);

        const newLap = players[j].move(dice1Roll + dice2Roll);

        const msg = newLap ? `Player starts a new lap!! Receives 200M!!` : `Player does NOT start a new lap`;
        console.log(msg);

        console.log(`Player ${players[j].name} moves to position ${players[j].position}`);
    }
}