export class Board {
	constructor() {
		this.grid = [
			["", "", ""],
			["", "", ""],
			["", "", ""],
		];
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
		const gridCopy = this.grid.map((row) => row.slice());
		this.history.push(gridCopy);
	}

	placeMark(pos, mark) {
		const [row, col] = pos;
		this.grid[row][col] = mark;
	}
}
