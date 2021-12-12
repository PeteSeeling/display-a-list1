export function renderAnimalFoods(animalFoods){
    
    const div = document.createElement('div');
    const animalFoodsEl = document.getElementById('animal-foods');
    const p = document.createElement('p');
    const img = document.createElement('img');
    div.classList.add('animalfoods');

    let favoriteMeal = animalFoods.favoriteMeal[Math.floor(Math.random() * Array.length)];
    
    alert(favoriteMeal);

    p.textContent = animalFoods.name;
    img.src = animalFoods.url_image;
 

    p.classList.add('animalFoodsName');
    animalFoodsEl.append(p, img, favoriteMeal);

    
    
    

    return div;



}