import mapTiles from "./map-tiles.js";

function drawLineTile(parentDiv, tileType){
    let tileDiv = document.createElement('div');
    tileDiv.classList.add('card','line-card');
    tileDiv.classList.add(tileType + '-card');
    parentDiv.appendChild(tileDiv);

    return tileDiv;
}


function drawLineCardFooter(parentDiv, text){
    let cardPrice = document.createElement('div');
    cardPrice.classList.add('card-price');
    cardPrice.innerText = text;
    parentDiv.appendChild(cardPrice);
}


function drawLineCardHeader(tileDiv){
    let cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');
    tileDiv.appendChild(cardHeader);

    return cardHeader;
}


function drawLineCardBody(tileDiv){
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    tileDiv.appendChild(cardBody);

    return cardBody;
}


function drawPropertyTile(parentDiv, mapTile){
    let tileDiv = drawLineTile(parentDiv, mapTile.tileType);

    let cardHeader = drawLineCardHeader(tileDiv);
    cardHeader.style.backgroundColor = mapTile.color;

    let cardBody = drawLineCardBody(tileDiv);
    cardBody.innerText = mapTile.name;

    drawLineCardFooter(tileDiv, 'M' + mapTile.price);

    return tileDiv;
}


function drawRailroadTile(parentDiv, mapTile){
    let tileDiv = drawLineTile(parentDiv, mapTile.tileType);

    let cardHeader = drawLineCardHeader(tileDiv);
    cardHeader.innerText = mapTile.name;

    let cardBody = drawLineCardBody(tileDiv);
    cardBody.classList.add('card-icon');

    drawLineCardFooter(tileDiv, 'M' + mapTile.price);

    return tileDiv;
}


function drawUtilityTile(parentDiv, mapTile){
    let tileDiv = drawLineTile(parentDiv, mapTile.tileType);

    let cardHeader = drawLineCardHeader(tileDiv);
    cardHeader.innerText = mapTile.name;

    let cardBody = drawLineCardBody(tileDiv);
    cardBody.classList.add('card-icon', 'utility-' + mapTile.utilityType);

    drawLineCardFooter(tileDiv, 'M' + mapTile.price);

    return tileDiv;
}


function drawTaxTile(parentDiv, mapTile){
    let tileDiv = drawLineTile(parentDiv, mapTile.tileType);

    let cardHeader = drawLineCardHeader(tileDiv);
    cardHeader.innerText = mapTile.name;

    let cardBody = drawLineCardBody(tileDiv);
    cardBody.classList.add('card-icon');

    drawLineCardFooter(tileDiv, 'PAY M' + mapTile.price);

    return tileDiv;
}


function drawGenericLineTile(parentDiv, mapTile){
    let tileDiv = drawLineTile(parentDiv, mapTile.tileType);

    let cardHeader = drawLineCardHeader(tileDiv);
    cardHeader.innerText = mapTile.name;

    let cardBody = drawLineCardBody(tileDiv);
    cardBody.classList.add('card-icon');

    return tileDiv;
}


function drawCornerTile(parentDiv, mapTile){
    let tileDiv = document.createElement('div');
    tileDiv.classList.add('card', 'corner-card');
    tileDiv.classList.add(mapTile.tileType + '-card');
    parentDiv.appendChild(tileDiv);

    return tileDiv;
}


// draw properties, utilities and map corners
export function drawMap(mapDiv){
    for (let i = 0; i < mapTiles.length; i++) {
        let tileDiv;
        switch (mapTiles[i].tileType) {
            case 'property':
                tileDiv = drawPropertyTile(mapDiv, mapTiles[i]);     
                break;
    
            case 'railroad':
                tileDiv = drawRailroadTile(mapDiv, mapTiles[i]);
                break;  
    
            case 'utility':
                tileDiv = drawUtilityTile(mapDiv, mapTiles[i]);
                break;
                
            case 'income-tax':
            case 'luxury-tax':
                tileDiv = drawTaxTile(mapDiv, mapTiles[i]);
                break;
    
            case 'start':
            case 'jail':
            case 'parking':
            case 'police':
                tileDiv = drawCornerTile(mapDiv, mapTiles[i]);
                break;
    
            default:
                tileDiv = drawGenericLineTile(mapDiv, mapTiles[i]);
                break;
        }
    
        let rowIndex, colIndex, rotation, top, right;
    
        if(i >=0 && i < 10){
            // i:  0 -> 9   (bottom side)
            rowIndex = 11;
            colIndex = 11 - i;
            rotation = 0;
            top = 0;
            right = 0;
        }
        else if(i >=10 && i < 20){
            // i:  10 -> 19   (left side)
            rowIndex = 11 - i + 10;
            colIndex = 1;
            rotation = 90;
            top = -28;
            right = -28;
        }
        else if(i >=20 && i < 30){
            // i:  20 -> 29   (top side)
            rowIndex = 1;
            colIndex = i - 19;
            rotation = 180;
            top = 0;
            right = 0;
        }
        else{
            // i:  30 -> 39   (right side)
            rowIndex = i - 29; //????
            colIndex = 11;
            rotation = 270;
            top = -28;
            right = -28;
        }
    
        if(i == 0 || i == 10 || i == 20 || i == 30){
            // the corner cards
            top = 0;
            right = 0;
        }
    
        tileDiv.style.gridColumn = colIndex;
        tileDiv.style.gridRow = rowIndex;
        tileDiv.style.transform = `rotate(${rotation}deg)`;
        tileDiv.style.top = `${top}px`;
        tileDiv.style.right = `${right}px`;
    }
}
// draw map center