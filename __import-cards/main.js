let cardDisplay = document.querySelector('.card-display');

function createCard(){
    let buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttons');
    cardDisplay.appendChild(buttonsDiv);
    
    let showBtn = document.createElement('button');
    showBtn.textContent = 'GET CARD';
    showBtn.setAttribute("id", "show-btn");
    showBtn.addEventListener('click', showCard);
    buttonsDiv.appendChild(showBtn);
    
    let closeBtn = document.createElement('button');
    closeBtn.textContent = 'CLOSE';
    closeBtn.setAttribute("id", "close-btn");
    closeBtn.addEventListener('click', closeCard);
    buttonsDiv.appendChild(closeBtn);
    
    let cardBack = document.createElement('div');
    cardBack.classList.add('card-back');
    cardDisplay.appendChild(cardBack);
    
    let cardType = document.createElement('div');
    cardType.classList.add('card-title');
    cardBack.appendChild(cardType);

    let cardMsg = document.createElement('div');
    cardMsg.classList.add('card-message');
    cardBack.appendChild(cardMsg);
}
createCard();

let cardBackground = document.querySelector('.card-back');
let cardTitle = document.querySelector('.card-title');
let cardMessage = document.querySelector('.card-message');

cardBackground.style.display = 'none';

function showCard()
{
    cardBackground.style.display = 'block';
    cardTitle.innerText = 'Community Chest Card';
    cardMessage.innerText = shuffle().message;
}

function closeCard()
{
    cardBackground.style.display = 'none';
}