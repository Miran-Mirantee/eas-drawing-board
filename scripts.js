function createGrid(grid) {
    const style = getComputedStyle(container);
    let height = parseInt(style.height);
    let dimensions = height / grid - 2;
    for (let i = 0; i < grid; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < grid; j++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.setAttribute('style', `height: ${dimensions}px; width: ${dimensions}px;`);
            pixel.addEventListener('click', () => {
                pixel.classList.add('clicked');
            });
            row.appendChild(pixel);
        }
        container.appendChild(row);
    }
}

function deleteGrid(grid) {
    for (let i = 0; i < grid; i++) {
        const row = document.querySelector('.row');
        container.removeChild(row);
    }
}

const canvas = document.createElement('div');
canvas.classList.add('canvas');
document.body.appendChild(canvas);

const container = document.createElement('div');
container.classList.add('container');
canvas.appendChild(container);

let grid = 16;
let temp;
createGrid(grid);

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    temp = grid;
    grid = prompt(`Enter a number of square per row:`);
    if (grid <= 100) {
        deleteGrid(temp);
        createGrid(grid);
        console.log(grid);
    }
    else
        grid = temp;
});