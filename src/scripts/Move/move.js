import isValidMove from "./move-validator.js";

let selectedPiece;
let selectedSquare;

document.querySelectorAll('#board div').forEach(square => {
    square.addEventListener('click', () => {
        const piece = square.querySelector('img')

        if(selectedPiece == null && piece) {
            selectedPiece = piece;
            selectedSquare = square;
            selectedPiece.classList.add('bg-yellow-300');
            
        }else if( selectedPiece && square !== selectedSquare) {
            const fromId = parseInt(selectedSquare.id)
            const toId = parseInt(square.id)

            if(isValidMove(selectedPiece, fromId, toId)) {
                square.innerHTML = '';
                square.appendChild(selectedPiece);
            }

            selectedPiece.classList.remove('bg-yellow-300');
            selectedPiece = null;
            selectedSquare = null;

        }else if (square === selectedSquare) {
            
            selectedPiece.classList.remove('bg-yellow-300');
            selectedPiece = null;
            selectedSquare = null;
        }
    }) 
})