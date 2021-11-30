'use strict';

console.log('hello world');

let banana;
console.log(banana);


// Question One correct answer yes
let answerOne = prompt('Am I from Washington?').toLowerCase();

// leaving this  to "spell it out"
// let normalizedAnswerOne = answerOne.toLowerCase();

if (answerOne  === 'yes' || answerOne === 'y'){
  // console.log('YES, I am from Washington!');
  alert('YES, I am from Washington!');
}
