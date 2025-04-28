export default function validateBishopMove(from, to) {
    const rowDiff = Math.abs(from.row - to.row);
    const colDiff = Math.abs(from.col - to.col);

    if (rowDiff === colDiff) {
        return true;
    }
}