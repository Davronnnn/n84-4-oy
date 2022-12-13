function findElement(element, parent = document) {
	return parent.querySelector(element);
}
const template = findElement('#post-template');
const elTodos = findElement('#posts');
const h1 = findElement('h1');
const elTodoSelect = findElement('#post-id');
const elLoader = findElement('.loader');

let todos = JSON.parse(localStorage.getItem('todos'))
	? JSON.parse(localStorage.getItem('todos'))
	: [];

fetch('https://jsonplaceholder.typicode.com/todos/')
	.then((res) => res.json())
	.then((data) => {
		todos = data;
		renderTodos(todos, elTodos);
		elLoader.className = 'd-none';
	})
	.catch((err) => console.log(err));

function renderTodos(array, parent = elTodos) {
	parent.textContent = '';

	const postFragment = document.createDocumentFragment();
	localStorage.setItem('todos', JSON.stringify(todos));
	array.forEach((element) => {
		const postTemplate = template.content.cloneNode(true);
		const elementId = postTemplate.querySelector('.number');
		const elementName = postTemplate.querySelector('.name');
		const elementCheck = postTemplate.querySelector('#completed');

		const elementButton = postTemplate.querySelector('button');

		elementId.textContent = element.id;
		elementName.textContent = element.title;
		elementName.style.textDecoration =
			element.completed === true ? 'line-through' : 'none';
		elementCheck.checked = element.completed;
		elementCheck.dataset.id = element.id;

		elementButton.dataset.id = element.id;

		postFragment.appendChild(postTemplate);
	});

	parent.appendChild(postFragment);
}

elTodos.addEventListener('click', (e) => {
	const target = e.target;

	if (target.className.match('btn-danger')) {
		const id = target.dataset.id;
		const result = todos.filter((element) => {
			if (Number(id) !== element.id) {
				return element;
			}
		});
		todos = result;

		renderTodos(todos);
	}

	if (target.id === 'completed') {
		const id = target.dataset.id;

		todos.forEach((todo) => {
			if (todo.id === Number(id)) {
				todo.completed = !todo.completed;
			}
		});

		renderTodos(todos);
	}
});

elTodoSelect.addEventListener('change', (e) => {
	let value = e.target.value;

	const result = todos.filter((todo) => {
		if (value === 'true') {
			value = true;
		} else if (value === 'false') {
			value = false;
		}

		if (todo.completed == value) {
			return todo;
		}
	});

	renderTodos(result);
});
