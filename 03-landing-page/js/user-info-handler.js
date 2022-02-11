const queryString = window.location.search;
const userInfo = new URLSearchParams(queryString);

const userName = userInfo.get("userName");
const userEmail = userInfo.get("userEmail");

const welcomeTitle = document.querySelector(".welcome__title");
const welcomeEmail = document.querySelector(".welcome__email");

welcomeTitle.textContent += ` ${toCapitalize(userName)}!`;
welcomeEmail.textContent += userEmail;

function toCapitalize(str) {
	const parts = str.split(" ");

	const newParts = parts.map((part) => {
		return part[0].toUpperCase() + part.slice(1).toLowerCase();
	});

	return newParts.join(" ");
}
