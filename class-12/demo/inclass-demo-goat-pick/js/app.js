'use strict';

// console.log('hello world');

// ***** GLOBAL VARIABLES *****
const allGoats = [];
let ATTEMPTS_ALLOWED = 15;
let clicks = 0;

// ***** WINDOW INTO THE DOM *******
let myContainer = document.getElementById('container');
let imageOne = document.getElementById('image-one');
let imageTwo = document.getElementById('image-two');
let showResults = document.getElementById('show-results');

// ******* GOAT CONSTRUCTOR FUNCTION *******
function Goat(name, fileExstension = 'jpg') {
  this.name = name;
  this.src = `img/${name}.${fileExstension}`;
  this.views = 0;
  this.clicks = 0;
  allGoats.push(this);
}

// ******** GOAT INSTANCIATIONS *********
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

// ******* FUNCTIONS ********

function getRandomIndex() {
  return Math.floor(Math.random() * allGoats.length);
}

function renderImages() {
  let goatOneIndex = getRandomIndex();
  let goatTwoIndex = getRandomIndex();
  while (goatOneIndex === goatTwoIndex) {
    goatTwoIndex = getRandomIndex();
  }

  imageOne.src = allGoats[goatOneIndex].src;
  imageOne.alt = allGoats[goatOneIndex].name;
  allGoats[goatOneIndex].views++;

  imageTwo.src = allGoats[goatTwoIndex].src;
  imageTwo.alt = allGoats[goatTwoIndex].name;
  allGoats[goatTwoIndex].views++;

}

// FUNCTION NEEDED TO RENDER CHART -- WHERE/WHEN SHOULD IT BE EXECUTED?

function renderGoatChart() {
  const ctx = document.getElementById('chart').getContext('2d');

  //labels for chart
  let goatNames = [];

  // values for datasets
  let goatVotes = [];
  let goatViews = [];

  for (let i = 0; i < allGoats.length; i++) {
    goatNames.push(allGoats[i].name);
    goatVotes.push(allGoats[i].clicks);
    goatViews.push(allGoats[i].views);
  }

  let myChartData = {
    type: 'bar',
    data: {
      labels: goatNames,
      datasets: [{
        label: '# of Votes',
        data: goatVotes,
        backgroundColor: 'rgba(255, 99, 132, 1)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      },
      {
        label: '# of Views',
        data: goatViews,
        backgroundColor: 'rgba(200, 60, 111, 1)',
        borderColor: 'rgba(200, 60, 111, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };

  let myChart = new Chart(ctx, myChartData); //eslint-disable-line
}


// ****** EVENT HANDLERS ********
function handleImageClick(e) {
  clicks++;
  let imageClicked = e.target.alt;

  for (let i = 0; i < allGoats.length; i++) {
    if (imageClicked === allGoats[i].name) {

      allGoats[i].clicks++;
    }
  }

  renderImages();

  if (clicks === ATTEMPTS_ALLOWED) {
    myContainer.removeEventListener('click', handleImageClick);
  }
}

// if no button? where/when to render the chart
function handleShowResultsClick(e) { //eslint-disable-line
  if (clicks === ATTEMPTS_ALLOWED) {
    renderGoatChart();
  }
}

// ****** EXECUTABLE CODE *******
renderImages();


// ********* EVENT LISTENERS *********
myContainer.addEventListener('click', handleImageClick);
showResults.addEventListener('click', handleShowResultsClick);

