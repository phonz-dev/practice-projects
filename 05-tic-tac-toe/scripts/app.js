import { Board } from "./modules/board.js";

const playButton = document.querySelector("#play-btn");
const markButtonsWrapper = document.querySelector("#mark-btns");
const markButtons = Array.from(markButtonsWrapper.children);
const domBoard = document.querySelector(".board");

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

class TicTacToe {
	constructor(board, playerOne, playerTwo) {
		this.board = board;
		this.playerOne = playerOne;
		this.playerTwo = playerTwo;
		this.currentPlayer = this.playerOne;
	}

	switchPlayer() {
		if (this.currentPlayer === this.playerOne) {
			this.currentPlayer = this.playerTwo;
		} else {
			this.currentPlayer = this.playerOne;
		}
	}
}

const playerX = "X";
const playerO = "O";
let currentPlayer = playerX;

const switchPlayer = () => {
	currentPlayer = currentPlayer === playerX ? playerO : playerX;
};

const tiles = document.querySelectorAll("[data-tile]");
const board = new Board();
const tileNumberAndPosition = board.mapIndexToPosition();

tiles.forEach((tile) => {
	tile.addEventListener("click", () => {
		if (tile.textContent) return;
		tile.textContent = currentPlayer;
		const tileNumber = tile.getAttribute("data-tile");
		const tilePositon = tileNumberAndPosition[tileNumber];
		board.placeMark(tilePositon, currentPlayer);
		switchPlayer();
		board.recordCurrentState();
		console.log(board.history);
	});
});
