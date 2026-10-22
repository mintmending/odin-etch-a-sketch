const board = document.querySelector(".board");

function createBoard(divCount){

    let gridSize = board.offsetHeight / divCount + "px";

    for(let i = 0; i < divCount*divCount; i++) {
        const div = document.createElement("div");
        div.classList.add("gridElement");
        div.style.setProperty("height", gridSize);
        div.style.setProperty("width", gridSize);

        board.appendChild(div);
    }
}

// create default board when loading page for the first time
createBoard(16);


// paint functionality

let mouseDown = false;

board.addEventListener("mousedown", (event) => {
    mouseDown = true;
    event.target.classList.add("etched");
});

board.addEventListener("mouseup", (event) => {
    mouseDown = false;
});

board.addEventListener("mouseover", (event) => {
    if(mouseDown){
        event.target.classList.add("etched");
    }
});


// button functionality

const promptTxt = "Please enter a positive whole number between 1-100 for a new grid.\nE.g. 16 for a 16x16 grid.";

const newGridBtn = document.querySelector(".newGridBtn");

newGridBtn.addEventListener("click", (event) => {
    let divCount = prompt(promptTxt);
    while(divCount < 0 || divCount > 100 || !Number.isInteger(Number(divCount))){
        divCount = prompt(promptTxt);
    }

    document.querySelectorAll(".gridElement").forEach(e => e.remove());
    createBoard(divCount);
});