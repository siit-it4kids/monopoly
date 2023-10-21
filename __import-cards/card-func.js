function shuffle()
{
    let number = Math.floor(Math.random() * data.length);
    let chosenCard = data[number];

    console.log(number);
    console.log(chosenCard.message);

    return chosenCard;
}

function showCard()
{
    cardBackground.style.display = 'block';
    cardMessage.innerText = shuffle().message;
}

function closeCard()
{
    cardBackground.style.display = 'none';
}