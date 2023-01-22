
const mainContainer = document.querySelector('.main-container');



for( let i = 0; i < 16; i++){
    const div = document.createElement("div");
    div.setAttribute(
        "style",
        "width: 40px; height: 40px; text-align: center; border: 1px solid black; "
    );
    div.classList.add('main-container-item');
    mainContainer.appendChild(div);
}

mainContainer.setAttribute(
    "style",
    "display: grid; grid-template-columns: auto auto auto auto ; align-content: center; justify-content: center;"
);
