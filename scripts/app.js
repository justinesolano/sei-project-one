function init(){


  // VARIABLES
  const grid = document.querySelector('.grid')
  const length = 8
  const width = 11
  const cellCount = width * length
  const cells = []
  const frodoClass = 'frodo'
  let direction = 'right'
  
  const startPosition = 82
  let currentPosition = 82
  
  // GRID CREATION
  function createGrid(startPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      // cell.innerText = i 
      grid.appendChild(cell)
      cells.push(cell)
    }
    addFrodo(startPosition)
  }
  
  // ADD FRODO TO GRID
  function addFrodo(position) {
    cells[position].classList.add(frodoClass) 
  } 
    
  // REMOVE FRODO
  function removeFrodo(position){
    cells[position].classList.remove(frodoClass)
  }
      
  //RESULT
  const result = document.querySelector('.result')
  const resultTwo = document.querySelector('.result-two')
  const howTo = document.querySelector('.how-to-two')
  
  // PLACE FRODO BACK
  // REMOVE, UPDATE, ADD
  function frodoFell(){
    removeFrodo(currentPosition)
  }
  // FRODO WINS
  function frodoWins(){
    playWin()
    innAudio.pause()
  }
  
  // HOVER INSTRUCTIONS
  const hoverImg = document.querySelector('#how-to')
  
  function handleMouseEnter() {
    howTo.style.opacity = '1'
    result.style.opacity = '0'
    resultTwo.style.opacity = '0'
  }
  
  function handleMouseLeave(){
    howTo.style.opacity = '0'
    result.style.opacity = '0'
    resultTwo.style.opacity = '0'
  }
  
  hoverImg.addEventListener('mouseenter', handleMouseEnter)
  hoverImg.addEventListener('mouseleave', handleMouseLeave)
  
  // MUSIC
  //   const inn = document.querySelector('.inn-ambience')
  const innAudio = document.getElementById('inn-audio')
  const nazgulAudio = document.getElementById('nazgul-audio')
  const splashAudio = document.getElementById('splash-audio')
  const winAudio = document.getElementById('win-audio')
  
  function playInn(){
    innAudio.src = './game-assets/shire.wav'
    innAudio.play()
  }
  
  function playNazgul(){
    nazgulAudio.src = './game-assets/nazgul.wav'
    nazgulAudio.play()
  }
  
  function playSplash(){
    splashAudio.src = './game-assets/splash.wav'
    splashAudio.play()
  }
  
  function playWin(){
    winAudio.src = './game-assets/win.wav'
    winAudio.play()
  }
  
  // START GAME
  const startButton = document.querySelector('#begin')
  
  function startGame(){
  
    // FRODO CANNOT WALK INTO TREES
    function noUpTree(){
      currentPosition += width
    }
  
    function noDownTree(){
      currentPosition -= width
    }
  
    function noLeftTree(){
      currentPosition -= 1
    }
  
    function noRightTree(){
      currentPosition += 1
    }
  
    // MOVE FRODO
    function movementKeys(event){
      const key = event.keyCode
      removeFrodo(currentPosition)
      if (cells[5].classList.contains('frodo')){
        frodoWins()
        result.style.opacity = '1'
      }
      if (key === 39 && currentPosition % width !== width - 1){
        currentPosition++
        if (
          cells[currentPosition].classList.contains('river') && !cells[currentPosition].classList.contains('raft') ||
              cells[currentPosition].classList.contains('river-two')){
          frodoFell()
          playSplash()  
          innAudio.pause()    
          resultTwo.style.opacity = '1'
        } else if (
          cells[currentPosition].classList.contains('black-riders') || cells[currentPosition].classList.contains('black-riders-two') ){
          frodoFell()
          resultTwo.style.opacity = '1'
          playNazgul()
          innAudio.pause()
        } else if (
          cells[currentPosition].classList.contains('tavern')){
          frodoWins()
          result.style.opacity = '1'
        } else if (cells[currentPosition].classList.contains('trees')){
          noLeftTree()
        } else if (cells[currentPosition].classList.contains('trees-two')){
          noLeftTree()
        }
        if (cells[currentPosition].classList.contains('docks')) {
          console.log('bridge')
          cells[currentPosition].classList.add('frodo-on-bridge')
        }
        if (cells[currentPosition].classList.contains('road-one')) {
          cells[currentPosition].classList.add('frodo-on-road')
        }
        if (cells[currentPosition].classList.contains('road-two')) {
          cells[currentPosition].classList.add('frodo-on-road')
        }
        if (!cells[currentPosition].classList.contains('tavern')) {
          cells[5].classList.remove('inn-win')
          cells[5].classList.add('tavern')
        }
      }
      if (key === 37 && currentPosition % width !== 0){
        currentPosition--
        if (
          cells[currentPosition].classList.contains('river') && !cells[currentPosition].classList.contains('raft') ||
            cells[currentPosition].classList.contains('river-two')){
          frodoFell()
          playSplash()
          console.log('ahh')
          innAudio.pause()
          resultTwo.style.opacity = '1'
        }  else if (
          cells[currentPosition].classList.contains('black-riders') || cells[currentPosition].classList.contains('black-riders-two')){
          frodoFell()
          resultTwo.style.opacity = '1'
          playNazgul()
          innAudio.pause()
        } else if (
          cells[currentPosition].classList.contains('tavern')){
          frodoWins()
          result.style.opacity = '1'
        } else if (cells[currentPosition].classList.contains('trees')){
          noRightTree()
        } else if (cells[currentPosition].classList.contains('trees-two')){
          noRightTree()
        } 
        if (cells[currentPosition].classList.contains('docks')) {
          console.log('bridge')
          cells[currentPosition].classList.add('frodo-on-bridge')
        }
        if (cells[currentPosition].classList.contains('road-one')) {
          cells[currentPosition].classList.add('frodo-on-road')
        }
        if (cells[currentPosition].classList.contains('road-two')) {
          cells[currentPosition].classList.add('frodo-on-road')
        }
        if (!cells[currentPosition].classList.contains('tavern')) {
          cells[5].classList.remove('inn-win')
          cells[5].classList.add('tavern')
        }
      }
      if (key === 38 && currentPosition >= width){
        currentPosition -= width
        if (
          cells[currentPosition].classList.contains('black-riders') || cells[currentPosition].classList.contains('black-riders-two')){
          frodoFell()
          innAudio.pause()
          resultTwo.style.opacity = '1'
          playNazgul()
        } 
        if (
          cells[currentPosition].classList.contains('tavern')){
          frodoWins()
          result.style.opacity = '1'
        } 
        if (cells[currentPosition].classList.contains('trees')){
          noUpTree()
        }
        if (cells[currentPosition].classList.contains('trees-two')){
          noUpTree()
        }
        if (cells[currentPosition].classList.contains('docks')) {
          cells[currentPosition].classList.add('frodo-on-bridge')
        }
        if (cells[currentPosition].classList.contains('raft')) {
          cells[currentPosition].classList.add('frodo-on-raft')
        }
        if (cells[currentPosition].classList.contains('road-one')) {
          cells[currentPosition].classList.add('frodo-on-road')
        }
        if (cells[currentPosition].classList.contains('road-two')) {
          cells[currentPosition].classList.add('frodo-on-road')
        }
        if (cells[currentPosition].classList.contains('tavern')) {
          cells[currentPosition].classList.add('inn-win')
        }
        if (cells[currentPosition].classList.contains('docks')) {
          cells[currentPosition].classList.add('frodo-on-bridge')
        } if (!cells[currentPosition].classList.contains('docks')) {
          cells[43].classList.remove('frodo-on-bridge')
          cells[43].classList.add('docks')
        } if (!cells[currentPosition].classList.contains('docks')) {
          cells[40].classList.remove('frodo-on-bridge')
          cells[40].classList.add('docks')
        } if (!cells[currentPosition].classList.contains('docks')) {
          cells[37].classList.remove('frodo-on-bridge')
          cells[37].classList.add('docks')
        } if (!cells[currentPosition].classList.contains('docks')) {
          cells[34].classList.remove('frodo-on-bridge')
          cells[34].classList.add('docks')
        }
        if (!cells[currentPosition].classList.contains('raft')) {
          cells[32].classList.remove('frodo-on-raft')
          cells[32].classList.add('river')
        }
        if (!cells[currentPosition].classList.contains('raft')) {
          cells[29].classList.remove('frodo-on-raft')
          cells[29].classList.add('river')
        }
        if (!cells[currentPosition].classList.contains('raft')) {
          cells[26].classList.remove('frodo-on-raft')
          cells[26].classList.add('river')
        }
        if (!cells[currentPosition].classList.contains('raft')) {
          cells[23].classList.remove('frodo-on-raft')
          cells[23].classList.add('river')
        }
        if (!cells[currentPosition].classList.contains('tavern')) {
          cells[5].classList.remove('inn-win')
          cells[5].classList.add('tavern')
        }
        if (!cells[currentPosition].classList.contains('road-one')) {
          cells[76].classList.remove('frodo-on-road')
          cells[76].classList.add('road-one')
        }
        if (!cells[currentPosition].classList.contains('road-one')) {
          cells[75].classList.remove('frodo-on-road')
          cells[75].classList.add('road-one')
        }
        if (!cells[currentPosition].classList.contains('road-one')) {
          cells[74].classList.remove('frodo-on-road')
          cells[74].classList.add('road-one')
        }
        if (!cells[currentPosition].classList.contains('road-one')) {
          cells[73].classList.remove('frodo-on-road')
          cells[73].classList.add('road-one')
        }
        if (!cells[currentPosition].classList.contains('road-one')) {
          cells[72].classList.remove('frodo-on-road')
          cells[72].classList.add('road-one')
        }
        if (!cells[currentPosition].classList.contains('road-one')) {
          cells[71].classList.remove('frodo-on-road')
          cells[71].classList.add('road-one')
        }
        if (!cells[currentPosition].classList.contains('road-one')) {
          cells[70].classList.remove('frodo-on-road')
          cells[70].classList.add('road-one')
        }
        if (!cells[currentPosition].classList.contains('road-one')) {
          cells[69].classList.remove('frodo-on-road')
          cells[69].classList.add('road-one')
        }
        if (!cells[currentPosition].classList.contains('road-one')) {
          cells[68].classList.remove('frodo-on-road')
          cells[68].classList.add('road-one')
        }
        if (!cells[currentPosition].classList.contains('road-one')) {
          cells[67].classList.remove('frodo-on-road')
          cells[67].classList.add('road-one')
        }
        if (!cells[currentPosition].classList.contains('road-one')) {
          cells[66].classList.remove('frodo-on-road')
          cells[66].classList.add('road-one')
        }
        if (!cells[currentPosition].classList.contains('road-two')) {
          cells[54].classList.remove('frodo-on-road')
          cells[54].classList.add('road-two')
        }
        if (!cells[currentPosition].classList.contains('road-two')) {
          cells[53].classList.remove('frodo-on-road')
          cells[53].classList.add('road-two')
        }
        if (!cells[currentPosition].classList.contains('road-two')) {
          cells[52].classList.remove('frodo-on-road')
          cells[52].classList.add('road-two')
        }
        if (!cells[currentPosition].classList.contains('road-two')) {
          cells[51].classList.remove('frodo-on-road')
          cells[51].classList.add('road-two')
        }
        if (!cells[currentPosition].classList.contains('road-two')) {
          cells[50].classList.remove('frodo-on-road')
          cells[50].classList.add('road-two')
        }
        if (!cells[currentPosition].classList.contains('road-two')) {
          cells[49].classList.remove('frodo-on-road')
          cells[49].classList.add('road-two')
        }
        if (!cells[currentPosition].classList.contains('road-two')) {
          cells[48].classList.remove('frodo-on-road')
          cells[48].classList.add('road-two')
        }
        if (!cells[currentPosition].classList.contains('road-two')) {
          cells[47].classList.remove('frodo-on-road')
          cells[47].classList.add('road-two')
        }
        if (!cells[currentPosition].classList.contains('road-two')) {
          cells[46].classList.remove('frodo-on-road')
          cells[46].classList.add('road-two')
        }
        if (!cells[currentPosition].classList.contains('road-two')) {
          cells[45].classList.remove('frodo-on-road')
          cells[45].classList.add('road-two')
        }
        if (!cells[currentPosition].classList.contains('road-two')) {
          cells[44].classList.remove('frodo-on-road')
          cells[44].classList.add('road-two')
        }
      }
      if (key === 40 && currentPosition + width <= width * length - 1){
        currentPosition += width
        if (
          cells[currentPosition].classList.contains('river') && !cells[currentPosition].classList.contains('raft') ||
            cells[currentPosition].classList.contains('river-two')){
          frodoFell()
          playSplash()
          innAudio.pause()
          resultTwo.style.opacity = '1'
        } 
        if (
          cells[currentPosition].classList.contains('black-riders') || cells[currentPosition].classList.contains('black-riders-two')){
          frodoFell()
          innAudio.pause()
          resultTwo.style.opacity = '1'
          playNazgul()
        }
        if (
          cells[currentPosition].classList.contains('tavern')){
          frodoWins()
          result.style.opacity = '1'
        } 
        if (cells[currentPosition].classList.contains('road-one')) {
          cells[currentPosition].classList.add('frodo-on-road')
        }
        if (cells[currentPosition].classList.contains('road-two')) {
          cells[currentPosition].classList.add('frodo-on-road')
        }
        if (cells[currentPosition].classList.contains('raft')) {
          cells[currentPosition].classList.add('frodo-on-raft')
        }
        if (cells[currentPosition].classList.contains('trees')){
          noDownTree()
        }
        if (cells[currentPosition].classList.contains('trees-two')){
          noDownTree()
        }
        if (cells[currentPosition].classList.contains('docks')) {
          cells[currentPosition].classList.add('frodo-on-bridge')
        } if (!cells[currentPosition].classList.contains('docks')) {
          cells[43].classList.remove('frodo-on-bridge')
          cells[43].classList.add('docks')
        } if (!cells[currentPosition].classList.contains('docks')) {
          cells[40].classList.remove('frodo-on-bridge')
          cells[40].classList.add('docks')
        } if (!cells[currentPosition].classList.contains('docks')) {
          cells[37].classList.remove('frodo-on-bridge')
          cells[37].classList.add('docks')
        } if (!cells[currentPosition].classList.contains('docks')) {
          cells[34].classList.remove('frodo-on-bridge')
          cells[34].classList.add('docks')
        }
        if (!cells[currentPosition].classList.contains('raft')) {
          cells[32].classList.remove('frodo-on-raft')
          cells[32].classList.add('river')
        }
        if (!cells[currentPosition].classList.contains('raft')) {
          cells[29].classList.remove('frodo-on-raft')
          cells[29].classList.add('river')
        }
        if (!cells[currentPosition].classList.contains('raft')) {
          cells[26].classList.remove('frodo-on-raft')
          cells[26].classList.add('river')
        }
        if (!cells[currentPosition].classList.contains('raft')) {
          cells[23].classList.remove('frodo-on-raft')
          cells[23].classList.add('river')
        }
        if (!cells[currentPosition].classList.contains('road-one')) {
          cells[76].classList.remove('frodo-on-road')
          cells[76].classList.add('road-one')
        }
        if (!cells[currentPosition].classList.contains('road-one')) {
          cells[75].classList.remove('frodo-on-road')
          cells[75].classList.add('road-one')
        }
        if (!cells[currentPosition].classList.contains('road-one')) {
          cells[74].classList.remove('frodo-on-road')
          cells[74].classList.add('road-one')
        }
        if (!cells[currentPosition].classList.contains('road-one')) {
          cells[73].classList.remove('frodo-on-road')
          cells[73].classList.add('road-one')
        }
        if (!cells[currentPosition].classList.contains('road-one')) {
          cells[72].classList.remove('frodo-on-road')
          cells[72].classList.add('road-one')
        }
        if (!cells[currentPosition].classList.contains('road-one')) {
          cells[71].classList.remove('frodo-on-road')
          cells[71].classList.add('road-one')
        }
        if (!cells[currentPosition].classList.contains('road-one')) {
          cells[70].classList.remove('frodo-on-road')
          cells[70].classList.add('road-one')
        }
        if (!cells[currentPosition].classList.contains('road-one')) {
          cells[69].classList.remove('frodo-on-road')
          cells[69].classList.add('road-one')
        }
        if (!cells[currentPosition].classList.contains('road-one')) {
          cells[68].classList.remove('frodo-on-road')
          cells[68].classList.add('road-one')
        }
        if (!cells[currentPosition].classList.contains('road-one')) {
          cells[67].classList.remove('frodo-on-road')
          cells[67].classList.add('road-one')
        }
        if (!cells[currentPosition].classList.contains('road-one')) {
          cells[66].classList.remove('frodo-on-road')
          cells[66].classList.add('road-one')
        }
        if (!cells[currentPosition].classList.contains('road-two')) {
          cells[54].classList.remove('frodo-on-road')
          cells[54].classList.add('road-two')
        }
        if (!cells[currentPosition].classList.contains('road-two')) {
          cells[53].classList.remove('frodo-on-road')
          cells[53].classList.add('road-two')
        }
        if (!cells[currentPosition].classList.contains('road-two')) {
          cells[52].classList.remove('frodo-on-road')
          cells[52].classList.add('road-two')
        }
        if (!cells[currentPosition].classList.contains('road-two')) {
          cells[51].classList.remove('frodo-on-road')
          cells[51].classList.add('road-two')
        }
        if (!cells[currentPosition].classList.contains('road-two')) {
          cells[50].classList.remove('frodo-on-road')
          cells[50].classList.add('road-two')
        }
        if (!cells[currentPosition].classList.contains('road-two')) {
          cells[49].classList.remove('frodo-on-road')
          cells[49].classList.add('road-two')
        }
        if (!cells[currentPosition].classList.contains('road-two')) {
          cells[48].classList.remove('frodo-on-road')
          cells[48].classList.add('road-two')
        }
        if (!cells[currentPosition].classList.contains('road-two')) {
          cells[47].classList.remove('frodo-on-road')
          cells[47].classList.add('road-two')
        }
        if (!cells[currentPosition].classList.contains('road-two')) {
          cells[46].classList.remove('frodo-on-road')
          cells[46].classList.add('road-two')
        }
        if (!cells[currentPosition].classList.contains('road-two')) {
          cells[45].classList.remove('frodo-on-road')
          cells[45].classList.add('road-two')
        }
        if (!cells[currentPosition].classList.contains('road-two')) {
          cells[44].classList.remove('frodo-on-road')
          cells[44].classList.add('road-two')
        }
        if (!cells[currentPosition].classList.contains('tavern')) {
          cells[5].classList.remove('inn-win')
          cells[5].classList.add('tavern')
        }
      }
      addFrodo(currentPosition)
    } 
  
    document.addEventListener('keydown', movementKeys) 
      
    // RESTART FUNCTION
  
    const reset = document.querySelector('#reset')
    function clickReset(){
      location.reload()
      //   result.style.visiblity = 'hidden'
      //   result.style.visiblity = 'hidden'
      currentPosition = 82
      innAudio.pause()
    } 
    reset.addEventListener('click', clickReset)
  }
  
  createGrid(startPosition)
  
    
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
  
  // TREES 
  const trees = [1, 3, 7, 9]
  trees.forEach(index => {
    cells[index].classList.add('trees')
  })
  
  const treesTwo = [57, 60, 63]
  treesTwo.forEach(index => {
    cells[index].classList.add('trees-two')
  })
  
  // RIVER -> 22-32
  const riverElements = []
  for (let i = 22; i <= 32; i++) {
    const river = cells[i]
    river.classList.add('river')
    riverElements.push(river)
  }
  
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
    cells[index].classList.add('black-riders')
  })
  
  // ROAD 2 -> 44-54
  const roadElementsTwo = []
  for (let i = 44; i <= 54; i++){
    const roadTwo = cells[i]
    roadTwo.classList.add('road-two')
    roadElementsTwo.push(roadTwo)
  }
  // RIVER TWO -> 34, 37, 40, 43
  const riverTwo = [33, 35, 36, 38, 39, 41, 42]
  riverTwo.forEach(index => {
    cells[index].classList.add('river-two')
  })
  
  // DOCKS
  const docks = [34, 37, 40, 43]
  docks.forEach(index => {
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
  
  // RAFTS
  let rafts = [23, 26, 29, 32]
  rafts.forEach(index => {
    cells[index].classList.add('raft')
  })
  
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
      return element % width === 0
    })){
      direction = 'right'
    }
    rafts = rafts.map(element => {
      if (direction === 'right'){
        return element + 1
      } else if (direction === 'left'){
        return element - 1
      }
    })
    if (cells[currentPosition].classList.contains('river')) {
      resultTwo.style.opacity = '1'
      frodoFell()
      console.log('ahh')
      innAudio.pause()
      playSplash()
    }
    rafts.forEach(item => {
      addRaft(item)
      if (rafts === 32){
        rafts -= 10
      }
    })
  }, 1500)
  
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
      } else if (direction === 'left'){
        return element - 1
      }
    })
    if (blackRiders.some(index => {
      return index === currentPosition
    })) {
      frodoFell()
      resultTwo.style.opacity = '1'
      playNazgul()
      innAudio.pause()
    }
    blackRiders.forEach(item => {
      addBlackRiders(item)
      if (blackRiders === 76){
        blackRiders -= 10
      }
    })
  }, 1500)
  
  // MOVEMENT OF BLACK RIDERS 2
  setInterval(() => {
    roadElementsTwo.forEach(element => {
      removeBlackRiders2(element)
    })
    if (blackRiders2.some(element => {
      return (element + 1) % width === 0
    })){
      direction = 'left'
    } else if (blackRiders2.some(element => {
      return element % width === 0
    })){
      direction = 'right'
    }
    blackRiders2 = blackRiders2.map(element => {
      if (direction === 'right'){
        return element + 1
      } else if (direction === 'left'){
        return element - 1
      }
    })
    if (blackRiders2.some(index => {
      return index === currentPosition
    })) {
      frodoFell()
      resultTwo.style.opacity = '1'
      playNazgul()
      innAudio.pause()
    }
    blackRiders2.forEach(item => {
      addBlackRiders2(item)
      if (blackRiders2 === 54){
        blackRiders2 -= 10
      }
    })
  }, 1500)
      
  
  startButton.addEventListener('click', riverElements)
  startButton.addEventListener('click', startGame)
  startButton.addEventListener('click', playInn)
  
  
   
}
  
window.addEventListener('DOMContentLoaded', init)
  
  
  
  