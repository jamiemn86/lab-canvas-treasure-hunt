// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

// Iteration 1
function drawGrid() {
  // TODO: write the code of the function. The grid has 10 x 10 squares and
  // measures 500 x 500 pixels total
  function tenLines() {
    // 10 vertical  lines
    for (let i = 0; i <= 10; i++) {
      context.beginPath();
      context.moveTo(i * 50, 0);
      context.lineTo(i * 50, 500);
      context.stroke();
    }
    // 10 horizontal lines
    for (let i = 0; i <= 10; i++) {
      context.beginPath();
      context.moveTo(500, i * 50);
      context.lineTo(0, i * 50);
      context.stroke();
    }
  }
  tenLines();
}

// Iteration 2
class Character {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
  moveUp() {
    this.row -= 1;
  }
  moveRight() {
    this.col += 1;
  }
  moveDown() {
    this.row += 1;
  }
  moveLeft() {
    this.col -= 1;
  }
}

const player = new Character(0, 0); // (0,0) = Initial position

// Testing iteration 2
player.moveDown(); // Increase by 1 the value of player.row
player.moveDown(); // Increase by 1 the value of player.row
player.moveRight(); // Increase by 1 the value of player.col

console.log(player.col, player.row); // => 1,2

// Iteration 3
function drawPlayer() {
  const avatar = new Image();
  avatar.src = '/images/character-down.png';
  avatar.addEventListener('load', () => {
    context.drawImage(avatar, player.col * 50, player.row * 50);
  });
}

// Testing iteration 3
player.moveDown(); // Increase by 1 the value of player.row
player.moveDown(); // Increase by 1 the value of player.row
player.moveRight(); // Increase by 1 the value of player.col
drawPlayer();

function drawEverything() {
  drawGrid();
  // drawPlayer()
  // drawTreasure()
}

drawEverything();
