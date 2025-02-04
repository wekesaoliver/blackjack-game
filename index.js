let cards = [];
let hasBlackjack = false;
let isAlive = true;
let message = "";

let sum = 0;

let messagEr = document.getElementById("messager");
let sumEr = document.querySelector("#sumer");
let cardEr = document.getElementById("carder");
// console.log(cardEr);

let player = {
    name: "Oliver",
    chips: 125
}


let playEr = document.getElementById("player");
playEr.textContent = player.name + ": $"+player.chips;

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1;
    if(randomNumber > 10){
        return 10;
    }
    else if(randomNumber === 1){
        return 11;
    }
    else{
        return randomNumber;
    }
}
console.log(getRandomCard());

function startGame(){
    let isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame(){

    cardEr.textContent = "Cards: "

    for(let i=0; i<cards.length; i++){
        cardEr.textContent += cards[i] + " ";
    }     

    sumEr.textContent = "Sum: " + sum;


    if (sum <= 20){
        message = "Do you want to draw a new card? 😁";
    }
    else if(sum === 21){
        message = "Wohoo! You have got blackjack! 🤗";
        hasBlackjack = true;
    }
    else{
        message = "You're out of the game! 🥲";
        isAlive = false;
    }
    
    messagEr.textContent = message;
    
}

function newCard(){
    

    if(isAlive === true && hasBlackjack === false){
        console.log("Drawing new card from the drawer!")
        let card = getRandomCard();
        sum += card;
        cards.push(card);
    }
        
    renderGame();
    // console.log(cards);
}




// loop that counts from 0 to 100 in steps of 10
// for( let i = 0; i<100; i+=10){
//     console.log(i)
// }

// let cardds = [6,8,9];
// for( let i = 0; i<cardds.length; i+=1){
//     console.log(cardds[i]);
// }



// let age = 16;

// if(age < 21){
//     console.log("You cannot enter the club!");
// }
// else{
//     console.log("Welcome!");
// }


// let age = 94;

// if(age < 100){
//     console.log("Not elligible!");
// }
// else if(age === 100){
//     console.log("Here is your birthday card from the King");
// }
// else{
//     console.log("Not elligible!, you have already gotten one")
// }


//Math.random generates random numbers between 0 and 1 but not inclusive of 1
// Math.floor converts a number to the nearest one




// function rollDice(){
//     let randoms = Math.floor(Math.random() * 6) + 1;
//     return randoms;
// }

// console.log(rollDice());

// AND(&&) operators

// let hasSolvedChallenge = false;
// let hasHintsLeft = true;

// if(hasSolvedChallenge === false && hasHintsLeft == false){
//     showSolution();
// }

// function showSolution(){
//     console.log("Showing the solution...");
// }

// OR(||) operators

// let likeDocumentaries = true;
// let likeStartups = false;

// if(likeDocumentaries === true || likeStartups === true){
//     recommendMovie();
// }

// function recommendMovie(){
//     console.log("Hey, check out this new film we think you will like!")
// }

// Objects

let myAirbnbSelectetion = {
    location: "Mombasa",
    bedrooms: 2,
    kitchen: true,
    security: true,
    price: 100

}
console.log(myAirbnbSelectetion.location)
console.log(myAirbnbSelectetion.kitchen)



