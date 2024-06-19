/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let excuse = document.getElementById("excuse");
  let who = ["Mi gato", "El vecino", "Mi hermano", "El policía"];
  let action = ["mordió", "tiró", "manchó", "perdió"];
  let what = ["mis zapatos", "el libro", "la computadora", "las llaves"];
  let when = [
    "en la mañana",
    "durante la fiesta",
    "mientras cocinaba",
    "al anochecer",
    "cuando llegué a casa"
  ];
  const getRandomInt = array => {
    return;
  };
  excuse.innerHTML = who[2] + " " + action[2] + " " + what[0] + " " + when[3];
};
