import { idToCoord }from "./Id-to-coord.js";
import validateBishopMove from "./Pieces/bishop-move.js";
import validateKnightMove from "./Pieces/knight-move.js";
import validatePawnMove from "./Pieces/pawn-move.js";
import validateQueenMove from "./Pieces/queen-move.js";
import validateRookMove from "./Pieces/rook-move.js";

export default function isValidMove(piece, fromId, toId) {
    const from = idToCoord(fromId);
    const to = idToCoord(toId);
    const color = piece.dataset.color;
    
   
    switch (piece.dataset.piece) {
        case 'pawn':
            return validatePawnMove(from, to, color, piece);
        case 'knight':
            return validateKnightMove(from, to, color, piece);
        case 'bishop':
            return validateBishopMove(from, to);
        case 'rook':
            return validateRookMove(from, to);
        case 'queen':
            return validateQueenMove(from, to);
        default:
            return false;
        }

}