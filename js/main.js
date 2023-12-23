import { drawMap } from "./map/map.js";
import { getChanceCard, getCommunityChestCard } from './cards/cards.js';

console.log('main.js loaded...');

// draw map
let mapDiv = document.querySelector('#map');
drawMap(mapDiv);

let popupBackground = document.querySelector('.popup-container');
let cardBackground = document.querySelector('.card-back');
let cardTitle = document.querySelector('.card-title');
let cardMessage = document.querySelector('.card-message');
let closeBtn = document.querySelector('.close-btn');
let chanceCardDeck = document.querySelector('#chance');
let communityChestCardDeck = document.querySelector('#community-chest');

closeBtn.addEventListener('click', closeCard);
chanceCardDeck.addEventListener('click', showChanceCard);
communityChestCardDeck.addEventListener('click', showCommunityChestCard);

function closeCard(){
    popupBackground.style.display = "none";
}

function showCommunityChestCard()
{   
    popupBackground.style.display = "flex";
    cardTitle.innerText = 'Community Chest Card';
    cardMessage.innerText = getCommunityChestCard().message;
}

showCommunityChestCard();

function showChanceCard()
{
    popupBackground.style.display = "flex";
    cardTitle.innerText = 'Chance Card';
    cardMessage.innerText = getChanceCard().message;
}

showChanceCard();