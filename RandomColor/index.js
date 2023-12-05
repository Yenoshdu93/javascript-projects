const body = document.querySelector("body");

document.querySelector(".btn").addEventListener("click", function () {
  const colorGenerator = () => {
    const hex = "1234567890ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  body.style.backgroundColor = colorGenerator();
});
