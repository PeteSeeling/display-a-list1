// import functions and grab DOM elements
import { dogBreeds } from './array-dogBreeds.js';
import { renderDogBreeds } from './render-dogBreeds.js';
import { dogInfo } from './array-dogInfo.js';
import { renderDogInfo } from './render-dogInfo.js';
const dogBreedsEl = document.getElementById('dog-breeds-list')
const dogInfoEl = document.getElementById('pedigree');
;

for (let dog of dogBreeds){
  const p = renderDogBreeds(dog);
  dogBreedsEl.append(p);
}

for (let pedigree of dogInfo){

  const p = renderDogInfo(pedigree);
  dogInfoEl.append(p);
}


  
// set event listeners 

  // use user input to update state 
  // update DOM to reflect the new state
