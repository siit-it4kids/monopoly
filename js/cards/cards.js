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

export function getChanceCard(){
    shuffleCardsDeck(chanceCards);
    console.log(chanceCards);
    
    chanceCards.push(chanceCards[0]);
    chanceCards.shift();
    
    console.log(chanceCards);

    return chanceCards[chanceCards.length - 1];
}

export function getCommunityChestCard(){
    shuffleCardsDeck(communityChestCards);
    console.log(communityChestCards);
    
    communityChestCards.push(communityChestCards[0]);
    communityChestCards.shift();
    
    console.log(communityChestCards);
    
    return communityChestCards[communityChestCards.length - 1];
}