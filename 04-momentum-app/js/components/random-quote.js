class RandomQuoteGenerator {
	constructor(...quotes) {
		this.quotes = quotes;
		this.length = this.quotes.length;
	}

	addQuote(quote) {
		this.quotes.push(quote);
	}

	generateRandomQuote() {
		const randomIdx = RandomQuoteGenerator.generateRandomIndex(0, this.length);
		const quote = `"${this.quotes[randomIdx]}"`;

		return quote;
	}

	static generateRandomIndex(start, end) {
		const index = Math.floor(Math.random() * (end - start) + start);

		return index;
	}
}

export { RandomQuoteGenerator };
