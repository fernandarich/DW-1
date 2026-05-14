function calcularValor() {
    const nome = document.getElementById("nomeC").value;
    const placa = document.getElementById("placaV").value;
    const entrada = document.getElementById("tempoP").value;
    const saida = document.getElementById("tempoS").value;
    const tamanho = document.getElementById("tipoV").checked;
    const clienteFi = document.getElementById("clienteF").checked;

    if (!entrada || !saida) {
        document.getElementById("outputValor").innerHTML = "Por favor, informe data e hora de entrada e saída.";
        return;
    }

    const dataEntrada = new Date(entrada);
    const dataSaida = new Date(saida);

    if (dataSaida <= dataEntrada) {
        document.getElementById("outputValor").innerHTML = "A hora de saída deve ser posterior à hora de entrada.";
        return;
    }

    const diffMs = dataSaida - dataEntrada;
    const diffHoras = diffMs / (1000 * 60 * 60);
    const tempo = Math.max(1, diffHoras);

    let valorHora = 5;
    let adicional = 2.5;
    let valorDiaria = 60;
    let valorTotal = valorHora + adicional * (tempo - 1);

    if (tamanho) {
        valorTotal += valorTotal * 0.25;
    }

    if (clienteFi) {
        valorTotal -= valorTotal * 0.05;
    }

    if (tempo >= 24) {
        valorTotal = valorDiaria;
    }

    document.getElementById("outputValor").innerHTML = `O valor a ser pago por ${nome} com a placa ${placa} é: R$ ${valorTotal.toFixed(2)}. Você ficou ${tempo.toFixed(2)} horas estacionado (entrada: ${entrada.replace('T', ' ')} / saída: ${saida.replace('T', ' ')}).`;

    document.getElementById("nomeC").value = "";
    document.getElementById("placaV").value = "";
    document.getElementById("tempoP").value = "";
    document.getElementById("tempoS").value = "";
    document.getElementById("tipoV").checked = false;
    document.getElementById("clienteF").checked = false;
}
