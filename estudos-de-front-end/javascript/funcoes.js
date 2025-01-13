function calcular(operacao) {
  const n1 = document.getElementById("n1").value;
  const n2 = document.getElementById("n2").value;

  let resultado;
  switch (operacao) {
    case "+":
      resultado = somar(n1, n2);
      break;
    case "-":
      resultado = subtracao(n1, n2);
      break;
    case "*":
      resultado = multiplicacao(n1, n2);
      break;
    case "/":
      resultado = divisao(n1, n2);
      break;
  }

  document.getElementById("resultado").innerHTML = "O resultado é " + resultado;
}

function somar(n1, n2) {
  return Number(n1) + Number(n2);
}

function subtracao(n1, n2) {
  return Number(n1) - Number(n2);
}

function multiplicacao(n1, n2) {
  return Number(n1) * Number(n2);
}

function divisao(n1, n2) {
  if (parseFloat(n2) === 0) {
    console.error("Divisão por zero não é permitida.");
    return null;
  } else {
    return Number(n1) / Number(n2);
  }
}
