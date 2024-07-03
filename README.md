# Tic-Tac-Toe Game

This project is a simple Tic-Tac-Toe game implemented using JavaScript with the IIFE (Immediately Invoked Function Expression) module pattern. The game includes a game board and a display controller for managing the game's state and user interface.

## Features

-   **Game Board Initialization**: Sets up the game board and initializes it.
-   **Reset Functionality**: Resets the game board to its initial state.
-   **Win Checking**: Checks for win conditions after each move.
-   **Display Controller**: Updates the UI based on the game board's state.
-   **Interactive UI**: Users can click on the game board to make moves.

## Modules

### Game Board Module

The `gameBoard` module handles the game logic, including initialization, resetting, and checking for win conditions.

**Methods**:

-   `init()`: Initializes the game board with empty values.
-   `reset()`: Resets the game board and reinitializes it.
-   `checkWin()`: Checks the board for any win conditions and returns the winner if found.
-   `getBoard()`: Returns the current state of the game board.

### Display Controller Module

The `displayController` module handles the display logic, updating the game board in the UI based on the game state.

**Methods**:

-   `display(board)`: Updates the UI with the current state of the game board.

## Getting Started

1. **Initialize the Game**:

    - The game is initialized by calling `gameBoard.init()`.

2. **Making Moves**:

    - Players take turns clicking on the game board to place their marks (X or O). The game alternates between Player X and Player O.

3. **Checking for Wins**:

    - After each move, the game checks for a win condition. If a player wins, a message is displayed.

4. **Resetting the Game**:
    - The game can be reset by clicking the reset button, which calls `gameBoard.reset()` and updates the display.

## How to Play

1. Click on any square on the game board to make a move.
2. Players take turns placing their marks (X for Player X, O for Player O).
3. The game checks for a winner after each move.
4. If a player wins, a message is displayed indicating the winner.
5. Click the reset button to start a new game.

## Event Listeners

-   **Move Click Event**:
    -   Listens for clicks on the game board squares and updates the board and display accordingly.
-   **Reset Button Event**:
    -   Listens for clicks on the reset button to reset the game.

## License

This project is licensed under the MIT License.

## Acknowledgments

-   Thanks to the creators of JavaScript and the IIFE module pattern for enabling this project.

Enjoy playing Tic-Tac-Toe!
