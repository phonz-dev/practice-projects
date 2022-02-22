import { clock, dayPart, quote, randomQuote } from "./globals.js";

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

const displayQuote = () => {
	quote.textContent = randomQuote;
};

export { displayTime, displayQuote };
