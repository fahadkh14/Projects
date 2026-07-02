const API = "http://localhost:5000/api/tasks";

async function loadTasks() {
  const res = await fetch(API);
  const data = await res.json();

  document.getElementById("taskList").innerHTML = "";

  data.forEach(task => {
    const li = document.createElement("li");
    li.innerHTML = `${task.name} 
      <button onclick="deleteTask('${task._id}')">Delete</button>`;
    document.getElementById("taskList").appendChild(li);
  });
}

async function addTask() {
  const task = document.getElementById("taskInput").value;

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: task })
  });

  loadTasks();
}

async function deleteTask(id) {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  loadTasks();
}

loadTasks();
