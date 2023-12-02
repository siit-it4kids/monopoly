import chanceCards from "./chance-cards.js";
import communityChestCards from "./community-chest-cards.js";

shuffleCardsDeck(communityChestCards);
console.log(communityChestCards);

shuffleCardsDeck(chanceCards);
console.log(chanceCards);


function shuffleCardsDeck(cardsDeck){
    const swaps = 100;
    for (let i = 0; i < swaps; i++) {
        let randomPos1 = Math.floor(Math.random() * cardsDeck.length);
        let randomPos2 = Math.floor(Math.random() * cardsDeck.length);

        let aux = cardsDeck[randomPos1];
        cardsDeck[randomPos1] = cardsDeck[randomPos2];
        cardsDeck[randomPos2] = aux;
    }

    return cardsDeck;
}


export function getChanceCard(){
    chanceCards.push(chanceCards[0]);
    return chanceCards.shift();
}


export function getCommunityChestCard(){
    communityChestCards.push(communityChestCards[0]);
    return communityChestCards.shift(); 
}

