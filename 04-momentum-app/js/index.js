import {
	mainFocusPrompt,
	mainFocus,
	todoBtn,
	todoListWrapper,
	todoModal,
	todoInput,
} from "./components/globals.js";

import { todoList } from "./components/globals.js";
import { displayTime, displayQuote } from "./components/utilities.js";

todoBtn.addEventListener("click", () => {
	todoModal.classList.toggle("hide");
});

todoInput.addEventListener("keypress", (event) => {
	if (event.key === "Enter" && todoInput.value) {
		const newTodo = todoInput.value;

		todoList.addTodo(newTodo);
		todoList.list.forEach((todo) => todoListWrapper.appendChild(todo));
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

window.addEventListener("load", displayTime);
window.addEventListener("load", displayQuote);
