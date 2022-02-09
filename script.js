/* 
    remove cells if there are too many elements
    add cells if there are not enough elements
*/
function setGrid(elements) {
    
    const container = document.querySelector('.container');
    container.style.cssText = `grid-template-columns: repeat(${elements}, 1fr);`;
    
    let new_elements = (elements ** 2) - (number_of_cells ** 2);

    if (new_elements > 0) {
        for (let i = 0; i < new_elements; ++i) {
            const new_div = document.createElement('div');
            new_div.classList.add('cell');
            container.appendChild(new_div);
            new_div.addEventListener('mouseover', () => {
                new_div.style.cssText = `background-color: ${drawColor}`;
            });
        }
    }

    else {
        for (let i = 0; i < -new_elements; ++i) {
            const child = document.querySelector('.cell');
            container.removeChild(child);
        }
    }

    number_of_cells = elements;
}


function resetGrid() {
    let all_cells = document.querySelectorAll('.cell');
    all_cells.forEach((item) => {item.style.cssText = 'background-color: white'});
}

function makeNewGrid(slider) {
    resetGrid();
    setGrid(parseInt(slider.value));
}

let number_of_cells = 0;
let drawColor = 'black';

let reset_button = document.querySelector('.reset');
reset_button.addEventListener('click', resetGrid);

let slider = document.querySelector('.slider');
let slider_output = document.querySelector('.output');

/* SLIDER */

slider_output.innerText = slider.value;
// Displays the value of the slider (1 to 100)
slider.oninput = function() {
    slider_output.innerText = slider.value;
}
// When the user stops on a number, generates the new grid
slider.onchange = function() {
    resetGrid();
    setGrid(parseInt(slider.value));
}


let colors = document.querySelectorAll('.color');
for (let i = 0; i < colors.length; ++i) {
    colors[i].addEventListener('click', () => {
        let style = window.getComputedStyle(colors[i]);
        drawColor = style.getPropertyValue('background-color');
        setGrid(parseInt(slider.value));
        let yourColor = document.getElementById('your-color');
        yourColor.style.cssText = `background-color: ${drawColor}`;
    });
}

let yourColor = document.getElementById('your-color');
yourColor.style.cssText = `background-color: ${drawColor}`;

setGrid(16);

