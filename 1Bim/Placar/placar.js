let pontosA = 0;
let pontosB = 0;

function alterar(time, valor) {
    if (time === 'A') {
        pontosA += valor;
        document.getElementById("pontosA").innerText = pontosA;
    } else {
        pontosB += valor;
        document.getElementById("pontosB").innerText = pontosB;
    }
}

function resetar() {
    pontosA = 0;
    pontosB = 0;

    document.getElementById("pontosA").innerText = 0;
    document.getElementById("pontosB").innerText = 0;
}