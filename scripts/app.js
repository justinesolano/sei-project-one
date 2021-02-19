function init(){

  console.log('CONTENT LOADED')
  
  // VARIABLES
  const grid = document.querySelector('.grid')
  const length = 11
  const width = 9
  const cellCount = width * length
  const cells = []
  const frodoClass = 'frodo'

  const startPosition = 93
  console.log(startPosition)
  
  let currentPosition = 0


  // GRID CREATION
  function createGrid(startPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      //   cell.innerText = i
      grid.appendChild(cell)
      cells.push(cell)
      const rowColumns = document.querySelector('.grid div')
    }
    addFrodo(startPosition)
  }

  // ADD FRODO TO GRID
  function addFrodo(position) {
    cells[position].classList.add(frodoClass) // this adds the frodoClass of 'frodo' to the cells position by adding frodo to grid div so this is where Frodo will show up
  }

//   function hideText()
//   {
//       cells.innerText = ''
//   }
// console.log(cells)

  // then you can make the container width equal the box width times the number of boxes you want on that row, e.g 40 * 11 (make sure you’ve got ‘box-sizing: border-box;’ applied to the boxes as well so the width will include the borders!)






  createGrid(startPosition)


 
}


window.addEventListener('DOMContentLoaded', init)


// 