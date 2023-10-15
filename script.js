const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Load tasks from localStorage on page load
window.addEventListener('load', loadTasks);

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    // Get the selected priority from the dropdown
    const prioritySelect = document.getElementById('prioritySelect');
    const selectedPriority = prioritySelect.value;

    const task = {
        text: taskText,
        completed: false,
        timestamp: new Date().toLocaleString(),
        priority: selectedPriority, // Add priority
    };

    const tasks = getTasksFromLocalStorage();
    tasks.push(task);
    saveTasksToLocalStorage(tasks);
    taskInput.value = '';
    displayTasks();
}



// Function to display tasks on the page
function displayTasks() {
    taskList.innerHTML = '';
    const tasks = getTasksFromLocalStorage();
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <input class="" type="checkbox" onchange="toggleTask(${index})" ${task.completed ? 'checked' : ''}>
            <span class="ml-3">${task.text} - ${task.priority}, ${task.timestamp}</span>
            <button class="edit font-light" onclick="editTask(${index})">Edit</button>
            <button class="close font-light" onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(taskItem);
    });
}


// Function to toggle task completion status
function toggleTask(index) {
    const tasks = getTasksFromLocalStorage();
    tasks[index].completed = !tasks[index].completed;
    saveTasksToLocalStorage(tasks);
    displayTasks();
}

// Function to edit a task
function editTask(index) {
    const tasks = getTasksFromLocalStorage();
    const updatedText = prompt('Edit task:', tasks[index].text);
    if (updatedText !== null) {
        tasks[index].text = updatedText;
        saveTasksToLocalStorage(tasks);
        displayTasks();
    }
}

// Function to delete a task
function deleteTask(index) {
    const tasks = getTasksFromLocalStorage();
    tasks.splice(index, 1);
    saveTasksToLocalStorage(tasks);
    displayTasks();
}

// Function to load tasks from localStorage
function loadTasks() {
    displayTasks();
}

// Function to get tasks from localStorage
function getTasksFromLocalStorage() {
    const tasksJSON = localStorage.getItem('tasks');
    return tasksJSON ? JSON.parse(tasksJSON) : [];
}

// Function to save tasks to localStorage
function saveTasksToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const datetimeElement = document.getElementById('datetime');

function updateDateTime() {
  const now = new Date();

  // Define options for custom formatting
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',  
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };

  const dateTimeString = now.toLocaleString('en-UK', options); // Customize locale and options as needed

  datetimeElement.textContent = dateTimeString;
}

updateDateTime();
setInterval(updateDateTime, 1000);
