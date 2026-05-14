// Aguarda o usuário clicar no botão de calcular
document.getElementById('btn-calcular').addEventListener('click', function () {

    // Captura dos elementos do DOM
    const inputPeso = document.getElementById('peso').value;
    const inputAltura = document.getElementById('altura').value;
    const errorDiv = document.getElementById('error-message');
    const resultSection = document.getElementById('result-section');
    const imcValueText = document.getElementById('imc-value');
    const imcClassText = document.getElementById('imc-classification');

    // 1. Resetar estados visuais
    errorDiv.classList.remove('show');
    resultSection.classList.add('hidden');
    limparDestaquesTabela();

    // Substitui vírgulas por pontos (para o JS entender decimais) e converte em número
    const peso = parseFloat(inputPeso.replace(',', '.'));
    const altura = parseFloat(inputAltura.replace(',', '.'));

    // 2. Validação de Erros (Tratamento exigido)
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        errorDiv.textContent = "Erro: Preencha peso e altura com valores válidos!";
        errorDiv.classList.add('show');
        return; // Interrompe a execução do código aqui
    }

    // 3. Cálculo do IMC: peso / (altura * altura)
    const imc = peso / (altura * altura);

    // 4. Determinar Classificação e a linha correspondente na tabela
    let classificacao = "";
    let linhaId = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
        linhaId = "row-abaixo";
    } else if (imc >= 18.5 && imc <= 25.0) {
        classificacao = "Peso normal";
        linhaId = "row-normal";
    } else if (imc >= 25.1 && imc <= 29.9) {
        classificacao = "Sobrepeso";
        linhaId = "row-sobrepeso";
    } else if (imc >= 30.0 && imc <= 34.9) {
        classificacao = "Obesidade grau I";
        linhaId = "row-ob1";
    } else if (imc >= 35.0 && imc <= 39.9) {
        classificacao = "Obesidade grau II";
        linhaId = "row-ob2";
    } else {
        classificacao = "Obesidade grau III";
        linhaId = "row-ob3";
    }

    // 5. Exibir os resultados na tela
    imcValueText.innerHTML = `IMC: <strong>${imc.toFixed(1)}</strong>`;
    imcClassText.innerHTML = `Classificação: <strong>${classificacao}</strong>`;
    resultSection.classList.remove('hidden');

    // 6. Desafio Extra: Destacar visualmente a classificação na tabela
    document.getElementById(linhaId).classList.add('highlight');
});

// Função auxiliar para remover destaques anteriores da tabela
function limparDestaquesTabela() {
    const linhas = document.querySelectorAll('tbody tr');
    linhas.forEach(linha => {
        linha.classList.remove('highlight');
    });
}