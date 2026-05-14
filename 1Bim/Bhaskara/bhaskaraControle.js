function calcularBhaskara() {
    // Captura os valores dos inputs como texto
    const rawA = document.getElementById("inputA").value.trim();
    const rawB = document.getElementById("inputB").value.trim();
    const rawC = document.getElementById("inputC").value.trim();

    // Regex para validar número inteiro ou decimal (sinal opcional)
    const numeroValido = /^-?\d+(\.\d+)?$/;

    // Valida entradas completas sem letras misturadas
    if (!numeroValido.test(rawA) || !numeroValido.test(rawB) || !numeroValido.test(rawC)) {
        alert("Por favor, use apenas números válidos (ex: 1, -2, 3.5) nos coeficientes");
        return;
    }

    const a = parseFloat(rawA);
    const b = parseFloat(rawB);
    const c = parseFloat(rawC);

    // Valida se todos os valores foram preenchidos
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Por favor, preencha todos os coeficientes");
        return;
    }

    // Valida se 'a' é diferente de zero
    if (a === 0) {
        alert("O coeficiente 'a' não pode ser zero");
        return;
    }

    // Calcula o discriminante (delta)
    const delta = (b * b) - (4 * a * c);

    // Se delta for negativo, não há raízes reais
    if (delta < 0) {
        document.getElementById("outputX1").innerHTML = "X1: Sem raízes reais (Δ < 0)";
        document.getElementById("outputX2").innerHTML = `X2: Sem raízes reais (Δ = ${delta})`;
        return;
    }

    // Calcula as raízes
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);

    // Função para formatar números: inteiros sem casas decimais, decimais com 2 casas
    function formatarNumero(num) {
        return Number.isInteger(num) ? num.toString() : num.toFixed(2);
    }

    // Exibe os resultados
    document.getElementById("outputX1").innerHTML = `X1: ${formatarNumero(x1)}`;
    document.getElementById("outputX2").innerHTML = `X2: ${formatarNumero(x2)}`;
}