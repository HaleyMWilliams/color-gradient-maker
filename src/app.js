const body = document.querySelector(".gradient");
const horizontalOne = document.querySelector(".horizontal-1");
const horizontalTwo = document.querySelector(".horizontal-2");
const diagonalRightOne = document.querySelector(".diagonal-right-1");
const diagonalRightTwo = document.querySelector(".diagonal-right-2");
const diagonalLeftOne = document.querySelector(".diagonal-left-1");
const diagonalLeftTwo = document.querySelector(".diagonal-left-2");
const verticalOne = document.querySelector(".vertical-1");
const verticalTwo = document.querySelector(".vertical-2");

function setHorizontalGradient() {
  body.style.background = 
  `linear-gradient(to right, ${horizontalOne.value}, ${horizontalTwo.value})`;
}

function setDiagonalRightGradient() {    
  body.style.background = 
  `linear-gradient(to bottom right, ${diagonalRightOne.value}, ${diagonalRightTwo.value})`;
}


function setDiagonalLeftGradient() {
  body.style.background = 
  `linear-gradient(to bottom left, ${diagonalLeftOne.value}, ${diagonalLeftTwo.value})`;
}

function setVerticalGradient() {
  body.style.background = 
  `linear-gradient(${verticalOne.value}, ${verticalTwo.value})`;
}

//HORIZONTAL 
horizontalOne.addEventListener("input", setHorizontalGradient);
horizontalTwo.addEventListener("input", setHorizontalGradient); 

// RIGHT DIAGONAL
diagonalRightOne.addEventListener("input", setDiagonalRightGradient); 
diagonalRightTwo.addEventListener("input", setDiagonalRightGradient); 


// LEFT DIAGONAL
diagonalLeftOne.addEventListener("input", setDiagonalLeftGradient); 
diagonalLeftTwo.addEventListener("input", setDiagonalLeftGradient); 

//VERTICAL
verticalOne.addEventListener("input", setVerticalGradient); 
verticalTwo.addEventListener("input", setVerticalGradient); 
