import chanceCards from "./chance-cards.js";
import communityChestCards from "./community-chest-cards.js";


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


// getting a chance card
export function getChanceCard(){
    shuffleCardsDeck(chanceCards);
    console.log(chanceCards);
    return chanceCards[0];
}


// getting a community chest card
export function getCommunityChestCard(){
    shuffleCardsDeck(communityChestCards);
    console.log(communityChestCards);
    return communityChestCards[0];
}