'use strict';

console.log('hello world');

// let banana;
// console.log(banana);


// // Question One correct answer yes
// let answerOne = prompt('Am I from Washington?').toLowerCase();

// // leaving this  to "spell it out"
// // let normalizedAnswerOne = answerOne.toLowerCase();

// if (answerOne  === 'yes' || answerOne === 'y'){
//   // console.log('YES, I am from Washington!');
//   alert('YES, I am from Washington!');
// }

let attemptsRemain = 6;
// let correctAnswer = 'banana'
let faveColors = ['turquoise', 'peacock', 'persimmon']
let answeredCorrectly = false;

while(attemptsRemain && !answeredCorrectly){
  let response = prompt(`You get  ${attemptsRemain} attempts. What is one of my fave Fiestaware colors?!`).toLowerCase();
  for (let i = 0; i < faveColors.length; i++){
    if (response === faveColors[i]){
      alert('That\'s Correct!');
      answeredCorrectly = true;
    }
  }
  attemptsRemain--;
}

alert(`My Fave 3 colors are ${faveColors}!`)
