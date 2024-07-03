// Game board
const gameBoard = (function gameBoard() {
    // Private properties
    let board = [];

    function init() {
        for (let i = 0; i < 3; i++) {
            board.push(["x", "x", "x"]);
        }
    }

    function reset() {}

    function checkWin() {
        // Check for horizontal win
        for (let row = 0; row < 3; row++) {
            if (
                board[row][0] === board[row][1] &&
                board[row][1] === board[row][2] &&
                board[row][2] === board[row][0]
            ) {
                return board[row][0];
            }
        }

        // Check for vertical win
        for (let col = 0; col < 3; col++) {
            if (
                board[0][col] === board[1][col] &&
                board[1][col] === board[2][col] &&
                board[2][col] === board[0][col]
            ) {
                return board[0][col];
            }
        }

        // Check for side way wins
        if (
            (board[0][0] === board[1][1] &&
                board[1][1] === board[2][2] &&
                board[2][2] === board[0][0]) ||
            (board[0][2] === board[1][1] &&
                board[1][1] === board[2][0] &&
                board[2][0] === board[0][2])
        ) {
            return board[0][0];
        }
    }

    function getBoard() {
        return board;
    }

    return {
        init,
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

// Game logic
// let round = 0;

// Add event listeners for all the div
// divArr.forEach((div) => {
//     div.addEventListener("click", () => {
//         if (round % 2 === 0) {
//             div.innerHTML = "X";
//         } else {
//             div.innerHTML = "O";
//         }

//         round++;
//     });
// });

gameBoard.init();
displayController.display(gameBoard.getBoard());
