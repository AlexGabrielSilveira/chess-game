export default function validatePawnMove(from, to, color, piece) {
    if(piece.classList.contains('first-move')) {
        if (color === 'white') {
            piece.classList.remove('first-move');
            return (to.row === from.row + 2 && to.col === from.col)
        } else {
            piece.classList.remove('first-move');
            return (to.row === from.row - 2 && to.col === from.col)
        }
    }else {
        if (color === 'white') {
            return to.row === from.row + 1 && to.col === from.col;
        } else {
            return to.row === from.row - 1 && to.col === from.col;
        }
    }
    
}