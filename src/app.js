//SELECTORS

const body = document.querySelector(".gradient");

const horizontalOne = document.querySelector(".horizontal-1");
const horizontalTwo = document.querySelector(".horizontal-2");
const diagonalRightOne = document.querySelector(".diagonal-right-1");
const diagonalRightTwo = document.querySelector(".diagonal-right-2");
const diagonalLeftOne = document.querySelector(".diagonal-left-1");
const diagonalLeftTwo = document.querySelector(".diagonal-left-2");
const verticalOne = document.querySelector(".vertical-1");
const verticalTwo = document.querySelector(".vertical-2");

const horizontalBackground = document.querySelector("#horizontal");
const diagonalRightBackground = document.querySelector("#diagonal-right");
const diagonalLeftBackground = document.querySelector("#diagonal-left");
const verticalBackground = document.querySelector("#vertical");

const horizontalCSS = document.querySelector(".horizontal-css");
const diagonalRightCSS = document.querySelector(".diagonal-right-css");
const diagonalLeftCSS = document.querySelector(".diagonal-left-css");
const verticalCSS = document.querySelector(".vertical-css");

const hButton = document.querySelector("#hButton");
const dLButton = document.querySelector("#dLButton");
const dRButton = document.querySelector("#dRButton");
const vButton = document.querySelector("#vButton");

//EVENT LISTENERS

//HORIZONTAL 
horizontalOne.addEventListener("input", setHorizontalGradient);
horizontalTwo.addEventListener("input", setHorizontalGradient); 
hButton.addEventListener("click", resetHorizontalGradient);

// RIGHT DIAGONAL
diagonalRightOne.addEventListener("input", setDiagonalRightGradient); 
diagonalRightTwo.addEventListener("input", setDiagonalRightGradient); 
dRButton.addEventListener("click", resetDiagonalRightGradient)

// LEFT DIAGONAL
diagonalLeftOne.addEventListener("input", setDiagonalLeftGradient); 
diagonalLeftTwo.addEventListener("input", setDiagonalLeftGradient); 
dLButton.addEventListener("click", resetDiagonalLeftGradient);

//VERTICAL
verticalOne.addEventListener("input", setVerticalGradient); 
verticalTwo.addEventListener("input", setVerticalGradient); 
vButton.addEventListener("click", resetVerticalGradient);

//FUNCTIONS
function setHorizontalGradient() {
  horizontalBackground.style.background = 
  `linear-gradient(to right, ${horizontalOne.value}, ${horizontalTwo.value})`;

   horizontalCSS.innerText = `background-image: linear-gradient(to right, ${horizontalOne.value}, ${horizontalTwo.value});`
}

function resetHorizontalGradient() {
  horizontalBackground.style.background = '';
  horizontalCSS.innerText = '';
  horizontalOne.value = '#7628eb';
  horizontalTwo.value = '#ba94cc';
}

function setDiagonalRightGradient() {    
  diagonalRightBackground.style.background = 
  `linear-gradient(to bottom right, ${diagonalRightOne.value}, ${diagonalRightTwo.value})`;
  diagonalRightBackground.style.transition = 'all 0.2s ease-in';  
  diagonalRightCSS.innerText = `background-image: linear-gradient(to bottom right, ${diagonalRightOne.value}, ${diagonalRightTwo.value});`;
}

function resetDiagonalRightGradient (){
  diagonalRightBackground.style.background = '';
  diagonalRightCSS.innerText = '';
  diagonalRightOne.value = '#7628eb';
  diagonalRightTwo.value = '#ba94cc';
}

function setDiagonalLeftGradient() {
  diagonalLeftBackground.style.background = 
  `linear-gradient(to bottom left, ${diagonalLeftOne.value}, ${diagonalLeftTwo.value})`;

  diagonalLeftCSS.innerText = `background-image: linear-gradient(to bottom left, ${diagonalLeftOne.value}, ${diagonalLeftTwo.value});`;
}

function resetDiagonalLeftGradient () {
  diagonalLeftBackground.style.background = '';
  diagonalLeftCSS.innerText = '';
  diagonalLeftOne.value = '#7628eb';
  diagonalLeftTwo.value = '#ba94cc';
}

function setVerticalGradient() {
  verticalBackground.style.background = 
  `linear-gradient(${verticalOne.value}, ${verticalTwo.value})`;

  verticalCSS.innerText = `background-image: linear-gradient(${verticalOne.value}, ${verticalTwo.value});`;
}

function resetVerticalGradient() {
  verticalBackground.style.background = '';
  verticalCSS.innerText = '';
  verticalOne.value = '#7628eb';
  verticalTwo.value = '#ba94cc';
}