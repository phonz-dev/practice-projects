const playButton = document.querySelector("#play-btn");
const markButtons = document.querySelector("#mark-btns");

playButton.addEventListener("click", () => {
	playButton.classList.toggle("hide");
	markButtons.classList.toggle("hide");
});
