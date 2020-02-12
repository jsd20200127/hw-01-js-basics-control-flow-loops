/***********

Problem 1:

Write a program that uses a loop to print out (using console.log()) the multiplication table (12 levels) of a provided number

Variables Required (feel free to add your own variables if needed):
baseNumber (number)

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. Given the following:
    baseNumber = 2

   Result:
    0
    2
    4
    6
    8
    10
    12
    14
    16
    18
    20
    22
    24
************/
console.log('Problem 1:')

// Add your code below this line

// let baseNumber = 2
//
// for (i = 0; i <= 12; i++) {
//
//   multiplication = i * baseNumber
//
// }
//
//   console.log(multiplication)

let baseNumber = 4;
for (let i = 0; i < 13; i++) {
  // for (let j = 0; j < 13; j++) { // dont need this line
  let  multiply = (baseNumber *i);
    // }
    console.log(multiply)
}


 
// Add your code above this line

console.log('')
console.log('-----------------')

/***********

Problem 2:

Write a program that prints (using console.log()) the largest number in a given array

Variables Required (feel free to add your own variables if needed):
numbers (array)
currentLargestNumber (number)

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. Given the following:
    values = [57, 13, 4, 38]

   Result: 57

2. Given the following:
    values = [3, 48, 29, 12, 18]

   Result: 48

************/

console.log('Problem 2:')

// Add your code below this line

const numberList = [13, 4, 57, 38];
let highestNumberEncountered = 0;
for (let i = 0 ; i < numberList.length ; i++){
  if (numberList[i] > highestNumberEncountered) {
    highestNumberEncountered = numberList[i];
  }
}
console.log("The biggest number is " + highestNumberEncountered );


// **** Easier Way of doing the same thing ***
// console.log(Math.max(arrayNum))

// Add your code above this line

console.log('')
console.log('-----------------')

/***********

Problem 3:

Write a program that prints out (using console.log()) the winner of a rock paper scissors game between two players

- if the playerA chooses scissors and playerB chooses rock, playerB wins
- if the playerA chooses scissors and playerB chooses scissors, game is a tie
- if the playerA chooses paper and playerB chooses rock, playerA wins
- if the playerA chooses rock and playerB chooses paper, playerB wins
- etc (program should account for all available scenarios)

Variables Required (feel free to add your own variables if needed):
playerAChoice (string)
playerBChoice (string)

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. Given the following:
    playerAChoice = "rock"
    playerBChoice = "paper"

   Result: "playerB wins"

2. Given the following:
    playerAChoice = "scissors"
    playerBChoice = "scissors"

   Result: "tie"

3. Given the following:
    playerAChoice = "scissors"
    playerBChoice = "paper"

   Result: "playerA wins"
************/

console.log('Problem 3:')

// Add your code below this line

let choices = ["rock", "paper", "scissor"]
let playerA = choices[3]
let playerB = choices[3]

if (playerA === "rock" && playerB === "rock") {
  console.log("tie!")
} else if (playerA === "rock" && playerB === "scissors") {
  console.log("PlayerA wins!")
} else if (playerA === "rock" && playerB === "paper") {
  console.log("PlayerB wins!")
} else if (playerA === "paper" && playerB === "paper") {
  console.log("tie!")
} else if (playerA === "paper" && playerB === "rock") {
  console.log("PlayerA wins!")
} else if (playerA === "paper" && playerB === "scissor") {
  console.log("PlayerB wins!")
} else if  (playerA === "scissor" && playerB === "scissor") {
  console.log("Tie!")
} else if (playerA === "scissor" && playerB === "paper") {
  console.log("PlayerA wins")
} else if (playerA === "scissor" && playerB === "rock") {
  console.log("PlayerB wins")
} else {
  console.log("Fatality!")
}

// Add your code above this line

console.log('')
console.log('-----------------')
