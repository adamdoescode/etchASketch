
// grid of 16x16 divs

const drawingBoardDiv = document.querySelector('.drawingBoard')

function makeGrid() {
    for (let row = 0; row < 16; row++) {
        // make a row div container
        newRow = document.createElement('div')
        newRow.classList.add('newRow')
        for (let col = 0; col < 16; col++) {
            // make grid
            newDiv = document.createElement('div')
            newDiv.classList.add('drawDiv')
            // add some styling to make them visible
            // newDiv.style.cssText = 'background-color: blue;'
            newRow.appendChild(newDiv)
        }
        //add row div to drawingBoardDiv
        drawingBoardDiv.appendChild(newRow)
    }
}

makeGrid()
