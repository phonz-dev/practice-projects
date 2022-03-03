export class Board {
	constructor() {
		this.grid = [
			["", "", ""],
			["", "", ""],
			["", "", ""],
		];
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

	placeMark(pos, mark) {
		const [row, col] = pos;
		this.grid[row][col] = mark;
	}
}
