// Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
// multiplicação deles. Porém, não utilize o operador de mutiplicação.

function multiplicar(n1, n2) {
  if (n1 === 0 || n2 === 0) {
    return 0;
  } else {
    const maiorN = Math.max(n1, n2);
    const menorN = Math.min(n1, n2);
    let resultado = 0;
    for (let i = 1; i <= menorN; i++) {
      resultado += maiorN;
    }
    return resultado;
  }
}

console.log(multiplicar(2, 3));
