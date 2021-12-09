'use strict';

// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

// Each kitten's profile should have:
// - name
// - random age assigned
// - a list of what they like
// - an image (good to see not required in lab)
// - good with kids t/f
// - good with dogs t/f
// - good with other cats t/f

// console.log('hello world');

// STEP A: window into the DOM - expect to see / usually at top of js file
let section = document.getElementById('kittens-profiles');

// proof of life!  ALWAYS
console.log(section);

// cats to use: frankie, jumper, serena

function Kitten(name, interests, kidsBoolean, dogsBoolean, catsBoolean) {
  this.name = name;
  this.age = this.getAge();
  this.interests = interests;
  this.isGoodWithKids = kidsBoolean;
  this.isGoodWithDogs = dogsBoolean;
  this.isGoodWIthOtherCats = catsBoolean;
}

// prototpye === inherits
Kitten.prototype.getAge = function () {
  return getRandomAge(3, 12);
};

//helper function : is a function used by another function OR method to some processing
function getRandomAge(min, max) {
  // min will be hard coded to 3 months
  // max will be hard coded to 12 months
  return Math.floor(Math.random() * (max - min + 1) + min);
  //The maximum is inclusive and the minimum is inclusive
}

Kitten.prototype.render = function () {
  let article = document.createElement('article');
  section.appendChild(article);


  let h2 = document.createElement('h2');
  h2.textContent = this.name;
  article.appendChild(h2);

  let p = document.createElement('p');
  p.textContent = `${this.name} is adorable and is ${this.age} months old.`;
  article.appendChild(p);

  let h3 = document.createElement('h3');
  h3.textContent = 'Interests';
  article.appendChild(h3);

  let ul = document.createElement('ul');
  for (let i = 0; i < this.interests.length; i++) {
    let li = document.createElement('li');
    li.textContent = `💖 ${this.interests[i]}`;
    ul.appendChild(li);
  }
  article.appendChild(ul);
  let table = document.createElement('table');

  article.appendChild(table);

  let tr = document.createElement('tr');
  table.appendChild(tr);

  let th = document.createElement('th');
  th.textContent = 'good with kids';
  tr.appendChild(th);

  th = document.createElement('th');
  th.textContent = 'good with dogs';
  tr.appendChild(th);

  th = document.createElement('th');
  th.textContent = 'good with other cats';
  tr.appendChild(th);

  tr = document.createElement('tr');
  table.appendChild(tr);

  let td = document.createElement('td');
  td.textContent = this.isGoodWithKids;
  tr.appendChild(td);

  td = document.createElement('td');
  td.textContent = this.isGoodWithDogs;
  tr.appendChild(td);

  td = document.createElement('td');
  td.textContent = this.isGoodWIthOtherCats;
  tr.appendChild(td);

  let img = document.createElement('img');
  img.setAttribute('src', `img/${this.name}.jpeg`);
  img.setAttribute('alt', `${this.name} is adorable and is ${this.age} months old.`);
  article.appendChild(img);

};

// name: 'Jumper',
//   age: 0,
//   interests: ['sleeping', 'cuddling', 'eat'],
//   isGoodWithKids: true,
//   isGoodWithDogs: false,
//   isGoodWIthOtherCats: true,

// name: serena
// interests: sitting on laps, climbing curtains, eating treats
// good with kids? yes
// good with dogs? unknown
// good with cats? yes

let frankie = new Kitten('frankie', ['cuddling', 'chasing string', 'catnip'], true, false, true);

frankie.render();

// Step 1: grab the element we want to listen to

const kittenForm = document.getElementById('add-kitten');


// Step 3: write out our callback function//event handler

function handleSubmit(event){
  event.preventDefault();

  let name = event.target.kittyname.value;
  let interests = event.target.interest.value;
  interests = interests.split(',');
  // .split is a string method that will split on the character or characters provided and return an array of elements that were split

  let isGoodWithKids = event.target.isGoodWithKids.checked;
  let isGoodWithDogs = event.target.isGoodWithDogs.checked;
  let isGoodWithCats = event.target.isGoodWithCats.checked;

  const newKitten = new Kitten(name, interests, isGoodWithKids, isGoodWithDogs, isGoodWithCats);

  //calling .render to render the new kitty to the page
  newKitten.render();

  //resets the fields on form
  kittenForm.reset();
}

// Step 2: add the event listener to the element we want to listen to
kittenForm.addEventListener('submit', handleSubmit);

