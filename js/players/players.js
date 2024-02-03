import mapTiles from "../map/map-tiles.js";

class MonopolyPlayer {
    constructor(name, avatar) {
        this.name = name;
        this.avatar = avatar;
        this.cash = 2000;
        this.ownedProperties = [];
        this.ownedCards = [];
        this.inJail = false;
        this.turnsInJail = 0;
        this.position = 0;
    }


    move(squaresToMove) {
        const newPosition = this.position + squaresToMove;
        this.position = newPosition % mapTiles.length;

        let newLap = newPosition >= mapTiles.length;
        return newLap;
    }


    buyProperty(){
        
    }
}

export default [
    new MonopolyPlayer(`Tarzan`, `🚂`),
    new MonopolyPlayer(`Deluță`, `🛴`),
    new MonopolyPlayer(`Andrei Versace`, `👟`),
    new MonopolyPlayer(`Dorian Popa`, `🐩`)
];