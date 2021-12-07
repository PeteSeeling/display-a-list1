// import functions and grab DOM elements
import { dogBreeds } from './array-dogBreeds.js';
import { renderDogBreeds } from './render-dogBreeds.js';
import { dogInfo } from './array-dogInfo.js';
const dogBreedsEl = document.getElementById('dog-breeds-list')
const dogInfoEl = document.getElementById('pedigree');
;

for (let dog of dogBreeds){
  const p = renderDogBreeds(dog);
  dogBreedsEl.append(p);
}

for (let pedigree of dogInfo){
  
const div = document.createElement('div');

const p = document.createElement('p');
const img = document.createElement('img');
div.classList.add('pedigree');

p.textContent = pedigree.name;
img.src = pedigree.image;

div.append(p,img)
dogInfoEl.append(div);


div.style.fontSize = `${pedigree.age}rem`;

if (pedigree.name === 'dingo'){
  div.style.backgroundColor= 'red';
}
if (pedigree.chipped === 'no'){
  div.style.transform= 'rotate(10deg)';
}
  
console.log(p)
  //console.log(dogInfo[1].name);
  
}


  
// set event listeners 

  // use user input to update state 
  // update DOM to reflect the new state
