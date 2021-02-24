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
  
  // RESTART FUNCTION

    const reset = document.querySelector('#reset')
    function clickReset(){
      location.reload()
    } 
    reset.addEventListener('click', clickReset)

}

  createGrid(startPosition)
                                    // ASSETS
// TAVERN
  const tavern = cells[5]
  tavern.classList.add('tavern')

  const tavernZone = cells.slice(0, 11)
  tavernZone.forEach(element => {
    element.classList.add('tavern-zone')
  })

  const safeZoneOne = cells.slice(77, 88)
  safeZoneOne.forEach(element => {
    element.classList.add('safezone-one')
  })

  const safeZoneTwo = cells.slice(55, 66)
  safeZoneTwo.forEach(element => {
    element.classList.add('safezone-two')
  })


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
  // BLACK RIDERS
  let blackRiders = [67, 69, 71, 73, 75]
  blackRiders.forEach(index => {
    console.log(cells[index])
    cells[index].classList.add('black-riders')
  })

// ROAD 2 -> 44-54
  const roadElementsTwo = []
  for (let i = 44; i <= 54; i++){
  const roadTwo = cells[i]
  console.log(roadTwo)
  roadTwo.classList.add('road-two')
  roadElementsTwo.push(roadTwo)
}
// RIVER TWO -> 34, 37, 40, 43
  const riverTwo = [33, 35, 36, 38, 39, 41, 42]
  riverTwo.forEach(index => {
  console.log(cells[index])
  cells[index].classList.add('river-two')
})

  // DOCKS
  const docks = [34, 37, 40, 43]
  docks.forEach(index => {
    console.log(cells[index])
    cells[index].classList.add('docks')
})

  // BLACK RIDERS 2
  let blackRiders2 = [44, 47, 50, 53]
  blackRiders2.forEach(index => {
    cells[index].classList.add('black-riders-two')
  })

  // ROAD FINAL
  const roadElementsThree = []
  for (let i = 11; i <= 21; i++){
  const roadThree = cells[i]
  roadThree.classList.add('road-three')
  roadElementsThree.push(roadThree)
}


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
  // BLACK RIDERS 2
  function addBlackRiders2(element){
    cells[element].classList.add('black-riders-two')
  }
  function removeBlackRiders2(roadElementsTwo){
    roadElementsTwo.classList.remove('black-riders-two')
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

  // MOVEMENT OF BLACK RIDERS 1
  setInterval(() => {
    roadElements.forEach(element => {
      removeBlackRiders(element)
    })
    if (blackRiders.some(element => {
      return (element + 1) % width === 0
    })){
      direction = 'left'
    } else if (blackRiders.some(element => {
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
      if (blackRiders === 76){
        blackRiders -= 10
      }
    })
  }, 1000)

    // MOVEMENT OF BLACK RIDERS 2
  setInterval(() => {
    roadElementsTwo.forEach(element => {
      removeBlackRiders2(element)
    })
    if (blackRiders2.some(element => {
      console.log('left')
      return (element + 1) % width === 0
    })){
      direction = 'left'
    } else if (blackRiders2.some(element => {
        console.log('right')
      return element % width === 0
    })){
      direction = 'right'
    }
    blackRiders2 = blackRiders2.map(element => {
      if (direction === 'right'){
        return element + 1
      }
      else if (direction === 'left'){
        return element - 1
      }
    })
    blackRiders2.forEach(item => {
      addBlackRiders2(item)
      if (blackRiders2 === 54){
        blackRiders2 -= 10
      }
    })
  }, 1000)
    



  startButton.addEventListener('click', riverElements)

  startButton.addEventListener('click', startGame)




 
}


window.addEventListener('DOMContentLoaded', init)


