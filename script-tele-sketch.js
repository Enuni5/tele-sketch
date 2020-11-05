const divContainer = document.querySelector('.container');
let userChoice = prompt("Please, select grid size");
let pixelSize = 800 / userChoice;
 
for (let i = 0; i < userChoice; i++) {
    for (let j = 0; j < userChoice; j++){
        const div = document.createElement('div');
        div.classList.add('square');
        div.setAttribute("style",`heigth: ${pixelSize}px; width: ${pixelSize}px`);
        divContainer.appendChild(div);
}
}
