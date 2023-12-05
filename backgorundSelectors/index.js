const body = document.querySelector("body");

const parent = document
  .querySelector(".container")
  .addEventListener("click", function (e) {
    console.log(e.target.classList.contains("green"));
    if (e.target.classList.contains("green")) {
      body.style.backgroundColor = e.target.classList;
    }
    if (e.target.classList.contains("yellow")) {
      body.style.backgroundColor = e.target.classList;
    }
    if (e.target.classList.contains("blue")) {
      body.style.backgroundColor = e.target.classList;
    }
    if (e.target.classList.contains("pink")) {
      body.style.backgroundColor = e.target.classList;
    }
    if (e.target.classList.contains("container")) {
      body.style.backgroundColor = "white";
    }
  });
