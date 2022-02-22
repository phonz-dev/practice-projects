import {
	mainFocusPrompt,
	mainFocus,
	todoBtn,
	todoList,
	todoModal,
	todoInput,
} from "./components/globals.js";

import { Todo } from "./components/todo.js";
import { displayTime, displayQuote } from "./components/utilities.js";

todoBtn.addEventListener("click", () => {
	todoModal.classList.toggle("hide");
});

todoInput.addEventListener("keypress", (event) => {
	if (event.key === "Enter" && todoInput.value) {
		const todo = new Todo(todoInput.value);
		const newTodo = todo.createTodo();

		todoInput.value = "";
		todoList.appendChild(newTodo);
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
