'use strict';

// // Step 1: Grab the DOM element we want to listen to
// let myContainer = document.getElementById('container');
// let parentEl = document.getElementById('results');

// // Step 3: Define our event handler
// function handleClick(event) {
//   console.log('this is the event', event);
//   console.log('this is the target', event.target);

//   if (event.target.id === 'box-one') {
//     let pEl = document.createElement('p');
//     pEl.textContent = 'Box 1 was clicked!';
//     parentEl.append(pEl);
//   } else if (event.target.id === 'box-two') {
//     let pEl = document.createElement('p');
//     pEl.textContent = 'Box 2 was clicked!';
//     parentEl.append(pEl);
//   } else if (event.target.id === 'box-three') {
//     let pEl = document.createElement('p');
//     pEl.textContent = 'Box 3 was clicked!';
//     parentEl.append(pEl);
//   } else {
//     let pEl = document.createElement('p');
//     pEl.textContent = 'CLICK THE BOXES ONLY!';
//     parentEl.append(pEl);
//   }
// }

// // Step 2 - add event listener with 2 args of event type and cb function
// myContainer.addEventListener('click', handleClick);


// Step 1: Grab the element you want to listen to
let myForm = document.getElementById('my-form');


// Step 3: define my callback or event handler

function handleSubmit(event){
  event.preventDefault();
  // console.log('hey girl hey!');

  let name = event.target.name.value;
  console.log('this is the name', name);

  let age = +event.target.age.value;
  console.log(typeof age);
  console.log('actual age', age);

  let housewives = event.target.housewives.value;
  console.log(housewives);
}


// Step 2: event listener!
myForm.addEventListener('submit', handleSubmit);
