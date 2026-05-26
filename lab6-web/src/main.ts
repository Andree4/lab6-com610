import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <div class="card">
    <h1>Lab 6 web - deploy automatico</h1>
    <input class="file-upload" type="file" id="fileInput" accept="image/*" />
    <div id="preview"></div>
  </div>
`;

const fileInput = document.querySelector<HTMLInputElement>("#fileInput")!;
const preview = document.querySelector<HTMLDivElement>("#preview")!;

fileInput.addEventListener("change", () => {
  const file = fileInput.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      preview.innerHTML = `<img src="${e.target?.result}" alt="preview" />`;
    };
    reader.readAsDataURL(file);
  }
});
