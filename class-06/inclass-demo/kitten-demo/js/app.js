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

let frankie = {
  name: 'Frankie',
  age: 0,
  interests: ['cuddling', 'chasing string', 'catnip'],
  isGoodWithKids: true,
  isGoodWithDogs: false,
  isGoodWIthOtherCats: true,
  getAge: function () {
    // console.log(this.name);
    this.age = getRandomAge(3, 12);
    console.log(this.age);
  }

};
frankie.getAge();

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

frankie.render = function () {
  let article = document.createElement('article');
  section.appendChild(article);

  // create element
  let h2 = document.createElement('h2');
  // give text content
  h2.textContent = frankie.name;
  // append to the DOM aka its parent
  article.appendChild(h2);

  // create p
  let p = document.createElement('p');
  p.textContent = `${frankie.name} is adorable and is ${frankie.age} months old.`;
  article.appendChild(p);

  // create ul
  let ul = document.createElement('ul');

  // create ALL the li's (creating li's useful lab)
  for (let i = 0; i < frankie.interests.length; i++) {
    //create li
    let li = document.createElement('LI');
    // give it content
    li.textContent = frankie.interests[i];
    // append to its parent
    ul.appendChild(li);
  }

  // append ul to its parent
  article.appendChild(ul);

  // create img
  let img = document.createElement('img');
  img.setAttribute('src', 'img/frankie.jpeg');
  img.setAttribute('alt', `${frankie.name} is adorable and is ${frankie.age} months old.`);
  article.appendChild(img);

};

frankie.render();

let jumper = {
  name: 'Jumper',
  age: 0,
  interests: ['sleeping', 'cuddling', 'eat'],
  isGoodWithKids: true,
  isGoodWithDogs: false,
  isGoodWIthOtherCats: true,
  getAge: function () {
    // console.log(this.name);
    this.age = getRandomAge(3, 12);
    console.log(this.age);
  }

};
jumper.getAge();

jumper.render = function () {
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
    let li = document.createElement('LI');
    // give it content
    li.textContent = this.interests[i];
    // append to its parent
    ul.appendChild(li);
  }

  // append ul to its parent
  article.appendChild(ul);

  // create img
  let img = document.createElement('img');
  img.setAttribute('src', 'img/jumper.jpeg');
  img.setAttribute('alt', `${this.name} is adorable and is ${this.age} months old.`);
  article.appendChild(img);

};

jumper.render();
