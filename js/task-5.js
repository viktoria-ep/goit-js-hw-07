const button = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
const body = document.body;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

button.addEventListener("click", () => {
  const newColor = getRandomHexColor(); // Генеруємо новий колір
  body.style.backgroundColor = newColor; // Задаємо фон для body
  colorSpan.textContent = newColor; // Відображаємо колір у span
});
