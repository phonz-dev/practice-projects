export class TicTacToeUI {
	constructor(components) {
		this.components = components;
	}

	init() {
		this.#displayMarkOptions();
		this.#startGame();
	}

	displayEndGameModal() {
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

	getTiles() {
		const tiles = this.#findAllComponents(".tile");
		return tiles;
	}

	markTile(tile, mark) {
		tile.textContent = mark;
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
		markBtns.forEach((button) => {
			button.addEventListener("click", () => {
				this.#toggleMarkButtons();
				this.#toggleBoard();
			});
		});
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
