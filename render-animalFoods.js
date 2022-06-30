export function renderAnimalFoods(animalFoods){
    const div = document.createElement('div');
    const animalFoodsEl = document.getElementById('animal-foods');
    const p = document.createElement('p');
    const img = document.createElement('img');
    div.classList.add('animalfoods');

    let favoriteMeal = animalFoods.favoriteMeal[Math.floor(Math.random() * 3)];
    
    p.textContent = animalFoods.name;
    img.src = animalFoods.url_image;
 
    p.classList.add('animalFoodsName');
    animalFoodsEl.append(p, img, favoriteMeal);

    if (animalFoods.name === 'leo'){
        p.style.backgroundColor = 'red';
    }
    if (animalFoods.favoriteMeal === 'pork'){
        img.style.transform = 'rotate(10deg)';
    }
    if (animalFoods.age === 3){
        img.style.transform = 'rotate(10deg)';
    }
    if (animalFoods.name === 'dale'){
        p.style.transform = 'rotate(20deg)';
    }
    if (animalFoods.favoriteMeal === 'cod'){
        p.style.backgroundColor = 'green)';
    }
    return div;
}