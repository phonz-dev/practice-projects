const playButton = document.querySelector("#play-btn");
const markButtonsWrapper = document.querySelector("#mark-btns");
const markButtons = Array.from(markButtonsWrapper.children);
const domBoard = document.querySelector(".board");

playButton.addEventListener("click", () => {
	playButton.classList.toggle("hide");
	markButtonsWrapper.classList.toggle("hide");
});

markButtons.forEach((button) => {
	button.addEventListener("click", () => {
		markButtonsWrapper.classList.toggle("hide");
		domBoard.classList.toggle("hide");
	});
});
