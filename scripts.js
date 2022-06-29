const canvas = document.createElement('div');
canvas.classList.add('canvas');
document.body.appendChild(canvas);

const container = document.createElement('div');
container.classList.add('container');
canvas.appendChild(container);

function createGrid(grid) {
    for (let i = 0; i < grid; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < grid; j++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.addEventListener('click', () => {
                pixel.setAttribute('style', 'background-color: black;');
            });
            row.appendChild(pixel);
        }
        container.appendChild(row);
    }
}

let grid = 16;
createGrid(grid);


const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    grid = prompt(`Enter a number of square per row:`);
    createGrid(grid);
    console.log(grid);
});