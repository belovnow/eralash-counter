
document.addEventListener("DOMContentLoaded", () => renderApp());

function renderApp() {
  renderCounter();
  addShareEvent();
}

function renderCounter() {
  const div = document.getElementById("counter");
  const start = new Date(2024, 1, 1);
  const diffTime = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()) - start;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  div.textContent = `${diffDays} ${dayWordGenerator(diffDays)}`;
}

/** @param {number} days */
function dayWordGenerator(days) {
  const strDays = days.toString();
  const lastChar = strDays[strDays.length - 1];
  switch (lastChar) {
    case "0", "5", "6", "7", "8", "9":
      return "дней"
    case "1":
      if (days > 10 && strDays[strDays.length - 2] === "1")
        return "дней";
      return "день";
    case "2", "3", "4":
      return "дня";
    default:
      return "дней";
  }
}

function isTouchDevice() {
  return ('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    (navigator.msMaxTouchPoints > 0);
}

function addShareEvent() {
  const shareData = {
    title: "Не забудем Нуралаша",
    text: "Давайте пацаны слово дадим, что Нуралаша не забудем",
    url: "https://nuralash.ru/",
  };

  const btn = document.querySelector(".button-container");
  btn.addEventListener("click", async () => await navigator.share(shareData));
}
