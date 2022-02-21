const clock = document.querySelector(".greeting__clock");
const dayPart = document.querySelector(".day-part");
const mainFocusPrompt = document.querySelector(".focus__prompt");
const mainFocus = document.querySelector(".focus__input");

mainFocus.addEventListener("keypress", (event) => {
	const focusItem = document.querySelector(".focus__item");
	const todaysFocus = document.querySelector(".focus__item-label");
	if (event.key === "Enter") {
		todaysFocus.textContent = mainFocus.value;
		mainFocusPrompt.style.display = "none";
		focusItem.style.display = "flex";
	}
});

const displayTime = () => {
	let now = new Date();
	let hour = now.getHours();
	let minute = now.getMinutes();

	// Set part of the day
	displayDayPart(hour);

	// Set to 12-hour format
	hour = hour > 12 ? hour - 12 : hour;

	// Give a nice 2 digit format
	hour = ("0" + hour).slice(-2);
	minute = ("0" + minute).slice(-2);

	clock.textContent = `${hour}:${minute}`;

	setTimeout(displayTime, 800);
};

const displayDayPart = (currentHour) => {
	const [midDay, lateNoon] = [12, 17];

	if (currentHour < midDay) {
		dayPart.textContent = "morning";
	} else if (currentHour < lateNoon) {
		dayPart.textContent = "afternoon";
	} else {
		dayPart.textContent = "evening";
	}
};

window.addEventListener("load", displayTime);
