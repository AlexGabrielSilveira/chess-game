const board = document.getElementById('board');
let id = 0;

function Identifiers() {
    let numbersIndex = [1,9,17,25,33,41,49,57]
    let lettersIndex = [57,58,59,60,61,62,63,64]
    let letters = ['a','b','c','d','e','f','g','h']
    
    for(let i = 0; i < numbersIndex.length; i++) {
        document.getElementById(numbersIndex[i]).innerHTML += `<span class="fixed w-24 h-24 flex justify-start items-start p-1 z-50">${i+1}</span>`
        document.getElementById(lettersIndex[i]).innerHTML += `<span class="fixed w-24 h-24 flex justify-end items-end p-1 z-50">${letters[i]}</span>`
    }
}
function Board() {
    for(let row = 0; row < 8; row++) {
        for(let column = 0; column < 8; column++) {
            const square = document.createElement('div');
            square.className = `min-w-24 min-h-24 w-24 h-24 ${
                (row + column) % 2 === 0 ? "bg-gray-300" : "bg-green-800"
            }`
            id++;
            square.id = id;
            board.appendChild(square)
        }
    }    
    Identifiers();
}
function StartPosition() {
    let whitePosition = {
        rook: [1,8],
        knight: [2,7],
        bishop: [3,6],
        king: [4],
        queen: [5],
        pawn: [ 9,10,11,12,13,14,15,16 ]
    }
    let blackPosition = {
        rook: [57,64],
        knight: [58,63],
        bishop: [59,62],
        king: [60],
        queen: [61],
        pawn: [ 49,50,51,52,53,54,55,56 ]
    }

    function Pawns() {
        for(let i = 0; i < whitePosition.pawn.length; i++) {
            document.getElementById(whitePosition.pawn[i]).innerHTML += `<img src="../Images/chess/white/white_pawn.png" data-piece="pawn" data-color="white"></img>`;
            document.getElementById(blackPosition.pawn[i]).innerHTML += `<img src="../Images/chess/black/black_pawn.png" data-piece="pawn" data-color="black"></img>`;
        }
    }
    function QueensAndKings() {
        for(let i = 0; i < blackPosition.queen.length; i++) {
            //queens
            document.getElementById(blackPosition.queen[i]).innerHTML += `<img src="../Images/chess/black/black_queen.png" data-piece="queen" data-color="black"></img>`;
            document.getElementById(whitePosition.queen[i]).innerHTML += `<img src="../Images/chess/white/white_queen.png" data-piece="queen" data-color="white"></img>`;

            //kings
            document.getElementById(blackPosition.king[i]).innerHTML += `<img src="../Images/chess/black/black_king.png" data-piece="king" data-color="black"></img>`;
            document.getElementById(whitePosition.king[i]).innerHTML += `<img src="../Images/chess/white/white_king.png" data-piece="king" data-color="white"></img>`;
        }
    }
    function BishopsKnightsRooks() {
        for(let i = 0; i < 2; i++) {

            //bishops
            document.getElementById(blackPosition.bishop[i]).innerHTML += `<img src="../Images/chess/black/black_bishop.png" data-piece="bishop" data-color="black"></img>`;
            document.getElementById(whitePosition.bishop[i]).innerHTML += `<img src="../Images/chess/white/white_bishop.png" data-piece="bishop" data-color="white"></img>`;
            
            //knights
            document.getElementById(blackPosition.knight[i]).innerHTML += `<img src="../Images/chess/black/black_knight.png" data-piece="knight" data-color="black"></img>`;
            document.getElementById(whitePosition.knight[i]).innerHTML += `<img src="../Images/chess/white/white_knight.png" data-piece="knight" data-color="white"></img>`;

            //turret
            document.getElementById(blackPosition.rook[i]).innerHTML += `<img src="../Images/chess/black/black_rook.png" data-piece="rook" data-color="black"></img>`;
            document.getElementById(whitePosition.rook[i]).innerHTML += `<img src="../Images/chess/white/white_rook.png" data-piece="rook" data-color="white"></img>`;
            
        }
      
    }

    BishopsKnightsRooks();
    QueensAndKings();
    Pawns();
}
Board();
StartPosition();
