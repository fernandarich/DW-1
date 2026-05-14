function calcularTotal() {
    const quantB = parseInt(document.getElementById('dogB').value) || 0;
    const quantC = parseInt(document.getElementById('dogC').value) || 0;
    const quantS = parseInt(document.getElementById('dogS').value) || 0;
    const quantRefri3 = parseInt(document.getElementById('refri3').value) || 0;
    const quantRefri2 = parseInt(document.getElementById('refri2').value) || 0;

    const totalB = quantB * 22.00;
    const totalC = quantC * 26.00;
    const totalS = quantS * 29.00;
    const totalRefri3 = quantRefri3 * 5.00;
    const totalRefri2 = quantRefri2 * 8.00;

    const totalPedido = totalB + totalC + totalS + totalRefri3 + totalRefri2;

    
    let itens = [];

    if (quantB > 0) itens.push(`${quantB} Dogão Básico`);
    if (quantC > 0) itens.push(`${quantC} Dogão Duplo`);
    if (quantS > 0) itens.push(`${quantS} X-Salada`);
    if (quantRefri3 > 0) itens.push(`${quantRefri3} Refrigerante 300ml`);
    if (quantRefri2 > 0) itens.push(`${quantRefri2} Refrigerante 2L`);

    let textoItens = itens.join(', ');

    if (itens.length === 0) {
        textoItens = "nenhum item foi selecionado";
    }

    document.getElementById('outputTotal').innerText = 
        `Valor total do pedido: R$ ${totalPedido.toFixed(2)}, itens: ${textoItens}.`;

    document.getElementById('dogB').value = '';
    document.getElementById('dogC').value = '';
    document.getElementById('dogS').value = '';
    document.getElementById('refri3').value = '';
    document.getElementById('refri2').value = '';
}