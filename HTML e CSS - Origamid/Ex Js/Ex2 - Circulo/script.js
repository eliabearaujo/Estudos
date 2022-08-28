const botao = document.querySelector(".botao");

function somar() {
  const calc = document.querySelector(".calc");
  const total = parseInt(calc.innerText) + 1;
  if (total < 10) {
    calc.innerText = total;
  } else {
    console.log("Não é possivel adicionar mais");
  }
}

if (botao) {
  botao.addEventListener("click", somar);
} else {
  console.log("Impossivel somar");
}
