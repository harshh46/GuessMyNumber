"use strict";

// if the class is given to the html element thn use dot (.)
// if the id is given to the html element thn use hash (#)

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = 15;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").textContent = 8;
// console.log(document.querySelector(".guess").textContent);

// document.querySelector(".guess").value = 8;
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.floor(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
// document.querySelector(".highscore").textContent = 0;

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  //   console.log(guess, typeof guess);

  if (guess === 0) {
    document.querySelector(".message").textContent = "No number selected";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number";

    document.querySelector(".number").textContent = secretNumber;

    // document.querySelector(".highscore").textContent = score;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Too High";

    if (score != 1) {
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost the Game";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Too Low";

    if (score != 1) {
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost the Game";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";

  //   highscore = highscore;
  //   document.querySelector(".highscore").textContent = highscore;
  score = 20;
  document.querySelector(".score").textContent = score;

  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";

  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").style.width = "15rem";
});
