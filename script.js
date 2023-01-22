const fieldSizeInPixels = 640;

function clearField() {
    const divs = document.querySelectorAll(".grid-item");
    divs.forEach((div) => div.remove());
}

function amountOfAuto(size) {
    let string = '';
    for ( let i = 0; i < size; i++) {
        string = string + 'auto ';
    }
    return string;
}


function createField(size){
    for (let i = 0; i < size*size; i++) {
    const div = document.createElement("div");
    div.setAttribute(
        "style",
        `width: ${fieldSizeInPixels/size}px; height: ${fieldSizeInPixels/size}px; text-align: center; border: 1px solid black; `
    );
    div.classList.add("grid-item");
    gridContainer.appendChild(div);
    }
    const divs = document.querySelectorAll(".grid-item");

    
    divs.forEach((div) => {
    
    div.addEventListener("mousemove", () => {
        div.classList.add("color");
        });
    });
    gridContainer.setAttribute(
      "style",
      `display: grid; grid-template-columns: ${amountOfAuto(
        size
      )} ; align-content: center; justify-content: center; width: ${fieldSizeInPixels}; height: ${fieldSizeInPixels}; border: 1px solid black; `
    );
}

const gridContainer = document.querySelector('.grid-container');
const mainContainer = document.querySelector('.main-container');
let size = 4;









const sizeButton = document.querySelector('.sizeButton');

sizeButton.addEventListener('click', () => {
    clearField();

    size = prompt('Enter size of the field (from 1 to 100)');
    while(size < 1 || size > 100){
        size = prompt('Enter size of the field (from 1 to 100)');
    }

    createField(size);
});

createField(size);