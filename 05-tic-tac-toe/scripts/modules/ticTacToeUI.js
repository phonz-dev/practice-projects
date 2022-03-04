export class TicTacToeUI {
	constructor(components) {
		this.components = components;
	}

	init() {
		this.#displayMarkOptions();
		this.#startGame();
	}

	toggleEndGameModal() {
		const modal = this.#findComponent(".game-over-modal");
		this.#toggleComponentDisplay(modal);
	}

	displayEndGameMessage(message) {
		const component = this.#findComponent(".game-over-modal__msg");
		component.textContent = message;
	}

	tieMessage() {
		return "Tie Game!";
	}

	winnerMessage(winner) {
		return `${winner} has won!`;
	}

	markTile(tile, mark) {
		tile.textContent = mark;
	}

	getTiles() {
		const tiles = this.#findAllComponents(".tile");
		return tiles;
	}

	getPreviousButton() {
		return this.#findComponent("[data-btn='prev']");
	}

	getNextButton() {
		return this.#findComponent("[data-btn='next']");
	}

	enableReset() {
		const resetBtn = this.#findComponent("[data-btn='reset']");
		resetBtn.addEventListener("click", () => {
			window.location.reload();
		});
	}

	resetTiles() {
		const tiles = this.getTiles();
		tiles.forEach((tile) => (tile.textContent = ""));
	}

	#displayMarkOptions() {
		const playBtn = this.#findComponent("[data-btn='play']");
		playBtn.addEventListener("click", () => {
			this.#togglePlayButton();
			this.#toggleMarkButtons();
		});
	}

	#startGame() {
		const markBtns = this.#findAllComponents(".btns__mark");
		this.enableReset();
		markBtns.forEach((button) => {
			button.addEventListener("click", () => {
				this.#toggleMarkButtons();
				this.#toggleBoard();
				this.#toggleResetButton();
			});
		});
	}

	#toggleResetButton() {
		const button = this.#findComponent("[data-btn='reset']");
		this.#toggleComponentDisplay(button);
	}

	#toggleBoard() {
		const board = this.#findComponent(".board");
		this.#toggleComponentDisplay(board);
	}

	#togglePlayButton() {
		const playBtn = this.#findComponent("[data-btn='play']");
		this.#toggleComponentDisplay(playBtn);
	}

	#toggleMarkButtons() {
		const markBtnsWrapper = this.#findComponent("[data-btn='wrapper']");
		this.#toggleComponentDisplay(markBtnsWrapper);
	}

	enableHistoryButtons() {
		const button = this.#findComponent("[data-btn='history']");
		button.addEventListener("click", () => {
			this.toggleEndGameModal();
			this.#toggleHistoryButtons();
		});
	}

	#toggleHistoryButtons() {
		const buttons = this.#findComponent("[data-btn='history-btns'");
		this.#toggleComponentDisplay(buttons);
	}

	#toggleComponentDisplay(component) {
		component.classList.toggle("hide");
	}

	#findComponent(selector) {
		const component = this.components.find((node) => node.matches(selector));
		return component;
	}

	#findAllComponents(selector) {
		const components = this.components.filter((node) => node.matches(selector));
		return components;
	}
}
