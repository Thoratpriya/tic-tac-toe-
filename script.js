let board = ['', '', '', '', '', '', '', '', '']; // Represents the Tic Tac Toe board
let currentPlayer = 'X'; // X starts the game
let gameActive = true; // Indicates if the game is still active

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Function to handle player moves
function playerMove(cellIndex) {
  if (gameActive && board[cellIndex] === '') { // Check if cell is empty and game is active
    board[cellIndex] = currentPlayer; // Set current player's symbol (X or O) in the cell
    document.getElementById(`cell-${cellIndex}`).textContent = currentPlayer; // Update UI
    if (checkWin(currentPlayer)) {
      document.getElementById('turn').textContent = `Player ${currentPlayer} wins!`; // Update turn indicator
      gameActive = false; // End the game
    } else if (board.every(cell => cell !== '')) {
      document.getElementById('turn').textContent = "It's a tie!"; // Update turn indicator
      gameActive = false; // End the game
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch turns
      document.getElementById('turn').textContent = `Player ${currentPlayer}'s turn`; // Update turn indicator
    }
  }
}

// Function to check for a win
function checkWin(player) {
  return winningCombinations.some(combination => {
    return combination.every(index => {
      return board[index] === player;
    });
  });
}

// Function to reset the game
function resetGame() {
  board = ['', '', '', '', '', '', '', '', '']; // Clear the board array
  currentPlayer = 'X'; // Reset to X starting
  gameActive = true; // Set game active again
  document.getElementById('turn').textContent = `Player ${currentPlayer}'s turn`; // Reset turn indicator
  Array.from(document.getElementsByClassName('cell')).forEach(cell => cell.textContent = ''); // Clear all cells
}
