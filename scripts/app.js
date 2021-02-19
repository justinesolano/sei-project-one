function init(){

  console.log('CONTENT LOADED')
  
  // VARIABLES
  const grid = document.querySelector('.grid')
  const width = 11
  const cellCount = width * 11
  const cells = []
  const frodoClass = 'frodo'

  const startPosition = 0
  console.log(startPosition)
  
  let currentPosition = 0


  // GRID CREATION
  function createGrid (startPosition) {
    for (let i = 0; i < cellCount; i++) {

      const cell = document.createElement('div')
      cell.innerText = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    addFrodo(startPosition)
  }

  // ADD CAT TO GRID
  function addFrodo(position) {
    console.log(position)
    console.log(cells[position])
    cells[position].classList.add(frodoClass)
  }










 
}


window.addEventListener('DOMContentLoaded', init)


// 