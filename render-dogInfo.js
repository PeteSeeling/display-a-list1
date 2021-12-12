

export function renderDogInfo(pedigree){

    const div = document.createElement('div');
    const dogInfoEl = document.getElementById('pedigree');
    const p = document.createElement('p');
    const img = document.createElement('img');
    div.classList.add('pedigree');

    p.textContent = pedigree.name;
    img.src = pedigree.image;

    div.append(p, img);
    dogInfoEl.append(div);


    div.style.fontSize = `${pedigree.age}rem`;

    if (pedigree.name === 'dingo'){
        div.style.backgroundColor = 'red';
    }
    if (pedigree.chipped === 'no'){
        div.style.transform = 'rotate(10deg)';
    }
    return div;
 
}