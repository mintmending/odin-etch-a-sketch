let divCount = 16;

const board = document.querySelector(".board");


for(let i = 0; i < divCount*divCount; i++) {
    const div = document.createElement("div");
    div.classList.add("gridElement");

    board.appendChild(div);
}


