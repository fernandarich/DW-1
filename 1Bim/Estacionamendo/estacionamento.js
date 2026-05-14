function calcularValor() {
    const nome = document.getElementById("nomeC").value;
    const placa = document.getElementById("placaV").value;
    const tempo = parseFloat(document.getElementById("tempoP").value);
    const tamanho = document.getElementById("tipoV").checked;
    const clienteFi = document.getElementById("clienteF").checked;

    let valorHora = 5; //valor inicial
    let adicional = 2.5; //valor adicional por hora
    let veiculoGrande = 0.25; //valor adicional para veículos grandes
    let valorTotal = 0;
    let clienteF = 0.05; //desconto para clientes frequentes
    let tempoc = tempo - 1; //tempo adicional após a primeira hora
    valorTotal = valorHora + (adicional * tempoc); //valor total inicial sem considerar o tamanho do veículo e o desconto para clientes frequentes
    let valorDiaria = 60; //valor diário normal
    let diariaTotal = valorDiaria + valorTotal; //valor total considerando a diária


    if (tamanho) {
        valorTotal = valorTotal + (valorTotal * 0.25);
    } else {
        valorTotal = valorTotal;
    }

    if (clienteFi) {
        valorTotal = valorTotal - (valorTotal * 0.05);
    }

    if (tempo >= 24) {
        valorTotal = diariaTotal
    }
    else {
        valorTotal = valorTotal
    }

    document.getElementById("outputValor").innerHTML = `O valor a ser pago por ${nome} com a placa ${placa} é: R$ ${valorTotal.toFixed(2)}, vocêficou ${tempo} horas estacionado.`;

    document.getElementById("nomeC").value = "";
    document.getElementById("placaV").value = "";
    document.getElementById("tempoP").value = "";
    document.getElementById("tipoV").checked = false;
    document.getElementById("clienteF").checked = false;

}