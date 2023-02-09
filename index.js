
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
            // add a unique class name for hover effect
            newDiv.classList.add(`${row}-${col}`)
            // add some styling to make them visible
            // newDiv.style.cssText = 'background-color: blue;'
            newDiv.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = 'purple';
            })
            // and when it leaves
            newDiv.addEventListener('mouseleave', (event) => {
                setTimeout(() => {event.target.style.backgroundColor = 'aquamarine'}, 10)
            })
            // add to parent
            newRow.appendChild(newDiv)
        }
        //add row div to drawingBoardDiv
        drawingBoardDiv.appendChild(newRow)
    }
}

// run makeGrid at startup
makeGrid()

drawingBoardDiv.addEventListener('mouseenter', (event) => {
    event.target.style.color = 'purple';
    setTimeout(() => {event.target.style.color = 'aquamarine'}, 500)
})
