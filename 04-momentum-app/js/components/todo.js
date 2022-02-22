class Todo {
	constructor(description) {
		this.description = description;
	}

	createTodo() {
		const todoWrapper = document.createElement("li");
		const checkbox = document.createElement("input");
		const todoDescription = document.createElement("label");

		checkbox.type = "checkbox";
		todoDescription.textContent = this.description;
		todoWrapper.append(checkbox, todoDescription);

		return todoWrapper;
	}
}

export { Todo };
