// Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
// ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
// exemplo a seguir:

function inverter(obj) {
  const objInvertido = {};
  Object.entries(obj).forEach((parChaveEValor) => {
    const chave = 0;
    const valor = 1;
    objInvertido[parChaveEValor[valor]] = parChaveEValor[chave];
    console.log(objInvertido);
  });
  return objInvertido;
}

console.log(inverter({ a: 1, b: 2, c: 3 }));

function inverter2(objeto) {
  const paresDeChaveValorInvertidos = Object.entries(objeto).map(
    (parChaveValor) => parChaveValor.reverse()
  );

  return Object.fromEntries(paresDeChaveValorInvertidos);
}

console.log(inverter2({ a: 1, b: 2, c: 3 }));
