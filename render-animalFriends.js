export function renderAnimalFriends(kitten){

const outerDiv = document.createElement('div');
const kittenNameEl = document.createElement('p');
const kittenAgeEl = document.createElement('p');
const kittenImgEl = document.createElement('img');

const friendsDiv = document.createElement('div');
const friendNameEl = document.createElement('p');
const friendTypeEl = document.createElement('p');
const friendImgEl = document.createElement('img');
const animalFriendsEl = document.getElementById('friends');

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

animalFriendsEl.append(outerDiv, friendsDiv);

return outerDiv;
return friendsDiv;
}