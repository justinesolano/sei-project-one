function init(){

  // HOVER INSTRUCTIONS


  // START GAME



  // VARIABLES
  const grid = document.querySelector('.grid')
  const length = 10
  const width = 11
  const cellCount = width * length
  const cells = []
  const frodoClass = 'frodo'

  const startPosition = 104
  console.log(startPosition)
  
  let currentPosition = 104


  // GRID CREATION
  function createGrid(startPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.innerText = i
      grid.appendChild(cell)
      cells.push(cell)
    //   cell.classList.add([i]) // adding class to each cell div to access single cell and put bg image such as water or boat
      //   const rowColumns = document.querySelector('.grid div')
    }
    addFrodo(startPosition)
  }

  createGrid(startPosition)

  // Textbook on array methods
//   const array = ['mars', 'twix', 'curly wurly']
//   array.forEach((element, index, array) => {
//     console.log(element, index, array)
//   })
// ## .slice

// This will return a subset or chunk of an array. This method creates a new array, leaving the original one intact.

// const array = [100, 'Henry VIII', NaN, 'Sarah']
// array.slice(1, 3) // ["Henry VIII", NaN]


  const river = cells.slice(88, 99)
  river.forEach(cell => {
    cell.classList.add('river')
  })

  const raft1 = document.createElement('div')
  cells.slice(88,99).appendChild(raft1)

  const riverFinal = cells.slice(22, 33)
  riverFinal.forEach(cell => {
    cell.classList.add('river-final')
  })

  const tavern = cells[5]
  tavern.classList.add('tavern')

//   const raftOne = cells.filter['89','91','93','95','97']
//   raftOne.forEach(cell => {
//     cell.classList.add('raft-one')
//   })


  
  
  // ADD FRODO TO GRID
  function addFrodo(position) {
    cells[position].classList.add(frodoClass) // this adds the frodoClass of 'frodo' to the cells position by adding frodo to grid div so this is where Frodo will show up
  } 
  
//   const frog = document.createElement('div')
//   const lily = document.createElement('div')

//   cells[cells.length - 1].appendChild(frog)
//   frog.classList.add('frog')
//   cells[0].appendChild(lily)
//   lily.classList.add('lily')



  //   function hideText()
  //   {
  //       cells.innerText = ''
  //   }
  // console.log(cells)

  // then you can make the container width equal the box width times the number of boxes you want on that row, e.g 40 * 11 (make sure you’ve got ‘box-sizing: border-box;’ applied to the boxes as well so the width will include the borders!)


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

  // START GAME
  const startButton = document.querySelector('#begin')
 
  function startGame(){

    const startPosition = 104
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


  startButton.addEventListener('click', startGame)



// EVENT LISTENERS


 
}


window.addEventListener('DOMContentLoaded', init)


// 