import Piece from './piece';
import Square from '../../../src/engine/square';
import Player from '../player';


export default class Rook extends Piece {
    constructor(player) {
        super(player, false);
    }



getAvailableMoves(board) {
    let location = board.findPiece(this)
    let moves = []
    if (this.player === Player.WHITE) {
        // return Square.at(location.row + 1, location.col)
        for (let row = 0; row <= 7; row++) {
            if (row === location.row) {
                continue
            } 
            moves.push(Square.at(row, location.col))
        }
        for (let col = 0; col <= 7; col++) {
            if (col === location.col) {
                continue
            }
            moves.push(Square.at(location.row, col))
        }
    }
    return moves
}
}