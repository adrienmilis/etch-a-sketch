/* 
    remove cells if there are too many elements
    add cells if there are not enough elements
*/
function setGrid(elements) {
    
    const container = document.querySelector('.container');
    container.style.cssText = `grid-template-columns: repeat(${elements}, 1fr);`;
    
    let new_elements = (elements ** 2) - (number_of_cells ** 2);

    if (new_elements > 0) {
        console.log(new_elements);
        for (let i = 0; i < new_elements; ++i) {
            const new_div = document.createElement('div');
            new_div.classList.add('cell');
            container.appendChild(new_div);
            new_div.addEventListener('mouseover', () => {
                new_div.style.cssText = 'background-color: black';
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
    console.log(number_of_cells);
}


function resetGrid() {
    let all_cells = document.querySelectorAll('.cell');
    all_cells.forEach((item) => {item.style.cssText = 'background-color: white'});
}

let number_of_cells = 0;

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
    console.log(parseInt(slider.value));
    setGrid(parseInt(slider.value));
}

setGrid(16);