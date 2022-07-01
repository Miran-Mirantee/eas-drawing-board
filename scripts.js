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
                //pixel gets darker each time the cursor passed
                if (pixel.classList.contains('hover')) {
                    const pixelStyle = getComputedStyle(pixel);
                    let opacity = parseFloat(pixelStyle.opacity);
                    opacity += 0.1;
                    pixel.style.opacity = opacity;
                }
                else {
                    pixel.classList.add('hover');
                    //randomly color the pixel
                    if (randomOn) {
                        let randomColor = Math.floor(Math.random()*16777215).toString(16);
                        pixel.style.backgroundColor = `#${randomColor}`;
                        pixel.style.borderColor = `#${randomColor}`;
                    }
                    else if (rainbowOn) {
                        pixel.classList.add('rainbow');
                    }
                }
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

const canvas = document.querySelector('.canvas');
const container = document.querySelector('.container');

//create default grid
let grid = 16;
let randomOn = false;
let rainbowOn = false;
let gridOn = true;
createGrid(grid);

//set new grid button
const newGrid = document.querySelector('.newGrid');
newGrid.addEventListener('click', () => {
    let temp = grid;
    grid = prompt(`Enter a number of square per row:`);
    if (grid <= 100) {
        deleteGrid(temp);
        createGrid(grid);
    }
    else
        grid = temp;
});

//reset the grid
const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
    deleteGrid(grid);
    createGrid(grid);
    gridOn = true;
});

//change to random color mode button
const random = document.querySelector('.random');
random.addEventListener('click', () => {
    randomOn = !randomOn;
    rainbowOn = false;
    deleteGrid(grid);
    createGrid(grid);
});

//turn on rainbow mode
const rainbow = document.querySelector('.rainbow');
rainbow.addEventListener('click', () => {
    rainbowOn = !rainbowOn;
    randomOn = false;
    deleteGrid(grid);
    createGrid(grid);
});

//turn off the grid
const gridOff = document.querySelector('.gridOff');
gridOff.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel:not(.hover)');
    for (const pixel of pixels) {
        if (gridOn) 
            pixel.style.borderColor = 'transparent'; 
        else 
            pixel.style.borderColor = 'black'; 
    }
    gridOn = !gridOn;
    if (!gridOn)
        gridOff.textContent = `Turn on grid`;
    else
        gridOff.textContent = `Turn off grid`;
});
