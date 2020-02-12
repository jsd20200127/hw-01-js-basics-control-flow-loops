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

//our base number for multiplication table
const baseNumber = 11


// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }
//
// const baseNumber = getRandomInt(16)

console.log(`Multiplication table for: ${baseNumber}`)

//for loop to itterate through the first 12 numbers in the multiplication table
for (let i = 0; i<=12; i++){
  multiplicationTable = baseNumber * i
  //console.log(`${i} - ${multiplicationTable}`)
  console.log(multiplicationTable)
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

const numbers = [57, 13, 4, 38]

//console.log(numbers)

//for (let i = numbers[])

let currentLargestNumber = Math.max(...numbers)

console.log(currentLargestNumber)

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

let playerAChoice = 'scissors'
let playerBChoice = 'paper'

// //array of possible choices
// choices = ['paper','rock','scissors']
//
// //function to randomly choose index from choices array
// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }
//
// let playerAChoice = choices[getRandomInt(3)]
// let playerBChoice = choices[getRandomInt(3)]

console.log(`playerA had ${playerAChoice} and playerB had ${playerBChoice}`)

if (playerAChoice === playerBChoice) {
  console.log("Game is a tie")
}
//playerA win opportunities
else if (playerAChoice === 'rock' && playerBChoice === 'scissors') {
  console.log("playerA wins")
}
else if (playerAChoice === 'paper' && playerBChoice === 'rock') {
  console.log("playerA wins")
}
else if (playerAChoice === 'scissors' && playerBChoice === 'paper') {
  console.log("playerA wins")
}
//playerB win opportunities
else if (playerAChoice === 'rock' && playerBChoice === 'paper') {
  console.log("playerB winss")
}
else if (playerAChoice === 'paper' && playerBChoice === 'scissors') {
  console.log("playerB wins")
}
else if (playerAChoice === 'scissors' && playerBChoice === 'rock') {
  console.log("playerB wins")
}
else {
  console.log("Check player choices")
}


// Add your code above this line

console.log('')
console.log('-----------------')
