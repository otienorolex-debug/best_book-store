const Form=document.getElementById('create-task-form');

Form.addEventListener('submit', (event) => {
	event.preventDefault();
	const task = event.target.elements['new-task-description'].value;
	buildToDo(task);
});

function buildToDo(task) {
	const item = document.createElement('li');
	item.textContent = task;
	document.getElementById('task').append(item);
}
