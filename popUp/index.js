const openBtn = document.querySelector(".open-model");
const modelBg = document.querySelector(".model-bg");
const closeicon = document.querySelector(".close-btn");
const closeBtn = document.querySelector(".close");
openBtn.addEventListener("click", () => {
  modelBg.style.display = "block";
});

closeicon.addEventListener("click", () => {
  modelBg.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == modelBg) {
    modelBg.style.display = "none";
  }
});

closeBtn.addEventListener("click", () => {
  modelBg.style.display = "none";
});
