function init(){


  // VARIABLES
  const grid = document.querySelector('.grid')
  const length = 8
  const width = 11
  const cellCount = width * length
  const cells = []
  const frodoClass = 'frodo'
  

  const startPosition = 82
  
//   let currentPosition = 82


  // GRID CREATION
  function createGrid(startPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.innerText = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    addFrodo(startPosition)
  }
  
  // ADD FRODO TO GRID
  function addFrodo(position) {
    cells[position].classList.add(frodoClass) // this adds the frodoClass of 'frodo' to the cells position by adding frodo to grid div so this is where Frodo will show up
  } 
  

// HOVER INSTRUCTIONS
  const hoverImg = document.querySelector('#how-to')
  console.log(hoverImg)
  

  function handleMouseEnter(event) {
    console.log('being hovered on')
    event.target.src = 'https://fontmeme.com/permalink/210219/1e9e5bccb56715cd51fcb9b27cb3c36b.png'
  }

  function handleMouseLeave(event){
    console.log('Mouse has left')
    event.target.src = 'https://fontmeme.com/permalink/210219/22423c902b9679464ed9cc5bc5c57822.png'
  }

  hoverImg.addEventListener('mouseenter', handleMouseEnter)
  hoverImg.addEventListener('mouseleave', handleMouseLeave)

// RESTART FUNCTION

//   const restart = document.getElementById('reset')
//   function resetGame(){
//     cells[position].classList.remove(frodoClass)
//     cells[position].classList.add(frodoClass) // this adds the frodoClass of 'frodo' to the cells position by adding frodo to grid div so this is where Frodo will show up
//   }


  // START GAME
  const startButton = document.querySelector('#begin')
 
  function startGame(){

    const startPosition = 82
    let currentPosition = startPosition
// REMOVE FRODO
  function removeFrodo(position){
    cells[position].classList.remove(frodoClass)
}

// MOVE FRODO
    function movementKeys(event){
      const key = event.keyCode
      removeFrodo(currentPosition)
      if (key === 39 && currentPosition % width !== width - 1){
        currentPosition++
      }
      if (key === 37 && currentPosition % width !== 0){
        currentPosition--
      }
      if (key === 38 && currentPosition >= width){
        currentPosition -= width
      }
      if (key === 40 && currentPosition + width <= width * length - 1){
        currentPosition += width
      }


    addFrodo(currentPosition)

  }   
  document.addEventListener('keydown', movementKeys) 
}
  createGrid(startPosition)


    // ADD RIVER
    // const river = cells.[22, 24, 26, 28, 30, 32]
    // river.forEach(cells => {
    //   cells.classList.add('river')
    // })

    // ADD RAFT AS CHILD ELEMENT, SIMILAR TO CREATE GRID
    const raft = document.createElement('div')

    // appendChild to specific cell of river
    cells[33].appendChild(raft)
  


    // function createGrid(startPosition) {
    //     for (let i = 0; i < cellCount; i++) {
    //       const cell = document.createElement('div')
    //       cell.innerText = i
    //       grid.appendChild(cell)
    //       cells.push(cell)
    //     }

  
    // const riverFinal = cells.slice(22, 33)
    // riverFinal.forEach(cell => {
    //   cell.classList.add('river-final')
    // })
  
    const tavern = cells[5]
    tavern.classList.add('tavern')


  startButton.addEventListener('click', startGame)




 
}


window.addEventListener('DOMContentLoaded', init)


