const canvas = document.createElement('div');
canvas.classList.add('canvas');
document.body.appendChild(canvas);

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < 16; j++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        row.appendChild(pixel);
    }
    canvas.appendChild(row);
}