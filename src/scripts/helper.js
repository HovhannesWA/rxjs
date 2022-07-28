export function randomBetween(min = 0, max = 255) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

export function createCircle(value) {
  let div = document.createElement("div");
  div.classList.add("circle");
  div.style.backgroundColor = genereteColor();
  div.textContent = value;
  return div;
}

export function genereteColor() {
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  return `rgb(${r},${g},${b})`;
}
