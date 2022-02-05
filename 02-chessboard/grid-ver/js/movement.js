// Collect all tiles
const tiles = document.querySelectorAll(".tile");

// Initialize global variables
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
};

const dropPiece = (tile) => {
	// Set tile to current pick
	tile.textContent = currentPick;
};

const removePiece = (tile) => {
	// Set tile to empty string
	tile.textContent = "";
};

const resetPick = () => {
	currentPick = undefined;
	currentPickPosition = undefined;
};
