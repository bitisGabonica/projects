// Part 1: Create a new div of class "planet" and set its background color
// to the color of your choice.  Then, append it to the body in the DOM.


// Part 2: Create a new div of class "moon" and append it to the planet in the DOM.



function planetfunction () {
  var planetoid= document.createElement('div');
  var nameplanet =  planetoid.className= 'planet';
  document.body.appendChild(planetoid);
};

planetfunction();

var colorplanet= document.getElementsByClassName('planet')[0].style.backgroundColor = "blue";
console.log(colorplanet)

function moonfunction () {
  var lunar= document.createElement('div'); //create div
  var namemoon =  lunar.className= 'moon'; //give class 'moon'
  document.getElementsByClassName('planet')[0].appendChild(lunar); //append moon to planet
};

moonfunction();


function moonfunction2 () {
  var lunar2= document.createElement('div'); //create div
  var namemoon2 =  lunar2.className= 'moon2'; //give class 'moon'
  document.getElementsByClassName('planet')[0].appendChild(lunar2); //append moon to planet
};

moonfunction2();
