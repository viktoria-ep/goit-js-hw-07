const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // зупиняємо перезавантаження сторінки

  const email = form.elements.email;
  const password = form.elements.password;

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // Перевірка на порожні поля
  if (!emailValue || !passwordValue) {
    alert("All form fields must be filled in");
    return;
  }

  // Формуємо об'єкт з даними
  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);

  // Очищаємо форму
  form.reset();
});
