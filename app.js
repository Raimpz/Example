// getting the h2 from html
const input = document.getElementById('input');

function createNewPerson(name) {
  const obj = {};
  obj.name = name;
  obj.greeting = function () {
    let message = `Hi, my name is ${this.name}. Welcome to my crib`
    console.log(message);
  }
  return obj
};

const MelGibson = createNewPerson('Mel Gibson');
console.log(MelGibson.name);
MelGibson.greeting();

input.textContent = 'The sentence goes here'