<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    body {
      font-family: sans-serif;
      background-color: #f7f7f7;
      padding: 2rem;
    }
    h1 {
      color: #333;
    }
    .todo-box {
      background: white;
      padding: 1.5rem;
      max-width: 500px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    input {
      padding: 0.5rem;
      width: 100%;
      margin-bottom: 1rem;
      font-size: 1rem;
    }
    button {
      padding: 0.5rem 1rem;
      margin-right: 0.5rem;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      padding: 0.5rem;
      border-bottom: 1px solid #ccc;
      cursor: pointer;
    }
    li.done {
      text-decoration: line-through;
      color: #888;
    }
  </style>
</head>
<body>
  <h1>TODO List на TypeScript</h1>
  <div class="todo-box">
    <input type="text" id="taskInput" placeholder="Нове завдання..." />
    <div>
      <button id="addBtn">Додати</button>
      <button id="clearBtn">Очистити</button>
    </div>
    <ul id="taskList"></ul>
  </div>

  <script type="module">
    const input = document.getElementById("taskInput") as HTMLInputElement;
    const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
    const clearBtn = document.getElementById("clearBtn") as HTMLButtonElement;
    const taskList = document.getElementById("taskList") as HTMLUListElement;

    function createTask(text: string) {
      const li = document.createElement("li");
      li.textContent = text;
      li.addEventListener("click", () => {
        li.classList.toggle("done");
      });
      taskList.appendChild(li);
    }

    addBtn.addEventListener("click", () => {
      const text = input.value.trim();
      if (text) {
        createTask(text);
        input.value = "";
      }
    });

    clearBtn.addEventListener("click", () => {
      taskList.innerHTML = "";
    });
  </script>
</body>
</html>
