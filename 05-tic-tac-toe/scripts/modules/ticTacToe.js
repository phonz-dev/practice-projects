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
		this.UI.init();
		this.#startGame(tiles);
	}

	#startGame(tiles) {
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
			const msg = this.#getEndGameMessage(roundResult);
			this.UI.displayEndGameMessage(msg);
			this.UI.displayEndGameModal();
		} else {
			this.#switchPlayer();
		}
	}

	#getEndGameMessage(result) {
		const grid = this.board.grid;
		if (this.board.isTie(grid)) {
			return this.UI.tieMessage();
		} else {
			return this.UI.winnerMessage(result);
		}
	}

	#processBoard(tile) {
		this.UI.markTile(tile, this.currentPlayer);
		this.#updateBoard(tile);
		this.board.recordCurrentState();
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
