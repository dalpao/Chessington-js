import Player from '../player';
import Square from '../square';
import Piece from './piece';
import Rook from './rook';
import Board from '../../../src/engine/board'


export default class Pawn extends Piece {
    constructor(player) {
        super(player, false);
    }


    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let moves = []
        if (this.player === Player.WHITE) {

            if (location.row === 7) { //no actions possible if the pawn is at the end of the board
                return moves
            }

            if (board.getPiece(Square.at(location.row + 1, location.col + 1))
                && (board.getPiece(Square.at(location.row + 1, location.col + 1)).player === Player.BLACK)
                && (board.getPiece(Square.at(location.row + 1, location.col + 1)).isKing === false)) {
                moves.push(Square.at(location.row + 1, location.col + 1))
            }
            if (board.getPiece(Square.at(location.row + 1, location.col - 1))
                && (board.getPiece(Square.at(location.row + 1, location.col - 1)).player === Player.BLACK)
                && (board.getPiece(Square.at(location.row + 1, location.col - 1)).isKing === false)) {
                moves.push(Square.at(location.row + 1, location.col - 1))
            }


            // return Square.at(location.row + 1, location.col)
            if (location.row === 1) { //the pawn is at the initial position
                if (board.getPiece(Square.at(location.row + 1, location.col))) { //something is at position row 2, same col
                    return moves //pawn can't move
                } else if (board.getPiece(Square.at(location.row + 2, location.col))) { //something is at position row 3, same col
                    moves.push(Square.at(location.row + 1, location.col)) //pawn can move to row 2 
                } else { // nothing is obstructing the pawn
                    moves.push(Square.at(location.row + 2, location.col), Square.at(location.row + 1, location.col)) // pawn can move to 2 positions
                }
            } else { // pawn is anywhere but the initial position, can only move 1 step ahead
                if (board.getPiece(Square.at(location.row + 1, location.col))) { // there is an obstruction
                    return moves
                } else {
                    moves.push(Square.at(location.row + 1, location.col))
                }
            }

        } else { //black pawn
            if (location.row === 0) {
                return moves
            }

            if (board.getPiece(Square.at(location.row - 1, location.col + 1))
                && (board.getPiece(Square.at(location.row - 1, location.col + 1)).player === Player.WHITE)
                && (board.getPiece(Square.at(location.row - 1, location.col + 1)).isKing === false)) {
                moves.push(Square.at(location.row - 1, location.col + 1))
            }
            if (board.getPiece(Square.at(location.row - 1, location.col - 1))
                && (board.getPiece(Square.at(location.row - 1, location.col - 1)).player === Player.WHITE)
                && (board.getPiece(Square.at(location.row - 1, location.col - 1)).isKing === false)) {
                moves.push(Square.at(location.row - 1, location.col - 1))
            }


            if (location.row === 6) {
                if (board.getPiece(Square.at(location.row - 1, location.col))) {
                    return moves
                } else if (board.getPiece(Square.at(location.row - 2, location.col))) {
                    moves.push(Square.at(location.row - 1, location.col))
                } else {
                    moves.push(Square.at(location.row - 2, location.col), Square.at(location.row - 1, location.col))
                }
            } else {
                if (board.getPiece(Square.at(location.row - 1, location.col))) {
                    return moves
                } else {
                    moves.push(Square.at(location.row - 1, location.col))
                }
            }

        }
        return moves
    }
}




