const grid = document.querySelector('.grid');

const characters = [
'beth',
'jerry',
'jessica',
'morty',
'pessoa-passaro',
'pickle-rick',
'rick',
'summer',
'meeseeks',
'scroopy',
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;


}
 
const revealcard = ({target}) => {

    if(target.parentNode.className.includes('reveal-card')){
        return;
    }

    if(firstCard == ''){
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    }
    else if (secondCard == ''){
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();
    }


}

const checkEndGame = () => {
    const disableCards = document.querySelectorAll('.disable-card');

    if (disabledCards.length == 20){
        alert ('você ganhou');
    }


}

let firstCard = '';
let secondCard = '';

const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if (firstCharacter == secondCharacter){
        firstCard.firstChild.classList.add('disable-card');
        secondCard.firstChild.classList.add('disable-card');

        firstCard = '';
        secondCard = '';

        checkEndGame();

    } else {
        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';

        }, 500)

        
    }



}

const createCard = (characters) => {


    const card = createElement('div', 'card');
    const front = createElement('div','face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../img/${characters}.png')`;

    card.appendChild(front);
    card.appendChild(back);
    card.addEventListener('click', revealcard);
    card.setAttribute('data-character', characters);

    return card;
} 

const loadGame = () => {

    const duplicateCharacters = [ ...characters, ...characters ];

    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5 );

    duplicateCharacters.forEach((characters) => {

        const card = createCard(characters);
        grid.appendChild(card);

    });


}
loadGame();