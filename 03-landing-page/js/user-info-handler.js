const queryString = window.location.search;
const userInfo = new URLSearchParams(queryString);

const userName = userInfo.get("userName");
const userEmail = userInfo.get("userEmail");

const welcomeTitle = document.querySelector(".welcome__title");
const welcomeEmail = document.querySelector(".welcome__email");

const firstName = getFirstName(userName);

welcomeTitle.textContent += ` ${toCapitalize(firstName)}!`;
welcomeEmail.textContent += userEmail;

function getFirstName(name) {
	return name.split(" ")[0];
}

function toCapitalize(str) {
	return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
