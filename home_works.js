document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slider-item');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = (i === index) ? 'block' : 'none';
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  showSlide(currentSlide);
  setInterval(nextSlide, 3000);
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#gmail-form");       // форма для ввода почты
  const input = document.querySelector("#gmail-input");      // поле ввода email
  const message = document.querySelector("#gmail-message");  // где показываем сообщение

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const value = input.value.trim();
    const isValid = /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(value);

    if (isValid) {
      message.textContent = "Почта валидна!";
      message.style.color = "green";
    } else {
      message.textContent = "Введите корректную Gmail почту!";
      message.style.color = "red";
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const box = document.querySelector(".big-box");       // большой блок-родитель
  const block = document.querySelector(".small-block");  // маленький движущийся блок
  const btn = document.querySelector("#move-btn");       // кнопка запуска

  btn.addEventListener("click", function () {
    let pos = 0;
    const max = box.clientWidth - block.offsetWidth;

    function moveRight() {
      if (pos < max) {
        pos += 2;
        block.style.left = `${pos}px`;
        requestAnimationFrame(moveRight);
      }
    }

    moveRight();
  });
});
