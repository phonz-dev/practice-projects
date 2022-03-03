import { Board } from "./modules/board.js";
import { TicTacToe } from "./modules/ticTacToe.js";

const playButton = document.querySelector("#play-btn");
const markButtonsWrapper = document.querySelector("#mark-btns");
const markButtons = Array.from(markButtonsWrapper.children);
const domBoard = document.querySelector(".board");

const board = new Board();
const ticTacToe = new TicTacToe(board, domBoard, "X", "O");

playButton.addEventListener("click", () => {
	playButton.classList.toggle("hide");
	markButtonsWrapper.classList.toggle("hide");
});

markButtons.forEach((button) => {
	button.addEventListener("click", () => {
		markButtonsWrapper.classList.toggle("hide");
		domBoard.classList.toggle("hide");
	});
});

ticTacToe.run();
