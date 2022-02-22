import { RandomQuoteGenerator } from "./random-quote.js";

const clock = document.querySelector(".greeting__clock");
const dayPart = document.querySelector(".day-part");

const mainFocusPrompt = document.querySelector(".focus__prompt");
const mainFocus = document.querySelector(".focus__input");

const todoBtn = document.querySelector(".footer__todo-btn");
const todoList = document.querySelector(".footer__todo-list");
const todoInput = document.querySelector(".footer__todo-input");
const todoModal = document.querySelector(".footer__todo-modal");

const quote = document.querySelector(".footer__quote");

const initialQuotes = [
	"Waste no more time arguing what a good man should be. Be One.",
	"It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own.",
	"The best revenge is not to be like your enemy",
];

const quoteGenerator = new RandomQuoteGenerator(...initialQuotes);
const randomQuote = quoteGenerator.generateRandomQuote();

export {
	clock,
	dayPart,
	mainFocusPrompt,
	mainFocus,
	todoBtn,
	todoList,
	todoModal,
	todoInput,
	quote,
	randomQuote,
};
