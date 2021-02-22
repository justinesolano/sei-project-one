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
    document.querySelector('.frodo').style.zIndex = '1'
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

// middle - simple every second in timer remove log and add to next one on a timer add 10, remove ,add,c ounter, conditional

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


//   const img = document.createElement('img')
// img.src = 'https://i.imgur.com/VUBLpBp.png' 
// const src = document.querySelector('.frodo') 
// src.appendChild(img)
  // ADD OBSTACLES ETC
//   const river = cells.slice(22, 33)
//   river.forEach(cells => {
//     cells.classList.add('river')
//   })  <--- version that did not work

// TAVERN
  const tavern = cells[5]
  tavern.classList.add('tavern')


  // RAFTS
//   const raft22 = cells[22]
//   raft22.classList.add('raft22')


  const raft25 = cells[25]
  raft25.classList.add('raft25')
  console.log(raft25)
  document.querySelector('.raft25').style.zIndex = '0'
//   const raft28 = cells[28]
//   raft28.classList.add('raft28')

//   const raft31 = cells[31]
//   raft31.classList.add('raft31')


  // RIVER

  const river22 = cells[22]
  river22.classList.add('river22')
  //

  const river23 = cells[23]
  river23.classList.add('river23')
  console.log(river23)

  const river24 = cells[24]
  river24.classList.add('river24')

  const river26 = cells[26]
  river26.classList.add('river26')  

  const river27 = cells[27]
  river27.classList.add('river27')
  // 

  const river28 = cells[28]
  river28.classList.add('river28')
  //

  const river29 = cells[29]
  river29.classList.add('river29')
  
  const river30 = cells[30]
  river30.classList.add('river30')

  //
  const river31 = cells[31]
  river31.classList.add('river31')
  //

  const river32 = cells[32]
  river32.classList.add('river32')

  const addRafts = 'raft25'
  const raftCurrent = 25
  let raftStartPoint = 25

  // ADD POSITION OF RAFTS AND RIVERS

  function addRaft(position){
    cells[position].classList.add(addRafts)
}

  function removeRaft(raftStartPoint){
    cells[raftStartPoint].classList.remove(raft25)
}


  function riverRaftFlow(raftStartPoint){
    removeRaft(raftStartPoint)
    if (raftStartPoint === 25 && raftStartPoint > 22 ){
      raftStartPoint--
      raftStartPoint + 10
    }
    addRaft(raftStartPoint)
    removeRaft(raftStartPoint)
  }

  startButton.addEventListener('click', riverRaftFlow)

//   function addRaft(position) { // takes argument so function is reusable
//     cells[position].classList.add('.raft22') 
//   }

  // SET INTERVAL OF RAFTS AND RIVER MOVEMENT


  


    // const raft = document.createElement('div')
    // // appendChild to specific cell of river
    // cells[33].appendChild(raft)
    // cells[33].classList.add('raft')
    // // ADD RAFT AS CHILD ELEMENT, SIMILAR TO CREATE GRID

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
  


  startButton.addEventListener('click', startGame)




 
}


window.addEventListener('DOMContentLoaded', init)


