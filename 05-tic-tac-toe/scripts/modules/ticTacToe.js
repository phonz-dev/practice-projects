export class TicTacToe {
	constructor(board, UI) {
		this.board = board;
		this.UI = UI;
		this.playerOne = this.board.markOne;
		this.playerTwo = this.board.markTwo;
		this.currentPlayer = this.playerOne;
	}

	run() {
		const tiles = this.UI.getTiles();
		this.UI.playGame();
		this.#play(tiles);
	}

	#play(tiles) {
		tiles.forEach((tile) => this.#processTile(tile));
	}

	#processTile(tile) {
		tile.addEventListener("click", () => {
			this.#processRound(tile);
		});
	}

	#processRound(tile) {
		if (tile.textContent) return;
		this.#processBoard(tile);

		const roundResult = this.board.isGameOver();
		if (roundResult) {
			this.UI.displayWinner(roundResult);
			this.UI.displayEndGameModal();
		} else {
			this.#switchPlayer();
		}
	}

	#processBoard(tile) {
		this.#markTileNode(tile);
		this.#updateBoard(tile);
		this.board.recordCurrentState();
	}

	#markTileNode(tile) {
		tile.textContent = this.currentPlayer;
	}

	#updateBoard(tile) {
		const tileNumberAndPosition = this.board.mapIndexToPosition();
		const tileNumber = tile.getAttribute("data-tile");
		const tilePositon = tileNumberAndPosition[tileNumber];
		this.board.placeMark(tilePositon, this.currentPlayer);
	}

	#switchPlayer() {
		if (this.currentPlayer === this.playerOne) {
			this.currentPlayer = this.playerTwo;
		} else {
			this.currentPlayer = this.playerOne;
		}
	}
}
