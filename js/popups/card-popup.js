import { getChanceCard, getCommunityChestCard } from '../cards/cards.js';

const popupBackground = document.querySelector('.popup-container');
const cardTitle = document.querySelector('.card-title');
const cardMessage = document.querySelector('.card-message');
const closeBtn = document.querySelector('.close-btn');
const chanceCardDeck = document.querySelector('#chance');
const communityChestCardDeck = document.querySelector('#community-chest');


function closeCard(){
    popupBackground.style.visibility = "hidden";
}


function showCommunityChestCard()
{   
    cardTitle.innerText = 'Community Chest Card';
    
    const card = getCommunityChestCard();
    cardMessage.innerText = card.message;
    
    popupBackground.style.visibility = "visible";
}


function showChanceCard()
{
    cardTitle.innerText = 'Chance Card';
    
    const card = getChanceCard();
    cardMessage.innerText = card.message;

    popupBackground.style.visibility = "visible";
}


export function cardsPopupInit()
{
    closeBtn.addEventListener('click', closeCard);
    chanceCardDeck.addEventListener('click', showChanceCard);
    communityChestCardDeck.addEventListener('click', showCommunityChestCard);
}