import './js/local-storage-api';
import './js/markup-tasks';
import './js/refs';
import './js/render-tasks';
import './js/tasks';
import './js/theme-switcher';

// changeTheme
// При завантаженні сторінки
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const body = document.querySelector("body");

  if (savedTheme) {
    body.classList.remove("theme-dark", "theme-light"); // видаляємо обидві теми
    body.classList.add(savedTheme); // додаємо збережену
  }
});

