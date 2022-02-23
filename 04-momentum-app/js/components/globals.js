import { RandomQuoteGenerator } from "./random-quote.js";
import { TodoList } from "./todo.js";

const queryString = window.location.search;
const userInfo = new URLSearchParams(queryString);
const userName = userInfo.get("userName").split(" ")[0];
const userNameWrapper = document.querySelector(".user-name");

const clock = document.querySelector(".greeting__clock");
const dayPart = document.querySelector(".day-part");

const mainFocusPrompt = document.querySelector(".focus__prompt");
const mainFocus = document.querySelector(".focus__input");

const todoBtn = document.querySelector(".footer__todo-btn");
const todoListWrapper = document.querySelector(".footer__todo-list");
const todoInput = document.querySelector(".footer__todo-input");
const todoModal = document.querySelector(".footer__todo-modal");
const todoList = new TodoList();

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
	todoListWrapper,
	todoModal,
	todoInput,
	todoList,
	quote,
	randomQuote,
	userNameWrapper,
	userName,
};
