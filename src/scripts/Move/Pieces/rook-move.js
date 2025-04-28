export default function validateRookMove(from, to) {
    const rowDiff = Math.abs(from.row - to.row);
    const colDiff = Math.abs(from.col - to.col);

    if (rowDiff === 0 || colDiff === 0) {
        return true;
    }

    return false;
}