// JavaScript Code
document.getElementById("btn").addEventListener("click", btnclicked);
let score = 0;

function btnclicked() {
  score = 0;
  let q1 = document.getElementById("q1").value;
  let q2 = document.getElementById("q2").value;
  let q3 = document.getElementById("q3").value;
  let q4 = document.getElementById("q4").value;
  let q5 = document.getElementById("q5").value;

  if (q1 === "james naismith") {
    score++;
  }

  if (q2 === "springfield") {
    score++;
  }

  if (q3 === "aba and nba" || q3 === "nba and aba") {
    score++;
  }

  if (q4 === "curry" || q4 === "stephen curry") {
    score++;
  }

  if (q5 === "euro league" || q5 === "euroleague") {
    score++;
  }

  document.getElementById("output").innerHTML = (score / 5) * 100;
}
