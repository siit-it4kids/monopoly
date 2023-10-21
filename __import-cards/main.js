let cardDisplay = document.querySelector('.card-display');

function createCard(){
    let buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttons');
    cardDisplay.appendChild(buttonsDiv);
    
    let showBtn = document.createElement('button');
    showBtn.textContent = 'Get card';
    showBtn.setAttribute("id", "show-btn");
    showBtn.addEventListener('click', showCard);
    buttonsDiv.appendChild(showBtn);
    
    let closeBtn = document.createElement('button');
    closeBtn.textContent = 'Close';
    closeBtn.setAttribute("id", "close-btn");
    closeBtn.addEventListener('click', closeCard);
    buttonsDiv.appendChild(closeBtn);
    
    let cardBack = document.createElement('div');
    cardBack.classList.add('card-back');
    cardDisplay.appendChild(cardBack);
    
    let cardMsg = document.createElement('div');
    cardMsg.classList.add('card-message');
    cardBack.appendChild(cardMsg);
    
}
createCard();

let cardBackground = document.querySelector('.card-back');
let cardMessage = document.querySelector('.card-message');

cardBackground.style.display = 'none';

function showCard()
{
    cardBackground.style.display = 'block';
    cardMessage.innerText = shuffle().message;
}

function closeCard()
{
    cardBackground.style.display = 'none';
}