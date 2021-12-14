export function renderDogBreeds(dog){

    const p = document.createElement('p');
    const dogBreedsEl = document.getElementById('dog-breeds-list');

    p.textContent = dog;
    p.classList.add('dog');
    dogBreedsEl.append(p);


    if (dog === 'lab'){
        p.style.backgroundColor = 'yellow';

    }
    if (dog.length === 12){
        p.style.transform = 'rotate(20deg)';
    }
    if (dog.charAt(0) === 'r'){
        p.style.backgroundColor = 'blue';
    }
    return p;
}