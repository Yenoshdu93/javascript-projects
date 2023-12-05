const modelConatiner = document.querySelector(".model-container");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  modelConatiner.style.display = "block";
});

window.addEventListener("click", function (e) {
  if (e.target === modelConatiner) {
    modelConatiner.style.display = "none";
  }
});
