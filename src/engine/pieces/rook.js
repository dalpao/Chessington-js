import Piece from './piece';
import Square from '../../../src/engine/square';


export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        // return new Array(0);
    let moves = []
    let location = board.findPiece(this);
    console.log(location);
    moves = [ Square.at(1, 0), Square.at(1, 1), Square.at(1, 3), 
        Square.at(1, 4), Square.at(1, 5), Square.at(1, 6), Square.at(1, 7),
        Square.at(0, 2), Square.at(2, 2), Square.at(3, 2), Square.at(4, 2), 
        Square.at(5, 2), Square.at(6, 2), Square.at(7, 2)];
        return moves
    }
}
