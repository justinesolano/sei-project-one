// step one: get the grid div from the dom in order to append the new divs we create to it
// step two: define the width & cell count in variables, easy to change later on
// step 3: for loop to create a div and put index as innerText so we can see it in log of each cell
// step 4: need to make these children of the grid div using appendChild method. Can see these in the elements tab in dev tools
// step 5: need to store all cells somewhere so we can use them later, as we created in JS we dont have a node list like before, empty array and push them in. Log array after loop

// step 6: define start position of cat using variable & current position as a let

// step 7: define function to add cat to the grid at the starting position, passing in as argument so function is reusable. Pass in at createGrid too

// step 8: define catClass as a variable too, easy to change later on

// step 9: register the key events, add listener to the keys on key up & log event.keyCode in console to see the number
// step 9: use if statement & log direction for each one dependant on which key is pressed
// step 10: redefine cats position based on which key is chosen, add logic and console log catCurrentPosition afterwards.
// step 11: actually add and remove the cat, we have a function to add but need one to remove
// step 12: 1st we need to remove the cat from where ever it is, then check the keyCode and redefine the position, then add at the new position
// step 13: stop cat moving through the walls:
// what is the condition we know is true when character is on the top row
// we know if we minus width here then her index will be below zero
// if cats position is less than the width then she cant move up. width is 10, as long as her position is greater than or equal to width she can move up
// LEFT next: if catPosition % width has no remainder, cat is on the left edge. 10/10 no remainder etc. if there is a remainder she can keep going left 
// RIGHT next: cat position % width will have a remainder the whole time moving right furthest right remainder is 9 always, 9/10 leaves 9, 19/10 leaves 9 etc etc
// so if !catPosition % width === width - 1 <--- reusable, move right
// DOWN next: down adds width to move, check if position + width is less than 99 only move down if true. width * width - 1 is 99
function init() {
    // * Variables
    const grid = document.querySelector('.grid') // get the grid element
    const width = 10 // define the width
    const cellCount = width * width // define the number of cells on the grid
    const cells = [] // empty array to store our divs that we create
    const catClass = 'cat' // define the class of the character
    const catStartPosition = 0 // starting position of the cat (refers to an index)
    let catCurrentPosition = 0 // use let to track where the cat currently is (refers to an index)
    // * Make a grid
    function createGrid(catStartPosition) {
      for (let i = 0; i < cellCount; i++) { // for loop to run for every cell, in this case we want 100 cells
        const cell = document.createElement('div') // create the div
        cell.innerText = i // inner text of the div to be its index
        grid.appendChild(cell) // make the cell a child of the grid element we grabbed above
        cells.push(cell) // add the newly created div into our empty array
      }
      addCat(catStartPosition) // call the function to add the cat at its starting position
    }
    // * Add Cat to grid
    function addCat(position) { // takes argument so function is reusable
      console.log('POSITION BEING PASSED IN --->', position)
      console.log('CELL WE ARE PICKING USING THE POSITION INDEX BEING PASSED IN --->', cells[position])
      cells[position].classList.add(catClass) // use position as index to pick the corresponding div from the array of cells and add the class of cat
    }
    // * Remove Cat from the grid
    function removeCat(position) {
      cells[position].classList.remove(catClass)
    }
    // * Move Cat
    function handleKeyUp(event) {
      const key = event.keyCode // store the event.keyCode in a variable to save us repeatedly typing it out
      console.log('POSITION BEFORE REDEFINING --->', catCurrentPosition)
      removeCat(catCurrentPosition) // remove the cat from its current position
      if (key === 39 && catCurrentPosition % width !== width - 1) { // if the right arrow is pressed and the cat is not on the right edge
        catCurrentPosition++ // redefine cat position index to be previous position plus 1
      } else if (key === 37 && catCurrentPosition % width !== 0) { // if the left arrow is pressed and the cat is not on the left edge
        catCurrentPosition-- // redefine cat position index to be previous position minus 1
      } else if (key === 38 && catCurrentPosition >= width) { // if the up arrow is pressed and the cat is not on the top row
        catCurrentPosition -= width // redefine cat position index to be previous position minus width
      } else if (key === 40 && catCurrentPosition + width <= width * width - 1) { // if the down arrow is pressed and the cat is not on the bottom row
        catCurrentPosition += width // redefine cat position index to be previous position plus width
      } else {
        console.log('INVALID KEY') // any other key, log invalid key
      }
      console.log('POSITION AFTER REDEFINING --->', catCurrentPosition)
      addCat(catCurrentPosition) // add cat to the new position that was defined in the if statement above
    }
    // * Event listeners
    document.addEventListener('keyup', handleKeyUp) // listening for key press
    createGrid(catStartPosition) // pass function the starting position of the cat
  }
  window.addEventListener('DOMContentLoaded', init)