const canvas = document.createElement('div');
canvas.classList.add('canvas');
document.body.appendChild(canvas);

const container = document.createElement('div');
container.classList.add('container');
canvas.appendChild(container);

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < 16; j++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.addEventListener('click', () => {
            pixel.setAttribute('style', 'background-color: black;');
        });
        row.appendChild(pixel);
    }
    container.appendChild(row);
}