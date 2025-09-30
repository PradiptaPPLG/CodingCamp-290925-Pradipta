const form = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const dateInput = document.getElementById('date-input');
const todoList = document.getElementById('todo-list');
const filterInput = document.getElementById('filter-input');

// Tambah task
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const taskText = todoInput.value.trim();
  const taskDate = dateInput.value;

  if (taskText === '' || taskDate === '') return;

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskText} - <small>${taskDate}</small></span>
    <button class="delete">Delete</button>
  `;

  todoList.appendChild(li);

  // reset input
  todoInput.value = '';
  dateInput.value = '';
});

// Hapus task
todoList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});

// Filter task
filterInput.addEventListener('keyup', () => {
  const filter = filterInput.value.toLowerCase();
  const tasks = document.querySelectorAll('#todo-list li');

  tasks.forEach((task) => {
    const text = task.textContent.toLowerCase();
    task.style.display = text.includes(filter) ? 'flex' : 'none';
  });
});

