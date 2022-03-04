import { Board } from "./modules/board.js";
import { TicTacToe } from "./modules/ticTacToe.js";
import { TicTacToeUI } from "./modules/ticTacToeUI.js";

const buttons = Array.from(document.querySelectorAll("button"));
const domBoard = document.querySelector(".board");

const board = new Board("X", "O");
const ticTacToeUI = new TicTacToeUI(domBoard, buttons);
const ticTacToe = new TicTacToe(board, ticTacToeUI);

ticTacToe.run();
