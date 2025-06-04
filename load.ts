<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>TypeScript Демонстрація</title>
  <style>
    body {
      font-family: sans-serif;
      padding: 2rem;
      background: #f7f7f7;
    }
    h1 {
      color: #333;
    }
    .box {
      margin-top: 2rem;
      padding: 1rem;
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 8px;
      max-width: 400px;
    }
    button {
      padding: 0.5rem 1rem;
      font-size: 1rem;
    }
    input {
      margin-top: 1rem;
      padding: 0.5rem;
      width: 100%;
    }
  </style>
</head>
<body>
  <h1>Сторінка з TypeScript</h1>

  <div class="box">
    <p>Натисни кнопку, щоб побачити повідомлення:</p>
    <button id="helloBtn">Привіт!</button>
  </div>

  <div class="box">
    <p>Введи ім’я:</p>
    <input type="text" id="nameInput" placeholder="Ім’я" />
    <button id="greetBtn">Привітати</button>
    <p id="output"></p>
  </div>

  <!-- TypeScript Playground Embed (через esbuild-wasm) -->
  <script type="module">
    const helloBtn = document.getElementById("helloBtn") as HTMLButtonElement;
    helloBtn.addEventListener("click", () => {
      alert("Привіт із TypeScript ✨");
    });

    const nameInput = document.getElementById("nameInput") as HTMLInputElement;
    const greetBtn = document.getElementById("greetBtn") as HTMLButtonElement;
    const output = document.getElementById("output") as HTMLParagraphElement;

    greetBtn.addEventListener("click", () => {
      const name = nameInput.value.trim();
      output.textContent = name
        ? `Привіт, ${name}! 👋`
        : "Будь ласка, введи ім’я.";
    });
  </script>
</body>
</html>
