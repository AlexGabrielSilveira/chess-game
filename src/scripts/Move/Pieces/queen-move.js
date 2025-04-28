export default function validateQueenMove(from, to) {
    const rowDiff = Math.abs(from.row - to.row);
    const colDiff = Math.abs(from.col - to.col);

    if (rowDiff === colDiff || rowDiff === 0 || colDiff === 0) {
        return true;
    }

    return false;
}