function validarEntrada(n1, n2) {
    if (n1 === "" || isNaN(n1)) {
        alert("Por favor, insira um número válido em N1.");
        return false;
    }
    if (n2 === "" || isNaN(n2)) {
        alert("Por favor, insira um número válido em N2.");
        return false;
    }
    return true;
}

function somar(){
    const n1 = document.getElementById('n1').value
    const n2 = document.getElementById('n2').value

    if (!validarEntrada(n1, n2)) return;

    const soma = Number(n1) + Number(n2)

    document.getElementById('resultadoSoma').innerHTML = "A soma dos números é " + soma
}

function subtracao(){
    const n1 = document.getElementById('n1').value
    const n2 = document.getElementById('n2').value

    if (!validarEntrada(n1, n2)) return;

    const sub = Number(n1) - Number(n2)

    document.getElementById('resultadoSubtracao').innerHTML = "A subtração dos números é " + sub
}

function multiplicacao(){
    const n1 = document.getElementById('n1').value
    const n2 = document.getElementById('n2').value

    if (!validarEntrada(n1, n2)) return;

    const multi = Number(n1) * Number(n2)

    document.getElementById('resultadoMultiplicacao').innerHTML = "A multiplicação dos números é " + multi
}

function divisao(){
    const n1 = document.getElementById('n1').value
    const n2 = document.getElementById('n2').value

    if (!validarEntrada(n1, n2)) return;

    if (parseFloat(n2) === 0) {
        alert("Divisão por zero não é permitida.");
        return;
    }

    const devi = Number(n1) / Number(n2)

    document.getElementById('resultadoDivisao').innerHTML = "A divisão dos números é " + devi
}