export class TicTacToe {
	constructor(board, UI, winnerNode) {
		this.board = board;
		this.UI = UI;
		this.winnerNode = winnerNode;
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
		this.#markTileNode(tile);
		this.#updateBoard(tile);

		// const roundResult = this.board.isGameOver(this.board.grid);
		// if (roundResult) {
		// 	this.#displayWinner(roundResult);
		// }

		this.#switchPlayer();
		this.board.recordCurrentState();
	}

	#displayWinner(winner) {
		this.winnerNode.textContent = winner;
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
