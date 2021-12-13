'use strict';

console.log('hello world');


// global variables
// array - all goats array and things
const allGoats = [];
// global counter - number of clicks allowed (15)
let ATTEMPTS_ALLOWED = 15;
let clicks = 0;
// window into the DOM.  declare a container variable and assign an element
let myContainer = document.getElementById('container');
// window into the dom for the 2 images: images hard coded in HTML with ids of img-one and img-two
let imageOne = document.getElementById('image-one');
let imageTwo = document.getElementById('image-two');
// show results "button"
let showResults = document.getElementById('show-results');

// constructor - for each goats ususally jpg?  set a default value for the parameter.  if anything different entered, it will take the place of the default value
function Goat(name, fileExstension = 'jpg') {
  // name
  this.name = name;
  // image source - base on the goat name
  this.src = `img/${name}.${fileExstension}`; // does this work?
  // number of views of the image
  this.views = 0;
  // number of clicks or "votes"
  this.clicks = 0;
  // push into allGoats array
  allGoats.push(this);

}

new Goat('bunny-goat', 'png');
new Goat('cool-goat');
new Goat('cruisin-goat');
new Goat('float-your-goat');
new Goat('goat-out-of-hand');
new Goat('kissing-goat');
new Goat('lucky-goat');
new Goat('sassy-goat');
new Goat('smiling-goat');
new Goat('sweater-goat');

// functions:
// random number generator to get random index - SO we can show TWO DIFFERENT random goats
function getRandomIndex() {
  return Math.floor(Math.random() * allGoats.length);
}




// console.log(goatOneIndex, goatTwoIndex);
// SPOILER - use loop to see if the single thing is already in the collection.  the collection === an array.  ask yourself:  how do you tell if something is inculded in an array?  array method WORKS WELL
// once we have two unique goatswe:  display the two images
function renderImages() {

  // consider how you'd validate for 3 images:  a "collection"
  let goatOneIndex = getRandomIndex();
  let goatTwoIndex = getRandomIndex();
  // validation / control flow - index is unique identifier.  if goatOne is the same as a goatTwo, get a different goat for goatTwo
  while (goatOneIndex === goatTwoIndex) { // collection: how do you tell if included
    goatTwoIndex = getRandomIndex();
  }
  // how to display images?
  // CHANGE ATTRIBUTES:  src, alt, make note of the views
  imageOne.src = allGoats[goatOneIndex].src;
  imageOne.alt = allGoats[goatOneIndex].name;
  allGoats[goatOneIndex].views++;

  imageTwo.src = allGoats[goatTwoIndex].src;
  imageTwo.alt = allGoats[goatTwoIndex].name;
  allGoats[goatTwoIndex].views++;

}


// event handler #1
function handleImageClick(e) {
  clicks++;
  let imageClicked = e.target.alt;

  console.log(imageClicked);
  // what happens when clicked?
  for (let i = 0; i < allGoats.length; i++) {
    if (imageClicked === allGoats[i].name) {
      //the clicks incremented / logged
      allGoats[i].clicks++;
    }

  }
  // rerender
  renderImages();
  // when we hit 15 - dont allow any more clicks / views / votes
  if (clicks === ATTEMPTS_ALLOWED) {
    myContainer.removeEventListener('click', handleImageClick);
  }
  // triggered everytime we have a click, and shut off when we hit 15 clciks

}

function handleShowResultsClick(e) { //eslint-disable-line
  // display results list
  let displayResults = document.getElementById('display-results');
  if (clicks === ATTEMPTS_ALLOWED) {
    for (let i = 0; i < allGoats.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${allGoats[i].name} was viewed ${allGoats[i].views} times and clicked ${allGoats[i].clicks} times`;
      displayResults.appendChild(li);

    }

  }

}

// executable code
renderImages();

// event listener  #1
myContainer.addEventListener('click', handleImageClick);

// event Listener #2
showResults.addEventListener('click', handleShowResultsClick);

// another event cycle for the button once 15 clicks happen.  render list of results when button clicked

