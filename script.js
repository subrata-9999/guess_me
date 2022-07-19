"use strict";

let main_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let high_score = 0;


document.querySelector(".check").addEventListener("click", function () {
  const input_value = Number(document.querySelector(".input_number").value);

  if (!input_value) {
    document.querySelector(".first_comment").textContent = "No Number!!! 😂🚫";
  } else if (input_value == main_number) {
    document.querySelector(".first_comment").textContent =
      "Congratulation... 🥳👌";
    document.querySelector(".all_over").style.backgroundColor = "#009933";
    if (score > high_score) {
      high_score = score;
      document.querySelector(".hi_fi").textContent = score;
    }
    document.querySelector(".hidden_number").textContent = main_number;
  } else if (input_value > main_number) {
    if (score > 1) {
      document.querySelector(".first_comment").textContent = "Too High!!! 🙄🥱";
      score--;
      document.querySelector(".score_result").textContent = score;
    } else {
      document.querySelector(".first_comment").textContent =
        "You lost the game 🤣😂";
      document.querySelector(".score_result").textContent = 0;
    }
  } else if (input_value < main_number) {
    if (score > 1) {
      document.querySelector(".first_comment").textContent = "Too Low!!! 😒🤦‍♂️";
      score--;
      document.querySelector(".score_result").textContent = score;
    } else {
      document.querySelector(".first_comment").textContent =
        "You lost the game 🤣😂";
      document.querySelector(".score_result").textContent = 0;
    }
  }
});

document.querySelector(".button_1").addEventListener("click", function () {
    score = 20;
    main_number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".first_comment").textContent ="Start guessing ... ✌️✌️";
    document.querySelector(".hidden_number").textContent = "?";
    document.querySelector(".score_result").textContent = score;
    document.querySelector(".input_number").value = "";
    document.querySelector(".all_over").style.backgroundColor = "#77773c";
  });