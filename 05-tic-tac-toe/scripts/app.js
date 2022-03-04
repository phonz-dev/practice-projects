import { Board } from "./modules/board.js";
import { TicTacToe } from "./modules/ticTacToe.js";
import { TicTacToeUI } from "./modules/ticTacToeUI.js";

const uiComponents = Array.from(document.body.querySelectorAll("*"));

const board = new Board("X", "O");
const ticTacToeUI = new TicTacToeUI(uiComponents);
const ticTacToe = new TicTacToe(board, ticTacToeUI);

ticTacToe.run();
