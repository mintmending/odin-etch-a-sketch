let divCount = 16;

const board = document.querySelector(".board");
let gridSize = board.offsetHeight / divCount + "px";


for(let i = 0; i < divCount*divCount; i++) {
    const div = document.createElement("div");
    div.classList.add("gridElement");
    div.style.setProperty("height", gridSize);
    div.style.setProperty("width", gridSize);

    board.appendChild(div);
}




