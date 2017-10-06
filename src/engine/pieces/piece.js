// import King from "./king";
// import Player from "../player";
// import Board from "../board";
// import Square from "../square";


export default class Piece {
    constructor(player, King) {
        this.player = player;
        this.isKing = King;
    }

    getAvailableMoves(board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }
}