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
            pixel.addEventListener('mouseover', () => {
                if (pixel.classList.contains('hover')) {
                    let pixelStyle = getComputedStyle(pixel);
                    let opacity = parseFloat(pixelStyle.opacity);
                    opacity += 0.1;
                    pixel.style.opacity = opacity;
                }
                else
                    pixel.classList.add('hover');
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
createGrid(grid);

//set new grid button
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    let temp = grid;
    grid = prompt(`Enter a number of square per row:`);
    if (grid <= 100) {
        deleteGrid(temp);
        createGrid(grid);
    }
    else
        grid = temp;
});