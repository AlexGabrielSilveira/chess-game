export default function validatePawnMove(from, to, color) {
    if (color === 'white') {
        return to.row === from.row + 1 && to.col === from.col;
    } else {
        return to.row === from.row - 1 && to.col === from.col;
    }
}