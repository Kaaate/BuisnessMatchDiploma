function showAlert(message, type = "info") {
  const alert = document.createElement("div");
  alert.className = `alert ${type}`;
  alert.textContent = message;
  document.body.prepend(alert);
  setTimeout(() => alert.remove(), 3000);
}

function updateProgressBar(id, percent) {
  const bar = document.getElementById(id);
  if (bar) bar.style.width = `${percent}%`;
}

function attachInputHint(inputId, hintText) {
  const input = document.getElementById(inputId);
  if (input) {
    input.addEventListener("focus", () => {
      showAlert(hintText, "info");
    });
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

function createThemeToggleButton() {
  const btn = document.createElement("button");
  btn.textContent = "🌓 Змінити тему";
  btn.className = "button";
  btn.style.position = "fixed";
  btn.style.bottom = "1rem";
  btn.style.right = "1rem";
  btn.onclick = toggleTheme;
  document.body.appendChild(btn);
}

window.addEventListener("DOMContentLoaded", () => {
  createThemeToggleButton();
});
