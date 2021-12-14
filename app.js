// import functions and grab DOM elements
import { dogBreeds } from './array-dogBreeds.js';
import { renderDogBreeds } from './render-dogBreeds.js';
import { dogInfo } from './array-dogInfo.js';
import { renderDogInfo } from './render-dogInfo.js';
import { animalFriends } from './array-animalFriends.js';
import { renderAnimalFriends } from './render-animalFriends.js';
import { animalFoods } from './array-animalFood.js';
import { renderAnimalFoods } from './render-animalFoods.js';
const dogBreedsEl = document.getElementById('dog-breeds-list');
const dogInfoEl = document.getElementById('pedigree');
const animalFriendsEl = document.getElementById('friends');
const animalFoodsEl = document.getElementById('animal-foods');

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

for (let favFood of animalFoods){
    const p = renderAnimalFoods(favFood);
    animalFoodsEl.append(p);
}

  


  
// set event listeners 

  // use user input to update state 
  // update DOM to reflect the new state
