let randomNumber = (parseInt(Math.random()*100 + 1)); 

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi'); 
const startOver = document.querySelector('.resultParas'); 

const p = document.createElement('p')

let prevGuess = []

let numGuess = 1;

let playGames = true;

if(playGames){

submit.addEventListener('click', (e) => {
 e.preventDefault();
 const guess = parseInt(userInput.value);
 console.log(guess);
 validateGuess(guess);
})
}

const validateGuess = (guess) => {
if(isNaN(guess)){
    alert('Enter a valid number please');
}else if(guess<1){
    alert('Enter a number more than 1');
}else if(guess > 100){
    alert('Enter a number less than 100');
}else{
    prevGuess.push(guess)
    if(numGuess === 11){
displayGuess(guess)
displayMessage(`Game Over. <br />Random number was ${randomNumber}`)
endGame();
    }else{
        displayGuess(guess)
        checkGuess(guess)
    }
}
}

const checkGuess = (guess) => {
   if (guess === randomNumber) {
    displayMessage(`You guessed it right`)
    endGame();
    
   } else if(guess < randomNumber){
    displayMessage(`Number is too Low`)
   }else if(guess > randomNumber){
    displayMessage(`Number is too High`)
   }
}

const displayGuess = (guess) => {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `
}

const displayMessage = (message) => {
    lowOrHi.innerHTML = `<h2>${message}</h2> `
}

const endGame = () => {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
  startOver.appendChild(p);
  playGames = false;
  newGame();
}

const newGame = () => {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', () =>{
    randomNumber = (parseInt(Math.random()*100 + 1)); 
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)

    playGames = true
  })
}