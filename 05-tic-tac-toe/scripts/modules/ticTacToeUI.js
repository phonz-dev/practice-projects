export class TicTacToeUI {
	constructor(components) {
		this.components = components;
		this.userPick = null;
	}

	playGame() {
		const playBtn = this.findComponent("[data-btn='play']");
		const markBtns = this.findAllComponents(".btns__mark");

		playBtn.addEventListener("click", () => {
			this.togglePlayButton();
			this.toggleMarkButtons();
		});

		markBtns.forEach((button) => {
			button.addEventListener("click", () => {
				this.toggleMarkButtons();
				this.toggleBoard();
			});
		});
	}

	getTiles() {
		const tiles = this.findAllComponents(".tile");
		return tiles;
	}

	toggleBoard() {
		const board = this.findComponent(".board");
		this.toggleComponentDisplay(board);
	}

	togglePlayButton() {
		const playBtn = this.findComponent("[data-btn='play']");
		this.toggleComponentDisplay(playBtn);
	}

	toggleMarkButtons() {
		const markBtnsWrapper = this.findComponent("[data-btn='wrapper']");
		this.toggleComponentDisplay(markBtnsWrapper);
	}

	toggleComponentDisplay(component) {
		component.classList.toggle("hide");
	}

	findComponent(selector) {
		const component = this.components.find((node) => node.matches(selector));
		return component;
	}

	findAllComponents(selector) {
		const components = this.components.filter((node) => node.matches(selector));
		return components;
	}
}
