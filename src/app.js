/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  document.querySelector("#excuse").innerHTML = excuses();
  document.querySelector(".boton").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = excuses();
  });
};
function excuses() {
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
  let sujeto = Math.floor(Math.random() * who.length);
  let accion = Math.floor(Math.random() * action.length);
  let cosa = Math.floor(Math.random() * what.length);
  let lugar = Math.floor(Math.random() * when.length);
  return (
    who[sujeto] + " " + action[accion] + " " + what[cosa] + " " + when[lugar]
  );
}
