
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
let player = 'X';
let winner = null;

function setup() {
  createCanvas(300, 300)
}

function drawBoard() {
  let w = width / 3;
  let h = height / 3;
  line(w, 0, w, height);
  line(2 * w, 0, 2 * w, height);
  line(0, h, width, h);
  line(0, 2 * h, width, 2 * h);

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let x = i * 100 + 50;
      let y = j * 100 + 50;
      let symbol = board[i][j];
      textSize(64);
      textAlign(CENTER, CENTER);
      text(symbol, x, y);
    }
  }
}
 
function mousePressed() {
  if (! winner) {
    let i = floor(mouseX / (width / 3));
    let j = floor(mouseY / (height / 3));
    if (board[i][j] === '') {
      board[i][j] = player;
      checkWinner();
      if (!winner){
        player = player === 'X' ? 'O' : 'X';
      } 
    }
  }
}

function checkWinner(){
  for (let i = 0; i < 3; i++) {
    if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
      winner = board[i][0];
    }
  }
  for (let j = 0; j < 3; j++) {
    if (board[0][j] !== '' && board[0][j] === board[1][j] && board[0][j] === board[2][j]) {
      winner = board[0][j];
    }
  }
  if (board[0][0] !== '' && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
    winner = board[0][0];
  }
  if (board[0][2] !== '' && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
    winner = board[0][2];
  }
  
  let drawGame = true;
  for (let i = 0; i < 3; i++){
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === ''){
        drawGame = false;
        break;
      }
    }
    if (drawGame && !winner) {
      winner = 'draw';
    }
  }
}

function draw() {
  drawBoard();
  if (winner !== null) {
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(0);
    if (winner === 'draw') {
      text('it is a draw', width/2, height/2);
    } else {
      text(`${winner} wins`, width/2, height/2);
    }
  }
}