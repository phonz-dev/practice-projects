export class TicTacToeUI {
	constructor(board, buttons) {
		this.board = board;
		this.buttons = buttons;
	}

	playGame() {
		const playBtn = this.findComponent(this.buttons, "[data-btn='play']");
		const xBtn = this.findComponent(this.buttons, "[data-btn='x']");
		const markBtns = this.getParent(xBtn);

		playBtn.addEventListener("click", () => {
			this.togglePlayButton();
			this.toggleMarkButtons();
		});

		Array.from(markBtns.children).forEach((button) => {
			button.addEventListener("click", () => {
				this.toggleMarkButtons();
				this.toggleBoard();
			});
		});
	}

	getTiles() {
		const tiles = Array.from(this.board.children);
		return tiles;
	}

	toggleBoard() {
		this.toggleComponentDisplay(this.board);
	}

	togglePlayButton() {
		const playBtn = this.findComponent(this.buttons, "[data-btn='play']");
		this.toggleComponentDisplay(playBtn);
	}

	toggleMarkButtons() {
		const xBtn = this.findComponent(this.buttons, "[data-btn='x']");
		const btnsContainer = this.getParent(xBtn);
		this.toggleComponentDisplay(btnsContainer);
	}

	toggleComponentDisplay(component) {
		component.classList.toggle("hide");
	}

	getParent(component) {
		return component.parentElement;
	}

	findComponent(container, selector) {
		const component = container.find((node) => node.matches(selector));
		return component;
	}
}
