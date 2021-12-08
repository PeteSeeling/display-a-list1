// import functions and grab DOM elements
import { dogBreeds } from './array-dogBreeds.js';
import { renderDogBreeds } from './render-dogBreeds.js';
import { dogInfo } from './array-dogInfo.js';
import { renderDogInfo } from './render-dogInfo.js';
import { animalFriends } from './array-animalFriends.js';
import { renderAnimalFriends } from './render-animalFriends.js';
const dogBreedsEl = document.getElementById('dog-breeds-list')
const dogInfoEl = document.getElementById('pedigree');
const animalFriendsEl = document.getElementById('friends');
;

for (let dog of dogBreeds){
  const p = renderDogBreeds(dog);
  dogBreedsEl.append(p);
}

for (let pedigree of dogInfo){

  const p = renderDogInfo(pedigree);
  dogInfoEl.append(p);
}

for (let kitten of animalFriends){
  const p = renderAnimalFriends(kitten);
  animalFriendsEl.append(p);
}

  


  
// set event listeners 

  // use user input to update state 
  // update DOM to reflect the new state
