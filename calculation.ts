<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <style>
    body {
      font-family: sans-serif;
      background: #f2f2f2;
      padding: 2rem;
    }
    h1 {
      color: #333;
    }
    .calc-box {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      max-width: 400px;
    }
    input {
      padding: 0.5rem;
      margin: 0.5rem 0;
      width: 100%;
      font-size: 1rem;
    }
    button {
      padding: 0.6rem 1rem;
      font-size: 1rem;
      margin-top: 1rem;
    }
    #result {
      font-weight: bold;
      margin-top: 1rem;
    }
  </style>
</head>
<body>
  <h1>Калькулятор на TypeScript</h1>
  <div class="calc-box">
    <label>Число 1:</label>
    <input type="number" id="num1" />
    <label>Число 2:</label>
    <input type="number" id="num2" />
    <button id="sumBtn">Порахувати суму</button>
    <p id="result"></p>
  </div>

  <script type="module">
    const num1 = document.getElementById("num1") as HTMLInputElement;
    const num2 = document.getElementById("num2") as HTMLInputElement;
    const btn = document.getElementById("sumBtn") as HTMLButtonElement;
    const result = document.getElementById("result") as HTMLParagraphElement;

    btn.addEventListener("click", () => {
      const a = parseFloat(num1.value);
      const b = parseFloat(num2.value);

      if (isNaN(a) || isNaN(b)) {
        result.textContent = "Будь ласка, введи два числа.";
      } else {
        result.textContent = `Сума: ${a + b}`;
      }
    });
  </script>
</body>
</html>
