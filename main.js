// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

// Iteration 1
function drawGrid() {
  // TODO: write the code of the function. The grid has 10 x 10 squares and
  // measures 500 x 500 pixels total
  function verticalLines() {
    for (let i = 0; i <= 10; i++) {
      context.beginPath();
      context.moveTo(i * 50, 0);
      context.lineTo(i * 50, 500);
      context.stroke();
    }
    for (let i = 0; i <= 10; i++) {
      context.beginPath();
      context.moveTo(500, i * 50);
      context.lineTo(0, i * 50);
      context.stroke();
    }
  }
  verticalLines();
}

function drawEverything() {
  drawGrid();
  // drawPlayer()
  // drawTreasure()
}

drawEverything();
