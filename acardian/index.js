let content = document.querySelectorAll(".content");

content.forEach((link) => {
  link.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});
