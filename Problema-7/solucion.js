const taskForm = document.getElementById('taskForm');
const taskTable = document.getElementById('taskTable');
const clearButton = document.getElementById('clearButton');

taskForm.addEventListener('submit', addTask);
clearButton.addEventListener('click', clearForm);

function addTask(event) {
    event.preventDefault();

    const taskName = document.getElementById('taskName').value;
    const taskDate = document.getElementById('taskDate').value;
    const taskPriority = document.getElementById('taskPriority').value;
    const taskDescription = document.getElementById('taskDescription').value;

    const newRow = taskTable.insertRow();
    newRow.innerHTML = `
        <td>${taskName}</td>
        <td>${taskDate}</td>
        <td>${taskPriority}</td>
        <td>${taskDescription}</td>
        <td class="actions">
            <button class="btn btn-warning" onclick="editTask(this)">Editar</button>
            <button class="btn btn-danger" onclick="deleteTask(this)">Borrar</button>
        </td>
    `;

    clearForm();
}

function clearForm() {
    taskForm.reset();
}

function editTask(button) {
    const row = button.parentElement.parentElement;
    const cells = row.querySelectorAll('td');

    const taskName = cells[0].textContent;
    const taskDate = cells[1].textContent;
    const taskPriority = cells[2].textContent;
    const taskDescription = cells[3].textContent;

    document.getElementById('taskName').value = taskName;
    document.getElementById('taskDate').value = taskDate;
    document.getElementById('taskPriority').value = taskPriority;
    document.getElementById('taskDescription').value = taskDescription;

    row.remove();
}

function deleteTask(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}
