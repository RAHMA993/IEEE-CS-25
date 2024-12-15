function solveQueens(board) {
    let count = 0;
    
    let cols = new Array(8).fill(false);
    let diag1 = new Array(15).fill(false);
    let diag2 = new Array(15).fill(false);

    function placeQueens(row) {
        if (row === 8) {
            count++;
            return;
        }

        for (let col = 0; col < 8; col++) {
            if (board[row][col] === '.' && !cols[col] && !diag1[row - col + 7] && !diag2[row + col]) {
                cols[col] = true;
                diag1[row - col + 7] = true;
                diag2[row + col] = true;
                
                placeQueens(row + 1);
                
                cols[col] = false;
                diag1[row - col + 7] = false;
                diag2[row + col] = false;
            }
        }
    }

    placeQueens(0);
    
    return count;
}

//Example:


let board = [
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '*', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '*', '*', '.'],
    ['.', '.', '.', '*', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.']
];

console.log(solveQueens(board));
