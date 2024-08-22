document.addEventListener("DOMContentLoaded", function() {
<<<<<<< HEAD
    loadTasksFromLocalStorage();
=======
>>>>>>> cabc3e5 (first commit)
    setupDragAndDrop();
});

let draggedTask = null;
let isDragging = false;
let startX, startY;

function setupDragAndDrop() {
    const tasks = document.querySelectorAll('.task');
<<<<<<< HEAD
   
    tasks.forEach(task => {
        task.addEventListener('mousedown', dragStart);
        task.addEventListener('touchstart', dragStart, {passive: false});
    });

    document.addEventListener('mousemove', drag);
    document.addEventListener('touchmove', drag, {passive: false});

    document.addEventListener('mouseup', dragEnd);
    document.addEventListener('touchend', dragEnd);
}

function dragStart(e) {
    if (e.type === "touchstart") {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    } else {
        startX = e.clientX;
        startY = e.clientY;
    }

    draggedTask = e.target.closest('.task');
    isDragging = true;

    // Create a clone of the task for visual feedback
    const clone = draggedTask.cloneNode(true);
    clone.style.position = 'absolute';
    clone.style.zIndex = '1000';
    clone.style.opacity = '0.8';
    document.body.appendChild(clone);
    draggedTask.style.opacity = '0.5';
=======
    tasks.forEach(task => {
        task.addEventListener('mousedown', dragStart);
    });
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);
}

function dragStart(e) {
    startX = e.clientX;
    startY = e.clientY;

    draggedTask = e.target.closest('.task');
    isDragging = true;
    // Move the task element to the current mouse position
    moveTask(e);
>>>>>>> cabc3e5 (first commit)

    e.preventDefault();
}

function drag(e) {
    if (!isDragging) return;

<<<<<<< HEAD
    let clientX, clientY;
    if (e.type === "touchmove") {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
    } else {
        clientX = e.clientX;
        clientY = e.clientY;
    }

    const clone = document.body.lastElementChild;
    clone.style.left = clientX - startX + 'px';
    clone.style.top = clientY - startY + 'px';

    e.preventDefault();
}

=======
    moveTask(e);
    e.preventDefault();
}

function moveTask(e) {
    const clientX = e.clientX;
    const clientY = e.clientY;

    // Update the position of the dragged task element
    draggedTask.style.left = (clientX - startX) + 'px';
    draggedTask.style.top = (clientY - startY) + 'px';
}

>>>>>>> cabc3e5 (first commit)
function dragEnd(e) {
    if (!isDragging) return;

    isDragging = false;
    draggedTask.style.opacity = '1';
<<<<<<< HEAD

    const clone = document.body.lastElementChild;
    document.body.removeChild(clone);

    let dropX, dropY;
    if (e.type === "touchend") {
        dropX = e.changedTouches[0].clientX;
        dropY = e.changedTouches[0].clientY;
    } else {
        dropX = e.clientX;
        dropY = e.clientY;
    }
=======
    draggedTask.style.position = 'static';

    const dropX = e.clientX;
    const dropY = e.clientY;
>>>>>>> cabc3e5 (first commit)

    const elementBelow = document.elementFromPoint(dropX, dropY);
    const column = elementBelow.closest('.task-list');

    if (column && column !== draggedTask.parentElement) {
        column.appendChild(draggedTask);
<<<<<<< HEAD
        updateTaskStateInLocalStorage(draggedTask.id, column.id);
=======
>>>>>>> cabc3e5 (first commit)
    }

    draggedTask = null;
}

function openForm() {
    var myModal = new bootstrap.Modal(document.getElementById('taskForm'));
    myModal.show();
}

function addTask(ev) {
    ev.preventDefault();
    var taskTitle = document.getElementById("taskTitle").value;
    var taskId = "task" + new Date().getTime();
    var taskElement = document.createElement("div");
    taskElement.className = "task card mb-2";
    taskElement.id = taskId;
    taskElement.innerHTML = `<div class="card-body">${taskTitle}</div>`;

    document.getElementById("todo-tasks").appendChild(taskElement);
<<<<<<< HEAD
    saveTaskToLocalStorage(taskId, taskTitle, "todo-tasks");
=======
>>>>>>> cabc3e5 (first commit)
    setupDragAndDrop(); // Re-setup drag and drop for the new task
    var myModal = bootstrap.Modal.getInstance(document.getElementById('taskForm'));
    myModal.hide();
    document.getElementById("taskTitle").value = "";
}
<<<<<<< HEAD

function saveTaskToLocalStorage(taskId, taskTitle, taskState) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ id: taskId, title: taskTitle, state: taskState });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        renderTask(task.id, task.title, task.state);
    });
}

function renderTask(taskId, taskTitle, taskState) {
    var taskElement = document.createElement("div");
    taskElement.className = "task card mb-2";
    taskElement.id = taskId;
    taskElement.innerHTML = `<div class="card-body">${taskTitle}</div>`;

    document.getElementById(taskState).appendChild(taskElement);
}

function updateTaskStateInLocalStorage(taskId, newState) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.map(task => {
        if (task.id === taskId) {
            task.state = newState;
        }
        return task;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
=======
>>>>>>> cabc3e5 (first commit)
