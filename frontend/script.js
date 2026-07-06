const API = "http://localhost:5000/tasks";

async function loadTasks() {
  const res = await fetch(API);
  const data = await res.json();

  document.getElementById("taskList").innerHTML =
    data.map(t => `<li>${t.title}</li>`).join("");
}

async function addTask() {
  const title = document.getElementById("taskInput").value;

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title })
  });

  loadTasks();
}

loadTasks();
