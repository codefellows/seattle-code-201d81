'use strict';

console.log('hello world');
let myArr = [1, 2, 3];
let thing = 'age';

let ryan = {
  name: 'Ryan',
  role: 'Instructor',
  age: 47,
  says: function(){
    console.log('You can do it!');
  }

};

// we can attach properties from outside the object
ryan.interests = ['gardening', 'baking', 'traveling'];

ryan.advises = function () {
  console.log('Get help after 15 minutes of being stuck!');
};

ryan.mathyStuff = function(){
  let num = this.age * 3;
  return num;
};

let steven = {
  name: 'Steven',
  role: 'TA',
  age: 'unknown',
};

let jallow = {
  name: 'Jallow',
  role: 'Student',
  age: '25',
};

console.log('Ryan: ', ryan);
console.log('Steven:', steven);
console.log(jallow.name);

//used less.  can be the string form of the property or a variable assigned that property
console.log(ryan['interests']);
console.log(ryan[thing]);

let str = 'YES';

let newStr = str.toLowerCase();

console.log(newStr);
console.log(myArr);

// not being called, just printed
console.log(ryan.mathyStuff());

// call or invoke method
ryan.says();
ryan.advises();





