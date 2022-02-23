class TodoList {
	constructor() {
		this.list = [];
		this.length = 0;
	}

	addTodo(description) {
		const newTodo = this.createTodo(description);

		this.list.push(newTodo);
		this.length++;

		return this.length;
	}

	createTodo(description) {
		const todoWrapper = document.createElement("li");
		const checkbox = document.createElement("input");
		const todoDescription = document.createElement("label");

		checkbox.type = "checkbox";
		todoDescription.textContent = description;
		todoWrapper.append(checkbox, todoDescription);

		return todoWrapper;
	}
}

export { TodoList };
