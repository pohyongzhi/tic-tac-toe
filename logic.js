// Game board
function gameBoard() {
    return [
        ["x", "o", "x"],
        ["o", "x", "o"],
        ["x", "o", "o"],
    ];
}
function winBoard1() {
    return [
        ["o", "o", "x"],
        ["o", "o", "o"],
        ["x", "o", "o"],
    ];
}

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

const board = new winBoard1();
