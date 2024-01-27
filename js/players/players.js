export default [
    playerFactory(`Tarzan`, `car`),
    playerFactory(`Deluță`, `wheelbarrow`),
    playerFactory(`Andrei Versace`, `shoe`),
    playerFactory(`Dorian Popa`, `dog`)
];

function playerFactory(name, avatar) {
    return {
        name,
        avatar,
        cash: 2000,
        ownedProperties: [],
        ownedCards: [],
        inJail: false,
        turnsInJail: 0,
        position: 0,
        move(squaresToMove){
            this.position += squaresToMove;
        }
    }
}