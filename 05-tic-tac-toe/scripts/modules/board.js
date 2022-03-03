export class Board {
	constructor(markOne, markTwo) {
		this.grid = [
			["", "", ""],
			["", "", ""],
			["", "", ""],
		];
		this.markOne = markOne;
		this.markTwo = markTwo;
		this.history = [];
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

	recordCurrentState() {
		const currBoardState = this.grid.map((row) => row.slice());
		this.history.push(currBoardState);
	}

	placeMark(pos, mark) {
		const [row, col] = pos;
		this.grid[row][col] = mark;
	}

	isGameOver() {
		return (
			this.#isRowComplete(this.grid) ||
			this.#isColumnComplete(this.grid) ||
			this.#isDiagonalComplete(this.grid) ||
			this.#isTie(this.grid)
		);
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

	#isTie(grid) {
		const tie = grid.every((row) => row.every((tile) => !this.#isEmpty(tile)));
		if (tie) return "T";
		return false;
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
		const markOneWon = this.#checkMark(grid, this.markOne);
		const markTwoWon = this.#checkMark(grid, this.markTwo);
		if (markOneWon) return this.markOne;
		if (markTwoWon) return this.markTwo;
		return false;
	}

	#checkMark(grid, mark) {
		const result = grid.some((row) => {
			return row.every((tile) => tile === mark);
		});
		return result;
	}

	static transpose(grid) {
		const newGrid = grid.map((row, i) => row.map((_, j) => grid[j][i]));
		return newGrid;
	}
}
