//alert('funciona');
let i;
const cardArray = [
    {
        name: 'turtle',
        img: 'https://gist.githubusercontent.com/fsaldarriaga7/be617ccf81bef73d22a666bf3f3d3820/raw/77facbd09c61074e7059c455ebd9eab6a9b0b062/turtle.svg'
    },
    {
        name: 'conqueror',
        img: 'https://gist.githubusercontent.com/fsaldarriaga7/2af95270c1b1a19024a02cfc0c9971c0/raw/37f9ccb2406df1954270bb3de1119593dd295657/conqueror.svg'
    },
    {
        name: 'death-star',
        img: 'https://gist.githubusercontent.com/fsaldarriaga7/a8678147a7a7fba38256267ab139803f/raw/c81aaee064656f5e529062c51330e121be2547a6/death-star.svg'
    },
    {
        name: 'cat',
        img: 'https://gist.githubusercontent.com/fsaldarriaga7/e5d1d93e5bc7c8dc616c582e3c4c48d4/raw/d291f8316ef2f03474b0ba7bcddbddc34a70f1e9/cat.svg'
    },
    {
        name: 'tiger',
        img: 'https://gist.githubusercontent.com/fsaldarriaga7/b70560a00679c703552af640482a9c91/raw/76cb5630b376f9e1a1321b1c86514d8550f2cfe2/tiger.svg'
    },
    {
        name: 'dino',
        img: 'https://gist.githubusercontent.com/fsaldarriaga7/e594271b19e68cd83c817d6439d83809/raw/dcaaa3f4ce8f7377e3f85c6403b4b85353adf9ef/dino.svg'
    },
    {
        name: 'duck',
        img: 'https://gist.githubusercontent.com/fsaldarriaga7/4d1746edfe130df8ac2bb4daf11fff75/raw/5ecfe66f3617e6262687abb039a5f716a3220b27/duck.svg'
    },
    {
        name: 'elephant',
        img: 'https://gist.githubusercontent.com/fsaldarriaga7/87edbef240c9e5211d295fe7899cb87e/raw/75abfd42ca576ae89fcd14cc45708864eb12e9b1/elephant.svg'
    },
    {
        name: 'helicopter',
        img: 'https://gist.githubusercontent.com/fsaldarriaga7/bcd413b347d03e9f5162e1aee8c173c4/raw/9f6ac334554883b86c0f504cbc107a48a7fa3c06/helicopter.svg'
    },
    {
        name: 'star',
        img: 'https://gist.githubusercontent.com/fsaldarriaga7/a7b890c5b5454d765317e0c7dc59fcbb/raw/f073013e8eca20840e8b149e77fcec02096d1a77/star.svg'
    },
    {
        name: 'turtle',
        img: 'https://gist.githubusercontent.com/fsaldarriaga7/be617ccf81bef73d22a666bf3f3d3820/raw/77facbd09c61074e7059c455ebd9eab6a9b0b062/turtle.svg'
    },
    {
        name: 'conqueror',
        img: 'https://gist.githubusercontent.com/fsaldarriaga7/2af95270c1b1a19024a02cfc0c9971c0/raw/37f9ccb2406df1954270bb3de1119593dd295657/conqueror.svg'
    },
    {
        name: 'death-star',
        img: 'https://gist.githubusercontent.com/fsaldarriaga7/a8678147a7a7fba38256267ab139803f/raw/c81aaee064656f5e529062c51330e121be2547a6/death-star.svg'
    },
    {
        name: 'cat',
        img: 'https://gist.githubusercontent.com/fsaldarriaga7/e5d1d93e5bc7c8dc616c582e3c4c48d4/raw/d291f8316ef2f03474b0ba7bcddbddc34a70f1e9/cat.svg'
    },
    {
        name: 'tiger',
        img: 'https://gist.githubusercontent.com/fsaldarriaga7/b70560a00679c703552af640482a9c91/raw/76cb5630b376f9e1a1321b1c86514d8550f2cfe2/tiger.svg'
    },
    {
        name: 'dino',
        img: 'https://gist.githubusercontent.com/fsaldarriaga7/e594271b19e68cd83c817d6439d83809/raw/dcaaa3f4ce8f7377e3f85c6403b4b85353adf9ef/dino.svg'
    },
    {
        name: 'duck',
        img: 'https://gist.githubusercontent.com/fsaldarriaga7/4d1746edfe130df8ac2bb4daf11fff75/raw/5ecfe66f3617e6262687abb039a5f716a3220b27/duck.svg'
    },
    {
        name: 'elephant',
        img: 'https://gist.githubusercontent.com/fsaldarriaga7/87edbef240c9e5211d295fe7899cb87e/raw/75abfd42ca576ae89fcd14cc45708864eb12e9b1/elephant.svg'
    },
    {
        name: 'helicopter',
        img: 'https://gist.githubusercontent.com/fsaldarriaga7/bcd413b347d03e9f5162e1aee8c173c4/raw/9f6ac334554883b86c0f504cbc107a48a7fa3c06/helicopter.svg'
    },
    {
        name: 'star',
        img: 'https://gist.githubusercontent.com/fsaldarriaga7/a7b890c5b5454d765317e0c7dc59fcbb/raw/f073013e8eca20840e8b149e77fcec02096d1a77/star.svg'
    }
]

const whiteURL = 'https://gist.githubusercontent.com/fsaldarriaga7/38f4f5c32c6e59ab719610c229d06d70/raw/40e4abbbb93c77c0c6fbd94aab225b406de35611/white.svg';
const blankURL = 'https://gist.githubusercontent.com/fsaldarriaga7/7191a741db3cc55ff158730f288e6605/raw/abb754e7af343d066c0fe24b3b4a97ebc08f3ab3/blank.svg';

//2 Cards for each img
//console.log(cardArray);

cardArray.sort(() => 0.5-Math.random());

//The array order is now random
//console.log(cardArray);

const gridDisplay = document.querySelector('#grid');
let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];
const resultDisplay = document.querySelector('#score-span');
resultDisplay.textContent = cardsWon.length;
const movesDisplay = document.querySelector('#moves-span');
let moves = 0;
movesDisplay.textContent = moves;

function createBoard() {
    for (i=0; i<cardArray.length;i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'https://gist.githubusercontent.com/fsaldarriaga7/7191a741db3cc55ff158730f288e6605/raw/abb754e7af343d066c0fe24b3b4a97ebc08f3ab3/blank.svg');
        card.setAttribute('data-id', i);
        card.addEventListener('click',flipCard);
        gridDisplay.appendChild(card);
    }
}

createBoard();

function flipCard() {
    //console.log('clicked');
    const cardId = this.getAttribute('data-id');
    //console.log(cardId);
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    //console.log(cardsChosen);
    this.setAttribute('src',cardArray[cardId].img);
    if(cardsChosen.length===2){
        setTimeout(checkMatch,500)
    }
}

function checkMatch(){
    const cards = document.querySelectorAll('#grid img');
    const option1Id = cardsChosenIds[0];
    const option2Id = cardsChosenIds[1];

    if(option1Id == option2Id){
        alert('you clicked the same image');
        cards[option1Id].setAttribute('src',blankURL);
        cardsChosen[1] = -1; //No hay ningún elemento -1, entonces garantizo que no entre al próximo if
        moves++
    }
    else {
        if(cardsChosen[0] === cardsChosen[1]){
            alert('Match!');
            cards[option1Id].setAttribute('src',whiteURL);
            cards[option2Id].setAttribute('src',whiteURL);
            cards[option1Id].removeEventListener('click', flipCard);
            cards[option2Id].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
            console.log(cardsWon);
        }
        else {
            cards[option1Id].setAttribute('src',blankURL);
            cards[option2Id].setAttribute('src',blankURL);
            alert('Try again');
        }
        moves++
    }

    resultDisplay.textContent = cardsWon.length;
    cardsChosen = [];
    cardsChosenIds = [];
    movesDisplay.textContent = moves;

    if (cardsWon.length == cardArray.length/2){
        resultDisplay.textContent = 'Congratulations';
    }
}


/* 
BLANK = https://gist.githubusercontent.com/fsaldarriaga7/7191a741db3cc55ff158730f288e6605/raw/abb754e7af343d066c0fe24b3b4a97ebc08f3ab3/blank.svg
CAT = https://gist.githubusercontent.com/fsaldarriaga7/e5d1d93e5bc7c8dc616c582e3c4c48d4/raw/d291f8316ef2f03474b0ba7bcddbddc34a70f1e9/cat.svg
CONQUEROR = https://gist.githubusercontent.com/fsaldarriaga7/2af95270c1b1a19024a02cfc0c9971c0/raw/37f9ccb2406df1954270bb3de1119593dd295657/conqueror.svg
DEATH STAR = https://gist.githubusercontent.com/fsaldarriaga7/a8678147a7a7fba38256267ab139803f/raw/c81aaee064656f5e529062c51330e121be2547a6/death-star.svg
DINO = https://gist.githubusercontent.com/fsaldarriaga7/e594271b19e68cd83c817d6439d83809/raw/dcaaa3f4ce8f7377e3f85c6403b4b85353adf9ef/dino.svg
DUCK = https://gist.githubusercontent.com/fsaldarriaga7/4d1746edfe130df8ac2bb4daf11fff75/raw/5ecfe66f3617e6262687abb039a5f716a3220b27/duck.svg
ELEPHANT = https://gist.githubusercontent.com/fsaldarriaga7/87edbef240c9e5211d295fe7899cb87e/raw/75abfd42ca576ae89fcd14cc45708864eb12e9b1/elephant.svg
HELICOPTER = https://gist.githubusercontent.com/fsaldarriaga7/bcd413b347d03e9f5162e1aee8c173c4/raw/9f6ac334554883b86c0f504cbc107a48a7fa3c06/helicopter.svg
STAR = https://gist.githubusercontent.com/fsaldarriaga7/a7b890c5b5454d765317e0c7dc59fcbb/raw/f073013e8eca20840e8b149e77fcec02096d1a77/star.svg
TIGER = https://gist.githubusercontent.com/fsaldarriaga7/b70560a00679c703552af640482a9c91/raw/76cb5630b376f9e1a1321b1c86514d8550f2cfe2/tiger.svg
TURTLE = https://gist.githubusercontent.com/fsaldarriaga7/be617ccf81bef73d22a666bf3f3d3820/raw/77facbd09c61074e7059c455ebd9eab6a9b0b062/turtle.svg
WHITE = https://gist.githubusercontent.com/fsaldarriaga7/38f4f5c32c6e59ab719610c229d06d70/raw/40e4abbbb93c77c0c6fbd94aab225b406de35611/white.svg



*/










