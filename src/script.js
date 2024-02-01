
document.addEventListener("DOMContentLoaded", () => renderApp());

function renderApp() {
  renderCounter();
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
    case "0" || "5" || "6" || "7" || "8" || "9":
      return "дней"
    case "1":
      if (days > 10 && strDays[strDays.length - 2] === "1")
        return "дней";
      return "день";
    case "2":
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
