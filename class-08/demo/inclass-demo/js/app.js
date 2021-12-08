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

// adding an element to the dom, 3 steps 1 - 3

// not necessarily in order
// step 1: create element
// step 2: give content (either text content or html children)
// step 3: append it to the DOM

Kitten.prototype.render = function () {
  let article = document.createElement('article');
  section.appendChild(article);

  // create element
  let h2 = document.createElement('h2');
  // give text content
  h2.textContent = this.name;
  // append to the DOM aka its parent
  article.appendChild(h2);

  // create p
  let p = document.createElement('p');
  p.textContent = `${this.name} is adorable and is ${this.age} months old.`;
  article.appendChild(p);

  // create ul
  let ul = document.createElement('ul');

  // create ALL the li's (creating li's useful lab)
  for (let i = 0; i < this.interests.length; i++) {
    //create li
    let li = document.createElement('li');
    // give it content
    li.textContent = this.interests[i];
    // append to its parent
    ul.appendChild(li);
  }

  // append ul to its parent
  article.appendChild(ul);

  // create element
  let table = document.createElement('table');
  //append to its parent
  article.appendChild(table);
  // begin giving table content
  // create tr
  let tr = document.createElement('tr');
  //append to its parent
  table.appendChild(tr);
  // give tr content
  // create th
  let th = document.createElement('th');
  // give content
  th.textContent = 'good with kids';
  // append to parent
  tr.appendChild(th);
  // the rest...
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





  // create img
  let img = document.createElement('img');
  img.setAttribute('src', `img/${this.name}.jpeg`);
  img.setAttribute('alt', `${this.name} is adorable and is ${this.age} months old.`);
  article.appendChild(img);

};


// for later
// name: 'frankie',
//   age: 0,
//   interests: ['cuddling', 'chasing string', 'catnip'],
//   isGoodWithKids: true,
//   isGoodWithDogs: false,
//   isGoodWIthOtherCats: true,

// name: 'Jumper',
//   age: 0,
//   interests: ['sleeping', 'cuddling', 'eat'],
//   isGoodWithKids: true,
//   isGoodWithDogs: false,
//   isGoodWIthOtherCats: true,

let frankie = new Kitten('frankie', ['cuddling', 'chasing string', 'catnip'], true, false, true);
let jumper = new Kitten('jumper', ['sleeping', 'cuddling', 'eat'], false, true, true);
let serena = new Kitten('serena', ['sitting on laps', 'climbing curtains', 'eating treats'], true, null, true);

// each instance of Kitten has its own render method, prototype === inherits
frankie.render();
jumper.render();
serena.render();

