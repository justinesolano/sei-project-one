# General Assembly Project 1: Frodder
![Frodder Logo](game-assets/frodder.png)
---- 
# Table of Contents
* Project Brief
* Project Description
* Technologies & Installation
* Process
  - Planning
  - Game
* Final Walkthrough
* Wins & bugs
* Extra Features

## Timeframe:
8 Days
 
## Description
Frodder is a Lord of the Rings-themed grid-based game inspired by the 1981 arcade classic Frogger. The player as Frodo must pass several rows of obstacles and try and reach the objective at the top of the grid which is 'The Prancing Pony' inn featured in the Lord of the Rings. The game is based on the Fellowship of the Ring movie sequence where Frodo, Samwise, Merry and Pippin are being chased by the Nazgûl until they reach the town of Bree to meet Gandalf at the inn.
 
### Deployed version:
https://justinesolano.github.io/sei-project-one/

## Demonstration
![Frodder Gameplay](game-assets/gameplay.gif)

## Controls
- Click the Begin button on the side menu.
- Use the left ( <img src="https://img.icons8.com/ios/50/000000/long-arrow-left.png" alt="left-arrow" width="10" /> ) and right ( <img src="https://img.icons8.com/ios/50/000000/long-arrow-right.png" alt="right-arrow" width="10" /> ) arrow keys to move Frodo left and right, respectively.
- Use the up ( <img src="https://img.icons8.com/ios/50/000000/long-arrow-up.png" alt="up-arrow" width="10" /> ) and down ( <img src="https://img.icons8.com/ios/50/000000/long-arrow-down.png" alt="down-arrow" width="10" /> ) arrow keys to move Frodo up and down, respectively.
- Once game is finished, press Restart then Begin on the side menu.

## Technologies used
- HTML5 with HTML5 audio
- CSS
- JavaScript(ES6)
### Development tools:
- VSCode
- Git & GitHub
- Google Chrome development tools
- Adobe Photoshop 2021 (assets)
- Fontmeme.com

# PROCESS
## PLANNING (day 1)
### Concept
When starting the project, I was very worried because I didn't know where to begin. My understanding of basic JavaScript was very shaky at this point. I decided to do Frogger because the functions seemed very simple and straightforward.

I spent the first day writing pseudo-code and breaking down each facet of the game so I could understand what I needed to do for the project. The priority was setting up the controls for the player to move across the grid. I made sure to dedicate a few days to this before moving onto anything else complex. The second priority was the collision function between the player and the obstacles. My third priority was the obstacle movements across the grid. This would be the MVP.

### Storyboard/Wireframes
![Frodder Wireframe](client/src/assets/wireframe.jpg)

## GAME (day 2, 3, 4, 5, 6, 7)
After planning and getting signed off to start, I started with creating the grid.
```javascript
  const grid = document.querySelector('.grid')
  const length = 8
  const width = 11
  const cellCount = width * length
  const cells = []

  function createGrid(startPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      // cell.innerText = i 
      grid.appendChild(cell)
      cells.push(cell)
    }
    addFrodo(startPosition)
  }
```
Although we had a quick tutorial on grid creation before project week begun, I still did not understand what the basics of this certain function did. I was very confused still about JavaScript and it definitely overwhelmed me during the first few days of the project. I was also trying to experiment with grid widths but anytime I changed it to anything over 11 cells, some rows would have more cells than others. I had to keep the width at 11 and have lesser rows and columns. 

Next, I added the player to the starting position which was the middle of the bottom row. I also had to write the functions to add the player to a new cell and remove them from the old position.
```javascript
  // ADD FRODO TO GRID
  function addFrodo(position) {
    cells[position].classList.add(frodoClass) 
  } 
    
  // REMOVE FRODO
  function removeFrodo(position){
    cells[position].classList.remove(frodoClass)
  }
```

I also added the endpoint to the middle of the top row. 
```javascript
  const tavern = cells[5]
  tavern.classList.add('tavern')
```
This was simple because it did not require any movement, only a win function which triggered when the player reached this cell.

Next, I added classes to certain cells so I could organise them into what each row would be: obstacle or safe zone.
```javascript
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

  let rafts = [23, 26, 29, 32]
  rafts.forEach(index => {
    cells[index].classList.add('raft')
  })
```
There are two rows of black rider obstacles.

I also created functions to add and remove rafts and black riders from each cell. 
```javascript
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
```

I put each in a let variable. I used a set interval for the movement of these elements and set them to 1500 milliseconds. 
```javascript

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
```
This was identical for the `blackRiders` elements.

The main controls of the game and the collision functions were the hardest and most complex part of the project. I placed the main movements within a `startGame()` function so that . Although I knew exactly what I wanted my game to do, the big problem and frustration for me was not knowing how to do it and not even knowing where to start. I received help from one of my teaching assistants because I just could not understand where the game needed to go. After it was shown to me how to achieve the key movements using conditionals, I managed to setup the simple movements for each arrow key. 
Right
``` javascript
      if (key === 39 && currentPosition % width !== width - 1){
        currentPosition++
```
Left
```javascript
      if (key === 37 && currentPosition % width !== 0){
        currentPosition--
```
Up
``` javascript
      if (key === 38 && currentPosition >= width){
        currentPosition -= width
```
Down
``` javascript
      if (key === 40 && currentPosition + width <= width * length - 1){
```

I actually understood the way the specified conditions worked but doing the math to write them did take a bit of time. Once the movements were set up, I needed to work on the collision functions.

I had to create conditionals for each key movement and each obstacle. I used nested conditionals to do this 

### Styling
