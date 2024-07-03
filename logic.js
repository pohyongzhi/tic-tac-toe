// Game board
const gameBoard = (function gameBoard() {
    // Private properties
    let board = [];

    function init() {
        for (let i = 0; i < 3; i++) {
            board.push(["", "", ""]);
        }
    }

    function reset() {
        board = [];
        this.init();
    }

    function checkWin() {
        // Check for horizontal win
        for (let row = 0; row < 3; row++) {
            if (
                board[row][0] === board[row][1] &&
                board[row][1] === board[row][2] &&
                board[row][2] === board[row][0] &&
                board[row][0] !== ""
            ) {
                return board[row][0];
            }
        }

        // Check for vertical win
        for (let col = 0; col < 3; col++) {
            if (
                board[0][col] === board[1][col] &&
                board[1][col] === board[2][col] &&
                board[2][col] === board[0][col] &&
                board[0][col] !== ""
            ) {
                return board[0][col];
            }
        }

        // Check for side way wins
        if (
            board[0][0] === board[1][1] &&
            board[1][1] === board[2][2] &&
            board[2][2] === board[0][0] &&
            board[0][0] !== ""
        ) {
            return board[0][0];
        }

        if (
            board[0][2] === board[1][1] &&
            board[1][1] === board[2][0] &&
            board[2][0] === board[0][2] &&
            board[0][2] !== ""
        ) {
            return board[0][2];
        }
    }

    function getBoard() {
        return board;
    }

    return {
        init,
        reset,
        checkWin,
        getBoard,
    };
})();

const displayController = (function displayController() {
    function display(board) {
        for (let r = 1; r <= 3; r++) {
            for (let c = 1; c <= 3; c++) {
                // Generate id
                const tempId = "r" + r + "-" + "c" + c;

                // Query the element
                const tempDiv = document.getElementById(tempId);

                // Draw the layout according to the board
                tempDiv.innerHTML = board[r - 1][c - 1];
            }
        }
    }

    return {
        display,
    };
})();

// Initialize game
gameBoard.init();

// Game Logic
let round = 0;

const divArr = document.querySelectorAll(".col");

// Add event listeners for all the div
divArr.forEach((div) => {
    div.addEventListener("click", () => {
        // Get the row and col number
        const rowAndCol = div.id.split("-");
        const rowString = rowAndCol[0].charAt(1);
        const colString = rowAndCol[1].charAt(1);
        const row = parseInt(rowString) - 1;
        const col = parseInt(colString) - 1;

        // Get gameBoard
        const board = gameBoard.getBoard();
        const display = document.querySelector(".display");

        // We will only draw on the board if the position is not empty
        if (board[row][col] === "") {
            if (round % 2 === 1) {
                board[row][col] = "X";
                display.innerHTML = "Player O's Turn";
            } else {
                board[row][col] = "O";
                display.innerHTML = "Player X's Turn";
            }
        }

        displayController.display(gameBoard.getBoard());

        // Check win criteria and change display message
        const player = gameBoard.checkWin();

        if (player === "X") {
            display.innerHTML = "Player X Won!";
        } else if (player === "O") {
            display.innerHTML = "Player O Won!";
        }

        round++;
    });
});

const resetBtn = document.querySelector(".reset");

resetBtn.addEventListener("click", () => {
    gameBoard.reset();
    displayController.display(gameBoard.getBoard());

    const display = document.querySelector(".display");
    display.innerHTML = "Click on one of the squares to start";
});
