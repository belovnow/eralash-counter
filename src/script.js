
document.addEventListener("DOMContentLoaded", () => renderApp());

function renderApp() {
  renderCounter();
  handleImageHover();
}

function renderCounter() {
  const div = document.getElementById("counter");
  const start = new Date(2024, 1, 1);
  const diffTime = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()) - start;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  div.textContent = `${diffDays} дней`;
}

function handleImageHover() {
  const img = document.getElementById("image");
  if (isTouchDevice()) {
    img.ontouchstart = () => img.src = "public/images/photo.jpg";
    img.ontouchend = () => img.src = "public/images/eralash.jpg";
  }
  else {
    img.onmouseenter = () => img.src = "public/images/photo.jpg";
    img.onmouseleave = () => img.src = "public/images/eralash.jpg";
  }
}

function isTouchDevice() {
  return ('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    (navigator.msMaxTouchPoints > 0);
}
