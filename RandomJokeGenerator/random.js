const jokes = [
  {
    joke: "Why don't scientists trust atoms?",
    punchline: "Because they make up everything!",
    author: "Anonymous",
  },
  {
    joke: "I told my wife she should embrace her mistakes.",
    punchline: "She gave me a hug.",
    author: "Unknown",
  },
  {
    joke: "Why did the scarecrow win an award?",
    punchline: "Because he was outstanding in his field!",
    author: "Jokester",
  },
  {
    joke: "Parallel lines have so much in common.",
    punchline: "It’s a shame they’ll never meet.",
    author: "Comedian",
  },
];

let joke = document.querySelector(".joke");
let punchline = document.querySelector(".punch");
let author = document.querySelector(".author");

const button = document.querySelector("button");

button.addEventListener("click", function () {
  let random = Math.floor(Math.random() * jokes.length);
  joke.innerHTML = jokes[random].joke;
  punchline.innerHTML = jokes[random].punchline;
  author.innerHTML = jokes[random].author;
});
