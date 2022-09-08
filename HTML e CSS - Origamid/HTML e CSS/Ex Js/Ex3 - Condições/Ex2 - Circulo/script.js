// const circulo = document.querySelector(".circulo");
// function coordenadaMouse(event) {
//   const coordenadas = {
//     x: event.x,
//     y: event.y,
//   };
//   circulo.style.left = coordenadas.x;
//   circulo.style.top = coordenadas.y;
// }

// window.addEventListener("mousemove", coordenadaMouse);
const circulo = document.querySelector(".circulo");

function seguirMouse(event) {
  //Não preciso criar variaveis para elementos que seão utilizados uma unica vez.
  circulo.style.top = event.y + "px";
  circulo.style.left = event.x + "px";
}

window.addEventListener("mousemove", seguirMouse);
