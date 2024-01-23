import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) { // check if it has moved
        let moves = []
        let location = board.findPiece(this)
        if (this.player === Player.WHITE) {
            // return Square.at(location.row + 1, location.col) // fails the test
            if (location.row > 1) {
                moves = [Square.at(location.row + 1, location.col)];
                return moves
            } else if (location.row === 1) {
                moves = [Square.at(location.row + 1, location.col), Square.at(location.row + 2, location.col)]
                return moves
            }
        } else {
            // return Square.at(location.row - 1, location.col)
            if (location.row < 6) {
                moves = [Square.at(location.row - 1, location.col)]
                return moves
            } else if (location.row === 6) {
                moves = [Square.at(location.row - 1, location.col), Square.at(location.row - 2, location.col)]
                return moves
            }
        }
    }
}
