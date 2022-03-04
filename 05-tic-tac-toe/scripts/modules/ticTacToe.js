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

	parseBoard(board) {
		const uiTiles = this.UI.getTiles();
		const boardTiles = board.flat();

		uiTiles.forEach((tile, i) => (tile.textContent = boardTiles[i]));
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
		this.#checkWinner();
	}

	#checkWinner() {
		const roundResult = this.board.isGameOver();
		if (roundResult) {
			const msg = this.#getEndGameMessage(roundResult);
			this.#displayEndGameModal(msg);
			this.#enableHistoryScanning();
		} else {
			this.#switchPlayer();
		}
	}

	#displayEndGameModal(msg) {
		this.UI.displayEndGameMessage(msg);
		this.UI.toggleEndGameModal();
		this.UI.enableHistoryButtons();
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

	#enableHistoryScanning() {
		const history = this.board.history;
		let pointer = history.length - 1;
		const prevBtn = this.UI.getPreviousButton();
		const nextBtn = this.UI.getNextButton();

		prevBtn.addEventListener("click", () => {
			if (pointer > 0) {
				pointer -= 1;
				this.parseBoard(history[pointer]);
			}
		});

		nextBtn.addEventListener("click", () => {
			if (pointer < history.length - 1) {
				pointer += 1;
				this.parseBoard(history[pointer]);
			}
		});
	}
}
