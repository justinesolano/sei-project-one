function init(){


  // VARIABLES
  const grid = document.querySelector('.grid')
  const length = 8
  const width = 11
  const cellCount = width * length
  const cells = []
  const frodoClass = 'frodo'
  let currentPosition = []
  let direction = 'right'

  const startPosition = 82

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
    cells[position].classList.add(frodoClass) 
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
    event.target.src = 'https://i.imgur.com/LsUHlrM.png'
  }

  hoverImg.addEventListener('mouseenter', handleMouseEnter)
  hoverImg.addEventListener('mouseleave', handleMouseLeave)


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
                                    // ASSETS
// TAVERN
  const tavern = cells[5]
  tavern.classList.add('tavern')




  // RIVER -> 22-32
  const riverElements = []
  for (let i = 22; i <= 32; i++) {
    const river = cells[i]
    river.classList.add('river')
    riverElements.push(river)
  }


  // RAFTS
  let rafts = [23, 26, 29, 32]
  rafts.forEach(index => {
    console.log(cells[index])
    cells[index].classList.add('raft')
  })

// ROAD -> 66-76
  const roadElements = []
  for (let i = 66; i <= 76; i++) {
    const roadOne = cells[i]
    roadOne.classList.add('road-one')
    roadElements.push(roadOne)
  }

  // NAZGUL 
  let blackRiders = [66, 69, 72, 75]
  blackRiders.forEach(index => {
    console.log(cells[index])
    cells[index].classList.add('black-riders')
  })



  // ADD POSITION OF RAFTS
  function addRaft(element){
    cells[element].classList.add('raft')
  }

  function removeRaft(riverElements){
    riverElements.classList.remove('raft')
  }


  // ADD POSITION OF BLACK RIDERS
  function addBlackRiders(element){
    cells[element].classList.add('black-riders')
  }

  function removeBlackRiders(roadElements){
    roadElements.classList.remove('black-riders')
  }


  // MOVEMENT OF RAFTS
  setInterval(() => {
    riverElements.forEach(element => {
      removeRaft(element)
    })
    if (rafts.some(element => {
      return (element + 1) % width === 0
    })){
      direction = 'left'
    } else if (rafts.some(element => {
      console.log(element % width !== 0)
      return element % width === 0
    })){

      direction = 'right'
    }
    rafts = rafts.map(element => {
      if (direction === 'right'){
        return element + 1
      }
      else if (direction === 'left'){
        return element - 1
      }
    })
    rafts.forEach(item => {
      addRaft(item)
      if (rafts === 32){
        rafts -= 10
      }
    })
  }, 1000)

  // MOVEMENT OF BLACK RIDERS
  setInterval(() => {
    roadElements.forEach(element => {
      removeBlackRiders(element)
    })
    if (rafts.some(element => {
      return (element + 1) % width === 0
    })){
      direction = 'left'
    } else if (rafts.some(element => {
      return element % width === 0
    })){
      direction = 'right'
    }
    blackRiders = blackRiders.map(element => {
      if (direction === 'right'){
        return element + 1
      }
      else if (direction === 'left'){
        return element - 1
      }
    })
    blackRiders.forEach(item => {
      addBlackRiders(item)
      if (blackRiders === 32){
        blackRiders - 10
      }
    })
  }, 1000)



  startButton.addEventListener('click', riverElements)


//   function addRaft(position) { // takes argument so function is reusable
//     cells[position].classList.add('.raft22') 
//   }

  // SET INTERVAL OF RAFTS AND RIVER MOVEMENT




  startButton.addEventListener('click', startGame)




 
}


window.addEventListener('DOMContentLoaded', init)


