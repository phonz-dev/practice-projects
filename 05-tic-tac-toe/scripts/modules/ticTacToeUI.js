export class TicTacToeUI {
	constructor(components) {
		this.components = components;
	}

	init() {
		this.#enableButtons();
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

	getContainer() {
		const container = this.#findComponent(".container");
		return container;
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

	displayEndGameMessage(message) {
		const component = this.#findComponent(".game-over-modal__msg");
		component.textContent = message;
	}

	toggleEndGameModal() {
		const modal = this.#findComponent(".game-over-modal");
		this.#toggleComponentDisplay(modal);
	}

	toggleBGBlur() {
		const container = this.#findComponent(".container");
		container.classList.toggle("blur");
	}

	enableHistoryButtons() {
		const button = this.#findComponent("[data-btn='history']");
		button.addEventListener("click", () => {
			this.toggleEndGameModal();
			this.#toggleHistoryButtons();
			this.toggleBGBlur();
		});
	}

	enablePlayAgainButton() {
		const playBtn = this.#findComponent("[data-btn='play-again']");
		this.#reloadUI(playBtn);
	}

	#enableButtons() {
		this.#animateTicTacToe();
		this.#enablePlayButton();
		this.#enableReset();
		const markBtns = this.#findAllComponents(".btns__mark");
		markBtns.forEach((button) => {
			button.addEventListener("click", () => {
				this.#toggleMarkButtons();
				this.#toggleBoard();
				this.#toggleResetButton();
			});
		});
	}

	#toggleFade(component) {
		component.classList.toggle("fade");
	}

	#enableReset() {
		const resetBtn = this.#findComponent("[data-btn='reset']");
		this.#reloadUI(resetBtn);
	}

	#enablePlayButton() {
		const playBtn = this.#findComponent("[data-btn='play']");
		playBtn.addEventListener("click", () => {
			this.#togglePlayButton();
			this.#toggleMarkButtons();
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

	#toggleHistoryButtons() {
		const buttons = this.#findComponent("[data-btn='history-btns'");
		this.#toggleComponentDisplay(buttons);
	}

	#toggleComponentDisplay(component) {
		component.classList.toggle("hide");
	}

	#animateTicTacToe() {
		const letters = this.#getTicTacToeLetters();
		let char = 0;
		const timer = setInterval(() => {
			const letter = letters[char];
			this.#toggleFade(letter);
			char++;

			if (char === letters.length) {
				clearInterval(timer);
				return;
			}
		}, 50);
	}

	#getTicTacToeLetters() {
		const letters = this.#findAllComponents("span");
		return letters;
	}

	#reloadUI(button) {
		button.addEventListener("click", () => {
			window.location.reload();
		});
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
