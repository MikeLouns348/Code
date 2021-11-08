//This variable keeps track of whose turn it is. 
let activePlayer = 'X'; 
//This array stores an array of moves. We use this to determine win conditions. 
let selectedSquares = [];
//This function is for placing an x or o in a square. 

function placeXoro (squareNumber) {
    if (!selectedSquares.some (element => element.includes (squareNumber))) { 
       let select = document.getElementById(squareNumber); 
       if (activePlayer === 'X') {
           select.style.backgroundImage = 'url("images/x.png")';
    //Active player may only be 'X' or 'O' so, if not 'X' it must be 'o' 
    } else {
    //If activePlayer is equal to 'o', the o.png is placed in HTML. 
        select.style.backgroundImage = 'url("images/o.png")';
    }
    //squareNumber and activePlayer are concatenated together and added to array. 
    selectedSquares. push (squareNumber + activePlayer); 
    //This calls a function to check for any win conditions. 
    checkWinConditions(); 
    //This condition is for changing the active player. 
    if (activePlayer === 'X') {
    //If active player is 'X' change it to 'o'.
    activePlayer = '0'; 
    //If active player is anything other than 'X'. 
    } else {
    //Change the activePlayer to 'X' 
    activePlayer = 'X';
    }
    //This function plays placement sound. 
    audio ('./media/place.mp3'); 
    //This condition checks to see if it is computers turn. 
    if(activePlayer === '0'){
    //This function disables clicking for computer choice. 
    disableClick(); 
    //This function waits i second before computer places image and enables click. 
    setTimeout(function () { computersTurn(); }, 1000)
    }
    // Returning true is needed for our computersTurn() function to work. 
    return true;
    //This function results in a random square being selected. 
    function computersTurn() {
    //This boolean is needed for our while loop. 
    let success = false; 
    //This variable stores a random number 0-8. 
    let pickASquare; 
    //This condition allows our while loop to keep trying if a square is selected already. 
    while (!success) {
    //A random number between 0 and 8 is selected. 
    pickASquare = String (Math.floor(Math.random()* 9)); 
    //If the random number evaluated returns true, the square hasn't been selected yet. 
    if (placeXoro (pickASquare)) {
    //This line calls the function. 
    placexOro (pickASquare); 
    //This changes our boolean and ends the loop. 
    success = true;


