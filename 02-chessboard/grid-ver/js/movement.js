// Collect all tiles
const tiles = document.querySelectorAll(".tile");

// Declare global variables
let currentPick;
let currentPickPosition;

// Add click event listeners to each tile
tiles.forEach((tile) => {
	tile.addEventListener("click", () => {
		// If a current pick exist
		if (currentPick) {
			// Get previous tile
			const prevTile = document.getElementById(currentPickPosition);

			// Remove the piece from the previous tile
			removePiece(prevTile);

			// Drop the piece to the new selected tile
			dropPiece(tile);

			// Reset global variables for the next pick
			resetPick();
		} else {
			// Otherwise, pick a new piece
			pickPiece(tile);
		}
	});
});

const pickPiece = (tile) => {
	// If the selected tile is empty, do nothing
	if (!tile.textContent) return;

	// Otherwise, save the current pick information
	currentPick = tile.textContent;
	currentPickPosition = tile.getAttribute("id");
	playPickSound();
};

const dropPiece = (tile) => {
	// Set tile to current pick
	tile.textContent = currentPick;
	playDropSound();
};

const removePiece = (tile) => {
	tile.textContent = "";
};

const resetPick = () => {
	currentPick = undefined;
	currentPickPosition = undefined;
};

const playPickSound = () => {
	const sound = new Audio("./audio/pick-sound.wav");

	sound.play();
};

const playDropSound = () => {
	const sound = new Audio("./audio/drop-sound.wav");

	sound.play();
};
