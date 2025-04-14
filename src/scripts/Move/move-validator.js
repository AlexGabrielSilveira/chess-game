import { idToCoord }from "./Id-to-coord.js";
import validatePawnMove from "./Pieces/pawn-move.js";

export default function isValidMove(piece, fromId, toId) {
    const from = idToCoord(fromId);
    const to = idToCoord(toId);
    const color = piece.dataset.color;

    switch (piece.dataset.piece) {
        case 'pawn':
            return validatePawnMove(from, to, color);
       
        default:
            return false;
    }

}