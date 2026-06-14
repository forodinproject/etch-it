const sizeInput = document.querySelector("#sizeInput");
const sizeValue = document.querySelector("#sizeValue");
const container = document.querySelector('#container');
let size = 16;

function getRandomByte() {
    return Math.floor(Math.random() * 256)
}

function randomRGBColor() {
    return `rgb(
    ${getRandomByte()},
    ${getRandomByte()},
    ${getRandomByte()})`

}


// Boot up the initial grid
createGrid(size);

sizeValue.value = sizeInput.value;

function updateGrid(newValue) {

    let cleanSize = Math.max(1, Math.min(50, newValue));
    size = cleanSize;
    sizeInput.value = cleanSize;
    sizeValue.value = cleanSize;

    createGrid(size);
}

// Listen for dragging the slider
sizeInput.addEventListener("input", (event) => {
    updateGrid(+event.target.value);
});

// Listen for typing inside the number input box
sizeValue.addEventListener("input", (event) => {
    // If the input is blank (user hitting backspace), wait for them to type a number
    if (event.target.value === '') return;

    updateGrid(+event.target.value);
});



function createGrid(size) {
    container.textContent = '';
    const fragment = document.createDocumentFragment();
    let flexBasis = 100 / size;

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.style.flexBasis = `${flexBasis}%`;
        fragment.appendChild(cell);
    }
    container.appendChild(fragment);
}

container.addEventListener('mouseover', (e) => {
    if (e.target === container) return;
    e.target.style.backgroundColor = randomRGBColor();
});
