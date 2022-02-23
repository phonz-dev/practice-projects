import {
	mainFocusPrompt,
	mainFocus,
	todoBtn,
	todoListWrapper,
	todoModal,
	todoInput,
	quoteBtn,
	addQuoteInput,
	quoteGenerator,
	quoteModal,
	quote,
} from "./components/globals.js";

import {
	displayTime,
	displayQuote,
	displayUserName,
} from "./components/utilities.js";

import { todoList } from "./components/globals.js";

todoBtn.addEventListener("click", () => {
	todoModal.classList.toggle("hide");
});

quoteBtn.addEventListener("click", () => {
	quoteModal.classList.toggle("hide");
});

todoInput.addEventListener("keypress", (event) => {
	if (event.key === "Enter" && todoInput.value) {
		const newTodo = todoInput.value;

		todoList.addTodo(newTodo);
		todoListWrapper.append(...todoList.list);
		todoInput.value = "";
	}
});

mainFocus.addEventListener("keypress", (event) => {
	const focusItem = document.querySelector(".focus__item");
	const todaysFocus = document.querySelector(".focus__item-label");
	if (event.key === "Enter" && mainFocus.value) {
		todaysFocus.textContent = mainFocus.value;
		mainFocusPrompt.style.display = "none";
		focusItem.style.display = "flex";
	}
});

window.addEventListener("load", () => {
	displayTime();
	displayQuote();
	displayUserName();
});
