export class Board {
	constructor(playerOne, playerTwo) {
		this.grid = [
			["", "", ""],
			["", "", ""],
			["", "", ""],
		];
		this.playerOne = playerOne;
		this.playerTwo = playerTwo;
		this.currentPlayer = this.playerOne;
		this.boardStates = [];
		this.boardStatesPointer = -1;
	}

	placeMark(pos, mark) {
		const [row, col] = pos;
		this.grid[row][col] = mark;
	}

	recordCurrentState() {
		const currBoardState = this.grid.map((row) => row.slice());
		this.boardStates.push(currBoardState);
		this.boardStatesPointer++;
	}

	switchPlayer() {
		if (this.currentPlayer === this.playerOne) {
			this.currentPlayer = this.playerTwo;
		} else {
			this.currentPlayer = this.playerOne;
		}
	}

	getPrevState() {
		if (this.boardStatesPointer > 0) {
			this.boardStatesPointer--;
			return this.boardStates[this.boardStatesPointer];
		}
	}

	getNextState() {
		if (this.boardStatesPointer < this.boardStates.length - 1) {
			this.boardStatesPointer++;
			return this.boardStates[this.boardStatesPointer];
		}
	}

	getPositions() {
		const positions = this.grid.map((row, i) => row.map((_, j) => [i, j]));
		return positions.flat();
	}

	mapIndexToPosition() {
		const map = {};
		const boardPositions = this.getPositions();
		boardPositions.forEach((pos, i) => (map[i] = pos));
		return map;
	}

	isGameOver() {
		return (
			this.#isRowComplete(this.grid) ||
			this.#isColumnComplete(this.grid) ||
			this.#isDiagonalComplete(this.grid) ||
			this.isTie(this.grid)
		);
	}

	isTie(grid) {
		const tie = grid.every((row) => row.every((tile) => !this.#isEmpty(tile)));
		if (tie) return "T";
		return false;
	}

	#isDiagonalComplete(grid) {
		const diagonals = this.#getDiagonals(grid);
		return this.#isRowComplete(diagonals);
	}

	#isColumnComplete(grid) {
		const transposedGrid = Board.transpose(grid);
		return this.#isRowComplete(transposedGrid);
	}

	#isRowComplete(rows) {
		const result = this.#checkWinner(rows);
		return result;
	}

	#isEmpty(tile) {
		return tile === "";
	}

	#getDiagonals(grid) {
		const rowLength = grid[0].length;
		let j = rowLength - 1;
		let [downward, upward] = [[], []];

		for (let i = 0; i < rowLength; i++) {
			downward.push(grid[i][i]);
			upward.push(grid[j][i]);
			j--;
		}

		return [downward, upward];
	}

	#checkWinner(grid) {
		const playerOneWon = this.#checkMark(grid, this.playerOne);
		const playerTwoWon = this.#checkMark(grid, this.playerTwo);
		if (playerOneWon) return this.playerOne;
		if (playerTwoWon) return this.playerTwo;
		return false;
	}

	#checkMark(grid, mark) {
		const result = grid.some((row) => {
			return row.every((tile) => tile === mark);
		});
		return result;
	}

	#reset() {
		this.clearGrid();
		this.clearHistory();
	}

	#clearGrid() {
		this.grid.forEach((row) => row.forEach((_, i) => (row[i] = "")));
	}

	#clearHistory() {
		this.history = [];
	}

	static transpose(grid) {
		const newGrid = grid.map((row, i) => row.map((_, j) => grid[j][i]));
		return newGrid;
	}
}
