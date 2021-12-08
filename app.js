// import functions and grab DOM elements
import { dogBreeds } from './array-dogBreeds.js';
import { renderDogBreeds } from './render-dogBreeds.js';
import { dogInfo } from './array-dogInfo.js';
import { renderDogInfo } from './render-dogInfo.js';
import { animalFriends } from './array-animalFriends.js';
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

const animalFriendsEl = document.getElementById('friends');
for (let kitten of animalFriends){

  const outerDiv = document.createElement('div');
  const kittenNameEl = document.createElement('p');
  const kittenAgeEl = document.createElement('p');
  const kittenImgEl = document.createElement('img');

  const friendsDiv = document.createElement('div');
  const friendNameEl = document.createElement('p');
  const friendTypeEl = document.createElement('p');
  const friendImgEl = document.createElement('img');

 outerDiv.classList.add('outer-div');
 friendsDiv.classList.add('friend');

 kittenNameEl.textContent = kitten.name;
 kittenAgeEl.textContent = kitten.age;
 kittenImgEl.src = kitten.url_image;

 friendNameEl.textContent = kitten.friend.name;
 friendTypeEl.textContent = kitten.friend.type;
 friendImgEl.src = kitten.friend.url_image;

 outerDiv.append(kittenNameEl, kittenAgeEl, kittenImgEl);
 friendsDiv.append(friendNameEl, friendTypeEl, friendImgEl);

 animalFriendsEl.append(outerDiv, friendsDiv);
 console.log(kitten.friend.name);

 if (kitten.name === 'leo'){
   outerDiv.style.backgroundColor = 'magenta';
 }
 if ( kitten.friend.type === 'large bear'){
   friendsDiv.style.transform = 'rotate(12deg)';
 }

 if ( kitten.age === 9){
   outerDiv.style.backgroundColor = 'green';
 }
 friendsDiv.style.fontSize = `${kitten.name.length}.01rem`;

}


  
// set event listeners 

  // use user input to update state 
  // update DOM to reflect the new state
