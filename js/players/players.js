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
        // this.position should not pass 39!
        this.position += squaresToMove;
    }

    buyProperty(){
        
    }
}

export default [
    new MonopolyPlayer(`Tarzan`, `car`),
    new MonopolyPlayer(`Deluță`, `wheelbarrow`),
    new MonopolyPlayer(`Andrei Versace`, `shoe`),
    new MonopolyPlayer(`Dorian Popa`, `dog`)
];