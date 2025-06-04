<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8" />
  <title>Редагування Профілю</title>
  <style>
    body { font-family: sans-serif; padding: 2rem; display: flex; gap: 2rem; background: #f4f4f4; }
    .form-box, .preview-box {
      background: white;
      padding: 1rem;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.05);
      width: 100%;
      max-width: 400px;
    }
    input { width: 100%; padding: 0.5rem; margin: 0.5rem 0; }
    .invalid { border: 1px solid red; }
  </style>
</head>
<body>

  <div class="form-box">
    <h2>Редагування профілю</h2>
    <input type="text" id="name" placeholder="ПІБ" />
    <input type="text" id="company" placeholder="Компанія / організація" />
    <input type="text" id="sector" placeholder="Сфера діяльності" />
    <button id="saveBtn">Зберегти</button>
  </div>

  <div class="preview-box">
    <h2>Прев’ю профілю</h2>
    <p><strong>Ім'я:</strong> <span id="prevName">-</span></p>
    <p><strong>Компанія:</strong> <span id="prevCompany">-</span></p>
    <p><strong>Сфера:</strong> <span id="prevSector">-</span></p>
  </div>

  <script type="module">
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const companyInput = document.getElementById("company") as HTMLInputElement;
    const sectorInput = document.getElementById("sector") as HTMLInputElement;
    const saveBtn = document.getElementById("saveBtn") as HTMLButtonElement;

    const prevName = document.getElementById("prevName")!;
    const prevCompany = document.getElementById("prevCompany")!;
    const prevSector = document.getElementById("prevSector")!;

    function validateInput(input: HTMLInputElement): boolean {
      if (!input.value.trim()) {
        input.classList.add("invalid");
        return false;
      } else {
        input.classList.remove("invalid");
        return true;
      }
    }

    saveBtn.addEventListener("click", () => {
      const validName = validateInput(nameInput);
      const validCompany = validateInput(companyInput);
      const validSector = validateInput(sectorInput);

      if (validName && validCompany && validSector) {
        prevName.textContent = nameInput.value;
        prevCompany.textContent = companyInput.value;
        prevSector.textContent = sectorInput.value;
      }
    });
  </script>

</body>
</html>
