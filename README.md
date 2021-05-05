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

I spent the first day writing pseudo-code and breaking down each facet of the game so I could understand what I needed to do for the project. The priority was setting up the controls for the player to move across the grid. I made sure to dedicate a few days to this before moving onto anything else complex. The second priority was the collision function between the player and the obstacles. This would be the MVP.

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

The main controls of the game and the collision functions were the hardest and most complex part of the project. Although I knew exactly what I wanted my game to do, the big problem and frustration for me was not knowing how to do it and not even knowing where to start. I received extensive help from one of my teaching assistants because I just could not understand where the game needed to go. After it was shown to me how to achieve the key movements using conditionals, 

### Styling
